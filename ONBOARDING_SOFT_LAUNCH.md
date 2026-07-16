# Onboarding soft-launch checklist

Invite-only path. Do **not** add marketing nav until this list is complete. Keep `/onboarding/*` noindex.

## Environment

- [ ] `DATABASE_URL` (+ `DIRECT_URL` if used for migrations)
- [ ] `RESEND_API_KEY` + `RESEND_FROM_EMAIL` (verified domain in prod)
- [ ] `CONTACT_TO_EMAIL` (+ optional `CONTACT_CC_EMAIL` / `CONTACT_NOTIFY_EMAILS`)
- [ ] `CONTACT_ADMIN_SECRET`
- [ ] `NEXT_PUBLIC_BASE_URL`
- [ ] Bank fields: `ONBOARDING_BANK_NAME`, `ONBOARDING_BANK_ACCOUNT_NAME`, `ONBOARDING_BANK_ACCOUNT_NUMBER`, `ONBOARDING_BANK_BRANCH_CODE`
- [ ] `ONBOARDING_PAYMENT_REFERENCE_PREFIX` (default `EM`)
- [ ] `BLOB_READ_WRITE_TOKEN` for production PDF storage
- [ ] `ONBOARDING_PAYMENT_REMINDER_DAYS` (optional; default `3`)
- [ ] `CRON_SECRET` if using Vercel cron reminders
- [ ] `ONBOARDING_ATTORNEY_CLEARED` **unset / false** until counsel clears drafts

Verify without leaking secrets:

```bash
curl -sS "$BASE/api/onboarding/health" \
  -H "Authorization: Bearer $CONTACT_ADMIN_SECRET"
```

Expect `{ "ok": true, "missingEnv": [], "dbOk": true }`.

## Database

- [ ] `npx prisma db push` **or** apply SQL under `scripts/sql/` (submission, signature audit, payment fields, reminder field)
- [ ] `npx prisma generate` (runs on `postinstall`)

## End-to-end test path

- [ ] Submit `/onboarding` → status `awaiting_signature`
- [ ] Sign via `/onboarding/sign/[id]?token=` → `awaiting_payment`
- [ ] First invoice email received (non-VAT wording; never “Tax Invoice”)
- [ ] Status page shows bank details + reference
- [ ] Admin mark paid on `/onboarding/admin` → `active`
- [ ] Handoff pack downloads from admin (“Handoff pack”) or:

```bash
curl -L "$BASE/api/onboarding/{id}/handoff" \
  -H "Authorization: Bearer $CONTACT_ADMIN_SECRET" \
  -o handoff.zip
```

## Payment reminders

- [ ] Dry-run: `npm run onboarding:remind-payments -- --dry-run`
- [ ] Optional cron: `GET /api/cron/onboarding-payment-reminders` with `Authorization: Bearer $CRON_SECRET`
- [ ] Confirm `lastReminderAt` set and no duplicate send within N days

## Soft-launch hygiene

- [ ] `robots` / noindex confirmed on `/onboarding`, `/onboarding/sign/*`, `/onboarding/status/*`, `/onboarding/admin`, `/onboarding/documents`
- [ ] No marketing nav link to onboarding
- [ ] Site chrome hidden on `/onboarding/*` (same as Enigma)
- [ ] DRAFT banners still on until attorney clears (`ONBOARDING_ATTORNEY_CLEARED` default OFF)
- [ ] SA attorney review of `src/content/legal/*.md` before first real client
- [ ] Only then consider setting `ONBOARDING_ATTORNEY_CLEARED=true` and inviting a real client

## Ready for attorney / first invite

1. Health endpoint green  
2. Test path signed → invoiced → marked paid → active  
3. Handoff ZIP contains PDF (if stored), HTML, audit JSON, form JSON, README  
4. Attorney reviews legal drafts + handoff pack  
5. Keep DRAFT banners until clearance env flag is set  
6. Invite first real client via private link (still no marketing nav)
