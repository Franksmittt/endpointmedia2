// src/app/process/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL, buildHowToSchema } from '@/lib/seo';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Our Full Revenue System Process | Web, SEO, Google Ads & Meta',
    description:
      'From initial strategy call through forensic research, Next.js market dominance, Google Ads, Meta social management, and unified tracking. See exactly how Endpoint Media engineers growth for Johannesburg service businesses.',
    path: '/process',
    keywords: [
      'web design process johannesburg',
      'google ads management process',
      'facebook ads process',
      'next.js web development process',
      'local seo process',
      'endpoint media method',
      'revenue system agency',
    ],
  });
}

const masterPhases = [
  {
    step: '01',
    phase: 'Week 0',
    title: 'Initial Strategy Call & Fit Assessment',
    summary:
      'Every engagement starts with a direct conversation. Not a generic proposal deck. We learn how your business actually makes money before touching a single line of code or ad copy.',
    deliverables: [
      '15-minute or full discovery session with senior leadership',
      'Business model review: margins, service areas, sales cycle, and capacity',
      'Audit of current website, ad accounts, GBP, and analytics access',
      'Pipeline leak diagnosis: where visibility, traffic, or conversion breaks down',
      'Scope alignment on web architecture, SEO, Google Ads, and/or Meta management',
    ],
    highlight: 'Senior-led from day one',
  },
  {
    step: '02',
    phase: 'Week 1',
    title: 'Forensic Research & Competitive Intelligence',
    summary:
      'We do not guess. We map your market, your competitors, and your technical infrastructure with the same rigor we apply to our own stack. Then prioritize what will move revenue fastest.',
    deliverables: [
      'Live infrastructure audit: speed, SEO, AEO, schema, and conversion friction',
      'Competitor teardown across organic rankings, ad libraries, and landing pages',
      'Suburb-level keyword and intent mapping for Johannesburg service territories',
      'Customer journey mapping: awareness → consideration → booking',
      'Technical debt inventory and redirect/URL preservation plan for redesigns',
    ],
    highlight: 'Evidence before execution',
  },
  {
    step: '03',
    phase: 'Week 1–2',
    title: 'Unified Growth Blueprint',
    summary:
      'Research becomes a single technical roadmap. Web architecture, local SEO, Google Ads, and Meta are planned as one system. Not four disconnected agency workstreams.',
    deliverables: [
      'Prioritized fix roadmap with KPI targets (CPA, lead volume, suburb rankings)',
      'Next.js information architecture: service clusters, suburb pages, conversion paths',
      'Google Ads account structure: intent, suburb, and urgency campaign layers',
      'Meta funnel architecture: cold acquisition, remarketing, and offer sequences',
      'Tracking plan: GA4, server-side events, Meta CAPI, call tracking, CRM fields',
    ],
    highlight: 'One accountable stack',
  },
  {
    step: '04',
    phase: 'Week 2–5',
    title: 'Next.js Market Dominance Build',
    summary:
      'Your website is engineered as revenue infrastructure. Not a brochure. Custom Next.js architecture built for speed, entity-based SEO, and conversion at every touchpoint.',
    deliverables: [
      'Custom Next.js 15 architecture with performance-first rendering',
      'Entity-based SEO: Knowledge Graph signals, schema markup, semantic content clusters',
      'Hyper-local suburb and service landing pages with hub-and-spoke internal linking',
      'Core Web Vitals hardening: LCP under 1s, mobile-first execution',
      'Conversion architecture: trust signals, forms, call CTAs, and lead capture flows',
      'Analytics instrumentation: events, goals, and source attribution baked in from launch',
    ],
    highlight: 'Architecture over templates',
  },
  {
    step: '05',
    phase: 'Week 4–6',
    title: 'Local SEO & Map Pack Setup',
    summary:
      'Organic discoverability is layered onto the Next.js foundation so you rank for suburb-specific queries and dominate the Google Map Pack. The highest-intent local traffic source.',
    deliverables: [
      'Google Business Profile optimization: categories, services, photos, posts',
      'LocalBusiness schema with geo coordinates and service area definitions',
      'Citation and NAP consistency across major directories',
      'Review generation system and reputation workflow',
      'Location hub pages wired into site architecture for topical authority',
    ],
    highlight: 'Suburb-level precision',
  },
  {
    step: '06',
    phase: 'Week 5–7',
    title: 'Google Ads Activation',
    summary:
      'High-intent paid search captures demand the moment someone searches. Campaigns, landing pages, and tracking are built together so every rand of spend ties to a booked job or qualified lead.',
    deliverables: [
      'Account rebuild: Search, Performance Max, and suburb-modifier campaign structures',
      'Dedicated Next.js landing pages matched to keyword clusters and service urgency',
      'Ad copy, responsive assets, extensions, and negative keyword governance',
      'GA4 + server-side conversion tracking and dynamic call tracking numbers',
      'CRM or WhatsApp handoffs with keyword, ad, and suburb attribution on every lead',
      'Weekly optimization sprints: bids, budgets, search term mining, and CRO tests',
    ],
    highlight: 'Cost per booked job',
  },
  {
    step: '07',
    phase: 'Week 6–8',
    title: 'Meta Ads & Social Management',
    summary:
      'Facebook and Instagram fill the top and middle of your funnel, demand creation, offer testing, and remarketing, with creative systems refreshed every sprint so ad fatigue never kills performance.',
    deliverables: [
      'Meta Business Suite setup: pixels, CAPI, domain verification, and event mapping',
      'Offer engineering: lead magnets, hooks, and follow-up sequences that convert cold traffic',
      'Creative system: static and video ads built for feed-native performance per placement',
      'Audience layering: geo-targeting, interest stacks, lookalikes, and remarketing pools',
      'Lead forms, instant experiences, or landing page flows wired to CRM with full attribution',
      'Content refresh cadence: new creative batches deployed on an 18-hour turnaround cycle',
    ],
    highlight: 'Full-funnel Meta',
  },
  {
    step: '08',
    phase: 'Ongoing',
    title: 'Integration, Measurement & Scale',
    summary:
      'The system only works when every channel reports into one truth. We operationalize SEO, Google Ads, and Meta as a single revenue engine. Then scale what proves ROI.',
    deliverables: [
      'Unified reporting: organic rankings, ad CPA/ROAS, form submissions, and call volume',
      'Cross-channel attribution: which suburb, keyword, ad, or creative drove each deal',
      'Monthly strategy reviews with senior ownership. Not junior account handoffs',
      'Scale winning suburbs, service lines, and creative angles based on pipeline data',
      'Continuous CRO: landing page tests, offer refinements, and tracking integrity checks',
    ],
    highlight: 'Pipeline velocity',
  },
];

