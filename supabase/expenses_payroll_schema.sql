-- Create staff_members table
CREATE TABLE staff_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    designation TEXT,
    phone TEXT,
    joining_date DATE,
    monthly_salary NUMERIC NOT NULL DEFAULT 0,
    active BOOLEAN NOT NULL DEFAULT true,
    notes TEXT,
    created_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create salary_payments table
CREATE TABLE salary_payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    staff_id UUID REFERENCES staff_members(id) ON DELETE CASCADE,
    period TEXT NOT NULL,
    amount NUMERIC NOT NULL,
    paid_on DATE NOT NULL,
    mode TEXT NOT NULL,
    notes TEXT,
    created_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Create expenses table
CREATE TABLE expenses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date DATE NOT NULL,
    category TEXT NOT NULL,
    amount NUMERIC NOT NULL,
    mode TEXT NOT NULL,
    reference TEXT,
    customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
    notes TEXT,
    created_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE staff_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE salary_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;

-- Create Policies (Admin Only)
CREATE POLICY "Admin can manage staff_members" ON staff_members
    FOR ALL
    TO authenticated
    USING (has_role('admin', auth.uid()))
    WITH CHECK (has_role('admin', auth.uid()));

CREATE POLICY "Admin can manage salary_payments" ON salary_payments
    FOR ALL
    TO authenticated
    USING (has_role('admin', auth.uid()))
    WITH CHECK (has_role('admin', auth.uid()));

CREATE POLICY "Admin can manage expenses" ON expenses
    FOR ALL
    TO authenticated
    USING (has_role('admin', auth.uid()))
    WITH CHECK (has_role('admin', auth.uid()));
