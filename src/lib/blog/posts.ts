import type { BlogPostMeta } from './types';
import { unstable_cache } from 'next/cache';

/** All blog posts — 25 cornerstone silo articles + 5 legacy Johannesburg posts */
export const BLOG_POSTS: BlogPostMeta[] = [
  // ─── Silo 5: Meta Ads Systems Engineering ───
  {
    slug: 'meta-andromeda-manual-media-buying-dead',
    title: 'The Death of Manual Media Buying: Inside Meta’s Andromeda Algorithmic Shift',
    excerpt:
      'Meta’s Andromeda engine clusters creatives by Entity ID — not your audience stacks. Learn why manual media buying and cosmetic A/B tests are mathematically obsolete for B2B scaling in 2026.',
    date: '2026-06-05',
    category: 'Meta Ads',
    silo: 'meta-ads',
    keywords: [
      'Meta Andromeda algorithm 2026',
      'Entity ID Meta ads',
      'manual media buying obsolete',
      'scale Meta ads without resetting learning',
      'Advantage+ creative targeting',
    ],
    readingTimeMinutes: 12,
    faqs: [
      {
        question: 'What is Meta Andromeda?',
        answer:
          'Andromeda is Meta’s intent-retrieval layer that uses GPU clusters to filter millions of ads to ~1,000 candidates in under 300ms. It reads creative pixels and context to assign Entity IDs that dictate who sees the ad — overriding manual audience targeting.',
      },
      {
        question: 'What is an Entity ID on Meta ads?',
        answer:
          'An Entity ID is a computer-vision fingerprint grouping visually similar creatives. Ads sharing one Entity ID compete in the same retrieval pool — cosmetic variations do not create independent tests.',
      },
      {
        question: 'Are lookalike audiences still effective in 2026?',
        answer:
          'Lookalikes are demoted to suggestions. Broad Advantage+ structures with creative-led targeting outperform manual audience stacking when Entity ID diversity is maintained.',
      },
    ],
  },
  {
    slug: 'programmatic-design-factory-meta-creative-disparity',
    title: 'The Programmatic Design Factory: Scaling Creative Disparity Without Human Latency',
    excerpt:
      'Beat Meta ad fatigue with automated Next.js + Python + Figma pipelines that render safe-zone-compliant, Entity ID-diverse creatives at scale — not one template repeated twelve times.',
    date: '2026-06-04',
    category: 'Meta Ads',
    silo: 'meta-ads',
    keywords: [
      'programmatic Meta ad creative',
      'beat Meta ad fatigue 2026',
      'Figma API ad factory',
      '9:16 safe zone Meta ads',
      'creative Entity ID diversity',
    ],
    readingTimeMinutes: 11,
    faqs: [
      {
        question: 'How do you beat Meta ad fatigue in 2026?',
        answer:
          'Produce structurally distinct creatives — different layouts, environments, personas, and benefit axes — so Andromeda assigns unique Entity IDs. Volume without visual disparity increases CPA through self-competition.',
      },
      {
        question: 'What is the Meta 9:16 safe zone?',
        answer:
          'On 1080×1920 vertical assets, keep critical text and CTAs inside the center safe area (roughly Y 250–1248). Top ~220px and bottom ~220px are occluded by native Reels/Stories UI.',
      },
      {
        question: 'Can Figma automate ad production?',
        answer:
          'Yes. The Figma REST API lets Python/Next.js pipelines inject copy and brand variables into layout nodes and export PNGs at scale — eliminating designer queue latency.',
      },
    ],
  },
  {
    slug: 'abo-testing-sandbox-meta-algorithmic-liquidity',
    title: 'The ABO Testing Sandbox: Mathematical Framework for Meta Algorithmic Liquidity',
    excerpt:
      'Calculate minimum daily Meta test budgets from target CPA, isolate winners in ABO sandboxes, graduate via Graph API Post IDs, and enforce 15-minute AdRules pacing — not daily dashboard checks.',
    date: '2026-06-03',
    category: 'Meta Ads',
    silo: 'meta-ads',
    keywords: [
      'ABO testing Meta ads',
      'Meta learning phase 50 events',
      'scale Meta ads without losing performance',
      'Meta AdRules automation',
      'effective_object_story_id API',
    ],
    readingTimeMinutes: 10,
    faqs: [
      {
        question: 'How do you calculate Meta ABO test budget?',
        answer: 'Minimum daily budget ≈ (50 ÷ 7) × target CPA. This targets enough conversion events per 7-day window to exit learning phase.',
      },
      {
        question: 'How do you scale Meta ads without resetting social proof?',
        answer:
          'Extract effective_object_story_id via Graph API and inject it into the scale campaign payload — preserving likes, comments, and engagement history instead of duplicating ads manually.',
      },
      {
        question: 'What is the Meta 20% budget increase rule?',
        answer:
          'Increasing ad set budget more than ~20% in 24 hours can reset learning phase. Automated scripts scale by ~19.5% increments to maintain momentum.',
      },
    ],
  },
  {
    slug: 'server-side-capi-middleware-closed-loop-roi',
    title: 'Closed-Loop Data Sovereignty: Server-Side CAPI Middleware for True Meta ROI',
    excerpt:
      'Browser pixels fail on iOS and ad blockers. Learn SHA-256 PII normalization, UUID deduplication, EMQ optimization, and CRM stage feedback for high-ticket B2B Meta campaigns in South Africa.',
    date: '2026-06-02',
    category: 'Meta Ads',
    silo: 'meta-ads',
    keywords: [
      'Meta Conversions API setup',
      'Meta pixel deduplication server side',
      'Event Match Quality EMQ',
      'CAPI B2B lead generation South Africa',
      'CRM offline conversions Meta',
    ],
    readingTimeMinutes: 11,
    faqs: [
      {
        question: 'What EMQ score should Meta CAPI events target?',
        answer:
          'Keep bottom-funnel Event Match Quality above 7.0; aim for 8.0–9.5 with hashed email, E.164 phone, client IP, and user agent in the user_data payload.',
      },
      {
        question: 'How do you deduplicate Meta pixel and CAPI events?',
        answer:
          'Generate one UUID event_id per user action and pass the identical ID in both browser pixel and server CAPI payloads with matching event_name.',
      },
      {
        question: 'Why send CRM stages to Meta CAPI?',
        answer:
          'Lead events alone optimize for form fills. Offline MQL, SQL, Proposal, and Closed-Won events train Value Optimization on qualified pipeline — critical for high-ticket B2B.',
      },
    ],
  },
  {
    slug: 'systemic-divergence-industry-vs-retail-south-africa',
    title: 'Systemic Divergence: Meta Performance for Heavy Industry vs Local Retail in South Africa',
    excerpt:
      'Alrode B2B qualification carousels, Alberton retail WhatsApp funnels, and load-shedding-aware payload compression — why one Meta template cannot serve every Gauteng sector.',
    date: '2026-06-01',
    category: 'Meta Ads',
    silo: 'meta-ads',
    keywords: [
      'B2B lead generation automation South Africa',
      'heavy industry marketing Alrode Alberton',
      'Meta ads South Africa load shedding',
      'WhatsApp lead gen Meta ads',
      'enterprise performance marketing systems',
    ],
    readingTimeMinutes: 12,
    faqs: [
      {
        question: 'How should B2B industrial Meta ads differ from retail?',
        answer:
          'Industrial campaigns use high-friction qualification (5-card carousels, Higher Intent forms, corporate fields). Retail uses zero-friction trust creative and WhatsApp/Messenger routing.',
      },
      {
        question: 'How does load shedding affect Meta ad performance in SA?',
        answer:
          'Tower outages and battery theft increase latency and packet loss. Heavy video fails to load; static compressed payloads and time-weighted delivery during stable grid windows improve conversion.',
      },
      {
        question: 'What is infrastructure-aware ad delivery?',
        answer:
          'Programmatic engines swap large video for compressed static assets in degraded network geos and bid heavier during off-peak hours when B2B buyers research and connectivity stabilizes.',
      },
    ],
  },
  // ─── Silo 4: Technical Diagnostic & AEO Architecture ───
  {
    slug: 'aeo-shift-chatgpt-gemini-optimization',
    title: 'The AEO Shift: Why Traditional SEO is Dead (And How to Optimize)',
    excerpt:
      'Explore the technical mechanics of Answer Engine Optimization (AEO). Learn how RAG models, vector embeddings, and schema dictate ChatGPT and Gemini citations.',
    date: '2026-05-31',
    category: 'Technical SEO',
    silo: 'web-architecture',
    keywords: ['Answer Engine Optimization', 'AEO ChatGPT optimization', 'RAG vector embeddings', 'LLM citation SEO'],
    readingTimeMinutes: 11,
    faqs: [
      { question: 'What is Answer Engine Optimization (AEO)?', answer: 'AEO structures content for RAG retrieval: BLUF formatting, hierarchical H2/H3 chunking, and JSON-LD entity mapping so ChatGPT, Gemini, and Perplexity cite your domain as an authoritative source.' },
      { question: 'Why does keyword density hurt AEO?', answer: 'Embedding models map semantic meaning into vector space. Keyword stuffing dilutes vector clarity and reduces retrieval probability during RAG query execution.' },
      { question: 'How much does schema improve AI citations?', answer: 'Domains with correctly formatted FAQPage and Article JSON-LD achieve approximately 2.7× higher citation frequency than identical sites without structured data.' },
    ],
  },
  {
    slug: 'nextjs-hydration-seo-rendering-traps',
    title: "Next.js Rendering Traps: 'use client' Hydration SEO Failures",
    excerpt:
      "Discover how Next.js hydration mismatches, JavaScript main-thread locks, and misuse of the 'use client' directive destroy INP metrics and Google indexation.",
    date: '2026-05-30',
    category: 'Web Architecture',
    silo: 'web-architecture',
    keywords: ['Next.js client component hydration SEO', 'hydration mismatch SEO', 'INP Core Web Vitals', 'React Server Components SEO'],
    readingTimeMinutes: 10,
    faqs: [
      { question: 'Why does hydration break Google indexation?', answer: 'Crawlers operate on strict CPU budgets. If JavaScript hydration exceeds hundreds of milliseconds, crawlers abandon execution and index empty skeleton HTML instead of rendered content.' },
      { question: 'What causes Next.js hydration mismatches?', answer: 'Server HTML differing from client React tree — from browser-only APIs during SSR, time-dependent values, or improper HTML nesting. React destroys and rebuilds the entire DOM, spiking INP and TBT.' },
      { question: 'How do React Server Components fix hydration SEO?', answer: 'RSCs render to pure HTML on the server with zero client JavaScript for static content. Push use client boundaries to leaf nodes and dynamically import off-screen interactive widgets.' },
    ],
  },
  {
    slug: 'shopify-canonical-loop-duplicate-paths',
    title: 'The Shopify Canonical Loop: Bleeding Google Rankings via Duplicate Paths',
    excerpt:
      "Examine Shopify SEO failures: how the 'within: collection' Liquid filter creates duplicate URL loops and destroys canonical structures.",
    date: '2026-05-29',
    category: 'Technical SEO',
    silo: 'web-architecture',
    keywords: ['Shopify canonical loop duplicate URLs', 'Shopify SEO duplicate content', 'Liquid within collection filter', 'e-commerce canonical tags'],
    readingTimeMinutes: 9,
    faqs: [
      { question: 'What is the Shopify canonical loop?', answer: 'The Liquid within: collection filter generates collection-aware product URLs (/collections/x/products/y) alongside root product URLs (/products/y), splitting link equity and triggering duplicate content de-indexation.' },
      { question: 'How do you fix Shopify duplicate product URLs?', answer: 'Remove within: collection from all internal links, override theme.liquid canonical tags to force root product URLs, and use self-referencing canonicals on paginated collection pages.' },
      { question: 'How do Shopify variant parameters cause duplication?', answer: '?variant=12345 generates dozens of duplicate pages per SKU. Use JavaScript and sessionStorage to update pricing and images without appending parameters to the URL bar.' },
    ],
  },
  {
    slug: 'wordpress-rest-api-user-leak-security',
    title: 'WordPress Bloat & API Leaks: The Security Cost of Legacy Builders',
    excerpt:
      'Examine catastrophic WordPress REST API security risks: how unauthenticated /wp-json/wp/v2/users endpoints power Oracle-style brute-force enumeration attacks.',
    date: '2026-05-28',
    category: 'Web Architecture',
    silo: 'web-architecture',
    keywords: ['WordPress REST API security user leak', 'wp-json users enumeration', 'WordPress API brute force', 'CVE-2023-5561'],
    readingTimeMinutes: 10,
    faqs: [
      { question: 'Is the WordPress REST API enabled by default?', answer: 'Yes. The /wp-json/wp/v2/users endpoint is exposed on standard installations and permits unauthenticated extraction of usernames, user IDs, and email addresses.' },
      { question: 'How do attackers exploit the WordPress users endpoint?', answer: 'Oracle-style enumeration maps the user database via iterative API queries. Harvested administrator names feed credential-stuffing attacks against wp-login.php with exponentially higher success rates.' },
      { question: 'How do you disable WordPress REST API user enumeration?', answer: 'Use the rest_endpoints filter to unset /wp/v2/users routes, enforce rest_authentication_errors for session verification, and supplement with Nginx-level 404 responses for unauthorized JSON requests.' },
    ],
  },
  {
    slug: 'ai-bot-edge-middleware-cloudflare-blocking',
    title: 'AI Bot Asphyxiation: Is Edge Middleware Blocking ChatGPT from Reading Sites?',
    excerpt:
      "Learn how Cloudflare's Managed robots.txt and Vercel edge middleware silently drop verified AI bots, destroying Answer Engine Optimization and ChatGPT citations.",
    date: '2026-05-27',
    category: 'Technical SEO',
    silo: 'web-architecture',
    keywords: ['Edge middleware AI bot block WAF', 'Cloudflare block AI bots', 'GPTBot robots.txt', 'Vercel middleware SEO'],
    readingTimeMinutes: 10,
    faqs: [
      { question: 'Can Cloudflare block ChatGPT from crawling my site?', answer: 'Yes. Managed "Block AI Bots" WAF rules and prepended robots.txt Disallow directives terminate GPTBot and ClaudeBot connections with HTTP 403 before requests reach your application server.' },
      { question: 'Why is blocking AI bots bad for SEO?', answer: 'While you invest in Answer Engine Optimization, edge-level blocks prevent LLMs from ingesting your entity schema — making AI citations impossible regardless of on-page content quality.' },
      { question: 'How should WAF rules handle verified AI crawlers?', answer: 'Use Custom WAF Skip rules with ASN or Reverse DNS verification for official OpenAI IP blocks. Route verified AI crawlers past managed bot protections while maintaining rate-limits against unauthorized scrapers.' },
    ],
  },
  // ─── Silo 1: Premium Web Architecture & Technical SEO ───
  {
    slug: 'the-brutal-truth-about-wordpress',
    title: 'The Brutal Truth About WordPress: Why Legacy CMS Architecture Destroys B2B Conversion Rates',
    excerpt:
      'WordPress plugins, PHP database chains, and bloated themes add 600ms+ TTFB. Here is the engineering breakdown of why modern web architecture vs WordPress is a revenue decision, not a preference.',
    date: '2026-05-01',
    category: 'Web Architecture',
    silo: 'web-architecture',
    keywords: ['modern web architecture vs WordPress', 'fast enterprise websites', 'Next.js vs WordPress', 'B2B website performance'],
    readingTimeMinutes: 12,
    faqs: [
      { question: 'Is WordPress always bad for B2B?', answer: 'WordPress is viable for low-traffic blogs. For high-ticket B2B lead generation requiring Core Web Vitals compliance and schema control, Next.js static generation outperforms it consistently.' },
      { question: 'What is a acceptable TTFB for enterprise sites?', answer: 'Under 200ms globally, under 100ms on edge CDN. WordPress on shared hosting typically exceeds 600ms.' },
    ],
  },
  {
    slug: 'core-web-vitals-financial-metric',
    title: 'Core Web Vitals as a Financial Metric: LCP, CLS, and the Cost of Slow Rendering',
    excerpt:
      'Largest Contentful Paint and Cumulative Layout Shift are not vanity metrics. A 2-second rendering delay directly slashes conversion rates and inflates Google Ads CPL for South African B2B operators.',
    date: '2026-05-03',
    category: 'Technical SEO',
    silo: 'web-architecture',
    keywords: ['Core Web Vitals optimization', 'web performance ROI', 'LCP CLS financial impact', 'page speed conversion rate'],
    readingTimeMinutes: 10,
    faqs: [
      { question: 'What LCP threshold does Google enforce?', answer: 'LCP must be 2.5 seconds or less for a "Good" rating. Above 4.0s is "Poor" and directly impacts rankings and ad Quality Score.' },
    ],
  },
  {
    slug: 'answer-engine-optimization-aeo',
    title: 'Answer Engine Optimization (AEO): Structuring Next.js Content for ChatGPT and Perplexity Citations',
    excerpt:
      'Answer Engine Optimization requires programmatic JSON-LD, semantic entity grouping, and speakable schema. Learn how schema markup for AI positions your B2B site as a definitive cited source.',
    date: '2026-05-05',
    category: 'Technical SEO',
    silo: 'web-architecture',
    keywords: ['Answer Engine Optimization AEO', 'schema markup for AI', 'JSON-LD Next.js', 'LLM citation SEO'],
    readingTimeMinutes: 9,
    faqs: [
      { question: 'What is Answer Engine Optimization (AEO)?', answer: 'AEO structures content with JSON-LD, semantic headings, and speakable schema so ChatGPT, Perplexity, and Google AI Overviews can cite your pages as authoritative sources in zero-click results.' },
      { question: 'Does AEO replace traditional SEO?', answer: 'No. AEO extends SEO. You still need crawlable HTML, Core Web Vitals, and backlinks. AEO adds entity-rich schema and extractable summaries that LLMs prefer when selecting citations.' },
      { question: 'Which schema types matter most for AEO?', answer: 'BlogPosting with author/publisher @id links, FAQPage for Q&A blocks, and SpeakableSpecification targeting h1 and .article-summary give answer engines the cleanest extraction targets.' },
    ],
  },
  {
    slug: 'anatomy-elite-landing-page',
    title: 'The Anatomy of an Elite Landing Page: Zero Runtime CSS Bloat and React Server Components',
    excerpt:
      'High-converting landing page design requires minimalist UI development, Tailwind CSS payload optimization, and React Server Component hierarchies that eliminate DOM bloat.',
    date: '2026-05-07',
    category: 'Web Architecture',
    silo: 'web-architecture',
    keywords: ['high-converting landing page design', 'minimalist UI development', 'React Server Components', 'Tailwind CSS performance'],
    readingTimeMinutes: 8,
    faqs: [
      { question: 'What makes a landing page "elite" for B2B conversion?', answer: 'Single intent, zero navigation leakage, sub-2s LCP, one primary CTA above the fold, and React Server Components that ship HTML without client-side layout thrash.' },
      { question: 'Why does Tailwind outperform Bootstrap on landing pages?', answer: 'Tailwind purges unused CSS at build time, typically yielding 10–15KB production CSS versus 800KB+ theme bundles. Smaller payloads improve LCP and Google Ads landing page experience scores.' },
      { question: 'Do landing pages need client-side JavaScript?', answer: 'Only for interactive elements like calculators or forms. Hero copy, proof blocks, and pricing tables should render as static server HTML to minimize Time to Interactive.' },
    ],
  },
  {
    slug: 'website-migration-blueprint',
    title: 'The Website Migration Blueprint: Rebuild on Next.js Without Destroying Search Traffic',
    excerpt:
      'A safe website migration checklist covering 301 redirect mapping, canonical validation, dynamic sitemap architecture, and GSC monitoring for zero indexation loss.',
    date: '2026-05-09',
    category: 'Technical SEO',
    silo: 'web-architecture',
    keywords: ['safe website migration checklist', 'dynamic sitemap architecture', '301 redirect mapping', 'Next.js migration SEO'],
    readingTimeMinutes: 14,
    faqs: [
      { question: 'How long should you monitor a site after migration?', answer: 'Run GSC Coverage and 404 reports daily for 14 days minimum. Indexation dips often appear 3–7 days post-launch when redirect chains or canonical mismatches surface.' },
      { question: 'What is the most common migration SEO failure?', answer: 'Missing or chained 301 redirects. Every legacy URL must map to exactly one canonical destination with a single hop. Duplicate content from both old and new URLs simultaneously indexed destroys rankings.' },
      { question: 'Should you change URLs during a Next.js rebuild?', answer: 'Only when necessary. Preserve slug parity wherever possible. When URLs must change, document every redirect in next.config.mjs and validate with Screaming Frog before go-live.' },
    ],
  },
  {
    slug: 'google-ads-tracking-errors-budget',
    title: 'Tracking Errors That Ruin Google Ads Budgets: Server-Side Attribution via Next.js API Routes',
    excerpt:
      'Broad match without negatives, soft conversion goals, and client-side tracking blocked by ad blockers hemorrhage budget. Fix Google Ads optimization with server-side conversion integrity.',
    date: '2026-05-11',
    category: 'Google Ads',
    silo: 'google-ads',
    keywords: ['Google Ads optimization', 'performance marketing tracking errors', 'server-side conversion tracking', 'Next.js API routes ads'],
    readingTimeMinutes: 9,
    faqs: [
      { question: 'Why does client-side conversion tracking fail?', answer: 'Ad blockers, ITP, and consent banners block 20–40% of gtag events. Server-side conversion posting via Next.js API routes fires after form validation, bypassing browser restrictions.' },
      { question: 'What is the biggest Google Ads budget leak for B2B?', answer: 'Broad match without rigorous negative keywords sends spend to job seekers, DIY researchers, and irrelevant geos. Pair exact/phrase match with weekly search term audits.' },
      { question: 'How do soft conversion goals hurt Smart Bidding?', answer: 'Tracking page views or button clicks as conversions trains Google\'s algorithm on low-intent actions. Only fire conversion events on qualified leads: form submits, calls, or booked meetings.' },
    ],
  },
  {
    slug: 'landing-page-speed-quality-score',
    title: 'Landing Page Speed and Quality Score: How Next.js Cuts CPC in the Google Ads Auction',
    excerpt:
      'Landing page speed impact on CPC is direct: faster Next.js pages improve Google Ads Quality Score, reduce bounce rate, and lower cost-per-click for high-intent B2B keywords.',
    date: '2026-05-13',
    category: 'Google Ads',
    silo: 'google-ads',
    keywords: ['Google Ads Quality Score fix', 'landing page speed impact on CPC', 'Quality Score landing page', 'Next.js Google Ads'],
    readingTimeMinutes: 10,
    faqs: [
      { question: 'How does landing page speed affect Quality Score?', answer: 'Google measures landing page experience including load time and mobile usability. Faster pages reduce bounce rate, which improves expected CTR and landing page relevance components of Quality Score.' },
      { question: 'What LCP should Google Ads landing pages target?', answer: 'Under 2.5 seconds for mobile. Next.js static generation on edge CDN typically achieves 1.0–1.8s LCP versus 3–5s on WordPress with plugin bloat.' },
      { question: 'Can a slow landing page increase CPC?', answer: 'Yes. Lower Quality Score directly raises the minimum bid needed to maintain ad rank. A QS drop from 8 to 5 can increase effective CPC by 30–50% on competitive B2B keywords.' },
    ],
  },
  {
    slug: 'smart-bidding-vs-manual-waste',
    title: 'Smart Bidding vs Manual Waste: Feeding Clean Conversion Data to Google AI',
    excerpt:
      'Google Ads smart bidding strategies only outperform manual bidding when conversion data is accurate and fast. A high-performance site ensures zero dropped tracking events.',
    date: '2026-05-15',
    category: 'Google Ads',
    silo: 'google-ads',
    keywords: ['Google Ads smart bidding strategies', 'maximize conversion value PPC', 'conversion tracking accuracy', 'automated bidding B2B'],
    readingTimeMinutes: 8,
    faqs: [
      { question: 'When does Smart Bidding outperform manual CPC?', answer: 'After 30+ conversions per month with accurate, delay-free tracking. The algorithm needs sufficient signal volume to model intent patterns across devices, time, and audience segments.' },
      { question: 'Why does manual bidding waste budget on high-ticket B2B?', answer: 'Manual bids cannot react to micro-moment intent shifts across hundreds of keyword × device × geo combinations. Smart Bidding adjusts in real time when conversion data is clean.' },
      { question: 'What breaks Smart Bidding before it starts?', answer: 'Delayed conversion imports, duplicate firing, and tracking page views as conversions. Fix measurement integrity first, then switch to Target CPA or Maximize Conversion Value.' },
    ],
  },
  {
    slug: 'performance-engine-high-ticket-lead-gen',
    title: 'The Performance Engine for High-Ticket Lead Gen: Filtering Intent in 60–90 Day B2B Cycles',
    excerpt:
      'High-ticket digital marketing strategy for South African B2B: ad copy qualification, exact match structures, and nurture systems aligned to 60–90 day procurement cycles.',
    date: '2026-05-17',
    category: 'Google Ads',
    silo: 'google-ads',
    keywords: ['high-ticket digital marketing strategy', 'elite lead generation frameworks', 'B2B Google Ads South Africa', 'lead qualification PPC'],
    readingTimeMinutes: 11,
    faqs: [
      { question: 'How long is a typical high-ticket B2B sales cycle in South Africa?', answer: '60–90 days from first ad click to signed contract for manufacturing, legal, and professional services. PPC must qualify intent early because procurement committees research independently for weeks.' },
      { question: 'How do you filter unqualified leads in Google Ads?', answer: 'Use ad copy that states minimum project value, exact match on buyer-intent keywords, and landing pages with qualification questions before the form submit.' },
      { question: 'Should high-ticket B2B use lead forms or phone calls?', answer: 'Both. Phone for urgent high-intent searches; forms for research-phase buyers. Track each as separate conversion actions with different values in Google Ads.' },
    ],
  },
  {
    slug: 'performance-over-vanity-metrics',
    title: 'Performance Over Vanity Metrics: CPA, LTV, and Direct Response Advertising Audits',
    excerpt:
      'CPA optimization requires discarding impression and click vanity metrics. Audit Cost Per Acquisition against Customer Lifetime Value with a 5–8% conversion baseline.',
    date: '2026-05-19',
    category: 'Google Ads',
    silo: 'google-ads',
    keywords: ['CPA optimization', 'direct response advertising metrics', 'LTV CAC ratio B2B', 'Google Ads reporting audit'],
    readingTimeMinutes: 8,
    faqs: [
      { question: 'What is a healthy CPA-to-LTV ratio for B2B?', answer: 'Target CPA at 5–8% of Customer Lifetime Value. If average contract value is R85,000, sustainable CPA is R4,250–R6,800 depending on sales cycle length and close rate.' },
      { question: 'Which Google Ads metrics are vanity metrics?', answer: 'Impressions, click-through rate in isolation, and average position. These do not correlate with revenue. Optimize Cost Per Acquisition, ROAS, and pipeline contribution instead.' },
      { question: 'What conversion rate baseline should B2B landing pages hit?', answer: '5–8% for qualified traffic on service pages. Below 3% indicates landing page-message mismatch, slow load times, or poor keyword intent alignment.' },
    ],
  },
  {
    slug: 'local-seo-blueprint',
    title: 'The Local SEO Blueprint: Hub-and-Spoke Architecture for Alrode, Wadeville, and Germiston',
    excerpt:
      'Advanced Local SEO strategy using semantic silos, programmatic multi-location landing pages, and KML integration — not keyword stuffing — to dominate Gauteng industrial search.',
    date: '2026-05-21',
    category: 'Local SEO',
    silo: 'local-dominance',
    keywords: ['advanced Local SEO strategy', 'multi-location landing pages', 'hub and spoke SEO', 'Alberton local SEO'],
    readingTimeMinutes: 12,
    faqs: [
      { question: 'What is hub-and-spoke local SEO?', answer: 'A regional hub page (e.g. /locations/new-redruth) links to spoke pages targeting specific suburbs and services (/services/google-ads-alrode). Internal links flow authority through a semantic graph Google resolves as topical expertise.' },
      { question: 'Does keyword stuffing in footers help local rankings?', answer: 'No. Google penalizes footer keyword lists. Programmatic landing pages with unique copy, LocalBusiness schema, and genuine service-area content outperform spam tactics.' },
      { question: 'How do KML files support local SEO?', answer: 'KML geo polygons declared in robots.txt reinforce service-area entities for map pack algorithms, especially in industrial zones like Alrode, Wadeville, and Germiston.' },
    ],
  },
  {
    slug: 'b2b-digital-marketing-specialized-industries',
    title: 'B2B Digital Marketing for Specialized Industries: Capturing the 70% Independent Research Phase',
    excerpt:
      'Industrial marketing strategies for manufacturing and commercial services: build topical authority before procurement officers ever contact sales.',
    date: '2026-05-23',
    category: 'Local SEO',
    silo: 'local-dominance',
    keywords: ['industrial marketing strategies', 'commercial services digital client acquisition', 'B2B procurement SEO', 'manufacturing digital marketing'],
    readingTimeMinutes: 9,
    faqs: [
      { question: 'What is the 70% independent research phase in B2B?', answer: 'Procurement officers consume 70% of vendor information before contacting sales. Your website must answer technical questions, prove credentials, and publish case studies during this silent evaluation window.' },
      { question: 'Which content types win industrial B2B searches?', answer: 'Technical long-tail pages, compliance documentation, case studies with measurable outcomes, and FAQ hubs targeting procurement-specific queries.' },
      { question: 'How long before industrial SEO generates pipeline?', answer: 'Expect 90–120 days for new topical authority pages to rank for competitive manufacturing and logistics keywords in Gauteng.' },
    ],
  },
  {
    slug: 'minimalist-design-b2b-value',
    title: 'The Value of Minimalist Design in B2B: Cognitive Load, Typography, and C-Suite Trust',
    excerpt:
      'Premium web design impact comes from structured layouts and typographic hierarchy — not visual clutter. Minimalist B2B websites convert high-ticket buyers faster.',
    date: '2026-05-25',
    category: 'Web Architecture',
    silo: 'local-dominance',
    keywords: ['premium web design impact', 'minimalist B2B websites', 'B2B UX trust signals', 'corporate web design South Africa'],
    readingTimeMinutes: 8,
    faqs: [
      { question: 'Why does minimalist design convert better for B2B?', answer: 'Reduced cognitive load lets C-suite buyers evaluate value propositions in under 8 seconds. Cluttered templates signal amateur operations and increase bounce rate on high-ticket service pages.' },
      { question: 'What typography choices build B2B trust?', answer: 'Clear heading hierarchy (H1 → H2 → H3), 16px+ body text, high contrast ratios, and consistent font pairing. Serif display fonts on corporate sites often reduce perceived technical credibility.' },
      { question: 'Does visual complexity affect Google Ads Quality Score?', answer: 'Indirectly. Cluttered pages increase bounce rate and reduce time-on-page, which feeds back into landing page experience scores and raises effective CPC.' },
    ],
  },
  {
    slug: 'structured-data-local-schema',
    title: 'Demystifying Structured Data and Local Schema: LocalBusiness JSON-LD with GeoCoordinates',
    excerpt:
      'Local Business JSON-LD with GeoCoordinates, areaServed arrays, and advanced schema SEO for map pack precision in densely populated industrial zones.',
    date: '2026-05-27',
    category: 'Technical SEO',
    silo: 'local-dominance',
    keywords: ['Local Business JSON-LD', 'advanced schema SEO', 'GeoCoordinates schema', 'LocalBusiness structured data'],
    readingTimeMinutes: 10,
    faqs: [
      { question: 'What LocalBusiness schema fields matter most?', answer: 'GeoCoordinates (latitude/longitude), areaServed arrays, @id linking to your organization entity, and consistent NAP data matching Google Business Profile citations.' },
      { question: 'Can incorrect schema hurt local rankings?', answer: 'Yes. Mismatched addresses, duplicate LocalBusiness entities, or invalid JSON-LD triggers rich result penalties and confuses Google\'s knowledge graph reconciliation.' },
      { question: 'Should every location page have unique schema?', answer: 'Yes. Each location or service-area page needs distinct GeoCoordinates and areaServed values. Copy-paste schema across suburbs creates duplicate entity signals.' },
    ],
  },
  {
    slug: 'maximizing-regional-map-visibility',
    title: 'Maximizing Regional Map Visibility: KML Overlays, Citations, and Sitemap Integration',
    excerpt:
      'Optimize regional map listings through citation synchronicity, KML file optimization, dynamic sitemap architecture, and local organic SEO prominence audits.',
    date: '2026-05-29',
    category: 'Local SEO',
    silo: 'local-dominance',
    keywords: ['optimize regional map listings', 'local organic SEO prominence', 'KML file optimization', 'Google Maps SEO South Africa'],
    readingTimeMinutes: 12,
    faqs: [
      { question: 'How do KML overlays improve map visibility?', answer: 'KML files define service-area polygons that Google Maps and Search can ingest. Declaring /alberton-service-area.kml in robots.txt alongside sitemap.xml reinforces geo-entity signals.' },
      { question: 'What is citation synchronicity?', answer: 'Your business name, address, and phone must match exactly across GBP, website schema, directories, and social profiles. Inconsistencies suppress map pack placement.' },
      { question: 'How often should local SEO prominence be audited?', answer: 'Monthly for competitive Gauteng markets. Track map pack rankings, GBP insights, and local organic visibility for each target suburb.' },
    ],
  },
  {
    slug: 'the-true-cost-of-a-website-in-johannesburg',
    title: 'The True Cost of a Website in Johannesburg: 2025 Price Guide',
    excerpt: 'Your comprehensive guide to JHB web design prices. We break down costs by page, e-commerce, and maintenance fees.',
    date: '2025-10-30',
    category: 'Pricing & ROI',
    keywords: ['website cost Johannesburg', 'web design prices JHB', 'website pricing South Africa'],
    readingTimeMinutes: 8,
    faqs: [
      { question: 'How much should a Johannesburg SME budget for a website?', answer: 'R10,000–R60,000 for a professionally built 6–20 page site. Basic informational sites start at R3,000–R15,000 but often lack SEO architecture and conversion tooling.' },
      { question: 'What hidden costs inflate website TCO?', answer: 'Hosting (R100–R1,000+/month), maintenance (R500–R2,000/month), plugin licenses, and emergency developer fixes when DIY builds break. Factor TCO over 24 months, not just build cost.' },
      { question: 'Is the cheapest website quote the best value?', answer: 'Rarely. Low quotes typically exclude SEO, schema, performance optimization, and conversion tracking. The true cost is lost leads from a site that does not rank or convert.' },
    ],
  },
  {
    slug: 'freelancer-vs-agency-the-low-risk-choice-for-johannesburg',
    title: 'Freelancer vs. Agency: The Low-Risk Choice for Johannesburg Web Design',
    excerpt: 'Agencies are expensive. Freelancers are risky. We break down the true cost, risk, and capacity for Joburg businesses.',
    date: '2025-10-23',
    category: 'Business Strategy',
    keywords: ['freelancer vs agency web design', 'Johannesburg web design partner'],
    readingTimeMinutes: 7,
    faqs: [
      { question: 'When is a freelancer the right choice for web design?', answer: 'Simple brochure sites with fixed scope and no SEO or ads integration. For lead-generation systems requiring schema, tracking, and ongoing optimization, capacity and accountability gaps emerge quickly.' },
      { question: 'What risks come with hiring a solo freelancer?', answer: 'Single point of failure if they disappear, no redundancy for deadlines, limited SEO/Google Ads expertise, and no structured QA or post-launch support processes.' },
      { question: 'What does an agency provide that freelancers often cannot?', answer: 'Cross-disciplinary execution (dev + SEO + ads), documented processes, SLA-backed support, and accountability for measurable pipeline outcomes rather than just delivering files.' },
    ],
  },
  {
    slug: 'the-schema-vacuum-technical-seo-advantage',
    title: 'The Schema Vacuum: The Technical SEO Advantage All Your Johannesburg Competitors Are Missing',
    excerpt: 'Learn what Schema Markup is, why local competitors fail to use it, and how it earns Rich Snippets.',
    date: '2025-10-15',
    category: 'Technical SEO',
    keywords: ['schema markup Johannesburg', 'technical SEO advantage', 'rich snippets local SEO'],
    readingTimeMinutes: 7,
    faqs: [
      { question: 'What is schema markup and why do Johannesburg competitors ignore it?', answer: 'Schema is structured JSON-LD that tells search engines exactly what your page represents. Most local agencies skip it because WordPress plugins produce invalid or duplicate markup.' },
      { question: 'Which rich results can schema unlock?', answer: 'FAQ snippets, local business panels, review stars, breadcrumb trails, and speakable summaries in voice search. Each increases SERP real estate and CTR.' },
      { question: 'Does schema directly improve rankings?', answer: 'Schema is not a direct ranking factor, but rich results increase click-through rate and entity clarity, which correlates with stronger visibility especially in local and AI overview contexts.' },
    ],
  },
  {
    slug: 'wix-vs-wordpress-guide-johannesburg-small-businesses',
    title: 'Wix vs WordPress: A Guide for Johannesburg Small Businesses (2025)',
    excerpt: 'DIY website builders vs custom development. True costs, limitations, and when DIY solutions fail Joburg businesses.',
    date: '2025-11-05',
    category: 'Business Strategy',
    keywords: ['Wix vs WordPress Johannesburg', 'DIY website builder South Africa'],
    readingTimeMinutes: 9,
    faqs: [
      { question: 'When is Wix acceptable for a Johannesburg small business?', answer: 'Temporary presence, events, or portfolios with no SEO ambition. Once you need local rankings, Google Ads landing pages, or custom integrations, platform limits become revenue blockers.' },
      { question: 'What are WordPress hidden costs for SMEs?', answer: 'Premium themes, plugin subscriptions, developer fixes after updates break layouts, security patches, and hosting upgrades when traffic grows. TCO often exceeds R30,000 in year one.' },
      { question: 'When should a Joburg business skip DIY builders entirely?', answer: 'When lead generation is the primary goal. Service businesses competing in Sandton, Randburg, or Alberton need performance-engineered sites, not template drag-and-drop pages.' },
    ],
  },
  {
    slug: 'how-much-does-website-cost-south-africa-2025',
    title: 'How Much Does a Website Cost in South Africa? Complete 2025 Pricing Guide',
    excerpt: 'Definitive guide to website costs in South Africa by provider, complexity, and functionality.',
    date: '2025-11-12',
    category: 'Pricing & ROI',
    keywords: ['website cost South Africa 2025', 'web design pricing guide SA'],
    readingTimeMinutes: 10,
    faqs: [
      { question: 'What is the average website cost in South Africa in 2025?', answer: 'R3,000–R500,000 depending on scope. SMEs should expect R10,000–R60,000 for a conversion-focused site with SEO architecture, not just a visual brochure.' },
      { question: 'How do provider types affect pricing?', answer: 'DIY builders cost R0–R500/month but cap SEO and performance. Freelancers charge R5,000–R30,000. Agencies delivering full funnel systems (web + SEO + ads) invest R25,000–R150,000+.' },
      { question: 'What functionality increases website cost the most?', answer: 'E-commerce, booking systems, CRM integrations, multi-location SEO pages, and custom API development. Each adds scope beyond a standard 6-page service site.' },
    ],
  },
];

export function getAllPosts(): BlogPostMeta[] {
  return [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const getPostBySlug = unstable_cache(
  async (slug: string): Promise<BlogPostMeta | undefined> => {
    return BLOG_POSTS.find((p) => p.slug === slug);
  },
  ['blog-post-by-slug'],
  { revalidate: 86400, tags: ['blog'] }
);

export const getAllSlugs = unstable_cache(
  async (): Promise<string[]> => {
    return BLOG_POSTS.map((p) => p.slug);
  },
  ['blog-all-slugs'],
  { revalidate: 86400, tags: ['blog'] }
);

export function getPostsBySilo(silo: BlogPostMeta['silo']): BlogPostMeta[] {
  return BLOG_POSTS.filter((p) => p.silo === silo);
}

export const BLOG_POST_DATES: Record<string, string> = Object.fromEntries(
  BLOG_POSTS.map((p) => [p.slug, p.date]),
);
