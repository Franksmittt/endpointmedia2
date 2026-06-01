// src/app/pricing/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, secureJsonLD, BASE_URL, buildSpeakableWebPageSchema } from '@/lib/seo';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Website Design Pricing Johannesburg',
    description:
      'Transparent ZAR pricing for Next.js web architecture, local SEO, Google Ads management, and Meta campaigns. Once-off builds from R25,000. Flat-fee ad management. No percentage-of-spend traps.',
    path: '/pricing',
    keywords: [
      'website design pricing johannesburg',
      'web design packages south africa',
      'local seo pricing joburg',
      'google ads management pricing johannesburg',
      'next.js website cost south africa',
    ],
  });
}

const webPackages = [
  {
    id: 'strategic-foundation',
    name: 'Strategic Foundation',
    tag: 'Entry Tier',
    description: 'For businesses ready to outrank local competitors and establish market authority.',
    price: 'R25,000',
    timeline: '60-day build',
    highlight: false,
    features: [
      'Deep competitor and market analysis',
      'Custom 5–7 page Next.js 15 architecture',
      'Entity-based SEO with Knowledge Graph integration',
      'Comprehensive suburb targeting strategy',
      'Performance engineered (LCP <1s, 100/100 Core Web Vitals)',
      '60-day intensive research and build process',
    ],
    cta: 'Start Strategic Foundation',
  },
  {
    id: 'market-dominance',
    name: 'Market Dominance',
    tag: 'Most Popular',
    description: 'For serious operators who want to completely outrank every competitor in their market.',
    price: 'R45,000',
    timeline: '90-day build',
    highlight: true,
    features: [
      'Everything in Strategic Foundation, plus:',
      'Complete competitor teardown and positioning strategy',
      '10–15 page architecture with service clusters',
      'Advanced semantic SEO and entity injection',
      'Custom conversion funnels and lead generation systems',
      '90-day intensive research, build, and optimization',
      'Post-launch growth acceleration program',
    ],
    cta: 'Start Market Dominance',
  },
  {
    id: 'category-authority',
    name: 'Category Authority',
    tag: 'Enterprise',
    description: 'For businesses determined to become the undisputed leader in their category.',
    price: 'R75,000+',
    timeline: '120-day build',
    highlight: false,
    features: [
      'Everything in Market Dominance, plus:',
      'Full market mapping and competitive intelligence',
      'Custom integrations and automation systems',
      'Multi-location and suburb expansion architecture',
      'Advanced analytics and conversion optimization',
      '120-day comprehensive strategy, build, and scale',
      'Ongoing strategic partnership and optimization',
    ],
    cta: 'Start Category Authority',
  },
];

