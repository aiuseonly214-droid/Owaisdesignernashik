# Owais Interior Designer CRM

A comprehensive, enterprise-grade web-based CRM and Enterprise Resource Management system built for **Owais Interior Designer**. It unifies the entire business lifecycle — from lead capture and customer management to advanced quotation building with section grouping, dynamic invoicing, receipt generation, outstanding debt recovery, staff payroll, company expense tracking, real-time cashflow analytics, and public QR-code-based document authenticity verification.

---

## Brand & Business Profile

| Property | Details |
|---|---|
| **Company Name** | Owais Interior Designer |
| **Tagline** | *"Turning your space into elegant design"* |
| **Operating Location** | Rahmat Nagar, Wadala, Nashik, Maharashtra, India |
| **Direct Contact** | +91 7756043214 / +91 7721926290 · `onlyw6469@gmail.com` |
| **Currency** | Indian Rupee (INR - ₹) · Non-GST / Composition Billing Standard |
| **Brand Colors** | Deep Navy Blue (`#123A70`), Accent Teal (`#0E8F8C`), Soft Cream (`#F7FAFD`) |

---

## High-Level Architecture Mindmap

```mermaid
mindmap
  root((Owais Interior CRM))
    Authentication & Security
      Role-Based Access Control
        Admin
        Employee
      Supabase RLS Policies
      Anon Public Verification
    CRM & Lead Engine
      Inquiries & Leads
        Sources Walk-in / Call / WhatsApp / Social
        Pipeline New > Contacted > Quoted > Won / Lost
      Customer Directory
        Auto Code CUS-0001
        Contact & Billing Details
        Linked Documents Cascade
    Document Generation
      Quotations QT-YYYY-XXXX
        Section Grouping & Subtotals
        Optional Items Toggle
        Totals Visibility Toggle
        One-Click Convert to Invoice
      Invoices INV-YYYY-XXXX
        Quote Conversion or Fresh
        Dynamic Balance Sync
        One-Click Record Payment
      Receipts RC-YYYY-XXXX
        Auto Invoice Balance Pull
        Multi-Mode Cash / UPI / Bank / Cheque
        Automatic Amount in Words
      A4 Print & PDF Engine
        Watermark Stamp & Signature
        Embedded Verification QR
    Financial Tracking
      Outstanding Balance FIFO
      Expense Tracking by Category
      Monthly Staff Payroll
      Real-Time Cashflow Inflow vs Outflow
    Digital Trust & Verification
      QR Code Generation
      Public Authenticity Portal
      Tamper-Proof Audit
```

---

## End-to-End Business Flow

```mermaid
flowchart TD
    %% Lead Generation
    INQ[Customer Inquiry / Lead] -->|Qualify & Convert| CUST[Customer Master Profile]
    
    %% Document Lifecycle
    CUST -->|Create Draft| QT[Quotation / Proposal]
    QT -->|Item Options & Section Subtotals| QT_APP[Quotation Sent & Approved]
    QT_APP -->|1-Click Convert| INV[Tax / Commercial Invoice]
    
    %% Payment & Settlement
    INV -->|Outstanding Balance| OUT[Outstanding Aging Report]
    INV -->|Record Payment| RCPT[Payment Receipt]
    RCPT -->|Auto Deduct Balance| INV
    RCPT -->|FIFO Settlement| OUT
    
    %% Cashflow
    RCPT -->|Inflow| CASH[Lifetime & Monthly Cashflow Engine]
    
    %% Operational Expenses
    EXP[Operational Expenses] -->|Outflow| CASH
    PAY[Staff Payroll & Salaries] -->|Outflow| CASH
    
    %% Digital Verification
    QT -.->|Embedded QR| QR_VERIFY[Public Verification Portal /verify/:type/:id]
    INV -.->|Embedded QR| QR_VERIFY
    RCPT -.->|Embedded QR| QR_VERIFY
    
    classDef highlight fill:#123A70,stroke:#0E8F8C,stroke-width:2px,color:#fff;
    classDef flow fill:#e8f4f8,stroke:#0E8F8C,stroke-width:1px,color:#123A70;
    class INQ,CUST,QT,INV,RCPT,OUT,CASH,EXP,PAY highlight;
    class QR_VERIFY flow;
```

---

## Comprehensive Module Breakdown

### 1. Authentication & Role-Based Access Control (RBAC)
* **Dedicated Gateways**: Dedicated role selection between Administrator and Staff/Employee portals.
* **Role Enforcement**:
  * **Admin**: Complete system clearance including company profile, company assets (logo, authorized stamp, signature), user passwords, and settings.
  * **Employee**: Operational clearance for inquiries, customers, quotes, invoices, receipts, and payroll; restricted from company identity and credentials settings.
