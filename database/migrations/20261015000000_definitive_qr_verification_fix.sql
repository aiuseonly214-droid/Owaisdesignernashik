-- ==============================================================================
-- DEFINITIVE QR VERIFICATION FIX
-- Migration: 20261015000000_definitive_qr_verification_fix.sql
--
-- PURPOSE: Ensure QR code document verification works reliably from any device.
-- This script is IDEMPOTENT — safe to run multiple times.
--
-- HOW TO APPLY:
--   Supabase Dashboard → SQL Editor → paste this entire file → Run
-- ==============================================================================

-- ─────────────────────────────────────────────────────────────────────────────
-- STEP 1: Ensure necessary columns exist (idempotent, IF NOT EXISTS)
-- ─────────────────────────────────────────────────────────────────────────────
ALTER TABLE public.quotation_items ADD COLUMN IF NOT EXISTS include_in_total boolean NOT NULL DEFAULT true;
ALTER TABLE public.quotation_items ADD COLUMN IF NOT EXISTS group_name text;
ALTER TABLE public.invoice_items  ADD COLUMN IF NOT EXISTS include_in_total boolean NOT NULL DEFAULT true;
ALTER TABLE public.invoice_items  ADD COLUMN IF NOT EXISTS group_name text;
ALTER TABLE public.quotations     ADD COLUMN IF NOT EXISTS show_totals              boolean NOT NULL DEFAULT true;
ALTER TABLE public.quotations     ADD COLUMN IF NOT EXISTS show_section_subtotals   boolean NOT NULL DEFAULT true;
ALTER TABLE public.invoices       ADD COLUMN IF NOT EXISTS show_totals              boolean NOT NULL DEFAULT true;
ALTER TABLE public.invoices       ADD COLUMN IF NOT EXISTS show_section_subtotals   boolean NOT NULL DEFAULT true;

-- ─────────────────────────────────────────────────────────────────────────────
-- STEP 2: Grant anon SELECT on company_profile (needed for letterhead)
-- ─────────────────────────────────────────────────────────────────────────────
GRANT SELECT ON public.company_profile TO anon;

DROP POLICY IF EXISTS "public read company profile" ON public.company_profile;
CREATE POLICY "public read company profile" ON public.company_profile
  FOR SELECT TO anon, authenticated
  USING (true);

