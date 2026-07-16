# Endpoint Media — Perfect-10 Hostile Intake Audit (READ-ONLY)

**STATUS:** DONE  
**Date:** 2026-07-16  
**Live site:** https://www.endpointmedia.co.za/  
**Repo:** `/workspace` (Franksmittt/endpointmedia2)  
**Scope:** Audit only. No product refactors. No UI redesign. No commit/push.  
**Success definition (later rollout):** Perfect-10 controllable engineering + GEO + discoverability + trust + operate — **not** purchased #1 rankings.

---

## Executive verdict

| Metric | Result |
|--------|--------|
| **Overall score** | **5.4 / 10** |
| **Perfect-10 ready?** | **NO** |
| **Fork recommendation** | **both** (marketing core + commerce `/store` + SaaS-adjacent audit/onboarding/factory) |

This site is **technically ambitious** (Next.js 16 RSC pages, bot proxy, schema graph, llms.txt, IndexNow scripts, Paystack store) but **not operate-ready** and has several **honesty / trust / conversion killers** that will poison a Perfect-10 rollout if ignored: homepage FAQ schema without visible FAQ, missing street NAP + Alberton vs Johannesburg conflict, empty Ads conversion labels in env template, CSP that does not allow Paystack scripts, no CI, and zero Perfect-10 operate artifacts (scorecard, entity log, incident, 90-day, brand DNA).

---

## SECTION 1 — PROJECT SNAPSHOT

### 1. Framework + versions
| Item | Evidence |
|------|----------|
| Next.js | `16.1.1` — `package.json` |
| React | `^19` — `package.json` |
| Tailwind | `^3.4.1` — `package.json` |
| TypeScript | `^5` — `package.json` |
| Prisma | `^6.9.0` — `package.json` |
| Node | Runtime observed in audit env `v22.14.0`; **no `engines` field** in `package.json` (UNKNOWN for Vercel project setting) |
| ESLint | `eslint-config-next` `16.1.1` |

### 2. Hosting target
- **Vercel** — live response `server: Vercel`, `x-vercel-cache: PRERENDER` on `/`
- Config: `vercel.json` (cron only: `/api/cron/onboarding-payment-reminders`)
- Also: `next.config.mjs` redirects/headers/images

### 3. Canonical production domain
- Canonical base: `https://www.endpointmedia.co.za` — `src/app/layout.tsx` `metadataBase`, `src/lib/seo.ts` `BASE_URL`
- Apex → www: `next.config.mjs` redirect `endpointmedia.co.za` → www (live: HTTP 307 to www)
- Live homepage canonical: `https://www.endpointmedia.co.za`

### 4. Marketing-only vs hybrid
**Hybrid.** Marketing site + commerce + SaaS-adjacent tooling in one repo:
- Marketing: services, locations, industries, blog, case studies, pricing, contact
- Commerce: `/store` + Paystack (`src/components/store/PaystackCheckout.tsx`)
- Product: vicious-audit API, Enigma, Google Ads CSV factory bridge (`FASTAPI_SERVICE_URL`), invite-only `/onboarding` contracts
- Infra: Prisma Postgres, Redis/BullMQ, Resend, Vercel Blob

### 5. Positioning
- **Local + remote-first:** Johannesburg / Gauteng service businesses; footer “Johannesburg · South Africa” + “Remote-first”
- Conflict: `public/humans.txt` says **Alberton**; schema/footer say **Johannesburg** — unresolved owner fact

### 6. Primary MONEY URLs (high-intent) — top list
1. `/` — hero audit + agency pitch  
2. `/services/google-ads`  
3. `/pricing`  
4. `/store`  
5. `/services/website-design-prices`  
6. `/services/website-development`  
7. `/services/local-seo`  
8. `/services/b2b-google-ads-management`  
9. `/services/algorithmic-google-ads-trading`  
10. `/contact`  
11. `/case-studies`  
12. `/services/google-ads-pricing`  
13. `/industries/manufacturing-logistics`  
14. `/locations/sandton` (and Meyersdal / New Redruth cluster)  
15. `/compare/google-ads-flat-fee-vs-percentage-spend`

