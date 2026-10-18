import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, FileText, Loader2, ShieldCheck, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchCompany } from "@/lib/crm";
import { DEFAULT_LOGO_URL } from "@/lib/branding";
import { supabase } from "@/integrations/supabase/client";
import { formatAmount, formatDate } from "@/lib/format";
import { statusStyle } from "@/lib/status";

export const Route = createFileRoute("/verify/$type/$id")({
  head: () => ({
    meta: [
      { title: "Document Verification · Owais Interior Designer" },
      { name: "description", content: "Verify the authenticity of CRM documents." },
    ],
  }),
  component: VerifyDocPage,
});

async function fetchPublicDocVerification(type: string, idOrCode: string) {
  // Validate type parameter
  if (!["quotation", "invoice", "receipt"].includes(type)) return null;
  if (!idOrCode || typeof idOrCode !== "string") return null;

  const trimmedId = idOrCode.trim();

  // ── PRIMARY PATH: SECURITY DEFINER RPC ─────────────────────────────────────
  // Works regardless of anon table grants.  Applied via migration 20261015000000.
  try {
    const { data: rpcData, error: rpcError } = await (supabase as any).rpc("verify_document", {
      p_type: type,
      p_id_or_code: trimmedId,
    });

    if (!rpcError) {
      if (rpcData && rpcData.verified === true) {
        // Document found and verified by the RPC
        return {
          id: trimmedId,
          code: rpcData.code,
          date: rpcData.date,
          status: rpcData.status,
          grand_total: rpcData.total_amount,
          total_amount: rpcData.total_amount,
          amount_received: rpcData.total_amount,
          customers: {
            name: rpcData.customer_name ?? "Client",
            code: rpcData.customer_code ?? "",
            city: rpcData.customer_city ?? null,
          },
        };
      }
      // RPC responded with verified:false (e.g., not_found) — document definitively absent
      if (rpcData && rpcData.verified === false) {
        console.info("verify_document: not found —", rpcData.error);
        return null;
      }
    } else {
      // rpcError present → RPC may not be installed yet; try fallback
      console.warn("verify_document RPC error, falling back to direct query:", rpcError.message);
    }
  } catch (err) {
    // Unexpected exception — function may not exist yet in database
    console.warn("verify_document RPC exception, falling back:", err);
  }

  // ── FALLBACK PATH: Direct table query (requires anon RLS policies) ──────────
  // Used only when the verify_document RPC has not been applied to the database.
  const table =
    type === "quotation" ? "quotations" : type === "invoice" ? "invoices" : "receipts";
  const isUuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(trimmedId);
  const column = isUuid ? "id" : "code";

  const selectFields =
    type === "receipt"
      ? "id, code, date, total_amount, amount_received, mode, customer_id"
      : "id, code, date, grand_total, status, customer_id";

  const { data, error } = await (supabase as any)
    .from(table)
    .select(`${selectFields}, customers(name, code, city)`)
    .eq(column, trimmedId)
    .maybeSingle();

  if (!error && data) return data;

  // Last-resort: join might be blocked by RLS — retry without it
  const { data: bare, error: bareErr } = await (supabase as any)
    .from(table)
    .select(selectFields)
    .eq(column, trimmedId)
    .maybeSingle();

  return bareErr || !bare ? null : bare;
}

function VerifyDocPage() {
  const { type, id } = Route.useParams();
  const { data: company, isLoading: loadingCompany } = useQuery({
    queryKey: ["company"],
    queryFn: fetchCompany,
  });

  const { data: doc, isLoading: loadingDoc } = useQuery({
    queryKey: ["verify-doc", type, id],
    queryFn: () => fetchPublicDocVerification(type, id),
  });

  const isLoading = loadingCompany || loadingDoc;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const isValid = Boolean(doc);
  const typeLabel =
    type === "quotation" ? "Quotation" : type === "invoice" ? "Invoice" : "Payment Receipt";

  const totalValue =
    type === "receipt"
      ? doc?.amount_received
      : doc?.grand_total ?? doc?.total_amount;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-lg space-y-6">
        <div className="text-center">
          <img
            src={company?.logo_url || DEFAULT_LOGO_URL}
            alt={company?.name || "Owais Interior Designer"}
            className="mx-auto mb-3 size-16 rounded-full bg-white object-contain p-1 border-2 border-blue-500/20 shadow-md"
          />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {company?.name || "Owais Interior Designer"}
          </h1>
          <p className="text-xs uppercase tracking-widest text-slate-500 mt-0.5">
            Document Authenticity Portal
          </p>
        </div>

        <Card className="border-slate-200/80 shadow-lg">
          <CardHeader className="text-center pb-4 border-b border-slate-100">
            <div className="mx-auto mb-2">
              {isValid ? (
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  AUTHENTIC DIGITAL RECORD
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 border border-rose-200">
                  <XCircle className="h-4 w-4 text-rose-600" />
                  DOCUMENT NOT FOUND OR UNVERIFIED
                </div>
              )}
            </div>
            <CardTitle className="text-xl">
              {isValid ? `${typeLabel} #${doc.code}` : "Verification Failed"}
            </CardTitle>
            <CardDescription>
              {isValid
                ? "This document was digitally issued by Owais Interior Designer."
                : "The scanned QR reference could not be matched with an issued record."}
            </CardDescription>
          </CardHeader>

          {isValid && (
            <CardContent className="pt-6 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3 rounded-lg bg-slate-50 p-4 border border-slate-100">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Document Type</span>
                  <span className="font-semibold text-slate-900">{typeLabel}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Document Ref</span>
                  <span className="font-mono font-medium text-slate-900">{doc.code}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Issued Date</span>
                  <span className="font-medium text-slate-800">{formatDate(doc.date)}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Status</span>
                  {(() => {
                    const st = statusStyle(doc.status || (type === "receipt" ? "paid" : "approved"));
                    return (
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium mt-0.5 ${st.badge}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${st.dot}`} />
                        {st.label}
                      </span>
                    );
                  })()}
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 p-4 space-y-2">
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>CUSTOMER</span>
                  <span>{doc.customers?.code || ""}</span>
                </div>
                <div className="font-medium text-slate-900 text-base">
                  {doc.customers?.name || "Client"}
                </div>
                {doc.customers?.city && (
                  <div className="text-xs text-slate-600">{doc.customers.city}</div>
                )}
              </div>

              <div className="flex items-center justify-between rounded-lg bg-primary/5 border border-primary/20 p-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="font-medium text-slate-700">
                    {type === "receipt" ? "Amount Paid" : "Total Amount"}
                  </span>
                </div>
                <div className="text-lg font-bold text-primary">
                  ₹ {formatAmount(Number(totalValue || 0))}
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-slate-400">
                Generated &amp; secured by Owais Interior Designer CRM · Audit verified
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
