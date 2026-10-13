-- ==============================================================================
-- ALL-IN-ONE FIX: Column Additions + Public Document Verification via QR Code
-- Run this entire script in Supabase Dashboard -> SQL Editor -> Run
-- ==============================================================================

-- 1. Ensure optional totals and section subtotal columns exist in quotations & invoices
ALTER TABLE public.quotation_items ADD COLUMN IF NOT EXISTS include_in_total boolean NOT NULL DEFAULT true;
ALTER TABLE public.quotation_items ADD COLUMN IF NOT EXISTS group_name text;

ALTER TABLE public.invoice_items ADD COLUMN IF NOT EXISTS include_in_total boolean NOT NULL DEFAULT true;
ALTER TABLE public.invoice_items ADD COLUMN IF NOT EXISTS group_name text;

ALTER TABLE public.quotations ADD COLUMN IF NOT EXISTS show_totals boolean NOT NULL DEFAULT true;
ALTER TABLE public.quotations ADD COLUMN IF NOT EXISTS show_section_subtotals boolean NOT NULL DEFAULT true;

ALTER TABLE public.invoices ADD COLUMN IF NOT EXISTS show_totals boolean NOT NULL DEFAULT true;
ALTER TABLE public.invoices ADD COLUMN IF NOT EXISTS show_section_subtotals boolean NOT NULL DEFAULT true;

-- 2. Allow public / anonymous verification of issued documents via QR code
DROP POLICY IF EXISTS "public read company profile" ON public.company_profile;
CREATE POLICY "public read company profile" ON public.company_profile
  FOR SELECT TO anon
  USING (true);

DROP POLICY IF EXISTS "public verify quotations" ON public.quotations;
CREATE POLICY "public verify quotations" ON public.quotations
  FOR SELECT TO anon
  USING (true);

DROP POLICY IF EXISTS "public verify invoices" ON public.invoices;
CREATE POLICY "public verify invoices" ON public.invoices
  FOR SELECT TO anon
  USING (true);

DROP POLICY IF EXISTS "public verify receipts" ON public.receipts;
CREATE POLICY "public verify receipts" ON public.receipts
  FOR SELECT TO anon
  USING (true);

DROP POLICY IF EXISTS "public verify customers" ON public.customers;
CREATE POLICY "public verify customers" ON public.customers
  FOR SELECT TO anon
  USING (true);

-- 3. Ensure SELECT permissions are granted to anon
GRANT SELECT ON public.company_profile TO anon;
GRANT SELECT ON public.quotations TO anon;
GRANT SELECT ON public.invoices TO anon;
GRANT SELECT ON public.receipts TO anon;
GRANT SELECT ON public.customers TO anon;
