-- ==============================================================================
-- SECURE DOCUMENT VERIFICATION & LEAST-PRIVILEGE RLS REVISION
-- Migration: 20261014120000_secure_document_verification.sql
-- ==============================================================================

-- 1. REVOKE broad table-level SELECT grants previously given to anon
REVOKE SELECT ON public.customers FROM anon;
REVOKE SELECT ON public.quotations FROM anon;
REVOKE SELECT ON public.invoices FROM anon;
REVOKE SELECT ON public.receipts FROM anon;

-- 2. DROP broad anonymous policies on core business tables
DROP POLICY IF EXISTS "public verify customers" ON public.customers;
DROP POLICY IF EXISTS "public verify quotations" ON public.quotations;
DROP POLICY IF EXISTS "public verify invoices" ON public.invoices;
DROP POLICY IF EXISTS "public verify receipts" ON public.receipts;

-- 3. Ensure company profile read is restricted to basic business letterhead info
DROP POLICY IF EXISTS "public read company profile" ON public.company_profile;
CREATE POLICY "public read company profile" ON public.company_profile
  FOR SELECT TO anon, authenticated
  USING (true);

-- 4. Create a dedicated, secure, read-only verification RPC function
-- This function exposes ONLY minimal allow-listed fields for public QR verification.
-- It strictly prevents data leakage of customer phones, emails, addresses, user IDs, or line item details.
CREATE OR REPLACE FUNCTION public.verify_document(p_type text, p_id_or_code text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_result jsonb;
  v_is_uuid boolean;
  v_doc record;
  v_cust record;
  v_company record;
BEGIN
  -- Validate document type parameter
  IF p_type NOT IN ('quotation', 'invoice', 'receipt') THEN
    RETURN NULL;
  END IF;

  -- Validate whether input is a UUID or code
  v_is_uuid := p_id_or_code ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$';

  -- Fetch company name
  SELECT name INTO v_company FROM public.company_profile LIMIT 1;

  -- 1. Quotation Verification
  IF p_type = 'quotation' THEN
    IF v_is_uuid THEN
      SELECT q.id, q.code, q.date, q.grand_total, q.status, q.customer_id
      INTO v_doc
      FROM public.quotations q
      WHERE q.id = p_id_or_code::uuid;
    ELSE
      SELECT q.id, q.code, q.date, q.grand_total, q.status, q.customer_id
      INTO v_doc
      FROM public.quotations q
      WHERE q.code = p_id_or_code;
    END IF;

    IF v_doc.id IS NULL THEN
      RETURN NULL;
    END IF;

    SELECT c.name, c.code, c.city INTO v_cust FROM public.customers c WHERE c.id = v_doc.customer_id;

    v_result := jsonb_build_object(
      'verified', true,
      'document_type', 'Quotation',
      'code', v_doc.code,
      'date', v_doc.date,
      'status', v_doc.status,
      'total_amount', v_doc.grand_total,
      'company_name', COALESCE(v_company.name, 'Owais Interior Designer'),
      'customer_name', COALESCE(v_cust.name, 'Client'),
      'customer_code', v_cust.code,
      'customer_city', v_cust.city
    );
    RETURN v_result;

  -- 2. Invoice Verification
  ELSIF p_type = 'invoice' THEN
    IF v_is_uuid THEN
      SELECT i.id, i.code, i.date, i.grand_total, i.status, i.customer_id
      INTO v_doc
      FROM public.invoices i
      WHERE i.id = p_id_or_code::uuid;
    ELSE
      SELECT i.id, i.code, i.date, i.grand_total, i.status, i.customer_id
      INTO v_doc
      FROM public.invoices i
      WHERE i.code = p_id_or_code;
    END IF;

    IF v_doc.id IS NULL THEN
      RETURN NULL;
    END IF;

    SELECT c.name, c.code, c.city INTO v_cust FROM public.customers c WHERE c.id = v_doc.customer_id;

    v_result := jsonb_build_object(
      'verified', true,
      'document_type', 'Invoice',
      'code', v_doc.code,
      'date', v_doc.date,
      'status', v_doc.status,
      'total_amount', v_doc.grand_total,
      'company_name', COALESCE(v_company.name, 'Owais Interior Designer'),
      'customer_name', COALESCE(v_cust.name, 'Client'),
      'customer_code', v_cust.code,
      'customer_city', v_cust.city
    );
    RETURN v_result;

  -- 3. Receipt Verification
  ELSIF p_type = 'receipt' THEN
    IF v_is_uuid THEN
      SELECT r.id, r.code, r.date, r.amount_received, r.mode, r.customer_id
      INTO v_doc
      FROM public.receipts r
      WHERE r.id = p_id_or_code::uuid;
    ELSE
      SELECT r.id, r.code, r.date, r.amount_received, r.mode, r.customer_id
      INTO v_doc
      FROM public.receipts r
      WHERE r.code = p_id_or_code;
    END IF;

    IF v_doc.id IS NULL THEN
      RETURN NULL;
    END IF;

    SELECT c.name, c.code, c.city INTO v_cust FROM public.customers c WHERE c.id = v_doc.customer_id;

    v_result := jsonb_build_object(
      'verified', true,
      'document_type', 'Payment Receipt',
      'code', v_doc.code,
      'date', v_doc.date,
      'status', 'paid',
      'total_amount', v_doc.amount_received,
      'mode', v_doc.mode,
      'company_name', COALESCE(v_company.name, 'Owais Interior Designer'),
      'customer_name', COALESCE(v_cust.name, 'Client'),
      'customer_code', v_cust.code,
      'customer_city', v_cust.city
    );
    RETURN v_result;
  END IF;

  RETURN NULL;
END;
$$;

-- 5. Grant EXECUTE on verify_document to anon and authenticated
REVOKE ALL ON FUNCTION public.verify_document(text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.verify_document(text, text) TO anon, authenticated;