* **Supabase Auth & Session Handling**: Secure token-based session persistence, password reset flow, and local storage state persistence.

### 2. Inquiry & Pipeline Lead Management
* **Channel Source Tagging**: Logs inquiries originating from Walk-in, Phone Calls, WhatsApp, Instagram, or Referrals.
* **Lifecycle Pipeline**: Visual progression: `New` &rarr; `Contacted` &rarr; `Quoted` &rarr; `Won` / `Lost`.
* **Instant Customer Conversion**: Converts qualified inquiries to complete Customer records with pre-populated phone numbers, service details, and requirements.

### 3. Customer Master Directory
* **Deterministic Auto-Coding**: Sequenced identifier generation (`CUS-0001`, `CUS-0002`).
* **Complete Metadata**: Full customer name, validated 10-digit mobile number, alternate contact, billing address, site location, city, and notes.
* **Comprehensive Search**: Multi-vector real-time filtering across customer name, phone number, customer code, and city.

### 4. Advanced Quotation & Proposal Builder
* **Custom Sequence**: Auto-generated sequential identifiers (`QT-2026-0001`).
* **Section Grouping & Subtotals**: Categorize line items into named zones/rooms (e.g., *Living Room*, *Master Bedroom*, *Modular Kitchen*, *False Ceiling*).
* **Section Subtotal Visibility**: Toggle `show_section_subtotals` on/off based on customer presentation needs.
* **Optional Line Items**: Mark individual rows as optional proposals (`include_in_total = false`). Renders with an `OPTION` badge, excluding cost from final calculation.
* **Optional Totals Display**: Toggle `show_totals` to produce clean itemized scope-of-work sheets without showing monetary sums.
* **One-Click Invoice Conversion**: Instantly creates a complete linked invoice carrying over all line items, rates, and customer relationships.

### 5. Invoicing & Billing Engine
* **Invoice Sequences**: Standardized sequential codes (`INV-2026-0001`).
* **Real-time Balance Computation**: Syncs total invoiced against linked receipt payments.
* **Dynamic Status Synchronization**: Transitions automatically between `Unpaid`, `Partially Paid`, `Paid`, and `Cancelled`.
* **Quick Payment Settlement**: One-click "Record Payment" button launches a pre-filled receipt builder directly tied to the target invoice.

### 6. Payment Receipts
* **Sequenced Receipt Numbers**: (`RC-2026-0001`).
* **Smart Balance Fetching**: Automatically loads prior payments, calculates outstanding balance, and computes remaining dues.
* **Multi-Mode Support**: Cash, UPI, Direct Bank Transfer, Cheque, Credit/Debit Cards.
* **Indian Currency Number-to-Words**: Automatically converts numbers into words (e.g., *"Rupees One Lakh Twenty-Five Thousand Only"*).

### 7. Outstanding Debt Recovery & FIFO Settlement
* **Customer-Level Rollups**: Aggregates total invoiced, total collected, net pending receivables, and pending invoice count.
* **Expandable Details**: Inspect individual invoice line items and payment histories per client.
* **FIFO Settlement Engine**: Receipts settle oldest pending invoices first, preventing billing discrepancies.
* **Visual Overdue Alerting**: Flags unpaid invoices exceeding due dates in bold crimson badges.

### 8. Staff Directory & Monthly Payroll
* **Staff Master**: Manage design assistants, site supervisors, carpenters, and contractors with monthly salary contracts, designations, phone numbers, and active/inactive status.
* **Salary Payout Logging**: Record payout disbursements with date, period (`YYYY-MM`), mode, reference notes, and receipts.
* **Live Commitment Overview**: Real-time KPI cards calculating total active personnel and total monthly salary commitments.

### 9. Company Expenses & Cashflow Engine
* **Expense Categories**: Outflow classification across *Material*, *Transport*, *Food/Chai*, *Office Supplies*, *Marketing*, and *Other*.
* **Real-time Financial KPI Matrix**:
  * **Lifetime Inflow**: Real-time sum of all verified customer receipt collections.
  * **Lifetime Outflow**: Aggregated sum of operational expenses and employee salary payouts.
  * **Lifetime Net Cash**: Available company cash reserves (`Inflow - Outflow`).
  * **This Month Outflow**: Current month's burn rate across operational expenses and salaries.

### 10. Public Document Authenticity & QR Verification
* **Tamper-Proof Verification**: Every generated quotation, invoice, and receipt embeds a high-density QR code linked to the public verification endpoint.
* **Universal Scanner Compatibility**: Mobile cameras, tablet scanners, and desktop browsers can scan the QR code to view live verification status.
* **Zero Authentication Barrier**: Uses dedicated, read-only public RLS policies allowing third parties, clients, and banks to verify authenticity without logging in.