const systemPillars = [
  {
    title: 'Next.js Web Architecture',
    body: 'The foundation everything else runs on. Fast, crawlable, conversion-optimized pages that rank organically and give paid traffic somewhere worth landing.',
    link: { href: '/services/website-development', label: 'Website Development' },
  },
  {
    title: 'Local SEO & Map Pack',
    body: 'Long-term discoverability for suburb-specific searches. Location pages, schema, GBP, and citations that compound authority month over month.',
    link: { href: '/services/local-seo', label: 'Local SEO Services' },
  },
  {
    title: 'Google Ads Management',
    body: 'High-intent capture when buyers search. Campaign architecture, landing pages, and tracking rebuilt for cost-per-booked-job. Not vanity clicks.',
    link: { href: '/services/google-ads', label: 'Google Ads Management' },
  },
  {
    title: 'Meta Ads & Social',
    body: 'Demand creation and remarketing on Facebook and Instagram. Offer engineering, creative systems, and CAPI tracking tied back to revenue.',
    link: { href: '/services/facebook-ads', label: 'Facebook Ads Management' },
  },
];

const integrationPoints = [
  {
    title: 'Shared landing page infrastructure',
    body: 'Google Ads and Meta campaigns land on the same Next.js pages, optimized for speed, trust, and conversion. Not disconnected WordPress templates or generic homepages.',
  },
  {
    title: 'Unified suburb targeting',
    body: 'SEO location pages, Google Ads suburb modifiers, and Meta geo-audiences all target the same service territories. One map, three channels, zero wasted overlap.',
  },
  {
    title: 'Single source of tracking truth',
    body: 'GA4, server-side events, Meta CAPI, call tracking, and CRM fields connect every lead to its source. You know whether Sandton came from organic, Search, or a Facebook hook.',
  },
  {
    title: 'Creative and CRO evolve together',
    body: 'Ad copy, Meta creative, and landing page headlines are tested in sync. When a hook wins on Facebook, it informs Google responsive assets and on-page conversion copy.',
  },
];

