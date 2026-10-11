# Database & Migration Setup

This folder holds all database schemas, table definitions, and migrations for the Owais Interior Designer CRM.

## Directory Structure
- `migrations/` : Supabase / PostgreSQL SQL migration files containing table creations, indexes, RLS policies, and triggers.
- `expenses_payroll_schema.sql` : Standalone schema script for expenses and payroll module.
- `drizzle/` : Drizzle ORM schema and configurations (if using Drizzle Kit).
- `config.toml` : Local Supabase CLI configuration.

## Connecting to Database

### For Spring Boot Backend (`backend/src/main/resources/application.properties`):
Update the connection string with your PostgreSQL / Supabase credentials:
```properties
spring.datasource.url=jdbc:postgresql://<your-db-host>:5432/postgres
spring.datasource.username=postgres
spring.datasource.password=<your-password>
```

### For Frontend (`frontend/.env`):
```env
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=<anon-key>
```