---

## QR Document Verification Flow

```mermaid
sequenceDiagram
    autonumber
    actor Customer as Client / Third Party
    participant QR as Scanned QR Code
    participant App as Verification Portal (/verify/:type/:id)
    participant DB as Supabase Postgres (Anon RLS)
    
    Customer->>QR: Scans QR code on printed/PDF document
    QR->>App: Opens verification URL (Public Web Portal)
    App->>DB: Query document by UUID/Code + public read policy
    alt Document Valid & Found
        DB-->>App: Returns code, date, amount, customer name, status
        App-->>Customer: Displays Green "AUTHENTIC DIGITAL RECORD" badge, verified metadata
    else Document Not Found / Altered
        DB-->>App: Returns empty / not found
        App-->>Customer: Displays Red "DOCUMENT NOT FOUND OR UNVERIFIED" alert
    end
```

---

## Visual Status & Design System

The application incorporates a unified, high-contrast visual status system across all modules using dot indicators and soft background badges:

| Status Tone | Hex / Class Base | Used For | Visual Representation |
|---|---|---|---|
| **Success / Emerald** | `#059669` / `bg-emerald-50 text-emerald-700` | `paid`, `approved`, `won`, `active` | 🟢 Paid / Approved |
| **Warning / Amber** | `#D97706` / `bg-amber-50 text-amber-700` | `partial`, `sent`, `quoted`, `in-progress` | 🟡 Partial / Sent |
| **Info / Sky** | `#0284C7` / `bg-sky-50 text-sky-700` | `new`, `contacted` | 🔵 New / Contacted |
| **Danger / Rose** | `#E11D48` / `bg-rose-50 text-rose-700` | `unpaid`, `overdue`, `lost`, `rejected`, `cancelled` | 🔴 Unpaid / Overdue |
| **Neutral / Slate** | `#64748B` / `bg-slate-100 text-slate-700` | `draft`, default | ⚪ Draft |

---

## Entity-Relationship Diagram (ERD)

```mermaid
erDiagram
    PROFILES ||--o{ USER_ROLES : has
    COMPANY_PROFILE ||--o{ QUOTATIONS : issues
    CUSTOMERS ||--o{ INQUIRIES : generates
    CUSTOMERS ||--o{ QUOTATIONS : receives
    CUSTOMERS ||--o{ INVOICES : billed
    CUSTOMERS ||--o{ RECEIPTS : pays
    CUSTOMERS ||--o{ EXPENSES : associated
    
    QUOTATIONS ||--|{ QUOTATION_ITEMS : contains
    QUOTATIONS ||--o| INVOICES : converts_to
    INVOICES ||--|{ INVOICE_ITEMS : contains
    INVOICES ||--o{ RECEIPTS : settles
    
    STAFF_MEMBERS ||--o{ SALARY_PAYMENTS : receives

    CUSTOMERS {
        uuid id PK
        text code UK
        text name
        text mobile
        text email
        text city
        text address
        timestamptz created_at
    }

    QUOTATIONS {
        uuid id PK
        text code UK
        uuid customer_id FK
        date date
        date valid_till
        numeric grand_total
        numeric subtotal
        numeric discount
        boolean show_totals
        boolean show_section_subtotals
        text status
    }

    QUOTATION_ITEMS {
        uuid id PK
        uuid quotation_id FK
        integer sr
        text particular
        text description
        text unit
        numeric qty
        numeric rate
        numeric amount
        boolean include_in_total
        text group_name
    }

    INVOICES {
        uuid id PK
        text code UK
        uuid customer_id FK
        uuid quotation_id FK
        date date
        date due_date
        numeric grand_total
        numeric subtotal
        numeric discount
        boolean show_totals
        boolean show_section_subtotals
        text status
    }

    INVOICE_ITEMS {
        uuid id PK
        uuid invoice_id FK
        integer sr
        text particular
        text description
        numeric qty
        numeric rate
        numeric amount
        boolean include_in_total
        text group_name
    }

    RECEIPTS {
        uuid id PK
        text code UK
        uuid customer_id FK
        uuid invoice_id FK
        date date
        numeric total_amount
        numeric previous_paid
        numeric amount_received
        numeric balance
        text mode
        text txn_id
    }

    STAFF_MEMBERS {
        uuid id PK
        text name
        text designation
        text phone
        numeric monthly_salary
        boolean active
    }

    SALARY_PAYMENTS {
        uuid id PK
        uuid staff_id FK
        text period
        numeric amount
        date paid_on
        text mode
    }

    EXPENSES {
        uuid id PK
        date date
        text category
        numeric amount
        text mode
        text reference
        uuid customer_id FK
    }
```

---

## Technology Stack