const metaAdsPricing = [
  {
    name: 'Account audit & CAPI setup',
    price: 'Quoted after audit',
    detail:
      'Once-off · Meta CAPI + pixel dedup · offer engineering · campaign architecture · creative roadmap',
  },
  {
    name: 'Starter ad spend',
    price: 'R8,000 – R12,000 / mo',
    detail: 'Media budget paid directly to Meta · single-location service businesses',
  },
  {
    name: 'Growth ad spend',
    price: 'R12,001 – R25,000 / mo',
    detail: 'Typical Johannesburg operators · hook-first creative refreshed each sprint',
  },
  {
    name: 'Management retainer',
    price: 'Flat monthly fee',
    detail: 'Scoped by creative volume & funnel complexity — never a % of your ad spend',
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
  {
    name: 'Essential',
    price: 'R500 / month',
    detail: 'Security updates · uptime monitoring · basic support',
  },
  {
    name: 'Professional',
    price: 'R1,200 / month',
    detail: 'Content updates (5 pages) · performance checks · priority support',
  },
  {
    name: 'Enterprise',
    price: 'R2,500 / month',
    detail: 'Unlimited minor updates · SEO monitoring · dedicated support',
  },
];

const includedItems = [
  'Premium hosting, domain, and SSL',
  'Competitor and market research',
  'Strategic consultation included',
  'Maintenance tier mapped to build complexity after launch',
  'Self-sustaining Next.js architecture',
  'Technical SEO baseline and schema setup',
  'Core Web Vitals performance hardening',
  'Conversion-focused page architecture',
  'Analytics and event tracking foundation',
  'Post-launch QA and handover documentation',
];

const pricingPrinciples = [
  {
    title: 'Once-off architecture, not recurring lock-in',
    body: 'Web packages are project fees. You own the code. Hosting renews at standard rates after year one. Maintenance scales with architectural complexity so support liability stays aligned with the build.',
  },
  {
    title: 'Flat-fee ad management',
    body: 'Google Ads management is a fixed monthly retainer based on spend tier. We never take a percentage of your ad budget.',
  },
  {
    title: 'Senior-led delivery',
    body: 'Every package includes research, strategy, and build work led by experienced operators. Not junior account handoffs.',
  },
  {
    title: 'Measured on pipeline, not page views',
    body: 'Pricing reflects outcomes: booked jobs, qualified leads, Map Pack movement, and conversion rate. Not vanity metrics.',
  },
];

const marqueeItems = [
  'Next.js Web Builds',
  'Local SEO',
  'Google Ads',
  'Meta Campaigns',
  'Flat-Fee Retainers',
  'Core Web Vitals',
  'Suburb Targeting',
  'Conversion Architecture',
  'Entity SEO',
  'Transparent ZAR Pricing',
];

const faqItems = [
  {
    question: 'What is included in the website design packages?',
    answer:
      'All web packages include custom Next.js architecture, mobile-first responsive design, entity-based local SEO setup, schema markup, suburb targeting strategy, analytics instrumentation, hosting for one year, domain registration, SSL, and contact form integration. Higher tiers add more pages, advanced SEO clusters, conversion funnels, and longer build and optimization cycles.',
  },
  {
    question: 'Are there any hidden costs or monthly fees?',
    answer:
      'No hidden costs on web packages. The listed price is a once-off project fee. After the first year, hosting and domain renewal typically runs R200–R500 per month. Optional maintenance plans start at R500/month. Google Ads ad spend is paid directly to Google and is separate from management fees.',
  },
  {
    question: 'Can I upgrade from Strategic Foundation to Market Dominance later?',
    answer:
      'Yes. We offer upgrade paths. You pay the difference between packages plus a small migration fee. Choosing the right tier upfront saves time and money, which is why we recommend starting with a free architecture audit.',
  },
  {
    question: 'How long does it take to build my website?',
    answer:
      'Strategic Foundation typically takes 60 days, Market Dominance 90 days, and Category Authority 120 days. Timelines include research, build, and optimization phases. Actual delivery depends on content readiness and feedback speed.',
  },
  {
    question: 'How does Google Ads pricing work?',
    answer:
      'Infrastructure setup is R14,500–R20,000 once-off (tracking, campaign architecture, landing pages). Monthly management starts at R6,500/month for up to R20k ad spend, with Premium covering R20,001–R50,000 and Elite for R50,001+ accounts. Ad spend is billed separately to Google. We never markup media.',
  },
  {
    question: 'What if I need changes after my website is built?',
    answer:
      'Minor changes are included during the build phase. After launch, maintenance packages start at R500/month for updates, security patches, and minor content changes. Major feature work is quoted separately.',
  },
  {
    question: 'Do you offer Meta (Facebook & Instagram) ads pricing?',
    answer:
      'Meta management is scoped per engagement based on creative volume, funnel complexity, and recommended ad budget. Most Johannesburg service businesses run R8,000–R25,000/month in ad spend. See our Facebook Ads service page or book an audit for a tailored quote.',
  },
  {
    question: 'How do I know which package is right for me?',
    answer:
      'Book a free architecture audit. We map your market, competitors, pipeline leaks, and growth gaps, then recommend the right investment tier before you commit to anything.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/pricing#service`,
  name: 'Endpoint Media Website & Local SEO Packages',
  description:
    'Once-off website design and local SEO implementation packages engineered for Johannesburg service businesses.',
  provider: {
    '@id': `${BASE_URL}#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website & Local SEO Packages',
    itemListElement: webPackages.map((pkg) => ({
      '@type': 'Offer',
      name: pkg.name,
      price: pkg.price.replace(/[^0-9]/g, '') || '75000',
      priceCurrency: 'ZAR',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/pricing#${pkg.id}`,
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}/pricing#faq`,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const pricingSpeakableSchema = buildSpeakableWebPageSchema({
  url: `${BASE_URL}/pricing`,
  name: 'Endpoint Media Website Design Pricing',
  description:
    'Transparent website design and local SEO packages for Johannesburg service businesses.',
  cssSelectors: ['#pricing-headline', '#pricing-summary'],
});

function PackageCard({ pkg }: { pkg: (typeof webPackages)[number] }) {
  return (
    <article
      id={pkg.id}
      className={`flex flex-col rounded-sm border p-8 ${
        pkg.highlight ? 'border-zinc-500 bg-black' : 'border-zinc-800 bg-zinc-950/70'
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{pkg.tag}</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{pkg.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{pkg.description}</p>

      <p className="mt-6 flex flex-wrap items-baseline gap-x-2 text-4xl font-bold tracking-tight text-white">
        <span>{pkg.price}</span>
        <span className="text-base font-normal text-zinc-500">once-off</span>
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-zinc-600">
        {pkg.timeline}
      </p>

      <ul className="mt-8 flex-grow space-y-3 border-t border-zinc-800 pt-8 text-sm text-zinc-300">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 text-zinc-500" aria-hidden="true">
              •
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`mt-8 block w-full rounded-sm px-6 py-3 text-center text-sm font-semibold transition-colors ${
          pkg.highlight
            ? 'bg-white text-black hover:bg-zinc-200'
            : 'border border-zinc-700 text-zinc-100 hover:bg-zinc-900'
        }`}
      >
        {pkg.cta}
      </Link>
    </article>
  );
}

function PricingTierGrid({
  tiers,
  columns = 3,
}: {
  tiers: { name: string; price: string; detail: string }[];
  columns?: 2 | 3 | 4;
}) {
  const gridClass =
    columns === 4
      ? 'md:grid-cols-2 xl:grid-cols-4'
      : columns === 2
        ? 'md:grid-cols-2'
        : 'md:grid-cols-3';

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {tiers.map((tier) => (
        <article
          key={tier.name}
          className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">{tier.name}</p>
          <p className="mt-3 text-2xl font-bold text-white">{tier.price}</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{tier.detail}</p>
        </article>
      ))}
    </div>
  );
}

const PricingPage = () => {
  return (
    <div className="bg-black text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(pricingSpeakableSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Transparent ZAR Pricing · Johannesburg
          </p>
          <h1
            id="pricing-headline"
            className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl"
          >
            Premium Investment. Maximum Return.
          </h1>
          <p
            id="pricing-summary"
            className="mb-4 max-w-3xl text-lg tracking-[-0.3px] text-[#A1A1AA] md:text-xl"
          >
            We do not compete on price. We compete on results. Every package is an intensive,
            research-driven investment engineered to put you above your competitors and generate
            measurable pipeline growth.
          </p>
          <p className="mb-8 max-w-2xl text-base text-zinc-500">
            Fewer clients · Senior-led delivery · Once-off architecture · Flat-fee ad management
          </p>
          <nav
            aria-label="Pricing sections"
            className="mb-8 flex flex-wrap items-center justify-center gap-2"
          >
            {[
              { href: '#websites', label: 'Websites' },
              { href: '#google-ads', label: 'Google Ads' },
              { href: '#meta-ads', label: 'Facebook & Instagram' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Book Free Architecture Audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-100 transition-colors hover:bg-zinc-900"
            >
              See Client Results
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-zinc-800 bg-zinc-950/85 py-8 md:py-10">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            What You Are Investing In
          </p>
          <div className="proof-marquee relative overflow-hidden">
            <div className="proof-marquee-track flex w-max items-center gap-3">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="whitespace-nowrap rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Pricing Philosophy
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-1.5px] text-white md:text-5xl">
                We Price For Outcomes. Not Hours.
              </h2>
              <div
                aria-hidden="true"
                className="mt-5 h-px w-28 bg-gradient-to-r from-teal-400/90 to-transparent"
              />
              <p className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-1px] text-zinc-500 md:text-3xl">
                Cheap sites cost more when they do not convert.
              </p>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              <p className="text-zinc-300">
                Most agencies sell page counts and monthly retainers nobody reads. We sell
                architecture that ranks, converts, and gives paid traffic somewhere worth landing.
                That is why our web packages start at R25,000 and our Google Ads management is
                flat-fee, not a percentage of your spend.
              </p>

              <blockquote className="border-l border-teal-400/60 bg-zinc-900/35 py-3 pl-6 pr-4 text-xl leading-snug text-white md:text-2xl">
                We would rather work with fewer clients who dominate their market than hundreds who
                become statistics in a shared WordPress template.
              </blockquote>

              <p>
                Every price on this page reflects intensive research, custom Next.js engineering,
                and strategic consultation. If you need the cheapest quote on the block, we are not
                the right fit. If you need a revenue system that compounds, keep reading.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pricingPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Web packages */}
      <section id="websites" className="bg-zinc-950 py-20 md:py-28 scroll-mt-28">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Web Architecture
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
              Once-off · Next.js 15 · Entity SEO
            </p>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            Next.js Website Packages
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            Custom architecture built for speed, suburb-level SEO, and conversion. Not page builders.
            Not WordPress templates. Every tier includes research, strategy, and senior-led delivery.
          </p>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
            {webPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="rounded-sm border border-zinc-800 bg-black/50 p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Not Sure Yet?
              </p>
              <p className="mt-3 text-zinc-300">
                Our free architecture audit maps your market, competitors, and growth gaps, then
                recommends the right investment tier.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                Book Free Architecture Audit
              </Link>
            </div>

            <div className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-6 md:p-8 lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Included In Every Web Package
              </p>
              <ul className="mt-5 grid gap-x-8 gap-y-3 md:grid-cols-2">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className="mt-2 h-px w-4 shrink-0 bg-zinc-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 font-mono text-xs uppercase tracking-[0.14em] leading-relaxed text-zinc-600">
            Pricing reflects intensive research, custom engineering, and strategic consultation. We
            work exclusively with businesses committed to market leadership.
          </p>
        </div>
      </section>

      {/* Google Ads pricing */}
      <section id="google-ads" className="bg-black py-20 md:py-28 scroll-mt-28">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Google Ads Management
            </p>
            <Link
              href="/services/google-ads-pricing"
              className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600 transition-colors hover:text-zinc-400"
            >
              Full pricing breakdown →
            </Link>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            Flat-Fee Paid Search Retainers
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            Infrastructure setup once. Management scaled to ad spend tier. Ad spend is paid directly
            to Google. We never take a percentage of your budget.
          </p>

          <div className="mt-10">
            <PricingTierGrid tiers={googleAdsPricing} columns={4} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services/google-ads"
              className="rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
            >
              Google Ads Services
            </Link>
            <Link
              href="/compare/google-ads-flat-fee-vs-percentage-spend"
              className="rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
            >
              Flat-Fee vs % of Spend
            </Link>
            <Link
              href="/insights/south-africa-google-ads-cpc-benchmarks"
              className="rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
            >
              SA CPC Benchmarks
            </Link>
          </div>
        </div>
      </section>

      {/* Meta Ads pricing */}
      <section id="meta-ads" className="bg-zinc-950 py-20 md:py-28 scroll-mt-28">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Meta Ads Management
            </p>
            <Link
              href="/services/facebook-ads"
              className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600 transition-colors hover:text-zinc-400"
            >
              Facebook & Instagram services →
            </Link>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            Facebook & Instagram Retainers
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            Meta fills the top and middle of your funnel while Google captures active search intent.
            Ad spend is paid directly to Meta. Management is a flat monthly retainer scoped after
            audit based on creative volume, funnel complexity, and placements (Facebook, Instagram,
            Messenger, Audience Network).
          </p>

          <div className="mt-10">
            <PricingTierGrid tiers={metaAdsPricing} columns={4} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services/facebook-ads"
              className="rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
            >
              Meta Ads Services
            </Link>
            <Link
              href="/blog/meta-andromeda-manual-media-buying-dead"
              className="rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
            >
              Andromeda & Entity ID Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Optional Maintenance
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            Post-Launch Support Plans
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            Our Next.js architecture is self-sustaining. Maintenance is optional, not mandatory.
            Choose a plan if you want ongoing updates, monitoring, and priority support.
          </p>
          <div className="mt-10">
            <PricingTierGrid tiers={maintenancePricing} columns={3} />
          </div>
          <Link
            href="/services/website-maintenance"
            className="mt-6 inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-teal-400/90"
          >
            Website Maintenance Details →
          </Link>
        </div>
      </section>

      {/* ROI framing */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            The Real Cost Comparison
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            What Cheap Actually Costs You
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
                Typical R5k–R15k Template Build
              </p>
              <ul className="mt-5 space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-zinc-600">×</span>
                  <span>3–5 second load times that kill paid traffic Quality Score</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-600">×</span>
                  <span>No suburb targeting, schema, or entity SEO foundation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-600">×</span>
                  <span>Plugin bloat that breaks Core Web Vitals within months</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-600">×</span>
                  <span>Rebuild required within 12–18 months when rankings stall</span>
                </li>
              </ul>
            </article>

            <article className="rounded-sm border border-teal-400/30 bg-zinc-950/70 p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-400/80">
                Endpoint Media Architecture
              </p>
              <ul className="mt-5 space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400/80">•</span>
                  <span>Sub-second LCP with Next.js 15 server components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400/80">•</span>
                  <span>Entity SEO, schema, and suburb pages from day one</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400/80">•</span>
                  <span>Conversion architecture wired for Google Ads and Meta landing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400/80">•</span>
                  <span>Full code ownership. No platform lock-in. Scales as you grow</span>
                </li>
              </ul>
            </article>
          </div>

          <p className="mt-8 max-w-3xl text-zinc-400">
            Need proof?{' '}
            <Link href="/case-studies" className="text-white underline-offset-4 hover:underline">
              Read our case studies
            </Link>{' '}
            or see how the full system connects on our{' '}
            <Link href="/process" className="text-white underline-offset-4 hover:underline">
              process page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">FAQ</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Pricing Questions Answered
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            Common questions about web packages, ad management fees, upgrades, and timelines.
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
              Ready To Pick Your Investment Tier?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
              Book a free architecture audit with Frank Smit. We will walk through your current site,
              map pipeline leaks, recommend the right package, and give you transparent pricing before
              you commit to anything.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Book Free Architecture Audit
              </Link>
              <Link
                href="tel:+27769724559"
                className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                Call 076 972 4559
              </Link>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-sm text-zinc-500">
              Need paid traffic or funnel fixes too? Explore our{' '}
              <Link href="/services/google-ads" className="text-zinc-300 hover:text-white">
                Google Ads
              </Link>
              ,{' '}
              <Link href="/services/facebook-ads" className="text-zinc-300 hover:text-white">
                Meta Ads
              </Link>
              , and{' '}
              <Link
                href="/services/conversion-rate-optimization"
                className="text-zinc-300 hover:text-white"
              >
                CRO Sprints
              </Link>{' '}
              for turnkey acquisition.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
