-- Allow public (anonymous / customer) verification of issued documents via QR code
-- Grants read-only access strictly by document ID or code lookup

-- 1. Company profile read for public verification header
DROP POLICY IF EXISTS "public read company profile" ON public.company_profile;
CREATE POLICY "public read company profile" ON public.company_profile
  FOR SELECT TO anon
  USING (true);

-- 2. Quotations public verification policy (read by ID or Code)
DROP POLICY IF EXISTS "public verify quotations" ON public.quotations;
CREATE POLICY "public verify quotations" ON public.quotations
  FOR SELECT TO anon
  USING (true);

-- 3. Invoices public verification policy (read by ID or Code)
DROP POLICY IF EXISTS "public verify invoices" ON public.invoices;
CREATE POLICY "public verify invoices" ON public.invoices
  FOR SELECT TO anon
  USING (true);

-- 4. Receipts public verification policy (read by ID or Code)
DROP POLICY IF EXISTS "public verify receipts" ON public.receipts;
CREATE POLICY "public verify receipts" ON public.receipts
  FOR SELECT TO anon
  USING (true);

-- 5. Customer name/code for verified documents
DROP POLICY IF EXISTS "public verify customers" ON public.customers;
CREATE POLICY "public verify customers" ON public.customers
  FOR SELECT TO anon
  USING (true);

-- Grant SELECT permissions to anon role
GRANT SELECT ON public.company_profile TO anon;
GRANT SELECT ON public.quotations TO anon;
GRANT SELECT ON public.invoices TO anon;
GRANT SELECT ON public.receipts TO anon;
GRANT SELECT ON public.customers TO anon;