* **Frontend Framework:** React 19 + TanStack Start (Full-stack SSR/SPA framework with file-based routing)
* **Data Fetching & State:** TanStack Query (React Query) v5 with strategic `staleTime` caching
* **Styling & System Design:** Tailwind CSS v4 (`@import "tailwindcss"`) + Radix UI primitives + Lucide Icons
* **Backend Database & Authentication:** Supabase (PostgreSQL 15+, Supabase Auth, Row-Level Security)
* **PDF & Printing Pipeline:** `html2canvas-pro` + `jspdf` compiled from dedicated CSS print-ready DOM (`width: 210mm`, A4 standard)
* **Code Quality & Build:** TypeScript, Vite, ESLint

---

## Directory Structure

```text
c:\Projects\owaisinteriornashik/
├── database/
│   ├── migrations/                 # Postgres SQL schema & RLS migrations
│   └── drizzle/                    # Drizzle ORM schema & migrations
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── doc/                # Document generators & sheets
│   │   │   │   ├── DocChrome.tsx   # Document preview chrome & download actions
│   │   │   │   ├── DocForm.tsx     # Item builder with section grouping
│   │   │   │   ├── DocListPage.tsx # Unified list table with status badges
│   │   │   │   ├── DocumentVerificationQR.tsx # Digital QR verification component
│   │   │   │   ├── TradeDocSheet.tsx # A4 Quotation/Invoice print layout
│   │   │   │   └── ReceiptSheet.tsx # A4 Payment receipt print layout
│   │   │   ├── ui/                 # Reusable Radix & shadcn/ui components
│   │   │   └── AppShell.tsx        # Navigation sidebar, topbar & layout
│   │   ├── lib/
│   │   │   ├── crm.ts              # Data access layer & queries
│   │   │   ├── status.ts           # Centralized visual status color system
│   │   │   ├── format.ts           # INR currency, date & number-to-words
│   │   │   ├── pdf.ts              # High-resolution PDF compilation
│   │   │   └── branding.ts         # Company assets & default config
│   │   ├── routes/
│   │   │   ├── __root.tsx          # Root layout & providers
│   │   │   ├── admin-login.tsx     # Admin authentication
│   │   │   ├── employee-login.tsx  # Employee authentication
│   │   │   ├── verify.$type.$id.tsx# Public QR Document Verification Portal
│   │   │   └── _authenticated/     # Protected application routes
│   │   │       ├── dashboard.tsx   # Executive metrics & quick actions
│   │   │       ├── inquiries.tsx   # Leads pipeline & customer conversion
│   │   │       ├── customers.tsx   # Customer directory
│   │   │       ├── quotations/     # List, creation, editing & views
│   │   │       ├── invoices/       # Billing management & payment triggers
│   │   │       ├── receipts/       # Payment records & printable receipts
│   │   │       ├── outstanding.tsx # Debt recovery & FIFO aging
│   │   │       ├── payroll.tsx     # Staff master & salary disbursements
│   │   │       ├── expenses.tsx    # Operational expenses & cashflow
│   │   │       └── settings.tsx    # Identity, logo, stamp & signature
│   │   └── styles.css              # Design system tokens, oklch theme & print rules
│   ├── .env                        # Environment configurations
│   ├── package.json
│   └── vite.config.ts
├── prd.md                          # Product Requirements Document
└── README.md                       # Master System Documentation
```

---

## Local Setup & Development

### 1. Prerequisites
* [Node.js](https://nodejs.org/) (version 18 or 20 LTS recommended)
* Active Supabase project with PostgreSQL instance

### 2. Environment Configuration
Create a `.env` file inside `frontend/`:

```env
VITE_SUPABASE_PROJECT_ID=yjvvhifqfecwviobdigy
VITE_SUPABASE_URL=https://<your-project-id>.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=<your-publishable-anon-key>

# Optional: Public domain for remote QR code camera verification
VITE_PUBLIC_URL=https://your-crm-domain.com
```

### 3. Installation & Run
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Production Build Validation
```bash
npm run build
npm run preview
```

---

## Database Migration & RLS Security

To enable the public QR code verification and section subtotal enhancements, execute the migration located at `database/migrations/20261013080000_public_document_verification.sql` inside the Supabase SQL Editor:

```sql
-- Allow anonymous read on issued documents for QR code authenticity scanning
GRANT SELECT ON public.company_profile TO anon;
GRANT SELECT ON public.quotations TO anon;
GRANT SELECT ON public.invoices TO anon;
GRANT SELECT ON public.receipts TO anon;
GRANT SELECT ON public.customers TO anon;
```

---

## License

Private and Confidential. Developed exclusively for **Owais Interior Designer, Nashik**. All rights reserved.