### 7. Route tree summary
```
/                         home (money)
/services[/…]             hub + ~30 service money/support pages
/locations[/…]            hub + 12 suburb pages
/industries[/…]           hub + 5 verticals
/case-studies[/…]         hub + 9 studies
/blog[/…]                 editorial
/insights/…               CPC benchmarks
/compare/…                commercial comparison
/pricing /process /store  commercial
/contact                  conversion
/about/author/frank-smit  E-E-A-T (NO /about hub — 404)
/privacy-policy /terms-of-service
/alberton-business-heritage
/enigma                   noindex app surface (still in main nav)
/onboarding/*             noindex invite-only contracts
/report/[id]              noindex
/api/*                    disallowed in robots
```

### 8. CI present?
**NO.** `.github/` directory **missing**. No GitHub Actions workflows.  
Local/manual SEO scripts exist (`npm run seo:validate`, `seo:graph`, `seo:check`, IndexNow) — not gated in CI.

### 9. Perfect-10 / EndpointGM docs already present?
| Artifact | Present? |
|----------|----------|
| Perfect-10 scorecard | **NO** (this audit creates the first) |
| Brand DNA intake | **NO** |
| Entity verification log | **NO** |
| AI red-team doc | **NO** |
| Incident runbook | **NO** |
| 90-day post-launch plan | **NO** (pricing copy mentions “90-day build” as product, not operate plan) |
| Content-moat SERP worksheets | **NO** |
| Adjacent audit dumps | YES (stale/ad-hoc): `market-dominance-audit.txt`, `gsc_flawless_audit_report.txt`, `LIGHTHOUSE_*.md`, `PROJECT_SUMMARY.txt` — **not** Perfect-10 operate pack |

