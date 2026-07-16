-- OnboardingSubmission + ContractStatus (run once against production Postgres)
-- Or: npx prisma db push

DO $$ BEGIN
  CREATE TYPE "ContractStatus" AS ENUM (
    'draft',
    'awaiting_signature',
    'signed',
    'awaiting_payment',
    'active',
    'suspended'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS "OnboardingSubmission" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "status" "ContractStatus" NOT NULL DEFAULT 'draft',
  "form" JSONB NOT NULL,
  "entityName" TEXT NOT NULL,
  "signatoryEmail" TEXT NOT NULL,
  "cpaProtected" BOOLEAN NOT NULL DEFAULT true,
  "serviceSelection" TEXT NOT NULL DEFAULT '',
  "previewToken" TEXT NOT NULL,
  "packageHtmlSnapshot" TEXT,
  "emailStatus" TEXT NOT NULL DEFAULT 'pending',
  "emailError" TEXT,
  CONSTRAINT "OnboardingSubmission_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "OnboardingSubmission_previewToken_key"
  ON "OnboardingSubmission"("previewToken");
CREATE INDEX IF NOT EXISTS "OnboardingSubmission_createdAt_idx"
  ON "OnboardingSubmission"("createdAt");
CREATE INDEX IF NOT EXISTS "OnboardingSubmission_status_idx"
  ON "OnboardingSubmission"("status");
CREATE INDEX IF NOT EXISTS "OnboardingSubmission_signatoryEmail_idx"
  ON "OnboardingSubmission"("signatoryEmail");
CREATE INDEX IF NOT EXISTS "OnboardingSubmission_entityName_idx"
  ON "OnboardingSubmission"("entityName");
