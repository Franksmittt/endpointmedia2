# Endpoint Media — Client Onboarding & Contracts

**Status:** Phase 5 complete (handoff pack + payment reminders + soft-launch checklist)  
**Domain:** https://www.endpointmedia.co.za  
**Route:** `/onboarding` (invite-only, noindex; chrome-free; no marketing nav)

> All contract text under `src/content/legal/` is **DRAFT — REQUIRES SA ATTORNEY REVIEW**.  
> Nothing here is attorney-approved. Do not present as final legal advice.

---

## Commercial rules (hard)

| Rule | Implementation note |
|------|---------------------|
| Not VAT-registered | Never use “Tax Invoice”; never add VAT lines |
| Invoice wording | “Amount Due (VAT not applicable – vendor not registered).” |
| Pricing | Flat ZAR amounts only |
| Initial Term | **3 months** (onboarding / learning / optimisation) |
| Renewal Term | Successive **6-month** periods |
| Early cancellation | Waived setup/strategy fee clawback + notice-period fees (CPA-safe). **Not** “100% of all remaining fees” as the only model |
| Performance | ROI / leads / ROAS / rankings **never guaranteed** |
| Ad spend | Paid by client **directly** to Google / Meta |
| Condition precedent | No work / no access until **digitally signed AND first invoice paid** |
| CPA dual track | Capture turnover/assets **above or below R2m**; if unknown → treat as CPA-protected |

---

## Phases 1–5

### Phase 1 — Foundations
- Folder structure + legal markdown drafts
- TypeScript types + contract status enum
- `/onboarding` multi-step form UI shell
- Digital signature architecture documented (interfaces only)

### Phase 2 — Form completion + persistence
- Zod shared schema + per-step Continue gates
- Prisma `OnboardingSubmission` + `ContractStatus` enum
- Resend notify + HTML preview scaffolding
- Fee defaults: clawback **7500** / retainer **5000** / notice **20** business days

### Phase 3 — Clickwrap + audit + PDF (Option A)
- `/onboarding/sign/[id]?token=` clickwrap UI + PDF + audit trail
- Status after sign: **`awaiting_payment`**
- `ESignProvider` kept for future PandaDoc — **not wired**

### Phase 4 — Payment gate + activation
- First invoice email on `awaiting_payment` (idempotent `invoiceEmailedAt`)
- **First invoice = first month retainer only** (default R5,000). Setup fee stays **waived** unless early-cancel clawback.
- Manual **EFT** primary (bank env vars). Optional **Paystack** only if both keys set.
- Admin mark-paid → `active`: `/onboarding/admin` + `POST .../activate`
- Client status: `/onboarding/status/[id]?token=`
- Suspend stub: `POST .../suspend`

### Phase 5 — Polish / soft-launch *(current)*
- Attorney handoff ZIP: `GET /api/onboarding/[id]/handoff` (admin Bearer) + admin “Handoff pack” button
- Payment reminders: `npm run onboarding:remind-payments` + optional cron `GET /api/cron/onboarding-payment-reminders` (`CRON_SECRET`)
- Throttle via `lastReminderAt`; interval `ONBOARDING_PAYMENT_REMINDER_DAYS` (default 3)
- Soft-launch checklist: `ONBOARDING_SOFT_LAUNCH.md`
- Health: `GET /api/onboarding/health` (admin Bearer) → `{ ok, missingEnv }` (no secret values)
- DRAFT banners until `ONBOARDING_ATTORNEY_CLEARED=true` (default OFF)

---

## Route & stack decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Route | `/onboarding` | Clear, not hung on stub Enigma auth |
| Chrome | Excluded via `SiteChrome` (like `/enigma`) | Focused legal/onboarding UX |
| Style | Contact/pricing zinc/black system | Trust/legal surface, not Enigma glass |
| Content | `src/content/legal/*.md` | Editable drafts, not buried in JSX |
| Types/store | `src/lib/onboarding/` | Matches existing `src/lib/*` conventions |
| Persistence | Prisma `OnboardingSubmission` | Matches ContactLead conventions |
| Preview auth | `CONTACT_ADMIN_SECRET` Bearer **or** `previewToken` query | Simplest secure dual path |
| PDF | playwright-core + `@sparticuz/chromium-min` | Same as vicious-audit export |
| PDF storage | Vercel Blob **or** local `.data/onboarding-pdfs` | Blob preferred in production |
| Email | Resend (+ PDF attachment when available) | Same contact env vars |
| E-sign now | **Clickwrap** (`clickwrap_fallback`) | Option A |
| Payment | Manual EFT primary; Paystack optional | Hide Paystack UI if keys absent |
| First invoice | Month-1 retainer only (not setup) | Setup remains waived-unless-early-cancel |

---

## Folder map

```
ONBOARDING.md                          ← this file
src/content/legal/
  msa-draft.md
  sow-google-ads-draft.md
  sow-website-draft.md
  key-commercial-terms-draft.md
  popia-operator-annex-draft.md
src/lib/onboarding/
  types, status, schema, fees, store, email, package-html
  auth, pdf, clickwrap, signature (ESignProvider for Option B)
src/app/onboarding/                    ← form + documents
src/app/onboarding/sign/[id]/          ← clickwrap + success
src/app/onboarding/status/[id]/        ← payment instructions / status
src/app/onboarding/admin/              ← mark paid / suspend (server actions)
src/app/api/onboarding/…               ← submit / sign / pdf / activate / suspend / handoff / health / paystack
src/app/api/cron/onboarding-payment-reminders/
ONBOARDING_SOFT_LAUNCH.md
scripts/onboarding-remind-payments.ts
scripts/sql/create_onboarding_*.sql
vercel.json                            ← daily cron for payment reminders
```

