-- Phase 4: invoice / payment fields on OnboardingSubmission
-- Or: npx prisma db push

ALTER TABLE "OnboardingSubmission"
  ADD COLUMN IF NOT EXISTS "invoiceAmountZar" INTEGER,
  ADD COLUMN IF NOT EXISTS "paymentReference" TEXT,
  ADD COLUMN IF NOT EXISTS "invoiceEmailedAt" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "paidAt" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "paymentMethod" TEXT,
  ADD COLUMN IF NOT EXISTS "paymentAmountZar" INTEGER,
  ADD COLUMN IF NOT EXISTS "paymentNote" TEXT,
  ADD COLUMN IF NOT EXISTS "paystackReference" TEXT,
  ADD COLUMN IF NOT EXISTS "suspendedAt" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "suspendReason" TEXT;

CREATE INDEX IF NOT EXISTS "OnboardingSubmission_paymentReference_idx"
  ON "OnboardingSubmission"("paymentReference");
CREATE INDEX IF NOT EXISTS "OnboardingSubmission_paystackReference_idx"
  ON "OnboardingSubmission"("paystackReference");