const processMarqueeItems = [
  'Strategy Call',
  'Forensic Audit',
  'Growth Blueprint',
  'Next.js Build',
  'Local SEO',
  'Google Ads',
  'Meta & Social',
  'Unified Tracking',
  'Pipeline Scale',
];

const faqItems = [
  {
    question: 'How long does the full process take from first meeting to launch?',
    answer:
      'Web architecture typically launches in 4–6 weeks. Google Ads can go live within 10 business days of blueprint approval. Meta campaigns follow within 1–2 weeks of creative production. Full system integration (web, SEO, Google, and Meta running together) is usually operational within 8–10 weeks depending on scope.',
  },
  {
    question: 'Do I need all services, or can I start with just one?',
    answer:
      'You can start with a single channel: a Next.js rebuild, Google Ads sprint, or Meta management engagement. We still run discovery and research so whatever we build connects to your broader growth plan. Most clients who see compounding results adopt the full stack over time.',
  },
  {
    question: 'What do I need to provide during onboarding?',
    answer:
      'Brand assets, service and pricing details, proof elements (reviews, photos, case studies), and access to existing accounts: website, Google Ads, Meta Business Suite, GBP, and analytics. We handle architecture, copy structure, campaign setup, and tracking implementation.',
  },
  {
    question: 'How do Google Ads and Meta work together without competing?',
    answer:
      'Google captures active search intent. People already looking for your service. Meta creates and nurtures demand. People who did not know they needed you yet. Remarketing bridges both: site visitors from either channel get followed up across platforms. Budget allocation is data-driven, not guesswork.',
  },
  {
    question: 'Why Next.js instead of WordPress or a page builder?',
    answer:
      'Next.js delivers sub-second load times, server-side rendering for crawlers, and component-based architecture that scales as you add suburbs and service lines. Page builders carry plugin bloat that kills Core Web Vitals and makes paid traffic land on slow pages, directly increasing cost per lead.',
  },
  {
    question: 'How is ROI measured across the entire system?',
    answer:
      'We set KPIs during blueprint: target CPA, lead volume, and suburb ranking goals. Every channel reports into unified dashboards. Form submissions, calls, and CRM deals are attributed to keyword, ad, creative, or organic source. Monthly reviews focus on pipeline value. Not impressions or page views.',
  },
];

const processFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}/process#faq`,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const processHowToSchema = buildHowToSchema({
  url: `${BASE_URL}/process`,
  name: 'Endpoint Media Full Revenue System Process',
  description:
    'End-to-end process for Johannesburg service businesses: discovery, research, Next.js architecture, local SEO, Google Ads, Meta social management, and unified measurement.',
  steps: masterPhases.map((phase) => ({
    name: phase.title,
    text: `${phase.summary} ${phase.deliverables.join(' ')}`,
  })),
});

function DeliverableList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400/80" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