### Auth & payment curl

```
# Preview / PDF
GET /api/onboarding/{id}/preview?token={previewToken}
GET /api/onboarding/{id}/pdf?token={previewToken}

# Attorney handoff ZIP (admin only)
curl -L "$BASE/api/onboarding/{id}/handoff" \
  -H "Authorization: Bearer $CONTACT_ADMIN_SECRET" \
  -o handoff.zip

# Env health (admin only — no secrets in response)
curl -sS "$BASE/api/onboarding/health" \
  -H "Authorization: Bearer $CONTACT_ADMIN_SECRET"

# Mark EFT paid → active
curl -X POST "$BASE/api/onboarding/{id}/activate" \
  -H "Authorization: Bearer $CONTACT_ADMIN_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"method":"eft","amountZar":5000,"note":"EFT cleared"}'

# Suspend
curl -X POST "$BASE/api/onboarding/{id}/suspend" \
  -H "Authorization: Bearer $CONTACT_ADMIN_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"reason":"Non-payment"}'

# Payment reminders (CLI)
npm run onboarding:remind-payments -- --dry-run
npm run onboarding:remind-payments

# Payment reminders (cron)
curl -sS "$BASE/api/cron/onboarding-payment-reminders" \
  -H "Authorization: Bearer $CRON_SECRET"
```

**EFT reference format:** `{ONBOARDING_PAYMENT_REFERENCE_PREFIX}` + last 8 chars of submission id  
Example prefix `EM` → `EMAB12CD34`

### First invoice policy

| Item | Billed on first invoice? |
|------|--------------------------|
| Monthly retainer (default R5,000) | **Yes** |
| Setup / strategy fee (default clawback R7,500) | **No** — waived unless early cancel |

Every invoice/email includes: **Amount Due (VAT not applicable – vendor not registered)**  
Never use the words “Tax Invoice”.

---

## Contract status machine

```
form submit → awaiting_signature
clickwrap sign → awaiting_payment   (+ invoice email once)
EFT admin mark-paid / Paystack webhook → active
→ suspended                         (admin)
```

**Condition precedent:** status must be `active` before Endpoint Media grants access or starts paid work.

---

## Digital signature architecture

### Phase 3A — PDF generation
1. Merge form data into MSA + selected SoW(s) + Key Commercial Terms (+ POPIA annex).
2. Render HTML templates → PDF via existing Chromium stack  
   (`src/app/api/vicious-audit/export-pdf/route.ts` pattern).
3. Store PDF (Vercel Blob or DB bytea) keyed by `submissionId`.
4. Transition status: `draft` → `awaiting_signature`.

### Phase 3B — Preferred provider integration
Implement behind `ESignProvider` interface (`src/lib/onboarding/signature.ts`):

| Provider | Notes |
|----------|--------|
| **PandaDoc** | **First choice** (Frank) — templates + pricing tables |
| **DocuSign** | Swap-friendly alternative |
| **SigniFlow** | SA-oriented alternative |

Flow: create envelope → send to signatory email → webhook → mark `signed` → issue invoice → `awaiting_payment`.

**Do not implement provider APIs until keys exist in Vercel env.**

### Phase 3C — Fallback (no provider keys)
Clickwrap package:
1. Display final PDF / HTML package
2. Mandatory checkboxes (term, cancellation, no ROI, POPIA, start-after-sign-and-pay)
3. Typed full legal name + optional drawn signature (canvas)
4. Capture: IP, user-agent, timestamp (UTC+SAST), document hash (SHA-256)
5. Persist audit log row; email PDF to both parties via Resend
6. Status → `signed`

Electronic signature acknowledgement language is already in the MSA draft (ECTA-oriented, SA).

---

## Invoice wording (non-VAT)

Every invoice / quote / payment request must use language equivalent to:

> **Amount Due (VAT not applicable – vendor not registered).**

Never label documents “Tax Invoice.” Never add VAT % or VAT amount lines.

---

## Phase 5 usage notes

| Item | Detail |
|------|--------|
| Handoff ZIP contents | `README.txt`, `package.html`, `signature-audit.json`, `submission-form.json` (password-like keys redacted), `signed.pdf` when stored |
| Reminder trigger | `status=awaiting_payment` and `invoiceEmailedAt` older than N days; throttle with `lastReminderAt` |
| Reminder copy | Bank details + payment reference + non-VAT line + status link; notifies signatory + CONTACT_TO/CC |
| DRAFT banners | Kept until `ONBOARDING_ATTORNEY_CLEARED` is explicitly true |
| Soft-launch | See `ONBOARDING_SOFT_LAUNCH.md` — no marketing nav until checklist passes |

## After soft-launch (optional later)

```
Optional follow-ups (not Phase 5):
1) Wire PandaDoc ESignProvider behind existing interface (keep clickwrap fallback).
2) Add marketing nav only after soft-launch checklist + attorney clearance.
```
