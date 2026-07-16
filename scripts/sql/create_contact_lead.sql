-- Durable contact/audit lead store (run once against production Postgres)
-- Or: npx prisma db push

CREATE TABLE IF NOT EXISTS "ContactLead" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT,
  "message" TEXT NOT NULL,
  "source" TEXT NOT NULL DEFAULT 'contact-form',
  "ip" TEXT,
  "userAgent" TEXT,
  "emailStatus" TEXT NOT NULL DEFAULT 'pending',
  "resendId" TEXT,
  "emailError" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ContactLead_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "ContactLead_email_idx" ON "ContactLead"("email");
CREATE INDEX IF NOT EXISTS "ContactLead_source_idx" ON "ContactLead"("source");
CREATE INDEX IF NOT EXISTS "ContactLead_createdAt_idx" ON "ContactLead"("createdAt");
CREATE INDEX IF NOT EXISTS "ContactLead_emailStatus_idx" ON "ContactLead"("emailStatus");
