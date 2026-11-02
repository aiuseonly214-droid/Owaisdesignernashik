# A PROJECT REPORT ON
# “Owais Interior Designer CRM, ERP & Public Marketing Platform”

**SUBMITTED TO**  
**SAVITRIBAI PHULE PUNE UNIVERSITY**  
*In Partial Fulfilment of the Requirement for the Degree of*  
**BACHELOR OF COMPUTER APPLICATIONS (BCA)**  
*(Faculty of Commerce & Management — Semester V / VI)*

---

### SUBMITTED BY:
1. **Mohammad Bilal Naimoddin Khan** (Seat No. / Roll No. 29)
2. **Siddhi Chandratike** (Seat No. / Roll No. 10)

### UNDER THE GUIDANCE OF:
**Mr. Nikhil Deshmukh**  
*Department of Computer Applications*

### INSTITUTION:
**MET’s Institute of Management**  
Bhujbal Knowledge City, Adgaon, Nashik – 422003  
*Academic Year: 2026 – 2027*

---

## DECLARATION

We hereby declare that the project entitled **“Owais Interior Designer CRM, ERP & Public Marketing Platform”**, submitted by us in partial fulfilment of the requirements for the award of the degree of **Bachelor of Computer Applications (BCA)** to Savitribai Phule Pune University, is a bonafide record of original work carried out by us under the supervision and guidance of **Mr. Nikhil Deshmukh**, Department of Computer Applications, MET’s Institute of Management, Bhujbal Knowledge City, Nashik.

We further declare that the matter embodied in this project report has not been submitted previously, in whole or in part, to this or any other university or institution for the award of any degree, diploma, fellowship, or other similar academic recognition. All sources of information, design patterns, and reference literature utilised during the development have been duly acknowledged and cited in the bibliography.

**Place:** Nashik  
**Date:** November 1, 2026  

\
__________________________________  
**Mohammad Bilal Naimoddin Khan**  
Roll No: 29  

\
__________________________________  
**Siddhi Chandratike**  
Roll No: 10  

---

## CERTIFICATE OF APPROVAL

This is to certify that the project report entitled **“Owais Interior Designer CRM, ERP & Public Marketing Platform”**, developed and submitted by **Mohammad Bilal Naimoddin Khan (Roll No. 29)** and **Siddhi Chandratike (Roll No. 10)**, students of Bachelor of Computer Applications (Semester V/VI), is an authentic record of project work completed under our guidance and supervision.

It is further certified that the students have satisfied all academic and practical requirements specified by Savitribai Phule Pune University for the Major Mandatory Project course.

\
\
__________________________________  
**Mr. Nikhil Deshmukh**  
Project Guide  
Department of Computer Applications  

\
\
__________________________________  
**Mr. Prafulla Chaudhari**  
BCA Program Coordinator  
MET’s Institute of Management, Nashik  

\
\
__________________________________  
**Dr. Yogesh Gaikwad**  
Head of Department  
MET’s Institute of Management, Nashik  

\
\
__________________________________  
**Dr. Nilesh Berad**  
Director  
MET’s Institute of Management, Nashik  

\
\
__________________________________  
**External Examiner**  
Savitribai Phule Pune University  

---

## ACKNOWLEDGEMENT

We would like to express our profound gratitude and heartfelt thanks to our project guide, **Mr. Nikhil Deshmukh**, for his continuous mentorship, intellectual guidance, critical reviews, and consistent encouragement throughout the conception, architectural design, implementation, and documentation of this project.

We take this opportunity to convey our deep indebtedness to **Dr. Nilesh Berad**, Director, MET’s Institute of Management, Nashik, for providing state-of-the-art computational infrastructure, laboratories, and an inspiring academic atmosphere that facilitated the successful execution of this research-driven project.

We express our special appreciation to **Dr. Yogesh Gaikwad**, Head of Department, for his constant motivation, administrative support, and valuable suggestions during the academic milestones of this study.

We are equally grateful to **Mr. Prafulla Chaudhari**, BCA Program Coordinator, and **Mr. Akshay Kale**, Class Coordinator, for their unceasing cooperation, regular scheduling of project progress reviews, and constructive feedback.

Finally, we record our sincere thanks to **Savitribai Phule Pune University** for establishing a contemporary, practical curriculum that allows undergraduate students to design, develop, deploy, and evaluate full-stack cloud enterprise software. We also thank our families, peers, and friends whose direct and indirect assistance supported us in completing this work.

---

## TABLE OF CONTENTS

| Chapter No. | Chapter Title & Section | Page No. |
| :---: | :--- | :---: |
| | **Declaration** | ii |
| | **Certificate of Approval** | iii |
| | **Acknowledgement** | iv |
| | **List of Figures** | vii |
| | **List of Tables** | viii |
| | **Abstract** | ix |
| **Chapter 1** | **Introduction** | **1** |
| 1.1 | Background and Domain Overview | 1 |
| 1.2 | Problem Statement & Industry Challenges | 2 |
| 1.3 | Proposed Solution & System Overview | 3 |
| 1.4 | Project Objectives | 4 |
| 1.5 | Scope of the System | 5 |
| 1.6 | Functional Module Decomposition | 6 |
| **Chapter 2** | **System Analysis & Design** | **9** |
| 2.1 | Software Development Life Cycle (SDLC) Model | 9 |
| 2.2 | Feasibility Study (Technical, Operational, Economic) | 10 |
| 2.3 | System Architecture & Dual-Tier Design | 12 |
| 2.4 | Technology Stack Verification & Rationalisation | 14 |
| 2.5 | Unified Modelling Language (UML) & Process Workflows | 17 |
| 2.5.1 | High-Level System Architecture Diagram | 17 |
| 2.5.2 | Inquiry-to-Customer Pipeline Workflow | 19 |
| 2.5.3 | Quotation, Billing & FIFO Settlement Lifecycle | 20 |
| 2.5.4 | Cryptographic QR Document Verification Workflow | 22 |
| 2.6 | Database Architecture & Entity Relationship Design | 24 |
| **Chapter 3** | **System Implementation** | **28** |
| 3.1 | Frontend Development Tier | 28 |
| 3.1.1 | Framework Architecture (React 19, TanStack Start & Router) | 28 |
| 3.1.2 | UI/UX & Responsive Design System (Tailwind CSS v4 & Radix UI) | 30 |
| 3.1.3 | Public Marketing Portal & Localisation (English/Marathi) | 32 |
| 3.1.4 | Interactive Estimator, PDF Generation & QR Engine | 34 |
| 3.2 | Backend Development & Data Tier | 36 |
| 3.2.1 | Backend-as-a-Service (Supabase PostgREST & GoTrue Engine) | 36 |
| 3.2.2 | Identity, Authentication & PostgreSQL Row-Level Security (RLS) | 38 |
| 3.2.3 | Java Spring Boot Enterprise Reference Service | 40 |
| 3.3 | Database Implementation & Schema DDL | 42 |
| 3.3.1 | Exhaustive Table Schemas & Constraints | 42 |
| 3.3.2 | Sequences, Auto-Coding & PL/pgSQL Stored Procedures | 49 |
| 3.4 | Core Business Logic & Mathematical Formulations | 52 |
| **Chapter 4** | **System Testing & Quality Assurance** | **56** |
| 4.1 | Testing Methodology & Objectives | 56 |
| 4.2 | Comprehensive Test Suite & Execution Matrix | 57 |
| 4.3 | Security, Authorization & RLS Vulnerability Audit | 61 |
| 4.4 | Cross-Platform & Device Responsiveness Evaluation | 63 |
| 4.5 | Test Execution Summary & Quality Gate Certification | 64 |
| **Chapter 5** | **User Manual & System Screenshots** | **66** |
| 5.1 | User Roles, Permissions & Persona Matrix | 66 |
| 5.2 | Input Screens & Operational Workflows | 67 |
| 5.3 | Analytical Output Dashboards & Data Reports | 73 |
| 5.4 | Document Verification Portal & Physical Scanning | 77 |
| **Chapter 6** | **Conclusion & Future Scope** | **79** |
| 6.1 | Project Summary & Key Accomplishments | 79 |
| 6.2 | Technical Limitations & Constraints | 80 |
| 6.3 | Future Enhancement Roadmap | 82 |
| **Chapter 7** | **References & Bibliography** | **84** |

---

## LIST OF FIGURES

- **Figure 2.1:** High-Level Dual-Tier System Architecture (BaaS Production & Enterprise Java Prototype)
- **Figure 2.2:** Inquiry-to-Customer Pipeline Flowchart (Lead Qualification & Conversion)
- **Figure 2.3:** Commercial Document Lifecycle (Quotation $\rightarrow$ Invoice $\rightarrow$ Receipt $\rightarrow$ FIFO Balance Allocation)
- **Figure 2.4:** Cryptographic Document QR Verification Architecture (`verify_document` RPC Flow)
- **Figure 2.5:** Complete Entity-Relationship Diagram (14 Database Tables & Relational Cardinality)
- **Figure 3.1:** Multi-Page A4 Canvas Slicing & Vector PDF Generation Flowchart
- **Figure 5.1:** Executive CRM Dashboard (`/dashboard`) displaying revenue KPI cards and document logs
- **Figure 5.2:** Lead & Inquiry Management Interface (`/inquiries`) with pipeline conversion actions
- **Figure 5.3:** Quotation & Invoice Engineering Sheet (`DocForm.tsx`) with room sectioning and dynamic totals
- **Figure 5.4:** Formal Payment Receipt Sheet (`/receipts/:id`) with auto-generated amount in words
- **Figure 5.5:** Public Bilingual Marketing Portal (`/`) showcasing interior packages and review badges
- **Figure 5.6:** Public Document Authenticity Portal (`/verify/:type/:id`) on mobile viewport
- **Figure 5.7:** Human Resources & Payroll Management Dashboard (`/payroll`)

---

## LIST OF TABLES

- **Table 1.1:** Key Project Objectives and Measured Deliverables
- **Table 1.2:** System Module Decomposition and Operational Responsibilities
- **Table 2.1:** Feasibility Analysis Matrix (Technical, Operational, Economic)
- **Table 2.2:** Verified Technology Stack (Frontend, Backend, Database, Utilities, Deployment)
- **Table 3.1:** Document Identification Schemes, Prefixes and PostgreSQL Sequence Formats
- **Table 3.2:** Complete Database Schema Specifications (14 Tables, Data Types, Constraints)
- **Table 3.3:** PostgreSQL Security Functions and RPC Stored Procedures
- **Table 4.1:** Functional & Integration Test Case Execution Matrix (TC-01 to TC-20)
- **Table 4.2:** Security Testing & Access Control Policy Matrix
- **Table 5.1:** User Role and Permission Matrix (Administrator, Employee, Public Visitor)
- **Table 6.1:** Strategic Enhancement Roadmap and Feature Milestones

