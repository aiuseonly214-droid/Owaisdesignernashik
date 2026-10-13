import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { ShieldCheck } from "lucide-react";

interface DocumentVerificationQRProps {
  type: "quotation" | "invoice" | "receipt";
  id: string;
  code: string;
  amount?: number;
  date?: string;
  customerName?: string;
  compact?: boolean;
}

export function DocumentVerificationQR({
  type,
  id,
  code,
  amount,
  date,
  customerName,
  compact = false,
}: DocumentVerificationQRProps) {
  const [dataUrl, setDataUrl] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    // Use current origin if in browser, or fall back to window.location.origin
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const verifyUrl = `${origin}/verify/${type}/${id}`;

    QRCode.toDataURL(verifyUrl, {
      width: compact ? 90 : 110,
      margin: 1,
      color: {
        dark: "#123A70",
        light: "#FFFFFF",
      },
      errorCorrectionLevel: "M",
    })
      .then((url) => {
        if (isMounted) setDataUrl(url);
      })
      .catch((err) => {
        console.error("QR Generation error", err);
      });

    return () => {
      isMounted = false;
    };
  }, [type, id, compact]);

  if (!dataUrl) return null;

  return (
    <div className="flex items-center gap-2.5 rounded border border-[#CBD9EA] bg-[#F7FAFD] p-2">
      <img
        src={dataUrl}
        alt={`Verify ${code}`}
        className="h-[68px] w-[68px] rounded border border-[#CBD9EA] bg-white object-contain p-0.5"
      />
      <div className="text-left">
        <div className="flex items-center gap-1 text-[10.5px] font-semibold text-[#123A70]">
          <ShieldCheck className="h-3.5 w-3.5 text-[#123A70]" />
          <span>VERIFIED DIGITAL DOC</span>
        </div>
        <p className="font-mono text-[10px] text-[#5A6B80]">Ref: {code}</p>
        <p className="text-[9.5px] text-[#5A6B80] leading-tight mt-0.5">
          Scan to verify authenticity &amp; digital records
        </p>
      </div>
    </div>
  );
}