const ProcessPage = () => {
  return (
    <div className="bg-black text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(processFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(processHowToSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Full Revenue System · Johannesburg
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            From First Meeting To Market Dominance
          </h1>
          <p className="mb-8 max-w-3xl text-lg tracking-[-0.3px] text-[#A1A1AA] md:text-xl">
            We do not sell isolated deliverables. We engineer one accountable growth system 
            Next.js architecture, local SEO, Google Ads, and Meta social management, wired
            together from discovery through scale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Book Strategy Call
          </Link>
        </div>
      </section>

      {/* Process marquee */}
      <section className="border-y border-zinc-800 bg-zinc-950/85 py-8 md:py-10">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            End-To-End Delivery Pipeline
          </p>
          <div className="proof-marquee relative overflow-hidden">
            <div className="proof-marquee-track flex w-max items-center gap-3">
              {[...processMarqueeItems, ...processMarqueeItems].map((title, index) => (
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

      {/* Unified system overview */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                System Architecture
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-1.5px] text-white md:text-5xl">
                Four Channels. One Revenue Stack.
              </h2>
              <div
                aria-hidden="true"
                className="mt-5 h-px w-28 bg-gradient-to-r from-teal-400/90 to-transparent"
              />
              <p className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-1px] text-zinc-500 md:text-3xl">
                Discoverability, acquisition, and conversion, unified.
              </p>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              <p className="text-zinc-300">
                Most agencies treat web design, SEO, Google Ads, and social media as separate
                projects with separate teams and separate reports. That fragmentation is exactly why
                pipelines leak: paid traffic lands on slow pages, SEO pages never get ad support,
                and nobody can tell which channel actually drove the deal.
              </p>

              <blockquote className="border-l border-teal-400/60 bg-zinc-900/35 py-3 pl-6 pr-4 text-xl leading-snug text-white md:text-2xl">
                Endpoint Media plans, builds, and measures everything as one technical stack. Your
                Next.js site is the conversion engine. Local SEO compounds organic pipeline. Google
                Ads captures high-intent search. Meta creates demand and remarkets visitors back
                into your funnel.
              </blockquote>

              <p>
                Every channel shares the same suburb targeting, landing pages, tracking
                infrastructure, and senior-led ownership, so growth compounds instead of
                conflicting.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {systemPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="flex flex-col rounded-sm border border-zinc-800 bg-zinc-950/70 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{pillar.body}</p>
                <Link
                  href={pillar.link.href}
                  className="mt-5 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {pillar.link.label} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Master phase timeline */}
      <section className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Delivery Timeline
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
              8 Phases · Milestone-Based · Senior-Led
            </p>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            What Happens From First Call To Full Scale
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            Every phase has defined deliverables, clear ownership, and measurable outcomes. Nothing
            moves forward without research backing it, and nothing launches without tracking wired
            in.
          </p>

          <div className="mt-14 space-y-4">
            {masterPhases.map((phase) => (
              <article
                key={phase.step}
                className="rounded-sm border border-zinc-800 bg-black/40 p-6 md:p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs tracking-[0.2em] text-zinc-500">
                      {phase.step}
                    </span>
                    <span className="rounded-sm border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 font-mono text-xs text-zinc-500">
                      {phase.phase}
                    </span>
                  </div>
                  <span className="inline-block w-fit rounded-sm border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 text-xs text-teal-400/90">
                    {phase.highlight}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                  {phase.title}
                </h3>
                <p className="mt-3 max-w-4xl text-base leading-relaxed text-zinc-400">
                  {phase.summary}
                </p>
                <DeliverableList items={phase.deliverables} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How channels integrate */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Integration Layer
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            How Web, SEO, Google Ads & Meta Tie Together
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            The power is not in any single channel. It is in how they share infrastructure and
            inform each other&apos;s optimization.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {integrationPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{point.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-sm border border-zinc-800 bg-zinc-950/50 p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              The Flywheel
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-300 md:text-xl">
              Organic rankings bring free pipeline → Google Ads captures urgent search intent → Meta
              fills the top of funnel and remarkets site visitors → landing pages convert all
              traffic → tracking shows what to scale → we reinvest into winning suburbs, keywords,
              and creative hooks → rankings and ad performance compound.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">FAQ</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Process Questions
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            Timelines, scope, channel integration, and how we measure ROI across the full stack.
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
              Ready To See The Full Blueprint For Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
              Start with a strategy call. We will map your pipeline leaks, show you what the unified
              system looks like for your market, and give you a prioritized roadmap, whether you
              need web architecture, paid media, or the full stack.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Book Strategy Call
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                Run Deep Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