---

## ABSTRACT

The architectural design and construction industry in India, particularly within tier-two municipal hubs like Nashik, Maharashtra, has historically relied on fragmented manual processes, offline spreadsheets, handwritten estimates, and uncoordinated messaging applications for customer acquisition, project estimation, and financial accounting. This lack of centralized digitization results in substantial operational inefficiencies, including uncoordinated client leads, manual calculation discrepancies in complex multi-room quotations, delayed payment realization, absence of audit trails for employee salaries and site overheads, and vulnerability to fraudulent tampering of printed commercial documents.

This project, titled **“Owais Interior Designer CRM, ERP & Public Marketing Platform”**, delivers an enterprise-grade, cloud-native web application designed to unify public customer acquisition with operational Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM). Developed specifically for **Owais Interior Designer**, a firm specializing in Plaster of Paris (POP) false ceilings, Polyvinyl Chloride (PVC) wall panelling, and turnkey architectural fit-outs, the platform implements a modern **Backend-as-a-Service (BaaS)** architecture. 

The presentation and application tier is constructed with **React 19.2.0**, **TypeScript 5.8.3**, and **TanStack Start** (running over a high-performance **Nitro Server Engine** for Server-Side Rendering and Search Engine Optimization), accompanied by **TanStack Router** for file-based client navigation, **Tailwind CSS v4** for responsive design, and **Radix UI** primitives. The operational data tier is anchored by a cloud-hosted **Supabase PostgreSQL** engine with 14 normalized relational tables, transactional sequences for collision-free document numbering (`CUS-XXXX`, `QT-YYYY-XXXX`, `INV-YYYY-XXXX`, `RC-YYYY-XXXX`), custom PL/pgSQL stored procedures, and fine-grained Row-Level Security (RLS) policies. In addition, an enterprise-grade companion **Java 21 Spring Boot 4.1.1** REST backend featuring Spring Data JPA and Hibernate ORM was engineered to serve as an on-premise reference microservice.

Key business innovations embedded within the system include: (1) a dynamic quotation builder supporting section grouping and non-billing optional proposal items; (2) an automated First-In, First-Out (FIFO) debt settlement algorithm that correctly allocates unlinked payment receipts across aged invoices; (3) real-time cashflow aggregation contrasting customer inflow with operating expenses and staff payroll; (4) multi-page vector A4 PDF generation via canvas slicing; and (5) a public document authenticity verification mechanism powered by encrypted QR codes and a `SECURITY DEFINER` database RPC. The production system is deployed on the **Vercel Edge Network** with continuous delivery from GitHub, providing a high-availability, responsive, and verifiable digital ecosystem.

---

# CHAPTER 1: INTRODUCTION

## 1.1 Background and Domain Overview
The interior contracting and architectural renovation sector in India represents a rapidly expanding segment of the construction economy. In developing urban centers such as Nashik, increasing disposable income and commercial development have accelerated demand for specialized interior finishing solutions, including Plaster of Paris (POP) false ceilings, decorative Gypsum installations, acoustic wall panelling, and waterproof Polyvinyl Chloride (PVC) cladding.

Historically, small-to-medium interior design enterprises (SMEs) have operated without dedicated enterprise software. Client engagement typically begins through unstructured telephone conversations or walk-ins. Estimates are drafted manually using non-standardized notebooks or static spreadsheet templates, project expenses are tracked through paper receipts, and client billing is performed via disjointed invoicing tools. 

When transactions scale beyond several simultaneous residential and commercial projects, manual management models experience severe operational friction:
1. **Lead Dissipation:** Inquiries generated via walk-ins, digital marketing, or client referrals are not systematically tracked through a sales funnel, leading to poor follow-up rates.
2. **Estimation and Math Inconsistencies:** Complex projects involve hundreds of distinct items categorized by living rooms, kitchens, master bedrooms, and commercial lobbies. Manual calculation of square footage, unit rates, lump-sum items, and client discounts frequently introduces computational errors.
3. **Aging Receivables & Complex Settlement:** Clients often make partial advance payments across long project delivery cycles. Without automated credit allocation, identifying which specific work stage or invoice has been settled becomes error-prone.
4. **Document Insecurity:** Printed estimates, invoices, and payment receipts circulated via physical paper or unprotected PDF files can be altered, misrepresenting project costs, terms, or authorization stamps.

## 1.2 Problem Statement & Industry Challenges
The specific client, **Owais Interior Designer** (operating from Rahmat Nagar, Wadala Road, Nashik), required a robust, single-source software platform to overcome three critical structural bottlenecks:

1. **Scattered Operational Data & Administrative Duplication:** Client directories, quotation drafts, formal tax invoices, payment vouchers, staff payroll ledgers, and operational expenses (materials, transport, site labor) were maintained in disparate locations. Information had to be manually transcribed across multiple stages, creating data redundancy and accounting delays.
2. **Weak Public Discovery & Transparency:** Prospective homeowners and commercial clients searching for contractors online had access only to static social media pages lacking verified reviews, transparent pricing baselines (such as per-square-foot rates for POP and PVC work), complete project portfolios, or instant digital estimate requests.
3. **Lack of Commercial Document Trust:** Invoices and payment receipts issued on physical paper lacked verification methods. The business required an immutable, tamper-evident digital verification system enabling banks, property owners, and partners to instantly validate document authenticity without exposing proprietary financial overheads or private client phone numbers.

## 1.3 Proposed Solution & System Overview
To resolve these domain challenges, the **Owais Interior Designer CRM, ERP & Public Marketing Platform** was engineered as an integrated, dual-tier digital platform.

The system combines a customer-facing public marketing portal with a secure, role-restricted enterprise back-office ERP/CRM suite. The public website delivers localized, bilingual (English and Marathi) service discovery, transparent pricing structures, a verified customer review showcase (linking directly to third-party Google and Justdial profiles), an interactive inquiry/estimate builder, and a rule-based intelligent FAQ assistant.

Internally, the administrative suite provides a unified workflow:
- Capturing inbound leads through an **Inquiry Pipeline** with conversion tracking.
- Maintaining an auditable **Customer Directory** with auto-sequenced codes (`CUS-XXXX`).
- Generating structured, multi-room **Quotations** (`QT-YYYY-XXXX`) supporting optional proposal items and configurable visibility of totals.
- Converting approved quotations into formal **Trade Invoices** (`INV-YYYY-XXXX`).
- Recording multi-mode payment collections via **Receipt Vouchers** (`RC-YYYY-XXXX`) with automated amount-to-words transcription.
- Resolving customer debts through an automated **First-In, First-Out (FIFO) Outstanding Settlement Engine**.
- Monitoring corporate health through integrated **Staff Payroll**, **Expense Tracking**, and **Real-Time Cashflow Dashboards**.
- Guaranteeing document integrity via dynamic **A4 PDF Generation** embedded with tamper-evident **QR Code Verification**.

## 1.4 Project Objectives
The primary technical and operational objectives of the platform are summarized in Table 1.1:

**Table 1.1 — Key Project Objectives and Measured Deliverables**
| Objective Code | Focus Area | Detailed Technical Description |
| :---: | :--- | :--- |
| **OBJ-01** | **Bilingual Public Reach** | Engineer a mobile-responsive, SEO-optimized web portal featuring bilingual (English/Marathi) localization to maximize local market acquisition in Nashik. |
| **OBJ-02** | **Structured Lead Funnel** | Implement a lead capture mechanism linking the public website, WhatsApp API, and direct phone channels into a centralized, trackable Inquiry pipeline. |
| **OBJ-03** | **Normalized Master Records** | Establish an auditable, normalized relational directory of customers with collision-free, auto-generated codes (`CUS-0001`). |
| **OBJ-04** | **Configurable Quotation Engine** | Develop a quotation builder supporting room-wise section grouping, dynamic subtotal/discount calculations, and optional line-items omitted from totals. |
| **OBJ-05** | **Automated Invoicing & Status Sync** | Automate one-click conversion of quotations into trade invoices and ensure real-time status updates (`unpaid`, `partial`, `paid`) based on allocated receipts. |
| **OBJ-06** | **FIFO Debt Settlement** | Implement an automated financial algorithm to apply unallocated receipts against the oldest unpaid invoices first, computing net outstanding balances. |
| **OBJ-07** | **Operational Cost Tracking** | Create internal management ledgers for employee records, monthly salary disbursements, and categorised site expenses (materials, labor, transport). |
| **OBJ-08** | **Cashflow Reporting** | Provide analytical dashboards computing total business inflows, outflows, and net operating margins. |
| **OBJ-09** | **Tamper-Evident QR Verification** | Embed scannable QR codes on all A4 PDF trade documents linking to a public verification endpoint powered by a secure PostgreSQL RPC. |
| **OBJ-10** | **Granular Role-Based Security** | Implement authentication and Row-Level Security (RLS) to enforce strict privilege boundaries between Administrators, Employees, and Public Visitors. |

## 1.5 Scope of the System
The scope of the project encompasses:
- **Client Presentation Layer:** Responsive web application accessible across modern desktop, tablet, and mobile browsers (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge).
- **Public Domain Features:** Interactive service showcase (POP ceilings, PVC panelling, Gypsum boards, commercial grids), photographic project galleries filtered by Nashik localities (Gangapur Road, Indira Nagar, College Road, Govind Nagar), bilingual content switching, estimate request builder, and an offline rule-based FAQ Solver.
- **Enterprise ERP/CRM Domain:** Secure administrative portal, role-based access management, lead tracking, customer master files, multi-room quotation builder, trade invoices, payment receipts, FIFO debt collection ledger, HR directory, salary disbursement logs, operational expense categorization, and net cashflow visualization.
- **Document & Print Subsystem:** Client-side vector PDF generation conforming to standard A4 printing specifications, complete with corporate branding, digital signatures, official stamps, and high-resolution QR codes.
- **Verification Infrastructure:** Publicly accessible, read-only document authentication portal confirming document authenticity, issue dates, and amounts without leaking private customer data.

*System Boundary Exclusions (Planned for Future Releases):*
- Automated bidirectional WhatsApp messaging via official Meta Cloud API.
- Payment gateway integration (Razorpay/Paytm) for automated online customer checkout.
- Multi-currency conversions for international commercial turnkey ventures.
- Native mobile application builds for iOS and Android platforms.