### 10. CMS / blog / forms / CRM / analytics / chat
| System | Finding |
|--------|---------|
| CMS | **None** — MDX/TS blog in repo (`src/lib/blog/`) |
| Blog | Yes — App Router `/blog` |
| Forms | Contact + Audit → `POST /api/contact` (Resend + Prisma `ContactLead`) |
| CRM | **No** integrated CRM; blog/copy mention Pipedrive/HubSpot as *client* integrations |
| Analytics | GA4 + Google Ads gtag (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`) |
| Chat widgets | **None found** |
| Web Vitals | `src/components/analytics/web-vitals.tsx` + Vercel insights CSP allow |

### 11. Env var NAMES ONLY (relevant)
From `.env.example` + code usage:
- SEO/site: `NEXT_PUBLIC_BASE_URL`, `GOOGLE_SITE_VERIFICATION`, `INDEXNOW_KEY`, `INDEXNOW_SECRET`, `CRON_SECRET`, `LLMS_FULL_TOKEN_LIMIT`
- Analytics/Ads: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`, `NEXT_PUBLIC_CONVERSION_LABEL_FORM`, `NEXT_PUBLIC_CONVERSION_LABEL_AUDIT`, `NEXT_PUBLIC_CONVERSION_LABEL_PHONE`, `NEXT_PUBLIC_CONVERSION_LABEL_WHATSAPP`
- Forms/email: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_TO_EMAIL`, `CONTACT_CC_EMAIL`, `CONTACT_NOTIFY_EMAILS`, `CONTACT_ADMIN_SECRET`
- Proxy/AEO render: `BROWSER_RENDERING_ENDPOINT`, `CLOUDFLARE_BROWSER_RENDERING_ENDPOINT`, `BROWSER_RENDERING_TOKEN`, `CLOUDFLARE_BROWSER_RENDERING_TOKEN`, `AUDIT_ENABLE_PLAYWRIGHT`
- Data/auth-ish: `DATABASE_URL`, `DIRECT_URL`, `REDIS_URL`, `AUDITOR_UNLOCK_TOKEN`, `AUDITOR_UNLOCK_AMOUNT_CENTS`, `FACTORY_ADMIN_SECRET`, `INTERNAL_API_KEY`, `FASTAPI_SERVICE_URL`
- Commerce/onboarding: `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`, `PAYSTACK_SECRET_KEY`, `BLOB_READ_WRITE_TOKEN`, `ONBOARDING_*`
- SEO tooling: `GOOGLE_APPLICATION_CREDENTIALS`, `SEO_BASE_URL` (`.env.seo.example`)
- CMS: **none**

### 12. Font strategy
- `next/font/google`: **Inter** + **Geist_Mono** — `src/app/layout.tsx`
- Tailwind maps `sans`/`heading` → Inter — `tailwind.config.ts`
- Local `public/fonts/Geist*.woff` present; globals comment says `@font-face` removed
- **Verdict:** Controllable next/font ✓ — but **Inter is generic SaaS default** (Design DNA fail risk)

### 13. Image strategy
- `next/image` used in legacy sections (`Hero.tsx`, `Proof.tsx`, `Solution.tsx`) — homepage live hero is **canvas client** (`AgencyHeroSection` + `ParticleNetworkCanvas`), not optimized photo hero
- Formats: webp/avif in `next.config.mjs`
- Large unused asset: `public/images/Gemini_Generated_Image.png` (~1.1MB) — no `src` reference found
- No raw `<img` in `src/` (PASS for pattern)

### 14. Security headers / CSP / HSTS / middleware
| Control | Status | Evidence |
|---------|--------|----------|
| HSTS | PASS (live) | `max-age=63072000; includeSubDomains; preload` |
| CSP | PARTIAL | Present; `'unsafe-inline'` scripts; **Paystack domains not allowlisted** |
| XFO / nosniff / Referrer / Permissions | PASS | `next.config.mjs` + live |
| Middleware | N/A name | Uses Next 16 **`src/proxy.ts`** (bot verify, JA4 block, crawl traps 410, tracking strip, spellcheck redirects, optional browser render for AI agents) |
| poweredByHeader | PASS | `false` |

### 15. robots / sitemap / llms / security.txt / manifest
| Surface | Status |
|---------|--------|
| `src/app/robots.ts` | Live OK; Sitemap line includes sitemap.xml **plus** llms.txt + 2 KML files (anti-pattern / PARTIAL) |
| `src/app/sitemap.ts` | Live ~104 `<loc>`; money routes covered; onboarding/enigma/report excluded |
| `public/llms.txt` + `llms-full.txt` | Present; compiled via `b2a:compile` / `prebuild` |
| `security.txt` | **FAIL** — live `/.well-known/security.txt` → **404** |
| `src/app/manifest.ts` | Present (`/manifest.webmanifest`) |
| `public/humans.txt` | Present (Alberton location conflict) |

---

## SECTION 2 — SCORE TABLE

Counts are judgment against Perfect-10 controllable criteria (PASS / FAIL / PARTIAL / UNKNOWN / N/A). Hostile scoring: partials do not inflate.

| Category | Score /10 | PASS | FAIL | PARTIAL | UNKNOWN | N/A |
|----------|-----------|------|------|---------|---------|-----|
| Engineering | **6.5** | 8 | 4 | 5 | 2 | 1 |
| Content / GEO | **5.0** | 4 | 6 | 5 | 2 | 0 |
| Discoverability | **6.5** | 6 | 3 | 4 | 2 | 0 |
| Design / Brand | **4.5** | 2 | 3 | 4 | 2 | 0 |
| Trust / Conv / A11y | **5.0** | 4 | 5 | 4 | 3 | 0 |
| Operate / Perfect-10 | **1.5** | 1 | 9 | 1 | 0 | 0 |

**Overall /10: 5.4**  
**Perfect-10 ready?: NO**

### Top 10 FAIL items (impact order)
1. **No Perfect-10 operate system** — no weekly scorecard, synthetic monitoring, visual baselines, incident runbook, entity log, brand DNA, 90-day plan, red-team.
2. **Homepage FAQPage schema without visible FAQ UI** — `src/app/page.tsx` emits FAQ JSON-LD; questions absent from visible HTML (live check 2026-07-16). Spam / honesty risk.
3. **Google Ads conversion labels empty in env contract** — `.env.example` leaves `NEXT_PUBLIC_CONVERSION_LABEL_*` blank; Ads attribution can show 0 conversions even when forms work.
4. **NAP / entity hardness incomplete** — no `streetAddress`; Johannesburg vs Alberton (`humans.txt`) conflict; phone format differs Contact schema `+27769724559` vs org `+27-76-972-4559`.
5. **CSP blocks Paystack commerce scripts** — `script-src` lacks Paystack hosts while `/store` loads `react-paystack` (checkout brittle/broken under strict CSP).
6. **No CI** — zero GitHub Actions; lint/seo/a11y/Lighthouse not gated.
7. **Thin geo / doorway risk** — e.g. `/services/google-ads-sandton` ~271 words vs hub; many location×service combinations risk cannibalization.
8. **Missing `/about` hub** — live `/about` → 404; only founder page exists (E-E-A-T gap).
9. **AI robots omit `/store`** — `AI_ALLOW` in `robots.ts` does not include `/store` (money URL).
10. **Homepage performance debt** — full client hero + particle canvas + ~133KB HTML; Lighthouse **BLOCKED** in this audit environment (see §6).

### Top 5 quick wins (LIST ONLY — do not implement)
1. Remove or mirror homepage FAQ schema with a real visible FAQ section.
2. Set Ads conversion labels in Vercel + verify gtag conversion events.
3. Fix NAP: one locality story (Alberton **or** Johannesburg) + street if real; align schema/footer/humans.
4. Allowlist Paystack in CSP **or** move checkout to server redirect flow.
5. Add `/about` hub (or 301 `/about` → founder) + drop Enigma from marketing nav (keep route noindex).

---

## SECTION 3 — ROUTE + INTENT MAP

| Path | pageRole guess | intent | RSC or client? | schema types | in sitemap? | notes |
|------|----------------|--------|----------------|--------------|-------------|-------|
| `/` | money hub | commercial / brand | RSC page + **client hero island** | Organization, LocalBusiness, WebSite, WebPage, FAQPage, Breadcrumb | YES | FAQ schema not visible; heavy canvas |
| `/services/google-ads` | money | transactional | RSC (+ islands) | Service, FAQPage (+ related) | YES | Strong money page; visible FAQ |
| `/pricing` | money | commercial | RSC | WebPage/speakable (+ offers in UI) | YES | Transparent ZAR packages |
| `/store` | money / commerce | transactional | RSC + client Paystack | UNKNOWN/PARTIAL per product | YES | CSP risk; **not** in AI robots allow |
| `/contact` | conversion | transactional | RSC + client form | ContactPage, Organization | YES | NAP incomplete |
| `/services/website-design-prices` | money | commercial | RSC | speakable WebPage (layout) | YES | Pricing methodology |
| `/services/website-development` | money | transactional | RSC | Service | YES | Core offer |
| `/services/local-seo` | money | transactional | RSC | Service | YES | GBP/local |
| `/case-studies` | proof hub | commercial | RSC | PARTIAL | YES | Strong trust path |
| `/locations/sandton` | geo money | local | RSC | LocalBusiness variant | YES | Medium length |
| `/services/google-ads-sandton` | geo×service | local transactional | RSC | Service | YES | **Thin (~271 words)** |
| `/industries/law-firms` | vertical | commercial | RSC | FAQ/Service pattern | YES | Vertical intent |
| `/blog` | support/editorial | informational | RSC | Article elsewhere | YES | File-based CMS |
| `/about/author/frank-smit` | E-E-A-T | informational | RSC | Person | YES | Only about surface |
| `/about` | — | — | — | — | NO | **404** |
| `/enigma` | app | utility | RSC | — | NO | **noindex but in main nav** |
| `/onboarding` | app | utility | RSC | — | NO | noindex invite-only — correct |
| `/privacy-policy` | legal | trust | RSC | — | YES | Present |
| `/terms-of-service` | legal | trust | RSC | — | YES | Present |

**Flags**
- Whole money **pages** are RSC; money **heroes/forms** often `'use client'` (acceptable islands; homepage island is heavy).
- Metadata/canonical: generally via `buildMetadata()` — PASS for major pages.
- Thin/duplicate: Google Ads suburb pages + location pages + industry×ads combos → **cannibalization risk**.
- Orphans: `/about` broken; industries not in main header (footer only — ≤3 clicks OK via footer); Enigma nav distracts.

---

## SECTION 4 — SCHEMA / ENTITY HARDNESS

### Where emitted
- Core graph: `src/lib/seo.ts` (`ORGANIZATION_SCHEMA`, `LOCAL_BUSINESS_SCHEMA`, `WEBSITE_SCHEMA`, `FRANK_SMIT_SCHEMA`, `ROOT_SCHEMA_NODES`)
- Homepage `@graph`: `src/app/page.tsx`
- Contact: `src/app/contact/page.tsx` (`ContactPage`)
- Services: per-page Service/FAQ (e.g. `src/app/services/google-ads/page.tsx`)
- Locations: `buildLocationLocalBusinessSchema` pattern

### `isAccessibleForFree`
**ABSENT** across repo (grep). N/A until paywalled content ships; not currently used.

### `sameAs` (Organization) — NOT EMPTY
From `src/lib/seo.ts`:
1. `https://www.facebook.com/people/Endpoint-Media/61583029051159/`
2. `https://www.linkedin.com/in/frank-smittt`
3. `https://www.google.com/maps?cid=06180556288562610524` (GBP CID)

Person `sameAs`: LinkedIn only.

### NAP consistency
| Field | Footer | Contact UI | Org schema | Contact schema | humans.txt |
|-------|--------|------------|------------|----------------|------------|
| Name | Endpoint Media | Endpoint Media | Endpoint Media | Endpoint Media | Frank Smit / Endpoint |
| Phone | 076 972 4559 / `+27769724559` | same | `+27-76-972-4559` | `+27769724559` | — |
| Email | hello@endpointmedia.co.za | same | same | same | same |
| Locality | Johannesburg | Johannesburg, Gauteng | Johannesburg / Gauteng / ZA | same | **Alberton** |
| Street | **missing** | **missing** | **missing** | **missing** | — |

### FAQ honesty
| Page | Schema FAQ | Visible FAQ |
|------|------------|-------------|
| `/` | YES | **NO** → **FAIL (padded/spam risk)** |
| `/services/google-ads` | YES | YES (`PageFaq`) → PASS |

### Fake/spammy schema risks
1. Homepage FAQPage without UI.  
2. Meyersdal & New Redruth both map Wikidata `Q3593815` (Alberton) — entity collision.  
3. LocalBusiness geo pinned to Johannesburg CBD coords without street → “nearby” hardness weak.  
4. Aggressive `knowsAbout` Wikidata graph — useful if true expertise; overclaim risk if pages thin.

---

## SECTION 5 — GEO / CONTENT QUALITY (HOME + MONEY)

### HOME `/`
| Check | Finding |
|-------|---------|
| H1 | “Web Design Johannesburg Built for Google, ChatGPT, and Qualified Leads.” |
| Title | “Premium Web Architecture Firm Johannesburg \| Market Domination Specialists” |
| Meta | Market-domination pitch (strong claim tone) |
| BLUF | PARTIAL — hero summary pitches audit tool more than offer clarity |
| Who/How/Why | Founder letter + methodology sections present |
| Moat asset | Case studies + founder letter; hero is **particle canvas** (not photo/process table) |
| CTA | Audit form + contact paths — works in code |
| Internal links | Strong service/pricing/case paths |

### `/services/google-ads`
| Check | Finding |
|-------|---------|
| H1 | “Turn wasted Google Ads spend into predictable booked work.” |
| Title | Google Ads Management Johannesburg \| Paid Search Sprints |
| BLUF | PASS — problem→outcome |
| Who/How/Why | Differentiators + 3-step process |
| Moat | Process + metrics claims (38% CPA / 4.3x ROAS) — **owner must prove** |
| CTA | Present |
| FAQ | Visible + schema aligned |

### `/pricing`
| Check | Finding |
|-------|---------|
| H1 | “Premium Investment. Maximum Return.” |
| BLUF | Transparent ZAR packages (R25k / R45k / R75k+) |
| Moat | Pricing tables (commercial clarity) |
| Risk | Claims like “LCP <1s, 100/100 Core Web Vitals” on packages are **self-owning** if CWV not proven |

### `/services/google-ads-sandton` (thin money)
| Check | Finding |
|-------|---------|
| ~271 words | FAIL / doorway risk |
| Intent overlap | Conflicts with `/locations/sandton` + `/services/google-ads` |

---

## SECTION 6 — PERFORMANCE / CWV EVIDENCE

### Lighthouse
**BLOCKED** in this audit environment: `npx lighthouse@11.6.0` against prod failed with DevTools protocol timeout (`Network.setUserAgentOverride`). No fabricated scores.

### Code / live inference
| Signal | Evidence |
|--------|----------|
| HTML weight home | ~132,677 bytes live |
| Prerender | `x-nextjs-prerender: 1`, `x-vercel-cache: PRERENDER` |
| Heavy client | `AgencyHeroSection` + `ParticleNetworkCanvas` (`'use client'`) |
| Third parties | gtag via `googletagmanager.com` (GA4 + Ads) |
| Image giants | Unused ~1.1MB Gemini PNG in `public/images/` |
| Docs | `LIGHTHOUSE_OPTIMIZATION_NOTES.md`, `LIGHTHOUSE_OPTIMIZATIONS.md` (historical notes, not CI) |

### Heavy third parties
- Google Tag (GA4 `G-SGFD6DFTRV`, Ads `AW-17744075656`)
- Optional Paystack (store/onboarding)
- Optional Cloudflare Browser Rendering for AI agents (`proxy.ts`)
- Vercel vitals endpoint allowlisted in CSP
- **No** chat widget / Meta pixel / Hotjar found

---

## SECTION 7 — DISCOVERABILITY OPS

| Item | Status |
|------|--------|
| robots Sitemap line | YES — but polluted with llms.txt + KML as “sitemaps” |
| llms.txt quality | GOOD outline of money URLs; incomplete vs full sitemap; omits NAP/sameAs; **omits many locations/case studies** |
| llms-full.txt | Short entity prose + URL index (not full corpus dump) |
| GSC evidence in repo | Scripts + historical reports (`seo:gsc:canonical`, `GSC_*.md/txt`); verification env `GOOGLE_SITE_VERIFICATION` |
| Bing / IndexNow | Code: `src/lib/indexnow.ts`, `src/app/api/indexnow/route.ts`, `npm run indexnow:ping` — **ops cadence UNKNOWN** |
| Request-indexing docs | Informal markdown dumps; no Perfect-10 post-launch pack |
| noindex on money pages | Money pages indexable; correct noindex on `/onboarding`, `/enigma`, `/report` |
| AI crawler allow miss | `/store` not in `AI_ALLOW` |

---

## SECTION 8 — TRUST + CONVERSION

| Item | Status |
|------|--------|
| About | **FAIL hub** — `/about` 404; founder page only |
| Contact | PASS page |
| Privacy / Terms | PASS |
| Forms | Resend + Prisma; inline success (no thank-you URL) — thank-you noindex N/A |
| Consent/cookies | **No banner found** — CLS risk low; POPIA disclosure depth UNKNOWN vs Privacy page |
| Ads conversions | Labels empty in `.env.example`; runtime uses empty-safe helpers — **attribution FAIL risk** |
| a11y | Skip link present; focus rings in header; **no axe CI**; marquee/animation motion risk UNKNOWN |
| Phone tracking | `TrackedTelLink` present (conversion plumbing) |

---

## SECTION 9 — OPERATE GAP LIST

| Artifact | Present? |
|----------|----------|
| Synthetic monitoring | **NO** |
| Visual regression baselines | **NO** |
| Weekly GSC/Bing scorecard | **NO** |
| Incident runbook | **NO** |
| Entity verification log | **NO** |
| Brand DNA intake | **NO** |
| Content-moat-SERP worksheets | **NO** |
| AI red-team doc | **NO** |
| Post-launch 90-day plan | **NO** |

(Only partial: local SEO Python/Node scripts — not an operate system.)

---

## SECTION 10 — FORK DECISION + CONSTRAINTS

### Fork recommendation: **both**
Endpoint Media is not a brochure site. The repo already ships **marketing**, **Paystack commerce (`/store`)**, and **SaaS-adjacent** surfaces (vicious audit, Enigma, Ads factory bridge, invite-only onboarding). Perfect-10 rollout must use the **marketing+commerce+light-SaaS** fork so CSP/checkout, lead pipeline, audit product, and SEO systems stay coherent — while keeping invite-only onboarding **out of marketing nav**.

### HARD CONSTRAINTS (do not break)
1. **Black / zinc / mono eyebrow visual language** — current live brand shell (`SiteChrome`, Header/Footer).  
2. **Lead pipeline:** `/api/contact` + Resend + `ContactLead` + phone/WhatsApp tracking.  
3. **www canonical + apex redirect + `metadataBase`.**  
4. **Bot/proxy firewall behavior** in `src/proxy.ts` (410 traps, bot verification) — regressions can nuke crawl budget.  
5. **Schema `@id` graph** in `src/lib/seo.ts` — do not casually rename IDs.  
6. **llms compile prebuild** (`b2a:compile`).  
7. **Onboarding** stays noindex / no marketing nav until soft-launch checklist clears.  
8. **Non-VAT / DRAFT legal** rules for onboarding invoices (separate product surface).  
9. **Case study & founder proof assets** — do not delete for “redesign.”  
10. **Paystack store** — if commerce stays, CSP and keys must remain viable.

### OWNER INPUTS still needed
1. Confirmed **street address** (or explicit remote-only policy for schema).  
2. Resolve **Alberton vs Johannesburg** primary locality + GBP NAP proof.  
3. Validate **sameAs** URLs still live/owned (FB, LinkedIn, GBP CID).  
4. Confirm which **metrics claims** (CPA%, ROAS) are publishable with evidence.  
5. Brand voice / DNA notes (anti-generic font/direction).  
6. Primary offer ranking for next 90 days (Ads vs Web vs Store micro-services).  
7. Whether `/store` is a first-class money URL for AI crawlers.  
8. Conversion label IDs from Google Ads (form/audit/phone/WhatsApp).  
9. Locales: confirm **en-ZA only** (no second language now).

---

## SECTION 11 — ROLLOUT-READY TASK BACKLOG (PLAN ONLY)

Do **not** start Task 1 in this audit.

### Foundation / Engineering
1. **Task 1 — CI gate:** add lint + typecheck + seo:validate smoke on PR. *Risk if skipped:* silent regressions ship forever.  
2. **Task 2 — CSP commerce hardening:** Paystack allowlist or redirect-checkout; remove `'unsafe-inline'` debt plan. *Risk:* store/onboarding pay broken or XSS surface stays wide.  
3. **Task 3 — CWV pass on `/` + `/services/google-ads`:** measure with Lighthouse CI; tame particle hero / JS. *Risk:* Perfect-10 engineering score capped.  
4. **Task 4 — Font/Brand DNA baseline:** replace generic Inter default with DNA-locked stack. *Risk:* stays visually interchangeable with every AI agency template.

### Trust / Entity
5. **Task 5 — Entity verification log + NAP freeze:** one locality, street or remote-only, phone format, sameAs proof. *Risk:* LocalBusiness distrust / GBP mismatch.  
6. **Task 6 — About hub + founder linking:** ship `/about` or hard redirect; remove Enigma from marketing nav. *Risk:* E-E-A-T and crawl confusion.  
7. **Task 7 — Homepage FAQ honesty:** visible FAQ matching schema or delete FAQPage. *Risk:* manual action / AI distrust.  
8. **Task 8 — Conversion ops:** set Ads labels; thank-you/event verification; form synthetic check. *Risk:* paid traffic stays “0 conversions.”

### GEO money pages
9. **Task 9 — Money page BLUF pass:** `/`, Google Ads, Pricing, Website prices — who/how/why + proof modules. *Risk:* high-intent bounce.  
10. **Task 10 — Thin geo merge/boost:** expand or consolidate `/services/google-ads-*` suburb pages vs location hubs. *Risk:* doorway dilution.  
11. **Task 11 — Claim evidence pack:** attach sources to CPA/ROAS/CWV claims or soften. *Risk:* trust failure under scrutiny.

### Cluster / internal links
12. **Task 12 — Hub→spoke link graph:** services ↔ industries ↔ locations ↔ case studies ≤3 clicks, no orphans. *Risk:* PageRank traps / orphans.  
13. **Task 13 — Nav IA cleanup:** Contact/Industries priority; demote non-marketing app links. *Risk:* confused journeys.

### Discoverability ops
14. **Task 14 — robots/sitemap hygiene:** Sitemap: only XML sitemaps; add `/store` to AI allow if money; security.txt. *Risk:* crawler confusion.  
15. **Task 15 — llms coverage sync:** generate from sitemap subset of money URLs + NAP/sameAs. *Risk:* GEO under-representation.  
16. **Task 16 — IndexNow + GSC cadence:** document + automate weekly push/diff. *Risk:* slow discovery after deploys.

### Operate / ship gate
17. **Task 17 — Weekly scorecard template** (GSC/Bing/CWV/forms/indexation). *Risk:* no feedback loop.  
18. **Task 18 — Synthetic + visual baselines** for home/contact/pricing/google-ads. *Risk:* silent UX/SEO breaks.  
19. **Task 19 — Incident runbook + entity log + red-team + 90-day plan.** *Risk:* Perfect-10 operate remains 0.  
20. **Task 20 — Ship gate checklist** before any “Perfect-10 complete” claim. *Risk:* fake readiness.

---

## APPENDIX A — Live probe notes (2026-07-16)

- Home headers: HSTS, CSP, prerender, `x-bot-verification: human`  
- Apex redirect works  
- `robots.txt` live matches `src/app/robots.ts`  
- `sitemap.xml` ~104 URLs  
- `llms.txt` live  
- `/.well-known/security.txt` → 404  
- `/about` → 404  
- Lighthouse → BLOCKED (DevTools timeout)

## APPENDIX B — Evidence index (key paths)

`package.json`, `next.config.mjs`, `vercel.json`, `src/proxy.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/manifest.ts`, `src/lib/seo.ts`, `src/lib/conversion-config.ts`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/components/sections/AgencyHeroSection.tsx`, `src/components/store/PaystackCheckout.tsx`, `public/llms.txt`, `public/humans.txt`, `.env.example`, `scripts/seo/*`, `ONBOARDING.md`

---

*End of audit deliverable. Ready for EndpointGM Perfect-10 planner (Phases 0–10).*