-- ─────────────────────────────────────────────────────────────────────────────
-- STEP 3: Create the secure verify_document RPC (SECURITY DEFINER)
-- This is the primary, least-privilege verification path.
-- Public anon direct table access is NOT required when this RPC exists.
-- ─────────────────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.verify_document(p_type text, p_id_or_code text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_result  jsonb;
  v_is_uuid boolean;
  v_doc     record;
  v_cust    record;
  v_company record;
BEGIN
  -- Validate document type
  IF p_type NOT IN ('quotation', 'invoice', 'receipt') THEN
    RETURN jsonb_build_object('verified', false, 'error', 'invalid_type');
  END IF;

  -- Check if input looks like a UUID
  v_is_uuid := p_id_or_code ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$';

  -- Fetch company display name
  SELECT name INTO v_company FROM public.company_profile LIMIT 1;

  -- ── Quotation ──────────────────────────────────────────────────────────────
  IF p_type = 'quotation' THEN
    IF v_is_uuid THEN
      SELECT q.id, q.code, q.date, q.grand_total, q.status, q.customer_id
        INTO v_doc FROM public.quotations q WHERE q.id = p_id_or_code::uuid;
    ELSE
      SELECT q.id, q.code, q.date, q.grand_total, q.status, q.customer_id
        INTO v_doc FROM public.quotations q WHERE q.code = p_id_or_code;
    END IF;

    IF v_doc.id IS NULL THEN
      RETURN jsonb_build_object('verified', false, 'error', 'not_found');
    END IF;

    SELECT c.name, c.code, c.city INTO v_cust
      FROM public.customers c WHERE c.id = v_doc.customer_id;

    RETURN jsonb_build_object(
      'verified',       true,
      'document_type',  'Quotation',
      'code',           v_doc.code,
      'date',           v_doc.date,
      'status',         v_doc.status,
      'total_amount',   v_doc.grand_total,
      'company_name',   COALESCE(v_company.name, 'Owais Interior Designer'),
      'customer_name',  COALESCE(v_cust.name, 'Client'),
      'customer_code',  v_cust.code,
      'customer_city',  v_cust.city
    );

  -- ── Invoice ────────────────────────────────────────────────────────────────
  ELSIF p_type = 'invoice' THEN
    IF v_is_uuid THEN
      SELECT i.id, i.code, i.date, i.grand_total, i.status, i.customer_id
        INTO v_doc FROM public.invoices i WHERE i.id = p_id_or_code::uuid;
    ELSE
      SELECT i.id, i.code, i.date, i.grand_total, i.status, i.customer_id
        INTO v_doc FROM public.invoices i WHERE i.code = p_id_or_code;
    END IF;

    IF v_doc.id IS NULL THEN
      RETURN jsonb_build_object('verified', false, 'error', 'not_found');
    END IF;

    SELECT c.name, c.code, c.city INTO v_cust
      FROM public.customers c WHERE c.id = v_doc.customer_id;

    RETURN jsonb_build_object(
      'verified',       true,
      'document_type',  'Invoice',
      'code',           v_doc.code,
      'date',           v_doc.date,
      'status',         v_doc.status,
      'total_amount',   v_doc.grand_total,
      'company_name',   COALESCE(v_company.name, 'Owais Interior Designer'),
      'customer_name',  COALESCE(v_cust.name, 'Client'),
      'customer_code',  v_cust.code,
      'customer_city',  v_cust.city
    );

  -- ── Receipt ────────────────────────────────────────────────────────────────
  ELSIF p_type = 'receipt' THEN
    IF v_is_uuid THEN
      SELECT r.id, r.code, r.date, r.amount_received, r.mode, r.customer_id
        INTO v_doc FROM public.receipts r WHERE r.id = p_id_or_code::uuid;
    ELSE
      SELECT r.id, r.code, r.date, r.amount_received, r.mode, r.customer_id
        INTO v_doc FROM public.receipts r WHERE r.code = p_id_or_code;
    END IF;

    IF v_doc.id IS NULL THEN
      RETURN jsonb_build_object('verified', false, 'error', 'not_found');
    END IF;

    SELECT c.name, c.code, c.city INTO v_cust
      FROM public.customers c WHERE c.id = v_doc.customer_id;

    RETURN jsonb_build_object(
      'verified',       true,
      'document_type',  'Payment Receipt',
      'code',           v_doc.code,
      'date',           v_doc.date,
      'status',         'paid',
      'total_amount',   v_doc.amount_received,
      'mode',           v_doc.mode,
      'company_name',   COALESCE(v_company.name, 'Owais Interior Designer'),
      'customer_name',  COALESCE(v_cust.name, 'Client'),
      'customer_code',  v_cust.code,
      'customer_city',  v_cust.city
    );
  END IF;

  RETURN jsonb_build_object('verified', false, 'error', 'unknown');
END;
$$;

-- Grant execute rights to anon and authenticated
REVOKE ALL ON FUNCTION public.verify_document(text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.verify_document(text, text) TO anon, authenticated;

-- ─────────────────────────────────────────────────────────────────────────────
-- STEP 4: Verification test — run this to confirm it works
-- Replace 'quotation' and the UUID/code with a real record from your database.
-- Expected output: JSON with "verified": true
--
--   SELECT public.verify_document('quotation', 'QT-0001');
--   SELECT public.verify_document('invoice',   'INV-0001');
--   SELECT public.verify_document('receipt',   'RCP-0001');
-- ─────────────────────────────────────────────────────────────────────────────

SELECT 'verify_document RPC installed successfully' AS status;