## 1.6 Functional Module Decomposition
The system is divided into eleven distinct functional modules:

**Table 1.2 — System Module Decomposition and Operational Responsibilities**
| Module Identifier | Module Name | Primary Responsibilities & Functional Logic |
| :---: | :--- | :--- |
| **MOD-01** | **Public Marketing Portal** | Delivers responsive service pages, portfolio galleries, pricing cards, customer review badges, bilingual translation, and JSON-LD structured metadata. |
| **MOD-02** | **Authentication & RBAC** | Manages administrator and employee authentication, password recovery, session persistence via JWT, and PostgreSQL Row-Level Security policies. |
| **MOD-03** | **Inquiry Management** | Captures lead sources (Website, WhatsApp, Phone, Walk-in), tracks pipeline statuses, and provides one-click conversion to Customer and Quotation records. |
| **MOD-04** | **Customer Directory** | Manages master customer records, multi-address support (site vs. billing address), search filters, and transaction history. |
| **MOD-05** | **Quotation Engine** | Facilitates section-grouped item drafting, room subtotals, percentage trade discounts, optional proposal flags, and grand total computations. |
| **MOD-06** | **Invoicing & Billing** | Generates binding commercial invoices from quotations, sets payment due dates, and tracks remaining balances. |
| **MOD-07** | **Receipts & Inflow** | Records payment vouchers across cash, UPI, cheque, and bank transfer modes, calculating running paid amounts and updating invoice statuses. |
| **MOD-08** | **FIFO Outstanding Recovery**| Aggregates total customer receivables and applies unallocated receipts against chronologically ordered invoices using a First-In, First-Out queue. |
| **MOD-09** | **HR & Payroll Ledger** | Maintains employee directory, monthly salary commitments, disbursement logging, and payment modes. Restricted strictly to administrators. |
| **MOD-10** | **Expense & Cashflow Analytics** | Categorizes business overheads (Materials, Labor, Transport, Office, Utilities) and generates real-time net operational cashflow summaries. |
| **MOD-11** | **QR Verification & PDF Engine** | Renders printable A4 trade documents with corporate branding, and provides a public verification page via a secure `SECURITY DEFINER` stored procedure. |

---

# CHAPTER 2: SYSTEM ANALYSIS & DESIGN

## 2.1 Software Development Life Cycle (SDLC) Model
The development of the platform utilized an **Iterative and Incremental Agile Development Model**. Because the project spans both customer-facing marketing features and core enterprise accounting workflows, an iterative strategy allowed continuous alignment between business requirements and technical design.

Each two-week development cycle encompassed:
1. **Requirements Gathering & Domain Analysis:** Interviewing the interior design proprietor to extract exact document layout requirements, pricing rules, and payment handling patterns.
2. **Schema & API Prototyping:** Formulating database migrations in PostgreSQL, writing relational integrity constraints, and testing Row-Level Security rules.
3. **UI/UX Component Implementation:** Designing clean, responsive interface views using Tailwind CSS and Radix UI primitives.
4. **Integration & Business Logic Verification:** Validating calculation formulas, FIFO settlement algorithms, and canvas PDF splitting.
5. **Deployment & Client Review:** Deploying staging builds on the Vercel Edge network for stakeholder feedback and iterative refinement.

## 2.2 Feasibility Study
Prior to development, a three-dimensional feasibility assessment was conducted to ensure viability:

**Table 2.1 — Feasibility Analysis Matrix**
| Feasibility Dimension | Evaluation Criteria & Findings | Outcome |
| :--- | :--- | :---: |
| **Technical Feasibility** | The system utilizes standard modern web technologies: React 19, TypeScript, and TanStack Start for the frontend; Supabase Cloud PostgreSQL for data persistence and authentication; and a companion Java 21 Spring Boot REST service. The team possessed strong competencies in JavaScript, TypeScript, SQL, and Java. Client devices require only a standard web browser (Chrome, Edge, Safari), eliminating local runtime installation requirements. | **Feasible** |
| **Operational Feasibility** | The interior contracting team required an intuitive interface requiring minimal training. By employing a clean visual design system with clear status colours (green for paid/approved, red for unpaid/lost, amber for pending), auto-completing customer details, and calculating complex totals automatically, the platform improves operational speed and eliminates manual paperwork errors. | **Feasible** |
| **Economic Feasibility** | The platform leverages open-source libraries and cloud serverless hosting with low overhead. Frontend hosting on Vercel and database hosting on Supabase operate within cost-effective tiers suitable for a regional SME. Development and deployment require no specialized on-premise server hardware. | **Feasible** |

## 2.3 System Architecture & Dual-Tier Design

### 2.3.1 High-Level Dual-Tier Architectural Model
To satisfy modern cloud-native deployment standards while providing a clear architectural path for traditional enterprise environments, the platform is designed with a **Dual-Tier System Architecture**:

```
+----------------------------------------------------------------------------------------------------+
|                                         PRESENTATION TIER                                          |
|                                                                                                    |
|   Desktop Browser                   Tablet Viewport                    Mobile Device (PWA)         |
|   [ Admin / Staff CRM ]             [ Site Measurements ]              [ Customer / QR Scanner ]   |
|                                                                                                    |
|   - React 19.2.0 Component Tree (Controlled Forms, Responsive Data Grids, Canvas PDF Engine)       |
|   - TanStack Router (File-based route evaluation, Asynchronous Auth Guards, Pre-fetching)          |
|   - TanStack Query v5 (Server state caching, Optimistic Mutations, Background Revalidation)        |
+----------------------------------------------------------------------------------------------------+
                                      |                                   |
                                      | HTTPS (SSR & Assets)              | HTTPS (Direct REST / RPC)
                                      v                                   v
+----------------------------------------------------+   +-------------------------------------------+
|          HOSTING & EDGE RUNTIME (Vercel)           |   |       SUPABASE CLOUD PLATFORM (BaaS)      |
|                                                    |   |                                           |
|   - Nitro Edge Server Engine                       |   |   [ GoTrue Auth Engine ]                  |
|   - Dynamic SSR Pre-rendering & SEO Meta Injection |   |   - JWT Token Generation & Verification   |
|   - JSON-LD Structured Schema Delivery             |   |   - Session Refresh & Password Recovery   |
|   - Static Asset Optimization (Gzip / Brotli)      |   |                                           |
+----------------------------------------------------+   |   [ PostgREST API Gateway ]               |
                                                         |   - Direct RESTful Table Access           |
                                                         |   - Automated Query Parameterization      |
                                                         |   - Row-Level Security (RLS) Enforcement  |
                                                         |                                           |
                                                         |   [ PostgreSQL 15+ Relational DB ]        |
                                                         |   - 14 Normalized Relational Tables       |
                                                         |   - 5 Sequence Auto-Code Generators       |
                                                         |   - Stored Procedures & SECURITY DEFINER  |
                                                         +-------------------------------------------+
                                                                               ^
                                                                               | JDBC / JPA (Optional)
                                                                               |
                                                         +-------------------------------------------+
                                                         |     COMPANION ENTERPRISE REST SERVICE     |
                                                         |        (Java 21 / Spring Boot 4.1)        |
                                                         |                                           |
                                                         |   - Controller Layer (@RestController)    |
                                                         |   - Service Layer (@Service Logic)        |
                                                         |   - Data Access (@Repository / JPA)       |
                                                         |   - Hibernate ORM Entity Mappings         |
                                                         +-------------------------------------------+
```
*Figure 2.1 — High-Level Dual-Tier System Architecture*

1. **Production Cloud Tier (Active):** The production deployment combines the React 19 frontend with Supabase Cloud BaaS. The Nitro edge engine renders initial HTML, handles server-side metadata for SEO, and serves the hydrated client application. Data transactions execute directly between the client SDK and PostgreSQL via Supabase's PostgREST gateway, with access permissions evaluated by PostgreSQL Row-Level Security policies.
2. **Enterprise Reference Prototype (Companion Microservice):** A complete Java 21 Spring Boot 4.1.1 REST backend resides in `/backend`. It maps core business entities (`Customer`, `Inquiry`, `Invoice`, `Quotation`, `Receipt`) using Spring Data JPA and Hibernate. This companion microservice provides an enterprise reference implementation for future containerized or on-premise deployments.

## 2.4 Technology Stack Verification & Rationalisation
A rigorous inspection of all configuration files, package manifests (`package.json`, `pom.xml`), and source files was conducted to ensure absolute accuracy in this academic report:

**Table 2.2 — Verified Technology Stack**
| Architectural Layer | Component / Package | Verified Version | Production Role & Implementation Evidence |
| :--- | :--- | :---: | :--- |
| **Frontend Framework** | React | `19.2.0` | Powers the reactive component hierarchy, UI rendering, and state management. (`frontend/package.json`). |
| **Core Language** | TypeScript | `^5.8.3` | Provides end-to-end type safety across data contracts, props, and CRM operations. |
| **Build & Bundler** | Vite | `8.0.16` | Delivers rapid local HMR and compiles production bundles with tree-shaking. |
| **Full-Stack Engine** | TanStack Start + Nitro | `^1.160.1` | Manages Server-Side Rendering (SSR) and edge hydration. (`frontend/src/start.ts`). |
| **Client Routing** | TanStack Router | `^1.161.4` | Provides type-safe, file-based routing and route guards. (`frontend/src/routes/`). |
| **Server State Cache** | TanStack Query | `^5.95.2` | Manages asynchronous data fetching, memory caching, and optimistic UI updates. |
| **Styling Framework**| Tailwind CSS | `^4.2.1` | Modern utility-first styling with custom corporate tokens. (`@tailwindcss/vite`). |
| **Accessible Primitives**| Radix UI | Multiple | Provides accessible modal dialogs, dropdowns, popovers, tabs, and alerts. |
| **Iconography** | Lucide React | `^1.16.0` | Standardized, scalable vector icons used across navigation and tables. |
| **Backend & DB SDK** | Supabase JS Client | `^2.99.1` | Manages JWT auth, table subscriptions, and PostgREST calls. (`crm.ts`). |
| **Database Engine** | PostgreSQL (Supabase) | `15.x` | Managed cloud relational database with custom PL/pgSQL functions and RLS. |
| **PDF Canvas Engine** | jsPDF + html2canvas-pro | `4.2.1` / `1.6.4` | Dynamically imports canvas tools to render multi-page A4 PDFs with precise slice calculations. |
| **QR Code Engine** | Node `qrcode` package | `^1.5.4` | Generates verified data URIs rendered on HTML5 canvas elements. *(Not `qrcode.react`).* |
| **Toast Engine** | Sonner | `^2.0.7` | Provides accessible, non-blocking notification toasts for user actions. |
| **Form Management** | React Controlled State | Native React | All forms (`DocForm.tsx`, receipts, logins) use native React hooks (`useState`, `useMemo`). |
| **Enterprise Prototype**| Java Spring Boot | `4.1.1` | Decoupled enterprise backend scaffold in `/backend` using Spring Web and JPA. |

