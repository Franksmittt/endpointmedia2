// src/app/services/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Web Design, SEO, Google Ads & Meta Services Johannesburg',
    description:
      'Full service catalog for Johannesburg businesses: Next.js web architecture, local SEO, Google Ads, Meta social management, CRO, and industry specialists, with transparent ZAR pricing.',
    path: '/services',
    keywords: [
      'web design johannesburg',
      'local SEO services johannesburg',
      'google ads johannesburg',
      'facebook ads johannesburg',
      'website development johannesburg',
      'next.js web design south africa',
      'digital marketing services johannesburg',
    ],
  });
}

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  price?: string;
  badge?: string;
};

type ServiceCategory = {
  id: string;
  label: string;
  title: string;
  intro: string;
  pricingNote?: string;
  pricingTiers?: { name: string; price: string; detail: string }[];
  services: ServiceItem[];
  extraLinks?: { title: string; href: string }[];
};

const webPackages = [
  {
    name: 'Strategic Foundation',
    price: 'R25,000',
    detail: '5–7 page Next.js architecture · entity SEO · suburb strategy · 60-day build',
  },
  {
    name: 'Market Dominance',
    price: 'R45,000',
    detail: '10–15 pages · competitor teardown · conversion funnels · 90-day build',
  },
  {
    name: 'Category Authority',
    price: 'R75,000+',
    detail: 'Full market mapping · multi-location architecture · 120-day build & scale',
  },
];

const googleAdsPricing = [
  {
    name: 'Infrastructure setup',
    price: 'R14,500 – R20,000',
    detail: 'Once-off · GA4/GTM · campaign architecture · 1–3 landing pages',
  },
  {
    name: 'Growth management',
    price: 'R6,500 / month',
    detail: 'Up to R20k ad spend · Search campaigns · monthly reporting',
  },
  {
    name: 'Premium management',
    price: 'R12,500 / month',
    detail: 'R20,001–R50,000 ad spend · Search + PMax + Local · A/B testing',
  },
  {
    name: 'Elite management',
    price: 'R22,000+ / month',
    detail: 'R50,001+ ad spend · full stack · weekly strategy · dedicated lead',
  },
];

const maintenancePricing = [
  { name: 'Essential', price: 'R500 / month', detail: 'Security updates · uptime monitoring · basic support' },
  { name: 'Professional', price: 'R1,200 / month', detail: 'Content updates (5 pages) · performance checks · priority support' },
  { name: 'Enterprise', price: 'R2,500 / month', detail: 'Unlimited minor updates · SEO monitoring · dedicated support' },
];

