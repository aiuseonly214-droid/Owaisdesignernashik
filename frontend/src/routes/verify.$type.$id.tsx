import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, FileText, Loader2, ShieldCheck, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchCompany } from "@/lib/crm";
import { supabase } from "@/integrations/supabase/client";
import { formatAmount, formatDate } from "@/lib/format";

export const Route = createFileRoute("/verify/$type/$id")({
  head: () => ({
    meta: [
      { title: "Document Verification · Owais Interior Designer" },
      { name: "description", content: "Verify the authenticity of CRM documents." },
    ],
  }),
  component: VerifyDocPage,
});

async function fetchPublicDocVerification(type: string, id: string) {
  const table = type === "quotation" ? "quotations" : type === "invoice" ? "invoices" : "receipts";
  const { data, error } = await (supabase as any)
    .from(table)
    .select("id, code, date, grand_total, total_amount, amount_received, status, mode, created_at, customers(name, code, city)")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.warn("Doc fetch verification error", error);
    return null;
  }
  return data;
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
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md mb-3">
            <ShieldCheck className="h-7 w-7" />
          </div>
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
                  <Badge variant="outline" className="capitalize mt-0.5">
                    {doc.status || "Completed"}
                  </Badge>
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