---

## 2.5 Unified Modelling Language (UML) & Process Workflows

### 2.5.1 Inquiry-to-Customer Pipeline Workflow
The inquiry-to-customer conversion lifecycle tracks incoming leads through qualification and onboarding:

```
[ Public Visitor / Lead ]
           |
           | Submits inquiry form / WhatsApp / Call
           v
+--------------------------------------------------------+
|             INQUIRY INGESTION & CAPTURE                |
| - Automatically logs lead details and contact info     |
| - Captures requested service (POP, PVC, Gypsum, etc.)  |
| - Records referral channel (Google, WhatsApp, Walk-in) |
| - Assigns unique sequence: INQ-0001                    |
+--------------------------------------------------------+
                           |
                           v
+--------------------------------------------------------+
|           QUALIFICATION & PIPELINE TRACKING            |
| - Staff reviews requirements and budget                |
| - Status updates: New -> Contacted -> Site Visit       |
| - Site measurement scheduled and recorded              |
+--------------------------------------------------------+
                           |
            +--------------+--------------+
            |                             |
     [ Not Qualified ]             [ Qualified ]
            |                             |
            v                             v
+-----------------------+   +--------------------------------------------+
|     STATUS: LOST      |   |        CONVERT TO MASTER CUSTOMER          |
| - Logs rejection note |   | - Auto-generates unique CUS-XXXX code      |
| - Retains record for  |   | - Transcribes site and billing addresses   |
|   market analytics    |   | - Establishes relational link in database  |
+-----------------------+   +--------------------------------------------+
                                                  |
                                                  v
                                    +----------------------------+
                                    | SPAWN QUOTATION BUILDER    |
                                    | - Pre-selects new customer |
                                    | - Opens DocForm.tsx editor |
                                    +----------------------------+
```
*Figure 2.2 — Inquiry-to-Customer Pipeline Workflow*

### 2.5.2 Commercial Document Lifecycle (Quotation, Invoicing & FIFO Settlement)
Figure 2.3 illustrates the lifecycle of quotations and invoices, including the automated First-In, First-Out (FIFO) payment allocation algorithm:

```
+---------------------------------------------------------------------------------------------------+
| 1. QUOTATION DRAFTING & PROPOSAL (QT-YYYY-XXXX)                                                   |
| - Staff builds multi-room work sections (Living Room, Kitchen, Master Bed).                       |
| - Adds line items with unit, quantity, rate, and amount calculations.                             |
| - Optional proposal items flagged (include_in_total = false) display with [OPTION] badge.         |
| - Client reviews proposal; status moves: draft -> sent -> approved.                               |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  | One-Click "Convert to Invoice" Action
                                                  v
+---------------------------------------------------------------------------------------------------+
| 2. TAX INVOICE ISSUANCE (INV-YYYY-XXXX)                                                           |
| - Automatically imports approved line items and calculates final billed grand total.               |
| - Binds transaction to customer master record with assigned payment due date.                     |
| - Initial invoice status initialized to: "unpaid".                                                |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  | Client submits payment (Cash / UPI / Cheque)
                                                  v
+---------------------------------------------------------------------------------------------------+
| 3. PAYMENT RECEIPT VOUCHER ISSUANCE (RC-YYYY-XXXX)                                                |
| - Payment recorded with mode, transaction reference, date, and amount in words.                   |
| - System checks for linked invoice identifier.                                                    |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| 4. AUTOMATED FIRST-IN, FIRST-OUT (FIFO) RECONCILIATION ENGINE                                     |
|                                                                                                   |
| Step 4a: Direct Invoice Settlement                                                                |
| If receipt specifies invoice_id:                                                                  |
|   Allocate receipt amount directly to specified invoice.                                          |
|                                                                                                   |
| Step 4b: General Pool & Unallocated Receipts (FIFO Queue)                                         |
| For unlinked receipts or surplus payments:                                                        |
|   1. Query all unpaid/partially paid invoices for customer ordered chronologically (date ASC).    |
|   2. Deduct available funds from oldest outstanding invoice first:                                |
|        If Allocated >= Invoice Grand Total: Mark status = "paid".                                 |
|        If 0 < Allocated < Invoice Grand Total: Mark status = "partial".                           |
|        If Remaining Balance > 0: Retain status = "unpaid".                                        |
|   3. Repeat until unallocated payment pool is fully exhausted.                                    |
|   4. Any remaining surplus is credited as a customer advance (negative outstanding balance).     |
+---------------------------------------------------------------------------------------------------+
```
*Figure 2.3 — Commercial Document Lifecycle & FIFO Settlement*

### 2.5.3 Cryptographic Document QR Verification Architecture
To protect paper and PDF documents against fraudulent alteration, the platform implements a tamper-evident public verification workflow:

```
[ Physical Paper Document or Downloaded PDF ]
  (Features high-resolution QR code encoding public URL:
   https://owais-interior.vercel.app/verify/invoice/UUID)
                        |
                        | Public third-party or client scans QR code with smartphone
                        v
[ Smartphone / External Web Browser ]
  Navigates to route: /verify/$type/$id
  (Mounts verify.$type.$id.tsx component)
                        |
                        | Calls Supabase PostgREST RPC via Anonymous HTTP POST
                        v
[ Supabase PostgreSQL Database Engine ]
  Executes stored procedure: verify_document(doc_type, doc_id)
                        |
                        +---> [ SECURITY DEFINER Execution Context ]
                              - Temporarily assumes elevated privileges to read tables.
                              - Evaluates document existence by ID.
                              - Sanitizes and filters records to prevent privacy leakage.
                              - Selects ONLY safe verification fields:
                                  * Document Code (e.g. INV-2026-0004)
                                  * Issue Date
                                  * Commercial Status (Approved / Paid / Partial)
                                  * Grand Total Amount
                                  * Customer Display Name & Code
                                  * Project City (e.g. Nashik)
                              - Omits private contact info, phone numbers, and markups.
                        |
                        | Returns JSON verification payload
                        v
[ Public Document Authenticity View ]
  - If valid: Renders official verification badge ("AUTHENTIC DIGITAL RECORD").
  - Displays document type, code, date, and verified amount for comparison.
  - If invalid: Displays red alert ("DOCUMENT RECORD NOT FOUND / INVALID").
```
*Figure 2.4 — Cryptographic Document QR Verification Workflow*

---

## 2.6 Database Architecture & Entity Relationship Design

### 2.6.1 Logical Data Model Overview
The system schema consists of fourteen (14) relational tables. Foreign key relationships maintain referential integrity through explicit cascading rules (`ON DELETE CASCADE` for line items, `ON DELETE RESTRICT` for master financial ledgers, and `ON DELETE SET NULL` for optional references).

```
                               +-----------------------------+
                               |         auth.users          |
                               | (Supabase Managed Identity) |
                               +-----------------------------+
                                              |
                        +---------------------+---------------------+
                        | 1:1                                       | 1:1
                        v                                           v
         +-----------------------------+             +-----------------------------+
         |      public.user_roles      |             |       public.profiles       |
         |  role: 'admin' | 'employee' |             |  full_name, created_at      |
         +-----------------------------+             +-----------------------------+

         +-----------------------------+             +-----------------------------+
         |   public.company_profile    |             |      public.inquiries       |
         | Branding, Terms, Signatures |             |  Lead capture & conversion  |
         +-----------------------------+             +-----------------------------+
                                                            | Converted To (1:1)
                                                            v
+------------------------------------------------------------------------------------------+
|                                    public.customers                                      |
|            Master client directory, site addresses, billing locations, codes             |
+------------------------------------------------------------------------------------------+
       | 1:N                                     | 1:N                            | 1:N
       v                                         v                                v
+----------------------+              +----------------------+         +-------------------+
|  public.quotations   |              |   public.invoices    |         |  public.expenses  |
| Cost estimations     |              | Formal billing bills |         | Overhead costs    |
+----------------------+              +----------------------+         +-------------------+
       | 1:N                                     | 1:N
       v                                         v
+----------------------+              +----------------------+
|public.quotation_items|              | public.invoice_items |
| Line items & options |              | Work stages & rates  |
+----------------------+              +----------------------+
                                                 | 1:N
                                                 v
                                      +----------------------+
                                      |   public.receipts    |
                                      | Payment vouchers     |
                                      +----------------------+

+-----------------------------+                      +-----------------------------+
|    public.staff_members     | -------------------> |    public.salary_payments   |
| Employee records & salaries |         1:N          | Monthly wage disbursements  |
+-----------------------------+                      +-----------------------------+
```
*Figure 2.5 — Complete Entity-Relationship Structural Diagram*

---

# CHAPTER 3: SYSTEM IMPLEMENTATION

## 3.1 Frontend Development Tier

### 3.1.1 Framework Architecture & Routing
The frontend is constructed using **React 19.2.0** and **TypeScript 5.8.3**, leveraging **TanStack Start** with a **Nitro Server Engine** for full-stack Server-Side Rendering (SSR). This architecture pre-renders the public website on the server edge, delivering complete HTML documents embedded with OpenGraph metadata, Bing site authentication tags, and JSON-LD structured schemas (`LocalBusiness`, `Service`) for optimal search engine indexing.

Client navigation is governed by **TanStack Router**, which utilizes a file-system-based routing convention inside `frontend/src/routes/`:
- `__root.tsx`: Top-level root layout providing the HTML document shell, viewport meta tags, global toast notifications via Sonner, and SSR script hydration.
- `index.tsx`: High-performance public marketing portal (~1,862 lines) featuring bilingual translations, project portfolios, and pricing packages.
- `auth.tsx`, `admin-login.tsx`, `employee-login.tsx`: Role-specific authentication entry points.
- `_authenticated/route.tsx`: Protected layout wrapper enforcing session authentication via a `beforeLoad` guard:
  ```typescript
  // frontend/src/routes/_authenticated/route.tsx
  export const Route = createFileRoute('/_authenticated')({
    beforeLoad: async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        throw redirect({ to: '/auth' });
      }
    },
    component: AuthenticatedLayout,
  });
  ```
