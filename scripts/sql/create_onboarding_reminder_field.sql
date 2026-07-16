-- Phase 5: payment reminder throttle
ALTER TABLE "OnboardingSubmission"
  ADD COLUMN IF NOT EXISTS "lastReminderAt" TIMESTAMP(3);

CREATE INDEX IF NOT EXISTS "OnboardingSubmission_lastReminderAt_idx"
  ON "OnboardingSubmission"("lastReminderAt");