const serviceCategories: ServiceCategory[] = [
  {
    id: 'web-architecture',
    label: 'Web Architecture',
    title: 'Next.js Web Design & Development',
    intro:
      'Your website is the conversion engine everything else runs on. We engineer custom Next.js architecture, not WordPress templates or page builders, built for sub-second load times, entity-based SEO, and lead generation from day one. Every build includes schema markup, suburb targeting strategy, analytics instrumentation, and Core Web Vitals hardening.',
    pricingNote:
      'Once-off project fees. Post-launch maintenance is mapped to build complexity to keep support and engineering liability aligned.',
    pricingTiers: webPackages,
    services: [
      {
        title: 'Website Development',
        description:
          'Custom Next.js 15 builds with entity-based SEO, semantic content clusters, and conversion-focused page architecture. From R15,000 for focused sites to R150,000+ for enterprise solutions.',
        href: '/services/website-development',
        price: 'From R15,000',
        badge: 'Core',
      },
      {
        title: 'Web Design Firm Services',
        description:
          'Enterprise-grade digital architecture for firms that need scalable, performance-first websites with senior-led delivery and full code ownership.',
        href: '/services/web-design-firms',
        price: 'From R25,000',
        badge: 'Enterprise',
      },
      {
        title: 'Website Redesign',
        description:
          'Transform outdated brochure sites into revenue assets. URL preservation, redirect mapping, and SEO-safe migrations so rankings improve. Not disappear.',
        href: '/services/website-redesign',
        price: 'R10,000 – R60,000',
        badge: 'Redesign',
      },
      {
        title: 'Custom Development & Integrations',
        description:
          'Headless builds with CRM/ERP integrations, multi-step quoting, bespoke dashboards, and automation systems for operators who have outgrown off-the-shelf tools.',
        href: '/services/custom-development',
        price: 'R40,000 – R500,000+',
        badge: 'Custom',
      },
      {
        title: 'Shopify Expert Builds',
        description:
          'Speed-to-market e-commerce with CRO-ready layouts, Klaviyo flows, and onsite SEO baked in. From basic stores to advanced custom feature builds.',
        href: '/services/shopify-expert',
        price: 'R13,000 – R35,000+',
        badge: 'E-commerce',
      },
      {
        title: 'Website Design Prices & ROI Calculator',
        description:
          'Transparent pricing methodology and interactive ROI calculator. Understand why per-page pricing is dead and what a Knowledge Graph asset actually costs.',
        href: '/services/website-design-prices',
        price: 'See calculator',
        badge: 'Pricing',
      },
    ],
  },
  {
    id: 'local-seo',
    label: 'Local SEO & Reputation',
    title: 'Hyper-Local SEO & Review Management',
    intro:
      'Organic discoverability compounds over time. We build suburb-level landing pages, optimize Google Business Profile, implement LocalBusiness schema, and manage citations so you rank for "service + suburb" queries and dominate the Map Pack. The highest-intent local traffic source in Johannesburg.',
    services: [
      {
        title: 'Hyper-Local SEO Sprints',
        description:
          'Suburb silos, GBP optimization, citation building, and review accelerators across Sandton, Midrand, Alberton, Roodepoort, and greater Johannesburg. Initial wins in 30–45 days.',
        href: '/services/local-seo',
        price: 'Maintenance SEO: R2,000–R5,000 / month · Market Domination SEO: R8,500–R15,000 / month',
        badge: 'SEO',
      },
      {
        title: 'Review Management & Reputation',
        description:
          'Automated review generation workflows, professional responses within 24 hours, multi-platform monitoring, and AggregateRating schema for rich snippet stars in search.',
        href: '/services/review-management',
        price: 'Monthly retainer',
        badge: 'Reputation',
      },
    ],
    extraLinks: [
      { title: 'All Johannesburg Locations', href: '/locations' },
      { title: 'Local SEO Blueprint (Blog)', href: '/blog/local-seo-blueprint' },
    ],
  },
  {
    id: 'google-ads',
    label: 'Google Ads',
    title: 'Google Ads & Paid Search Management',
    intro:
      'High-intent paid search captures demand the moment someone searches. We rebuild campaign architecture, deploy dedicated Next.js landing pages, wire GA4 + call tracking, and optimize weekly for cost-per-booked-job. Not vanity clicks. Flat-fee management separate from ad spend. No percentage-of-spend traps.',
    pricingNote: 'Ad spend billed directly to Google. Management fees below. Month-to-month after setup.',
    pricingTiers: googleAdsPricing,
    services: [
      {
        title: 'Google Ads Management Hub',
        description:
          'Full-stack paid search for Johannesburg service businesses: Search, Performance Max, landing pages, tracking, and operator-level reporting tied to pipeline value.',
        href: '/services/google-ads',
        price: 'From R6,500 / mo',
        badge: 'Hub',
      },
      {
        title: 'B2B Google Ads Management',
        description:
          'Flat-fee PPC for manufacturing, finance, and corporate Gauteng. Next.js landing pages cut CPC via Quality Score while filling the pipeline with qualified B2B leads.',
        href: '/services/b2b-google-ads-management',
        price: 'From R6,500 / mo',
        badge: 'B2B',
      },
      {
        title: 'Performance Max & Local Ads',
        description:
          'PMax campaign structures with creative asset discipline, Local Ads + GBP signals, and suburb geo-targeting so budget stays in high-intent Gauteng corridors.',
        href: '/services/performance-max-google-ads',
        badge: 'PMax',
      },
      {
        title: 'Google Ads Landing Pages',
        description:
          'Dedicated Next.js landing pages with message match, zero-nav leak layouts, sub-2s LCP, and forms wired to GA4 and your CRM. Stop sending R50 clicks to your homepage.',
        href: '/services/google-ads-landing-pages',
        badge: 'CRO',
      },
      {
        title: 'Google Ads Pricing (Full Breakdown)',
        description:
          'Complete transparent ZAR pricing: setup fees, management tiers, ad spend guidance, and why flat-fee beats percentage-of-spend models.',
        href: '/services/google-ads-pricing',
        price: 'Transparent ZAR',
        badge: 'Pricing',
      },
      {
        title: 'Manufacturing Google Ads',
        description:
          'Industrial B2B lead generation for Gauteng manufacturers and logistics operators. High-CPC verticals managed with Quality Score engineering.',
        href: '/services/google-ads-manufacturing',
        badge: 'Industry',
      },
      {
        title: 'Financial Services Google Ads',
        description:
          'Compliance-ready paid acquisition for advisory firms, wealth managers, and financial services in competitive Sandton and Johannesburg markets.',
        href: '/services/google-ads-financial-services',
        badge: 'Industry',
      },
      {
        title: 'Automotive Google Ads',
        description:
          'Panel beaters, tyre clinics, mechanics, and automotive services. Local intent campaigns with suburb modifiers and call tracking.',
        href: '/services/google-ads-automotive',
        badge: 'Industry',
      },
    ],
    extraLinks: [
      { title: 'Google Ads Sandton', href: '/services/google-ads-sandton' },
      { title: 'Google Ads Midrand', href: '/services/google-ads-midrand' },
      { title: 'Google Ads Alberton', href: '/services/google-ads-alberton' },
      { title: 'Google Ads Alrode', href: '/services/google-ads-alrode' },
      { title: 'Google Ads Wadeville', href: '/services/google-ads-wadeville' },
      { title: 'Google Ads Bedfordview', href: '/services/google-ads-bedfordview' },
      { title: 'Flat-Fee vs % of Spend', href: '/compare/google-ads-flat-fee-vs-percentage-spend' },
      { title: 'CPC Benchmarks (Insights)', href: '/insights/south-africa-google-ads-cpc-benchmarks' },
    ],
  },
  {
    id: 'meta-ads',
    label: 'Meta Ads',
    title: 'Facebook & Instagram Ads Management',
    intro:
      'Meta fills the top and middle of your funnel: demand creation, offer testing, and remarketing, while Google captures active search intent. We engineer offers, build hook-first creative systems refreshed every sprint, wire Meta CAPI + GA4 attribution, and optimize for cost-per-qualified-lead across Facebook, Instagram, Messenger, and Audience Network placements.',
    pricingNote: 'Recommended ad budgets: R8,000 – R25,000/month for most Johannesburg service businesses. Management scoped per engagement.',
    services: [
      {
        title: 'Facebook & Instagram Ads',
        description:
          'Full-funnel Meta management: offer engineering, creative systems, audience layering (geo, lookalike, remarketing), CAPI tracking, and weekly optimization sprints.',
        href: '/services/facebook-ads',
        price: 'R8k – R25k ad spend',
        badge: 'Meta',
      },
    ],
  },
  {
    id: 'conversion-growth',
    label: 'Conversion & Rescue',
    title: 'CRO, Funnel Fixes & Growth Rescue',
    intro:
      'Sometimes the problem is not traffic. It is conversion. We run 30-day CRO sprints to fix funnel leaks, deploy winning variants across landing pages, and roll insights into paid campaigns. Growth Rescue is our rapid-response engagement when tracking is broken, ads are bleeding budget, or leads have flatlined.',
    services: [
      {
        title: 'Conversion Rate Optimization',
        description:
          'Funnel forensics, UX fixes, offer upgrades, and A/B testing in 30-day cycles. Average +46% lift in form submissions after the first sprint.',
        href: '/services/conversion-rate-optimization',
        price: '30-day sprints',
        badge: 'CRO',
      },
      {
        title: 'Growth Rescue',
        description:
          'Emergency turnaround for broken funnels, analytics, and paid media. Tracking triage within 48 hours, landing page rebuilds, and campaign restructure to stabilise lead flow in 21–30 days.',
        href: '/services/growth-rescue',
        price: 'From R20,000',
        badge: 'Rescue',
      },
    ],
  },
  {
    id: 'industry',
    label: 'Industry Specialists',
    title: 'Industry-Specific Website & Ads Solutions',
    intro:
      'Regulated and high-trust verticals need more than a generic template. We build compliant intake flows, practice area architecture, booking automations, and industry-specific paid search plays for sectors where credibility and conversion architecture matter most.',
    services: [
      {
        title: 'Law Firm Websites',
        description:
          'LPC/POPIA-compliant intake engines with attorney bios, practice area clusters, automated review funnels, and local SEO for legal professionals.',
        href: '/services/law-firm-websites',
        badge: 'Legal',
      },
      {
        title: 'Medical & Aesthetic Websites',
        description:
          'HPCSA-ready patient journeys with booking automations, service hubs, secure intake workflows, and local SEO for clinics and aesthetic practices.',
        href: '/services/medical-websites',
        badge: 'Medical',
      },
    ],
    extraLinks: [
      { title: 'Law Firms Industry Hub', href: '/industries/law-firms' },
      { title: 'Medical Industry Hub', href: '/industries/medical' },
      { title: 'Finance Industry Hub', href: '/industries/finance' },
      { title: 'Manufacturing & Logistics Hub', href: '/industries/manufacturing-logistics' },
    ],
  },
  {
    id: 'maintenance',
    label: 'Ongoing Support',
    title: 'Website Maintenance & Support',
    intro:
      'Next.js sites need less maintenance than WordPress, but they still need security updates, performance monitoring, and content changes. Our month-to-month plans scale with your business. No long-term contracts. Upgrade, downgrade, or cancel with 30 days notice.',
    pricingNote: 'All plans month-to-month. No lock-in contracts.',
    pricingTiers: maintenancePricing,
    services: [
      {
        title: 'Website Maintenance & Support',
        description:
          'Keep your site fast, secure, and updated. Security patches, backups, content updates, performance monitoring, and priority support when you need it.',
        href: '/services/website-maintenance',
        price: 'From R500 / month',
        badge: 'Recurring',
      },
    ],
  },
];