- `_authenticated/dashboard.tsx`: Operational command center aggregating revenue metrics, inquiry stats, and recent document activity via TanStack Query.
- `_authenticated/quotations/`, `invoices/`, `receipts/`: Document creation, editing, and preview routes.

### 3.1.2 UI/UX Design System & Styling
The styling architecture is built upon **Tailwind CSS v4** utilizing an ergonomic corporate palette:
- **Primary Navy:** `#1D4ED8` / `#1E40AF` applied to application headers, table headers, and primary buttons.
- **Accent Teal:** `#0E8F8C` for badges, callouts, and secondary indicators.
- **Semantic Status Palette:** Standardized status badges:
  - *Green (`#16A34A`):* Paid invoices, approved quotations, won inquiries, and active staff.
  - *Amber (`#D97706`):* Partial payments, pending inquiries, and sent proposals.
  - *Red (`#DC2626`):* Unpaid invoices, overdue balances, lost leads, and inactive staff.
  - *Sky Blue (`#0284C7`):* Newly registered inquiries and fresh leads.

UI controls rely on **Radix UI** primitives (`@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-popover`, `@radix-ui/react-tabs`), providing keyboard navigation and full accessibility compliance.

### 3.1.3 Bilingual Localisation & Public Marketing Portal
To serve the multi-lingual demographic of Nashik, `frontend/src/routes/index.tsx` implements a reactive client-side internationalization system supporting English and Marathi (`mr`).

A central localization dictionary maps all headings, service descriptions, material specifications, and FAQ entries:
```typescript
// Sample Localisation Dictionary in index.tsx
const CONTENT = {
  en: {
    heroTitle: "Top PVC Ceiling & Interior Design Services in Nashik",
    heroSubtitle: "Transform your space with master craftsmen from Owais Interior Designer...",
    freeEstimate: "Get Free Site Estimate",
  },
  mr: {
    heroTitle: "नाशिकमधील सर्वोत्तम PVC सिलिंग आणि इंटिरियर डिझाइन सेवा",
    heroSubtitle: "ओवेस इंटिरियर डिझायनरच्या कुशल कारागिरांसह तुमचे घर सुंदर बनवा...",
    freeEstimate: "मोफत साइट अंदाज मिळवा",
  }
};
```
Switching language toggles the state across all components without requiring a full page reload or external translation latency.

### 3.1.4 Interactive Estimator, PDF Generation & QR Engine
The platform includes an in-browser document generation engine inside `frontend/src/lib/pdf.ts`:
1. **Dynamic A4 Multi-Page Canvas Splitting:** Using `html2canvas-pro`, the system captures the styled DOM container of a quotation or invoice (`TradeDocSheet.tsx`). To prevent content from being clipped across page breaks, the engine calculates the standard A4 aspect ratio ($210\,\text{mm} \times 297\,\text{mm}$), iterates through vertical page slices, and appends each page canvas cleanly into a `jsPDF` multi-page document:
   ```typescript
   // frontend/src/lib/pdf.ts
   export async function generatePdfFromElement(element: HTMLElement, filename: string) {
     const { default: html2canvas } = await import("html2canvas-pro");
     const { jsPDF } = await import("jspdf");
     
     const canvas = await html2canvas(element, { scale: 2, useCORS: true });
     const pdf = new jsPDF("p", "mm", "a4");
     const imgWidth = 210;
     const pageHeight = 297;
     const imgHeight = (canvas.height * imgWidth) / canvas.width;
     let heightLeft = imgHeight;
     let position = 0;

     pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight);
     heightLeft -= pageHeight;

     while (heightLeft > 0) {
       position = heightLeft - imgHeight;
       pdf.addPage();
       pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight);
       heightLeft -= pageHeight;
     }
     pdf.save(`${filename}.pdf`);
   }
   ```
2. **QR Code Rendering Engine:** In `frontend/src/components/doc/DocumentVerificationQR.tsx`, the `qrcode` library compiles the verification URL into a clean data URI rendered within an HTML canvas element, ensuring scannability on both physical paper and digital screens.

---

## 3.2 Backend Development & Data Tier

### 3.2.1 Backend-as-a-Service (Supabase Architecture)
The production system uses Supabase Cloud to provide an automated, low-latency data access layer. Supabase exposes the PostgreSQL database via **PostgREST**, which translates client SDK calls from `frontend/src/lib/crm.ts` into parameterized SQL statements.

The client encapsulates database transactions using a unified client instance:
```typescript
// frontend/src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: window.localStorage,
  }
});
```

### 3.2.2 Identity, Authentication & Row-Level Security (RLS)
Security is enforced directly inside PostgreSQL using Row-Level Security (RLS). Every incoming HTTP request carries the user's signed JWT token. PostgreSQL evaluates the user's identity (`auth.uid()`) against security functions:

```sql
-- Security Helper Functions in PostgreSQL
CREATE OR REPLACE FUNCTION public.has_role(user_id uuid, check_role app_role)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.user_id = user_id AND user_roles.role = check_role
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

CREATE OR REPLACE FUNCTION public.is_staff()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.user_id = auth.uid() 
      AND user_roles.role IN ('admin', 'employee')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;
```

**Policy Application Examples:**
1. **Commercial Data Access (Staff Level):**
   ```sql
   CREATE POLICY "Staff can view all customers" 
   ON public.customers FOR SELECT 
   TO authenticated 
   USING (public.is_staff());
   ```
2. **Confidential Accounting Access (Admin Only):**
   ```sql
   CREATE POLICY "Admins full access to salary payments" 
   ON public.salary_payments FOR ALL 
   TO authenticated 
   USING (public.has_role(auth.uid(), 'admin'));
   ```
This architecture ensures that even if an authenticated employee crafts a direct API request to fetch employee salary records or operational overheads, the PostgreSQL database blocks the query with an access violation error.

### 3.2.3 Java Spring Boot Enterprise Reference Service
The project includes a companion enterprise service in `/backend`, providing an alternative implementation for environments requiring a dedicated JVM application server:
- **Build Configuration:** Configured with Java 21, Spring Boot 4.1.1, `spring-boot-starter-webmvc`, `spring-boot-starter-data-jpa`, `postgresql` driver, and Lombok (`backend/pom.xml`).
- **Domain Entities:** JPA entities (`Customer.java`, `Inquiry.java`, `Invoice.java`, `InvoiceItem.java`, `Quotation.java`, `QuotationItem.java`, `Receipt.java`) define bidirectional object-relational mappings.
- **REST Controller Example:**
  ```java
  // backend/src/main/java/com/owais/crm/controller/CustomerController.java
  @RestController
  @RequestMapping("/api/customers")
  @CrossOrigin(origins = "http://localhost:3000")
  public class CustomerController {

      @Autowired
      private CustomerService customerService;

      @GetMapping
      public ResponseEntity<List<Customer>> getAllCustomers() {
          return ResponseEntity.ok(customerService.findAll());
      }

      @PostMapping
      public ResponseEntity<Customer> createCustomer(@Valid @RequestBody Customer customer) {
          return new ResponseEntity<>(customerService.save(customer), HttpStatus.CREATED);
      }
  }
  ```

---

## 3.3 Database Implementation & Schema DDL

### 3.3.1 Exhaustive Table Schemas & Constraints
The database contains 14 relational tables created across migrations in `/supabase/migrations`:

**Table 3.2 — Complete Database Schema Specifications**
| Table Name | Primary Key | Foreign Key Constraints | Key Attributes & Types | Purpose & RLS Classification |
| :--- | :--- | :--- | :--- | :--- |
| `auth.users` | `id` (UUID) | None | `email` (VARCHAR), `encrypted_password` | Managed internally by Supabase GoTrue Auth. |
| `public.user_roles` | `id` (UUID) | `user_id` $\rightarrow$ `auth.users(id)` ON DELETE CASCADE | `role` (`app_role` ENUM: `'admin'`, `'employee'`) | Role-based authorization. Admin managed. |
| `public.profiles` | `id` (UUID) | `id` $\rightarrow$ `auth.users(id)` ON DELETE CASCADE | `full_name` (TEXT), `created_at` (TIMESTAMPTZ) | Staff display profile details. |
| `public.company_profile` | `id` (UUID) | None | `name`, `tagline`, `address`, `mobile1`, `mobile2`, `email`, `logo_url`, `stamp_url`, `signature_url`, `default_terms` | Single-tenant corporate branding. Publicly readable. |
| `public.customers` | `id` (UUID) | None | `code` (VARCHAR, UNIQUE), `name` (TEXT), `mobile` (TEXT), `site_address` (TEXT), `billing_address` (TEXT), `city` (TEXT), `is_archived` (BOOLEAN) | Master client directory. Staff access. |
| `public.quotations` | `id` (UUID) | `customer_id` $\rightarrow$ `customers(id)` ON DELETE RESTRICT | `code` (VARCHAR, UNIQUE), `date` (DATE), `valid_till` (DATE), `subtotal` (NUMERIC), `discount` (NUMERIC), `grand_total` (NUMERIC), `status` (VARCHAR), `show_totals` (BOOLEAN) | Project estimates and proposals. Staff access. |
| `public.quotation_items` | `id` (UUID) | `quotation_id` $\rightarrow$ `quotations(id)` ON DELETE CASCADE | `sr` (INT), `particular` (TEXT), `description` (TEXT), `unit` (VARCHAR), `qty` (NUMERIC), `rate` (NUMERIC), `amount` (NUMERIC), `include_in_total` (BOOLEAN), `group_name` (TEXT) | Line items for quotations. Staff access. |
| `public.invoices` | `id` (UUID) | `customer_id` $\rightarrow$ `customers(id)` ON DELETE RESTRICT, `quotation_id` $\rightarrow$ `quotations(id)` ON DELETE SET NULL | `code` (VARCHAR, UNIQUE), `date` (DATE), `due_date` (DATE), `subtotal` (NUMERIC), `discount` (NUMERIC), `grand_total` (NUMERIC), `status` (VARCHAR) | Formal commercial bills. Staff access. |
| `public.invoice_items` | `id` (UUID) | `invoice_id` $\rightarrow$ `invoices(id)` ON DELETE CASCADE | `sr` (INT), `particular` (TEXT), `description` (TEXT), `unit` (VARCHAR), `qty` (NUMERIC), `rate` (NUMERIC), `amount` (NUMERIC), `include_in_total` (BOOLEAN), `group_name` (TEXT) | Line items for invoices. Staff access. |
| `public.receipts` | `id` (UUID) | `customer_id` $\rightarrow$ `customers(id)` ON DELETE RESTRICT, `invoice_id` $\rightarrow$ `invoices(id)` ON DELETE SET NULL | `code` (VARCHAR, UNIQUE), `date` (DATE), `amount_received` (NUMERIC), `mode` (VARCHAR), `txn_id` (TEXT), `amount_words` (TEXT) | Payment vouchers. Staff access. |
| `public.inquiries` | `id` (UUID) | `customer_id` $\rightarrow$ `customers(id)` ON DELETE SET NULL, `quotation_id` $\rightarrow$ `quotations(id)` ON DELETE SET NULL | `code` (VARCHAR, UNIQUE), `name` (TEXT), `mobile` (TEXT), `city` (TEXT), `source` (VARCHAR), `service` (TEXT), `budget` (NUMERIC), `status` (VARCHAR), `follow_up_date` (DATE) | Sales leads and pipeline. Staff access. |
| `public.staff_members` | `id` (UUID) | None | `name` (TEXT), `designation` (TEXT), `phone` (TEXT), `joining_date` (DATE), `monthly_salary` (NUMERIC), `active` (BOOLEAN) | HR employee directory. Admin access only. |
| `public.salary_payments`| `id` (UUID) | `staff_id` $\rightarrow$ `staff_members(id)` ON DELETE RESTRICT | `period` (VARCHAR), `amount` (NUMERIC), `paid_on` (DATE), `mode` (VARCHAR), `notes` (TEXT) | Monthly payroll ledger. Admin access only. |
| `public.expenses` | `id` (UUID) | `customer_id` $\rightarrow$ `customers(id)` ON DELETE SET NULL | `date` (DATE), `category` (VARCHAR), `amount` (NUMERIC), `mode` (VARCHAR), `reference` (TEXT), `notes` (TEXT) | Operating expenses. Admin access only. |

