# Local SEO Crawl & Indexing Workflow

Shift-left technical SEO validation runs in Cursor **before** deploy, so GSC does not discover redirect loops or canonical mismatches after crawl budget is wasted.

## Phase 1: Install Python dependencies

```bash
pip install -r requirements-seo.txt
```

## Phase 2: Pre-deploy validation (local production build)

```bash
npm run build
npm run start
```

In a second terminal:

```bash
npm run seo:validate
npm run seo:graph
# or both:
npm run seo:check
```

### What each script does

| Script | Purpose |
|--------|---------|
| `scripts/seo/validate_seo.py` | Fetches sitemap, GETs each URL as Googlebot with `allow_redirects=False`, checks 200, robots, canonical |
| `scripts/seo/graph_auditor.py` | BFS crawl from homepage, flags orphans and pages >3 clicks deep |
| `scripts/seo/index_pusher.py` | Pushes production sitemap URLs to Google Indexing API (post-deploy) |

### Production validation

```bash
npm run seo:validate:prod
npm run seo:graph:prod
```

## Phase 3: Deploy & push to Google

1. Fix any FAIL output from validators
2. Deploy to Vercel (or your host)
3. Configure Google Indexing API:
   - Enable **Web Search Indexing API** in GCP
   - Create service account JSON → save as `gcp_service_account.json` (gitignored)
   - Add service account email as **Owner** in Search Console for `www.endpointmedia.co.za`
   - Set `GOOGLE_APPLICATION_CREDENTIALS=./gcp_service_account.json`

```bash
python scripts/seo/index_pusher.py --dry-run
python scripts/seo/index_pusher.py
```

Quota: **200 URLs/day** per property.

## Environment variables

| Variable | Purpose |
|----------|---------|
| `SEO_BASE_URL` | Override base for validators (default `http://localhost:3000`) |
| `NEXT_PUBLIC_BASE_URL` | Canonical/sitemap base (production: `https://www.endpointmedia.co.za`) |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to GCP service account JSON |

## Next.js crawl hardening (already in `next.config.mjs`)

- `htmlLimitedBots` — full HTML for Googlebot (not RSC flight payloads)
- `_rsc` query redirect — strips duplicate RSC URLs from index
- `trailingSlash: false` — consistent canonical paths
