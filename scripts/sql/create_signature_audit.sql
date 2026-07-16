-- Phase 3: signature audit + PDF fields on OnboardingSubmission
-- Or: npx prisma db push

ALTER TABLE "OnboardingSubmission"
  ADD COLUMN IF NOT EXISTS "signatureMode" TEXT,
  ADD COLUMN IF NOT EXISTS "signedAt" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "pdfUrl" TEXT,
  ADD COLUMN IF NOT EXISTS "pdfStorageKey" TEXT;

CREATE TABLE IF NOT EXISTS "SignatureAuditEvent" (
  "id" TEXT NOT NULL,
  "submissionId" TEXT NOT NULL,
  "signedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "ipAddress" TEXT,
  "userAgent" TEXT,
  "typedName" TEXT NOT NULL,
  "documentSha256" TEXT NOT NULL,
  "checkboxFlags" JSONB NOT NULL,
  "tokenUsed" TEXT NOT NULL,
  "event" TEXT NOT NULL DEFAULT 'signed',
  "provider" TEXT NOT NULL DEFAULT 'clickwrap_fallback',
  CONSTRAINT "SignatureAuditEvent_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "SignatureAuditEvent_submissionId_idx"
  ON "SignatureAuditEvent"("submissionId");
CREATE INDEX IF NOT EXISTS "SignatureAuditEvent_signedAt_idx"
  ON "SignatureAuditEvent"("signedAt");
CREATE INDEX IF NOT EXISTS "SignatureAuditEvent_documentSha256_idx"
  ON "SignatureAuditEvent"("documentSha256");

DO $$ BEGIN
  ALTER TABLE "SignatureAuditEvent"
    ADD CONSTRAINT "SignatureAuditEvent_submissionId_fkey"
    FOREIGN KEY ("submissionId") REFERENCES "OnboardingSubmission"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;
