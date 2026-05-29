import type { BlogPostMeta } from './types';

/** All blog posts — 15 cornerstone silo articles + 5 legacy Johannesburg posts */
export const BLOG_POSTS: BlogPostMeta[] = [
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
  },

  // ─── Silo 2: Google Ads & Performance Marketing ───
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
  },

  // ─── Silo 3: Local Dominance & Regional Authority ───
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
  },

  // ─── Legacy Johannesburg posts (retained) ───
  {
    slug: 'the-true-cost-of-a-website-in-johannesburg',
    title: 'The True Cost of a Website in Johannesburg: 2025 Price Guide',
    excerpt: 'Your comprehensive guide to JHB web design prices. We break down costs by page, e-commerce, and maintenance fees.',
    date: '2025-10-30',
    category: 'Pricing & ROI',
    keywords: ['website cost Johannesburg', 'web design prices JHB', 'website pricing South Africa'],
    readingTimeMinutes: 8,
  },
  {
    slug: 'freelancer-vs-agency-the-low-risk-choice-for-johannesburg',
    title: 'Freelancer vs. Agency: The Low-Risk Choice for Johannesburg Web Design',
    excerpt: 'Agencies are expensive. Freelancers are risky. We break down the true cost, risk, and capacity for Joburg businesses.',
    date: '2025-10-23',
    category: 'Business Strategy',
    keywords: ['freelancer vs agency web design', 'Johannesburg web design partner'],
    readingTimeMinutes: 7,
  },
  {
    slug: 'the-schema-vacuum-technical-seo-advantage',
    title: 'The Schema Vacuum: The Technical SEO Advantage All Your Johannesburg Competitors Are Missing',
    excerpt: 'Learn what Schema Markup is, why local competitors fail to use it, and how it earns Rich Snippets.',
    date: '2025-10-15',
    category: 'Technical SEO',
    keywords: ['schema markup Johannesburg', 'technical SEO advantage', 'rich snippets local SEO'],
    readingTimeMinutes: 7,
  },
  {
    slug: 'wix-vs-wordpress-guide-johannesburg-small-businesses',
    title: 'Wix vs WordPress: A Guide for Johannesburg Small Businesses (2025)',
    excerpt: 'DIY website builders vs custom development. True costs, limitations, and when DIY solutions fail Joburg businesses.',
    date: '2025-11-05',
    category: 'Business Strategy',
    keywords: ['Wix vs WordPress Johannesburg', 'DIY website builder South Africa'],
    readingTimeMinutes: 9,
  },
  {
    slug: 'how-much-does-website-cost-south-africa-2025',
    title: 'How Much Does a Website Cost in South Africa? Complete 2025 Pricing Guide',
    excerpt: 'Definitive guide to website costs in South Africa by provider, complexity, and functionality.',
    date: '2025-11-12',
    category: 'Pricing & ROI',
    keywords: ['website cost South Africa 2025', 'web design pricing guide SA'],
    readingTimeMinutes: 10,
  },
];

export function getAllPosts(): BlogPostMeta[] {
  return [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getPostsBySilo(silo: BlogPostMeta['silo']): BlogPostMeta[] {
  return BLOG_POSTS.filter((p) => p.silo === silo);
}

export const BLOG_POST_DATES: Record<string, string> = Object.fromEntries(
  BLOG_POSTS.map((p) => [p.slug, p.date]),
);