const marqueeItems = [
  'Next.js Architecture',
  'Local SEO',
  'Google Ads',
  'Meta Ads',
  'CRO Sprints',
  'Review Management',
  'Industry Specialists',
  'Growth Rescue',
];

const faqItems = [
  {
    question: 'What services does Endpoint Media offer?',
    answer:
      'We offer Next.js website development and redesign, custom development, Shopify builds, hyper-local SEO, review management, Google Ads management (Search, PMax, Local), Meta (Facebook & Instagram) ads, conversion rate optimization, growth rescue turnarounds, industry-specific websites for law and medical firms, and ongoing website maintenance, all engineered as one accountable revenue system.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'Our once-off web architecture packages start at R25,000 (Strategic Foundation), R45,000 (Market Dominance), and R75,000+ (Category Authority). Custom development ranges from R40,000 to R500,000+. Redesigns run R10,000–R60,000. See /pricing or /services/website-design-prices for full breakdowns.',
  },
  {
    question: 'How much does Google Ads management cost?',
    answer:
      'Infrastructure setup is R14,500–R20,000 once-off (tracking, campaign architecture, landing pages). Monthly management starts at R6,500/month for up to R20k ad spend, with Premium covering R20,001–R50,000 and Elite for R50,001+ accounts. Ad spend is billed separately to Google. We never take a percentage of your budget.',
  },
  {
    question: 'Can I start with one service or do I need the full stack?',
    answer:
      'You can start with any single service: a website build, Google Ads sprint, or Meta management engagement. We still run discovery so whatever we build connects to your broader growth plan. Most clients who see compounding results adopt multiple channels over time.',
  },
  {
    question: 'Do you work across all Johannesburg suburbs?',
    answer:
      'Yes. We serve Sandton, Rosebank, Bryanston, Randburg, Rivonia, Midrand, Roodepoort, Fourways, Waterfall, Benoni, Alberton, Meyersdal, and surrounding areas, with suburb-specific SEO pages and geo-targeted ad campaigns.',
  },
  {
    question: 'What makes Endpoint Media different from other agencies?',
    answer:
      'We engineer one technical stack. Next.js architecture, local SEO, Google Ads, and Meta, with unified tracking and senior-led delivery. No junior account handoffs, no percentage-of-spend traps, and no cosmetic refreshes disconnected from measurable pipeline outcomes.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}/services#faq`,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

function pricingGridClass(count: number): string {
  if (count === 4) return 'mt-6 grid gap-4 sm:grid-cols-2';
  if (count === 3) return 'mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3';
  if (count === 2) return 'mt-6 grid gap-4 sm:grid-cols-2';
  return 'mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3';
}

function PricingStrip({
  tiers,
  note,
}: {
  tiers: { name: string; price: string; detail: string }[];
  note?: string;
}) {
  return (
    <div className="mt-10 rounded-sm border border-zinc-800 bg-black/40 p-6 md:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
        Pricing Overview
      </p>
      {note ? <p className="mt-2 text-sm text-zinc-500">{note}</p> : null}
      <div className={pricingGridClass(tiers.length)}>
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-5"
          >
            <p className="text-sm font-semibold text-white">{tier.name}</p>
            <p className="mt-2 text-2xl font-bold text-teal-400/90">{tier.price}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">{tier.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <Link
      href={service.href}
      className="group flex flex-col rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 transition-colors hover:border-teal-400/70"
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold text-white group-hover:text-zinc-100">
          {service.title}
        </h3>
        {service.badge ? (
          <span className="rounded-sm border border-zinc-800 bg-black/40 px-2 py-0.5 text-xs text-zinc-500">
            {service.badge}
          </span>
        ) : null}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {service.description}
      </p>
      {service.price ? (
        <p className="mt-4 font-mono text-xs tracking-wide text-teal-400/90">{service.price}</p>
      ) : null}
      <span className="mt-4 text-sm text-zinc-500 group-hover:text-white">Learn more →</span>
    </Link>
  );
}

function serviceGridClass(count: number): string {
  if (count <= 1) return 'mt-10 grid max-w-xl gap-4';
  if (count === 2) return 'mt-10 grid gap-4 md:grid-cols-2';
  return 'mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3';
}

const ServicesPage = () => {
  return (
    <div className="bg-black text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Full Service Catalog · Johannesburg
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Digital Services Engineered For Revenue
          </h1>
          <p className="mb-4 max-w-3xl text-lg tracking-[-0.3px] text-[#A1A1AA] md:text-xl">
            Next.js web architecture, local SEO, Google Ads, Meta social management, CRO, and
            industry specialists, planned, built, and measured as one accountable growth system.
          </p>
          <p className="mb-8 max-w-2xl text-base text-zinc-500">
            Transparent ZAR pricing. Senior-led delivery. No percentage-of-spend traps.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Get Free Growth Audit
            </Link>
            <Link
              href="/process"
              className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-100 transition-colors hover:bg-zinc-900"
            >
              See Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-zinc-800 bg-zinc-950/85 py-8 md:py-10">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            What We Build & Manage
          </p>
          <div className="proof-marquee relative overflow-hidden">
            <div className="proof-marquee-track flex w-max items-center gap-3">
              {[...marqueeItems, ...marqueeItems].map((title, index) => (
                <span
                  key={`${title}-${index}`}
                  className="whitespace-nowrap rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300"
                >
                  {title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System overview */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                One Revenue Stack
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-1.5px] text-white md:text-5xl">
                Services That Compound. Not Compete
              </h2>
              <div
                aria-hidden="true"
                className="mt-5 h-px w-28 bg-gradient-to-r from-teal-400/90 to-transparent"
              />
              <p className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-1px] text-zinc-500 md:text-3xl">
                Pick one channel or deploy the full system.
              </p>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              <p className="text-zinc-300">
                Most agencies sell web design, SEO, Google Ads, and social media as separate
                projects with separate teams. That is why pipelines leak: paid traffic lands on
                slow pages, SEO never gets ad support, and nobody can tell which channel drove the
                deal.
              </p>

              <blockquote className="border-l border-teal-400/60 bg-zinc-900/35 py-3 pl-6 pr-4 text-xl leading-snug text-white md:text-2xl">
                Every service below is designed to plug into the same Next.js foundation, suburb
                targeting, and tracking infrastructure, so growth compounds instead of
                conflicting.
              </blockquote>

              <p>
                Browse by category, check pricing at a glance, and drill into any service page for
                full deliverables. Not sure where to start?{' '}
                <Link href="/contact" className="text-white underline-offset-4 hover:underline">
                  Book a strategy call
                </Link>{' '}
                or{' '}
                <Link href="/process" className="text-white underline-offset-4 hover:underline">
                  read our full process
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Quick pricing snapshot */}
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Web Architecture
              </p>
              <p className="mt-3 text-3xl font-bold text-white">R25k – R75k+</p>
              <p className="mt-2 text-sm text-zinc-400">Once-off Next.js builds · 3 tier packages</p>
              <Link
                href="/pricing"
                className="mt-4 inline-block text-sm text-zinc-400 hover:text-white"
              >
                View web packages →
              </Link>
            </div>
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Google Ads
              </p>
              <p className="mt-3 text-3xl font-bold text-white">R6.5k – R22k+</p>
              <p className="mt-2 text-sm text-zinc-400">Monthly management · flat-fee · ad spend separate</p>
              <Link
                href="/services/google-ads-pricing"
                className="mt-4 inline-block text-sm text-zinc-400 hover:text-white"
              >
                Full ads pricing →
              </Link>
            </div>
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Meta Ads
              </p>
              <p className="mt-3 text-3xl font-bold text-white">R8k – R25k</p>
              <p className="mt-2 text-sm text-zinc-400">Recommended monthly ad budget · management scoped per engagement</p>
              <Link
                href="/services/facebook-ads"
                className="mt-4 inline-block text-sm text-zinc-400 hover:text-white"
              >
                Meta ads services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service categories */}
      {serviceCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={index % 2 === 0 ? 'bg-zinc-950 py-20 md:py-28' : 'bg-black py-20 md:py-28'}
        >
          <div className="container mx-auto px-6">
            <div className="mb-10 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                {category.label}
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
                {category.services.length} service{category.services.length !== 1 ? 's' : ''}
              </p>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
              {category.title}
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-400 md:text-lg">
              {category.intro}
            </p>

            {category.pricingTiers ? (
              <PricingStrip tiers={category.pricingTiers} note={category.pricingNote} />
            ) : category.pricingNote ? (
              <p className="mt-6 text-sm text-zinc-500">{category.pricingNote}</p>
            ) : null}

            <div className={serviceGridClass(category.services.length)}>
              {category.services.map((service) => (
                <ServiceCard key={service.href} service={service} />
              ))}
            </div>

            {category.extraLinks && category.extraLinks.length > 0 ? (
              <div className="mt-10 border-t border-zinc-800 pt-8">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Related Pages
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.extraLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">FAQ</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Services & Pricing Questions
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            Common questions about scope, pricing, and how our services work together.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-sm border border-zinc-800 bg-black/40 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center md:p-12">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
              Start with a free growth audit. We will map your pipeline leaks, recommend the right
              combination of services, and give you transparent pricing before any commitment.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Get Free Growth Audit
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                View Web Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