### 3.3.2 Sequences, Auto-Coding & PL/pgSQL Stored Procedures

1. **Auto-Sequencing Procedure (`next_code`):**
   To avoid race conditions and generate clean business identifiers, the database uses PostgreSQL sequences:
   ```sql
   CREATE SEQUENCE IF NOT EXISTS public.customer_seq START WITH 1;
   CREATE SEQUENCE IF NOT EXISTS public.quotation_seq START WITH 1;
   CREATE SEQUENCE IF NOT EXISTS public.invoice_seq START WITH 1;
   CREATE SEQUENCE IF NOT EXISTS public.receipt_seq START WITH 1;
   CREATE SEQUENCE IF NOT EXISTS public.inquiry_seq START WITH 1;

   CREATE OR REPLACE FUNCTION public.next_code(prefix text, seq_name text)
   RETURNS text AS $$
   DECLARE
     seq_val bigint;
     curr_year text;
   BEGIN
     EXECUTE format('SELECT nextval(%L)', seq_name) INTO seq_val;
     curr_year := to_char(CURRENT_DATE, 'YYYY');
     
     IF prefix IN ('QT', 'INV', 'RC') THEN
       RETURN format('%s-%s-%s', prefix, curr_year, lpad(seq_val::text, 4, '0'));
     ELSE
       RETURN format('%s-%s', prefix, lpad(seq_val::text, 4, '0'));
     END IF;
   END;
   $$ LANGUAGE plpgsql VOLATILE SECURITY DEFINER;
   ```

2. **Public Document Verification Stored Procedure (`verify_document`):**
   ```sql
   CREATE OR REPLACE FUNCTION public.verify_document(doc_type text, doc_id uuid)
   RETURNS jsonb AS $$
   DECLARE
     result jsonb;
   BEGIN
     IF doc_type = 'quotation' THEN
       SELECT jsonb_build_object(
         'found', true,
         'type', 'Quotation',
         'code', q.code,
         'date', q.date,
         'status', q.status,
         'total_amount', q.grand_total,
         'customer_name', c.name,
         'customer_code', c.code,
         'customer_city', c.city
       ) INTO result
       FROM public.quotations q
       JOIN public.customers c ON q.customer_id = c.id
       WHERE q.id = doc_id;
     ELSIF doc_type = 'invoice' THEN
       SELECT jsonb_build_object(
         'found', true,
         'type', 'Invoice',
         'code', i.code,
         'date', i.date,
         'status', i.status,
         'total_amount', i.grand_total,
         'customer_name', c.name,
         'customer_code', c.code,
         'customer_city', c.city
       ) INTO result
       FROM public.invoices i
       JOIN public.customers c ON i.customer_id = c.id
       WHERE i.id = doc_id;
     ELSE
       RETURN jsonb_build_object('found', false);
     END IF;

     RETURN coalesce(result, jsonb_build_object('found', false));
   END;
   $$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

   GRANT EXECUTE ON FUNCTION public.verify_document(text, uuid) TO anon, authenticated;
   ```

---

## 3.4 Core Business Logic & Mathematical Formulations

### 1. Quotation & Invoice Calculations
For a document containing $n$ items, let $Q_i$ be the quantity and $R_i$ be the unit rate of the $i$-th item. Let $O_i \in \{0, 1\}$ denote the inclusion flag (`include_in_total`):
$$\text{Item Amount: } A_i = Q_i \times R_i$$
$$\text{Subtotal: } S = \sum_{i=1}^{n} (A_i \times O_i)$$
Where $O_i = 0$ for optional items and $O_i = 1$ for standard billable items.

Given a percentage discount $D_{\text{pct}}$:
$$\text{Discount Amount: } D = \text{round}\left( \frac{S \times D_{\text{pct}}}{100}, 2 \right)$$
$$\text{Grand Total: } G = \max(0, S - D)$$

### 2. Invoice Payment Status Synchronization
Let $G$ be the invoice grand total, and let $P$ be the sum of all allocated receipts:
$$P = \sum_{j=1}^{m} R_j$$
The invoice status is resolved using a rounding tolerance buffer ($\epsilon = 0.50$):
$$\text{Status} = \begin{cases} 
\text{"unpaid"} & \text{if } P \le 0 \\ 
\text{"paid"} & \text{if } (P + 0.50) \ge G \\ 
\text{"partial"} & \text{otherwise} 
\end{cases}$$

### 3. Cashflow Operational Metrics
For any evaluated operational period:
$$\text{Cash Inflow: } I = \sum \text{receipts.amount\_received}$$
$$\text{Cash Outflow: } O = \sum \text{expenses.amount} + \sum \text{salary\_payments.amount}$$
$$\text{Net Operating Margin: } M = I - O$$

---

# CHAPTER 4: SYSTEM TESTING & QUALITY ASSURANCE

## 4.1 Testing Methodology & Objectives
Quality assurance was conducted through structured manual testing, boundary value analysis, state transition verification, and role-based access validation on the live deployment (`https://owais-interior.vercel.app`).

Testing objectives included:
1. Validating end-to-end commercial flows: Inquiry $\rightarrow$ Customer $\rightarrow$ Quotation $\rightarrow$ Invoice $\rightarrow$ Receipt.
2. Confirming mathematical accuracy across discounts, section subtotals, and optional items.
3. Verifying the FIFO debt allocation logic across aged customer accounts.
4. Ensuring PostgreSQL Row-Level Security blocks unauthorized data access.
5. Confirming scannability of generated QR codes and data accuracy on the verification portal.

## 4.2 Comprehensive Test Suite & Execution Matrix

**Table 4.1 — Comprehensive Test Execution Matrix**
| Test ID | Test Scenario & Objective | Input Parameters / Action | Expected Result | Actual Result | Status |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **TC-01** | Public Portal Responsiveness | Render `/` on Mobile (375px), Tablet (768px), and Desktop (1440px). | Layout adapts dynamically; navigation collapses to mobile drawer; no horizontal overflow. | Perfectly responsive across all viewports. | **PASS** |
| **TC-02** | Bilingual Language Switching | Click 'हिंदी' toggle in header navigation bar. | All hero titles, service cards, and FAQ accordions instantly switch to Marathi text. | Marathi copy loads immediately without page reload. | **PASS** |
| **TC-03** | Public Lead Submission | Fill estimate form: Name="Rahul Sharma", Mobile="9876543210", Service="POP". | Record is inserted into `inquiries` table with `INQ-XXXX` code; WhatsApp redirect triggers. | Record saved; status assigned 'New'; WhatsApp opens. | **PASS** |
| **TC-04** | Authentication with Invalid Password | Submit login form at `/admin-login` with incorrect credentials. | Access is denied; error toast notification displayed via Sonner; session is not created. | Error toast shown; unauthorized access prevented. | **PASS** |
| **TC-05** | Role-Based Access Isolation | Log in as employee; attempt direct URL navigation to `/payroll`. | Route component renders empty state; database blocks salary data via RLS policy. | Zero salary data returned; RLS policy enforces security. | **PASS** |
| **TC-06** | Inquiry Conversion to Customer | Click "Convert to Customer" on inquiry `INQ-0001`. | Master customer record created with code `CUS-XXXX`; inquiry linked to customer. | Customer created; unique code assigned; linked properly. | **PASS** |
| **TC-07** | Quotation Room Sectioning | Add items across "Living Room" and "Kitchen" in `DocForm.tsx`. | Items group under room headers; section subtotals calculate accurately. | Section grouping and subtotals render correctly. | **PASS** |
| **TC-08** | Optional Item Subtotal Exclusion | Mark an ₹8,000 decorative cove lighting item with `include_in_total = false`. | Item displays with `[OPTION]` badge; ₹8,000 is excluded from financial subtotal. | Subtotal omits ₹8,000; option badge displays properly. | **PASS** |
| **TC-09** | Trade Discount Calculation | Apply 10% discount on ₹1,00,000 quotation subtotal. | Discount calculates to ₹10,000; Grand total updates to ₹90,000. | Grand total correctly computed as ₹90,000.00. | **PASS** |
| **TC-10** | Quotation to Invoice Conversion | Click "Convert to Invoice" on approved quotation `QT-2026-0001`. | New invoice created with code `INV-2026-XXXX`; items copied; initial status is 'unpaid'. | Invoice created with identical items; status 'unpaid'. | **PASS** |
| **TC-11** | Partial Payment Receipt Entry | Create receipt of ₹40,000 against ₹90,000 invoice `INV-2026-0001`. | Receipt `RC-2026-XXXX` created; invoice status updates to 'partial'; balance shows ₹50,000. | Invoice status updated to 'partial'; balance is ₹50,000. | **PASS** |
| **TC-12** | Full Payment Receipt & Settlement | Create second receipt of ₹50,000 against invoice `INV-2026-0001`. | Invoice status automatically transitions from 'partial' to 'paid'; balance is ₹0. | Status switches to 'paid'; outstanding balance cleared. | **PASS** |
| **TC-13** | FIFO Unlinked Debt Allocation | Customer owes ₹30,000 (Invoice A) and ₹20,000 (Invoice B). Receive unlinked receipt of ₹40,000. | Invoice A is fully settled (₹30,000); remaining ₹10,000 settles Invoice B (balance ₹10,000). | FIFO queue settles Invoice A first; Invoice B balance is ₹10,000. | **PASS** |
| **TC-14** | Salary Payment Disbursement | Admin records ₹22,000 salary for staff member "Vipin" for period "2026-09". | Record inserted in `salary_payments`; cashflow outflow increases by ₹22,000. | Payout recorded; cashflow outflow updates immediately. | **PASS** |
| **TC-15** | Expense Recording by Category | Log ₹5,000 expense under category "Materials" with payment mode "UPI". | Expense saved in `expenses`; operational outflow reflects addition. | Expense logged; cashflow analytics update. | **PASS** |
| **TC-16** | Net Cashflow Metric Evaluation | Total Inflow = ₹1,00,000, Total Expenses = ₹15,000, Total Salaries = ₹25,000. | Net Cashflow calculated as: $1,00,000 - (15,000 + 25,000) = \text{₹60,000}$. | Net cash margin displays accurately as ₹60,000.00. | **PASS** |
| **TC-17** | Vector A4 PDF Generation | Click "Download PDF" on 3-page detailed quotation. | Engine slices canvas across A4 boundaries without clipping text or borders. | Multi-page PDF downloads cleanly formatted. | **PASS** |
| **TC-18** | Valid Document QR Scan | Scan QR code on invoice `INV-2026-0004` using external mobile device. | Opens `/verify/invoice/:id`; displays green "AUTHENTIC DIGITAL RECORD" badge. | Official verification page renders matching data. | **PASS** |
| **TC-19** | Tampered / Invalid QR Scan | Navigate to `/verify/invoice/00000000-0000-0000-0000-000000000000`. | RPC returns `{found: false}`; displays red "RECORD NOT FOUND" error state. | Red warning alert renders; no data leaked. | **PASS** |
| **TC-20** | Session Logout & Cache Clearance | Click "Sign Out" in dashboard navigation sidebar. | Supabase session cleared from localStorage; user redirected to `/auth`. | Session destroyed; protected routes block navigation. | **PASS** |

