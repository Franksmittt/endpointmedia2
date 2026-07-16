# Task 2 — CSP Commerce Hardening (Paystack)

**Status:** DONE (Path A — allowlist)  
**Branch:** `cursor/perfect-10-ci-gate-a15d` (PR #13)  
**Perfect-10:** Not complete — CSP commerce fix only.

## Phase 0 — Evidence

### CSP source
- **Only header source:** `next.config.mjs` → `headers()` → `Content-Security-Policy` on `/:path*`
- Live `/store` (pre-fix) confirmed same policy: Paystack hosts **absent** from `script-src` / `connect-src` / `frame-src`

### Paystack usage in repo

| Surface | Mechanism | Browser CSP impact |
|---------|-----------|-------------------|
| `/store` → `PaystackCheckout` | Client `react-paystack` → `@paystack/inline-js` popup/iframe | **High** — needs script/connect/frame |
| `/onboarding/status/...` → `PaystackPayButton` | `POST /api/.../paystack/initialize` then `window.location` to `authorizationUrl` | **Low** — server talks to `api.paystack.co`; browser leaves origin |
| `/api/webhook/paystack` | Server-only webhook verify | **None** (CSP is browser) |

### Hosts needed (production; staging/beta/legacy omitted)

From `node_modules/@paystack/inline-js` string literals + classic Inline docs (`js.paystack.co/v1|v2/inline.js`):

| Host | Directives | Why |
|------|------------|-----|
| `js.paystack.co` | `script-src`, `frame-src` | Classic Paystack Inline / popup script + possible frames |
| `checkout.paystack.com` | `script-src`, `connect-src`, `frame-src`, `form-action` | Primary checkout iframe; vendor scripts (e.g. pusher); XHR; form/3DS |
| `checkout-studio.paystack.com` | `script-src`, `connect-src`, `frame-src` | Newer checkout-studio UI + vendor scripts |
| `standard.paystack.co` | `connect-src`, `frame-src`, `form-action` | Standard/popup checkout surface |
| `api.paystack.co` | `connect-src` | Transaction API from Inline / verify paths |
| `studio-api.paystack.co` | `connect-src` | Checkout-studio API |

**Already covered:** `img-src ... https:` (card brand images).  
**Not added:** `beta.paystack.com`, `legacy-staging.paystack.co`, `developers.paystack.co`, bare `https:` wildcards, `unsafe-eval`.

### Path choice
**A — CSP allowlist** (preferred). Fallback B (redirect-only / route-scoped CSP) not required: store Inline stays; onboarding already redirects.

---

## Before → after (hosts only)

### Before (`script-src` / `connect-src` / `frame-src` / `form-action`)

```
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com
connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://vitals.vercel-insights.com
frame-src 'self' https://www.google.com
form-action 'self'
```

### After (Paystack hosts added; gtag/vitals retained; no `unsafe-eval`)

```
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://js.paystack.co https://checkout.paystack.com https://checkout-studio.paystack.com
connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://vitals.vercel-insights.com https://api.paystack.co https://checkout.paystack.com https://standard.paystack.co https://checkout-studio.paystack.com https://studio-api.paystack.co
frame-src 'self' https://www.google.com https://checkout.paystack.com https://standard.paystack.co https://checkout-studio.paystack.com https://js.paystack.co
form-action 'self' https://checkout.paystack.com https://standard.paystack.co
```

HSTS, XFO, nosniff, Referrer-Policy, Permissions-Policy, COOP unchanged.

---

## Manual browser test checklist (post-deploy)

1. Open `https://www.endpointmedia.co.za/store` (or preview URL after deploy).
2. DevTools → Console → filter `CSP` / `Content-Security-Policy`.
3. Enter email + click **Purchase Now** (test key if configured).
4. Confirm: no CSP violations for `js.paystack.co`, `checkout.paystack.com`, `api.paystack.co`, or frames.
5. Optional: onboarding status page → **Pay with Paystack** still redirects to Paystack hosted checkout.
6. Confirm gtag still loads (no new blocks on `googletagmanager.com`).

**Local note:** This environment cannot complete a real Paystack popup with keys; verification is config + lint/typecheck + CSP header inspection after deploy.

---

## Verify commands

```bash
npm run lint
npm run typecheck
# After deploy / preview:
curl -sSI "$BASE/store" | tr ';' '\n' | grep -E 'script-src|connect-src|frame-src|form-action'
```
