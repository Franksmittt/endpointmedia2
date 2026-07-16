# Task 1 — CI Gate (Foundation)

**Status:** DONE (implementation)  
**Perfect-10:** Not complete — this is foundation only (audit overall 5.4/10).  
**Branch base:** `main` (default ship branch). Dedicated branch: `cursor/perfect-10-ci-gate-a15d`.  
**Related audit:** `docs/ENDPOINTMEDIA-PERFECT-10-AUDIT.md`

## What runs in GitHub Actions

Workflow: **`.github/workflows/ci.yml`** (`name: CI`)

| Trigger | Branches |
|---------|----------|
| `pull_request` | all |
| `push` | `main` |

Single job: **`lint · typecheck · seo:validate`**

| Step | Command | Notes |
|------|---------|-------|
| Node | `22` via `actions/setup-node` | Matches `package.json` `"engines": { "node": "22.x" }`, `@types/node` ^22, and local CI (v22.x). |
| Install | `npm ci` | `postinstall` → `prisma generate` (dummy `DATABASE_URL` only) |
| Lint | `npm run lint` | ESLint (Next core-web-vitals) |
| Typecheck | `npm run typecheck` | `tsc --noEmit` |
| SEO smoke | `npm run seo:validate:ci` | Hits **live** `https://www.endpointmedia.co.za` sitemap + URL checks |

### Env in CI (public defaults only — no secrets)

- `NEXT_PUBLIC_BASE_URL=https://www.endpointmedia.co.za`
- `SEO_BASE_URL=https://www.endpointmedia.co.za`
- `DATABASE_URL=postgresql://ci:ci@127.0.0.1:5432/ci?schema=public` (generate-only placeholder)

### SEO validator CI UA

`src/proxy.ts` returns **403** for spoofed Googlebot from non-Google IPs.  
`seo:validate:ci` therefore uses `--ci-ua` → `EndpointMedia-SEO-CI/1.0` (also auto when `CI=true`).

Checks still enforced per URL: HTTP 200 (no redirect traps), no `noindex` meta/header, canonical present + path-aligned.

## Node engine

- **Pinned:** `"engines": { "node": "22.x" }` in `package.json`
- **GitHub Actions:** `node-version: "22"`
- **Local verify:** run on Node 22.x (`node -v` should report `v22.*`)
- Align the Vercel project Node version to **22.x** so deploy runtime matches CI (Project Settings → General → Node.js Version).

## Local commands (reproduce)

```bash
node -v   # expect v22.x
npm ci
npm run lint
npm run typecheck

# SEO against production (same as CI)
pip install "requests>=2.31.0" "beautifulsoup4>=4.12.0"
npm run seo:validate:ci

# Optional: local Next server instead of prod
npm run build && npm run start
# other terminal:
npm run seo:validate
```

## Skipped on purpose (later Perfect-10 tasks)

| Check | Why skipped |
|-------|-------------|
| Lighthouse / LHCI | Task 3 (CWV) |
| axe / a11y CI | later Trust / a11y task |
| Visual regression | Operate task |
| `seo:graph` / `seo:check` full suite | heavier; graph deferred |
| `next build` in CI | slower; SEO smoke uses live prod; build remains deploy-time |
| IndexNow / GSC API | needs secrets; not a PR gate |

## Trivial fixes landed with this task

1. Added `npm run typecheck` and `npm run seo:validate:ci`
2. SEO npm scripts use `python3` (Ubuntu CI has no `python` shim)
3. ESLint ignore for `scripts/mock-server-only.cjs` (CJS CLI stub)
4. Validator `--ci-ua` / `CI=true` honest UA to avoid bot-firewall 403

## Hard constraints respected

- No UI redesign, NAP/schema content, CSP rewrite, or invented sameAs/street/Ads labels  
- Onboarding / Paystack / contact pipeline untouched beyond lint ignore for CLI stub  
- No secrets committed  