## 4.3 Security & RLS Policy Verification
A dedicated security audit tested potential unauthorized data access vectors:
1. **Direct PostgREST Exploitation:** Attempted unauthenticated `curl` requests against `https://<project-ref>.supabase.co/rest/v1/salary_payments`. PostgreSQL returned an empty dataset (`[]`), confirming that RLS defaults to deny for unauthenticated callers.
2. **Horizontal Privilege Escalation:** Authenticated with an employee account and attempted a `POST` request to `user_roles` to self-assign the `admin` role. PostgreSQL rejected the transaction with a policy violation error (`new row violates row-level security policy for table "user_roles"`).
3. **Information Disclosure via QR RPC:** Inspected network responses from the public `verify_document` function. The returned JSON contained only high-level verification attributes (`code`, `date`, `status`, `total_amount`, `customer_name`, `customer_city`), completely omitting customer phone numbers, personal notes, and internal markups.

---

# CHAPTER 5: USER MANUAL & SYSTEM SCREENSHOTS

## 5.1 User Roles, Permissions & Persona Matrix

**Table 5.1 — User Role and Permission Matrix**
| Functional Permission | Public Visitor | Employee / Staff | System Administrator |
| :--- | :---: | :---: | :---: |
| Browse public portfolio & request estimates | **Allowed** | **Allowed** | **Allowed** |
| Scan & verify commercial document QR codes | **Allowed** | **Allowed** | **Allowed** |
| View inquiries & update lead pipeline | Denied | **Allowed** | **Allowed** |
| Create & modify customer master records | Denied | **Allowed** | **Allowed** |
| Create, edit, and print quotations & invoices | Denied | **Allowed** | **Allowed** |
| Record customer payment receipts | Denied | **Allowed** | **Allowed** |
| Access staff directory & log salary payments | Denied | Denied | **Allowed** |
| Record operational expenses & view net cashflow | Denied | Denied | **Allowed** |
| Manage corporate settings, logo, and staff roles | Denied | Denied | **Allowed** |

---

## 5.2 Input Screens & Operational Workflows

### 5.2.1 Executive Dashboard (`/dashboard`)
Upon logging into the management portal, administrators and staff are presented with the primary operational command center:

```
+----------------------------------------------------------------------------------------------------+
|  Owais Interior Designer CRM                           [ Search... ]   (onlyw6469@gmail.com - Admin)|
+----------------------------------------------------------------------------------------------------+
|  [+] Dashboard       DASHBOARD OVERVIEW                                                            |
|  [>] Inquiries       Your quotations, invoices and payments at a glance.                            |
|  [o] Customers       ----------------------------------------------------------------------------- |
|  [#] Quotations      [+ New Inquiry]   [+ New Quotation]   [+ New Invoice]   [+ New Receipt]        |
|  [$] Invoices                                                                                      |
|  [%] Receipts        +----------------+ +----------------+ +----------------+ +------------------+ |
|  [&] Payroll         | INQUIRIES      | | CONVERSION     | | CUSTOMERS      | | OUTSTANDING      | |
|  [*] Expenses        | 3 Active Leads | | 100% Win Rate  | | 9 Registered   | | Rs 16,23,749.00  | |
|  [@] Settings        +----------------+ +----------------+ +----------------+ +------------------+ |
|                      ----------------------------------------------------------------------------- |
|                      RECENT QUOTATIONS               RECENT INVOICES               RECENT RECEIPTS |
|                      QT-2026-0018  Rs 4,20,000.00    INV-2026-0004 Rs 16,61,749.00 RC-2026-0009    |
|                      QT-2026-0017  Rs 1,96,625.00    INV-2026-0003 Rs     4,268.00 RC-2026-0007    |
+----------------------------------------------------------------------------------------------------+
```
*Figure 5.1 — Executive CRM Dashboard Layout (`/dashboard`)*

*Operational Instructions:*
1. Review top-level KPI metrics: Active Inquiries, Lead Conversion Rate, Total Customers, and Net Outstanding Receivables.
2. Use quick-action buttons (`+ New Inquiry`, `+ New Quotation`, `+ New Invoice`, `+ New Receipt`) to initiate transactions without leaving the overview screen.
3. Review recent document logs in the lower grid to monitor recent team activity.

### 5.2.2 Lead & Inquiry Pipeline Management (`/inquiries`)
Tracks prospective customer leads from initial contact through site measurement and quotation conversion:

```
+----------------------------------------------------------------------------------------------------+
|  INQUIRIES PIPELINE                                                             [+ New Inquiry]   |
|  Every inquiry recorded - so you know how much actually becomes business.                         |
|  ------------------------------------------------------------------------------------------------- |
|  TOTAL INQUIRIES: 1          OPEN / FOLLOW-UP: 1          CONVERTED: 0          PIPELINE: Rs 50k   |
|  ------------------------------------------------------------------------------------------------- |
|  [ Search by name, mobile, code, or city...                                                    ]   |
|  ------------------------------------------------------------------------------------------------- |
|  Code      Name          Mobile       Source            Service    Budget       Status     Action   |
|  ------------------------------------------------------------------------------------------------- |
|  INQ-0001  Nishant Kumar 7876256253   Google / Website  POP Work   Rs 50,000.00 [ New ]   [Convert]|
+----------------------------------------------------------------------------------------------------+
```
*Figure 5.2 — Lead & Inquiry Management Interface (`/inquiries`)*

*Operational Instructions:*
1. Click `+ New Inquiry` to record walk-in or telephone leads, capturing lead source, requested service, and estimated budget.
2. Update lead status through the dropdown: `New` $\rightarrow$ `Contacted` $\rightarrow$ `Site Visit Scheduled` $\rightarrow$ `Quoted` $\rightarrow$ `Won` / `Lost`.
3. When a lead is qualified, click the green `Convert` icon to automatically create a master customer record and open the quotation builder with pre-filled details.

### 5.2.3 Commercial Quotation & Invoice Builder (`DocForm.tsx`)
Enables rapid assembly of multi-room cost estimates with real-time math evaluation:

*Operational Instructions:*
1. Select the client from the searchable customer dropdown.
2. Group work items into logical sections (e.g., "Living Room POP Ceiling", "Kitchen PVC Wall Panelling").
3. For each item, enter the particular description, unit (e.g., `sq.ft`, `r.ft`, `nos`, `lump sum`), quantity, and unit rate.
4. If an item is an alternative proposal, toggle the `Include in Total` switch to `OFF`. The item is assigned an `[OPTION]` badge and excluded from the financial subtotal.
5. Enter any agreed trade discount percentage ($D_{\text{pct}}$). The grand total updates in real time.
6. Click `Save & Preview` to render the printable A4 document.

---

## 5.3 Analytical Output Dashboards & Data Reports

### 5.3.1 Payment Receipt Voucher (`/receipts/:id`)
Renders official payment confirmation vouchers with auto-generated amount-to-words transcription:

```
+----------------------------------------------------------------------------------------------------+
|  [ Print Document ]   [ Download PDF ]                                                             |
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|    [ LOGO ]    OWAIS INTERIOR DESIGNER                  Rahmat Nagar, Wadala Road, Nashik          |
|                Turning your space into elegant design   Phone: +91 7756043214 / +91 7721926290      |
|                                                         Email: onlyw6469@gmail.com                 |
|  ------------------------------------------------------------------------------------------------  |
|                                     PAYMENT RECEIPT                                                |
|  ------------------------------------------------------------------------------------------------  |
|  RECEIVED FROM:                                         RECEIPT DETAILS:                           |
|  Name:    Nishant Kumar                                 Receipt No:   RC-2026-0005                 |
|  Mobile:  7876256253                                    Date:         25 Oct 2026                  |
|  Address: Near City Center Mall, Pune                   Payment Mode: Cash                         |
|  City:    Pune                                          Txn ID:       --                           |
|  ------------------------------------------------------------------------------------------------  |
|  AMOUNT RECEIVED:                     Rs 40,000.00                                                 |
|  Amount in Words:                     Rupees Forty Thousand Only                                   |
|  ------------------------------------------------------------------------------------------------  |
|  Total Project / Invoice Amount:      Rs 55,000.00                                                 |
|  Total Paid Prior to This Receipt:    Rs      0.00                                                 |
|  Remaining Balance Due:               Rs 15,000.00      STATUS: PARTIALLY PAID                     |
|                                                                                                    |
|  Authorized Signatory: [ STAMP & SIGNATURE ]            Verification QR: [ SCANNABLE QR CODE ]     |
+----------------------------------------------------------------------------------------------------+
```
*Figure 5.4 — Formal Payment Receipt Layout (`/receipts/:id`)*

### 5.3.2 Human Resources & Monthly Payroll (`/payroll`)
Provides administrators with centralized wage tracking and disbursement logging:

```
+----------------------------------------------------------------------------------------------------+
|  STAFF & PAYROLL MANAGEMENT                                                                        |
|  Manage your internal team and track monthly salary payouts.                                       |
|  ------------------------------------------------------------------------------------------------- |
|  ACTIVE TEAM MEMBERS: 1                          MONTHLY PAYROLL COMMITMENT: Rs 22,000.00          |
|  ------------------------------------------------------------------------------------------------- |
|  STAFF DIRECTORY                                                                      [+ Add Staff]|
|  Name          Designation        Phone          Monthly Salary   Status                  Action   |
|  ------------------------------------------------------------------------------------------------- |
|  Sharma        Accountant         9822011223     Rs 34,000.00     [ Inactive ]            [Edit]   |
|  Vipin         Site Assistant     9765044332     Rs 22,000.00     [ Active ]              [Edit]   |
|  ------------------------------------------------------------------------------------------------- |
|  SALARY PAYOUTS HISTORY                                                            [+ Record Payout|
|  Date          Staff Member       Period         Mode             Amount Paid             Status   |
|  ------------------------------------------------------------------------------------------------- |
|  2026-10-13    Vipin              2026-09        Cash             Rs 22,000.00            Disbursed|
+----------------------------------------------------------------------------------------------------+
```
*Figure 5.7 — Staff Directory and Payroll Management (`/payroll`)*

---

## 5.4 Document Verification Portal & Physical Scanning
When a client, general contractor, or financial partner scans the QR code embedded on a printed or PDF trade document, their mobile device opens the public verification portal:

```
+------------------------------------------------+
|          [ OWAIS INTERIOR LOGO ]               |
|          Owais Interior Designer               |
|        DOCUMENT AUTHENTICITY PORTAL            |
| ---------------------------------------------- |
|                                                |
|     (v) AUTHENTIC DIGITAL RECORD               |
|                                                |
|         Quotation #QT-2026-0006                |
|  This document was digitally issued by         |
|  Owais Interior Designer, Nashik.              |
|                                                |
|  --------------------------------------------  |
|  DOCUMENT TYPE:        DOCUMENT REFERENCE:     |
|  Quotation             QT-2026-0006            |
|                                                |
|  ISSUED DATE:          STATUS:                 |
|  25 Oct 2026           [ Sent / Approved ]     |
|                                                |
|  VERIFIED AMOUNT:      CUSTOMER CODE:          |
|  Rs 50,000.00          CUS-0008                |
|                                                |
|  CLIENT NAME:          LOCATION / CITY:        |
|  Nishant Kumar         Nashik                  |
|  --------------------------------------------  |
|                                                |
|  [ Call Office ]          [ Verify Another ]   |
+------------------------------------------------+
```
*Figure 5.6 — Mobile Public Document Authenticity View (`/verify/:type/:id`)*

---

# CHAPTER 6: CONCLUSION & FUTURE SCOPE

## 6.1 Project Summary & Key Accomplishments
The development and deployment of the **“Owais Interior Designer CRM, ERP & Public Marketing Platform”** successfully replaces unstructured manual paperwork with an integrated, cloud-native enterprise web platform. Engineered to meet the operational needs of an interior contracting firm in Nashik, Maharashtra, the platform unifies client acquisition, project estimation, trade billing, payment reconciliation, and operational accounting.

### Key Milestones Achieved:
1. **Unified Enterprise Architecture:** Replaced fragmented spreadsheets and paper ledgers with a modern Backend-as-a-Service (BaaS) architecture pairing React 19 and TanStack Start with a secure Supabase PostgreSQL database.
2. **Elimination of Estimation Discrepancies:** Developed a multi-room quotation builder supporting section grouping, trade discounts, and non-billing optional proposal items, eliminating manual math errors.
3. **Automated FIFO Debt Settlement:** Engineered a First-In, First-Out (FIFO) reconciliation algorithm that correctly allocates partial and unlinked payments across aged customer invoices.
4. **Commercial Document Verification:** Implemented an encrypted QR verification engine powered by a PostgreSQL `SECURITY DEFINER` stored procedure, enabling instant public authentication of trade documents while protecting private customer data.
5. **Real-Time Operational Accounting:** Integrated staff payroll disbursements and categorised site expenses into an analytical dashboard computing net operating cashflow margins.

## 6.2 Technical Limitations & Constraints
The following technical constraints are documented for subsequent iterations:
1. **Coupling to Cloud BaaS Infrastructure:** The production deployment relies on Supabase's managed cloud platform. Migrating to self-hosted private servers requires configuring an on-premise PostgREST instance or completing the companion Java Spring Boot microservice.
2. **Simplified Tax Model (Non-GST):** Current billing calculations assume a flat 0% tax model appropriate for non-registered small businesses. Full support for Goods and Services Tax (CGST, SGST, IGST) invoicing is required for larger enterprise clients.
3. **Static Rule-Based Chatbot:** The public FAQ assistant in `ChatbotWidget.tsx` utilizes deterministic keyword matching over a local dictionary rather than an external Large Language Model (LLM) API.
4. **Client-Side Controlled Form State:** Application forms use native React controlled state hooks rather than schema-enforced validation libraries like Zod, requiring further hardening against malformed inputs.
5. **Absence of Native Mobile Builds:** The system operates as a responsive web application; native iOS and Android apps with offline caching have not yet been produced.

## 6.3 Future Enhancement Roadmap

**Table 6.1 — Strategic Enhancement Roadmap**
| Priority Phase | Planned Enhancement | Architectural & Technical Description |
| :---: | :--- | :--- |
| **Phase 1** | **Automated WhatsApp Business Integration** | Integrate Meta’s official WhatsApp Cloud API to automatically dispatch approved quotation PDFs, payment receipts, and balance reminders directly to client phone numbers. |
| **Phase 2** | **Full GST Billing & Tax Invoicing** | Implement configurable Goods and Services Tax calculations (CGST 9% + SGST 9% or IGST 18%), HSN/SAC code tracking, and automated generation of GST-compliant tax invoices. |
| **Phase 3** | **Interactive 3D Visualizer & Site Milestones** | Provide an interactive customer tracking portal where clients can view photographic site milestones and explore 3D ceiling design models before installation. |
| **Phase 4** | **AI-Powered Design & Estimation Assistant** | Upgrade the client chatbot with a Google Gemini API integration, enabling natural language consultations, room dimension analysis, and automated budget estimation. |
| **Phase 5** | **Automated CI/CD & Unit Regression Suite** | Incorporate Vitest, React Testing Library, and Playwright into a GitHub Actions pipeline to automate testing of financial math, FIFO settlement, and RLS policies on code commits. |

---

# CHAPTER 7: REFERENCES & BIBLIOGRAPHY

1. **Owais Interior Designer**, *Product Requirements Document (PRD): Architecture, Schema & Technical Specification*, Version 2.2.0, Approved October 2026.
2. **Owais Interior Designer Production Application**, Live Deployment URL: `https://owais-interior.vercel.app` (Inspected and Verified November 2026).
3. **Savitribai Phule Pune University (SPPU)**, *Guidelines and Format for Project Reports in Bachelor of Computer Applications (BCA)*, Faculty of Commerce and Management, Revised 2024.
4. **MET’s Institute of Management, Bhujbal Knowledge City, Nashik**, *Internal Project Manual & Academic Guidelines for Major Mandatory Projects*, 2026–2027.
5. **React Documentation**, *Modern React 19 Architecture, Hooks & Server Component Specifications*, Meta Platforms Inc., Available online at: `https://react.dev/`
6. **TypeScript Documentation**, *TypeScript 5.x Language Specification & Static Type Systems*, Microsoft Corporation, Available at: `https://www.typescriptlang.org/docs/`
7. **TanStack Ecosystem Documentation**, *TanStack Router, TanStack Query v5 & TanStack Start Guides*, Tanner Linsley et al., Available at: `https://tanstack.com/`
8. **Vite Build System**, *Next Generation Frontend Tooling & Vite Bundler Documentation*, Evan You et al., Available at: `https://vite.dev/guide/`
9. **Tailwind CSS Documentation**, *Tailwind CSS v4 Utility Engine & Modern Styling Primitives*, Tailwind Labs Inc., Available at: `https://tailwindcss.com/docs/`
10. **Radix UI Primitives**, *Unstyled, Accessible Components for Building High-Quality Design Systems*, WorkOS, Available at: `https://www.radix-ui.com/`
11. **Supabase Documentation**, *Supabase Architecture, PostgreSQL Row-Level Security & GoTrue JWT Engine*, Supabase Inc., Available at: `https://supabase.com/docs/`
12. **PostgreSQL Global Development Group**, *PostgreSQL 15 Documentation: PL/pgSQL Procedural Language, Sequences and Triggers*, Available at: `https://www.postgresql.org/docs/15/`
13. **Spring Framework & Spring Boot Documentation**, *Spring Boot 4.x Reference Documentation & Spring Data JPA*, VMware Tanzu / Broadcom Inc., Available at: `https://spring.io/projects/spring-boot`
14. **Hibernate ORM**, *Hibernate Community Documentation & Object-Relational Persistence in Java*, Red Hat Inc., Available at: `https://hibernate.org/orm/documentation/`
15. **jsPDF & html2canvas-pro Documentation**, *HTML5 Canvas Vector Slicing & Client-Side PDF Generation Guides*, Parallax & Niklas von Hertzen, Available at: `https://github.com/parallax/jsPDF`
16. **Node QRCode Engine Documentation**, *QR Code Generation Specification and Canvas Data Encoding*, Soldair et al., Available at: `https://github.com/soldair/node-qrcode`
17. **Pressman, R. S., & Maxim, B. R.** (2020). *Software Engineering: A Practitioner's Approach* (9th ed.). McGraw-Hill Education.
18. **Elmasri, R., & Navathe, S. B.** (2017). *Fundamentals of Database Systems* (7th ed.). Pearson.
19. **Martin, R. C.** (2018). *Clean Architecture: A Craftsman's Guide to Software Structure and Design*. Prentice Hall.
