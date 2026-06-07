// src/app/case-studies/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Client Success Stories | Web Design & SEO Results',
    description:
      "Real-world proof from Johannesburg service businesses: Next.js architecture, local SEO, Google Ads, and conversion systems engineered by Endpoint Media.",
    path: '/case-studies',
    keywords: [
      'web design case studies johannesburg',
      'local seo success stories',
      'endpoint media results',
      'service business growth johannesburg',
    ],
  });
}

type CaseStudy = {
  name: string;
  slug: string;
  websiteUrl: string;
  industry: string;
  market: string;
  headline: string;
  problem: string;
  solution: string;
  outcome: string;
  services: string[];
};

const caseStudies: CaseStudy[] = [
  {
    name: 'Rhino Panel Beaters',
    slug: 'rhino-panel-beaters',
    websiteUrl: 'https://rhinopanel.vercel.app/',
    industry: 'Panel Beaters',
    market: 'Zululand',
    headline: 'Turning emergency searchers into qualified quote requests across Zululand.',
    problem:
      'Rhino had no digital infrastructure built for conversion. Emergency panel beating searches in Zululand were going to competitors with faster, trust-signalling websites, and phone calls were inconsistent because there was no multi-step quote engine or authority positioning for high-value fleet work.',
    solution:
      'We engineered a Next.js site centred on trust, authority, and conversion: a validated multi-step quote form, asymmetric service grid prioritising Truck & Bus and 4x4 repairs, local SEO for regional dominance, and a high-contrast design system that signals professionalism before the first call.',
    outcome:
      'Digital visitors now convert through structured quote requests and emergency call CTAs. High-value services are visually prioritised, and the site is built to rank and convert for Zululand panel beating intent. Not just exist as a brochure.',
    services: ['Next.js Build', 'Quote Engine', 'Local SEO'],
  },
  {
    name: 'Alberton Battery Mart',
    slug: 'alberton-battery-mart',
    websiteUrl: 'https://www.albertonbatterymart.co.za/',
    industry: 'Battery Retail',
    market: 'Alberton',
    headline: 'When a stranded driver searches at 7pm, every second of load time costs a sale.',
    problem:
      'Alberton Battery Mart needed to own the mobile battery category in Alberton, but their old presence could not compete on speed, product discovery, or emergency contact flow. Stranded customers bounce in seconds if they cannot call or WhatsApp immediately.',
    solution:
      'Ground-up Next.js rebuild with perfect Lighthouse scores, sticky WhatsApp and call CTAs on every page, advanced product search, Google Merchant Center integration, and 30+ SEO blog posts targeting battery intent across Alberton and surrounds.',
    outcome:
      'The fastest, most contact-accessible mobile battery experience in the region, engineered so a stranded customer can reach the business within seconds from any page, with product discovery and local SEO driving qualified leads around the clock.',
    services: ['Next.js Build', 'Merchant Center', 'Content Hub'],
  },
  {
    name: 'Alberton Tyre Clinic',
    slug: 'alberton-tyre-clinic',
    websiteUrl: 'https://www.albertontyreclinic.co.za/',
    industry: 'Tyre & Safety',
    market: 'Alberton',
    headline: 'Beating national chains by selling safety and heritage. Not discounted tyres.',
    problem:
      'National tyre chains win on price pressure and brand recognition. Alberton Tyre Clinic had 36 years of local trust but no digital strategy to communicate it. They were competing on the wrong battlefield against aggressive high-pressure sales tactics.',
    solution:
      'Strategic repositioning as a Safety-Driven Vehicle Maintenance Center: FREE 6-Point Safety Assessment as the primary lead magnet, family heritage storytelling, hyper-local landing pages, and intelligent cross-linking to sister business Alberton Battery Mart for shared SEO authority.',
    outcome:
      'A psychological moat around local trust that national chains cannot replicate. Warm leads flow through risk-free safety assessments, cross-selling high-margin brake and battery work, with suburb-specific pages capturing local search intent.',
    services: ['Brand Pivot', 'Lead Magnet UX', 'Local SEO'],
  },
  {
    name: 'Maverick Painting Contractors',
    slug: 'maverick-painting-contractors',
    websiteUrl: 'https://www.maverickpainting.co.za/',
    industry: 'Commercial Painting',
    market: 'Gauteng',
    headline: 'From "another painter" to the risk-averse choice for body corporates and developers.',
    problem:
      'Trustees, developers, and engineers do not hire painters. They hire asset protection. Maverick was positioned like every other contractor, with no digital proof of QA processes, engineering-backed methodology, or B2B conversion architecture.',
    solution:
      'Repositioned from painting to structural asset maintenance: Independent QA guarantees, technical authority blog silos, direct owner contact CTAs, streamlined commercial quote capture, and Next.js performance that signals professionalism to sophisticated B2B buyers.',
    outcome:
      'The site eliminates perceived risk for high-value commercial projects. Decision-makers see verifiable process, engineering credibility, and a frictionless path to owner-level contact. Not a generic tradesman portfolio.',
    services: ['B2B Positioning', 'Next.js Build', 'Trust Architecture'],
  },
  {
    name: 'QJ Paint World',
    slug: 'qj-paint-world',
    websiteUrl: 'https://www.qjpaintworld.co.za/',
    industry: 'Technical Supplier',
    market: 'Johannesburg South',
    headline: 'Stop looking like a retail paint shop. Start looking like the contractor\'s technical partner.',
    problem:
      'QJ Paint World serves professional decorators, automotive refinishers, and industrial applicators, but their digital presence read like a consumer retail store. Contractors need technical specs, supply chain reliability, and trade partnership signals, not shelf displays.',
    solution:
      'Expert Technical Supplier positioning across three verticals: video hero with premium visual impact, Trade Partner Program and priority delivery productised on-site, B2B navigation architecture, and Next.js performance for trade professionals who need specs fast.',
    outcome:
      'Professional contractors now encounter a technical solutions partner. Not a retail outlet. Lead generation targets loyalty and repeat trade business across Decorative, Automotive, and Industrial coatings in Johannesburg South.',
    services: ['B2B UX', 'Trade Program', 'Next.js Build'],
  },
  {
    name: 'Sakana no Ichi',
    slug: 'sakana-no-ichi',
    websiteUrl: 'https://sakana-six.vercel.app/',
    industry: 'Luxury Brand',
    market: 'Premium Lifestyle',
    headline: 'Fish food is a commodity. Nishikigoi stewardship is a philosophy.',
    problem:
      'Sakana no Ichi had a premium product with commodity positioning. Koi enthusiasts at the high end do not buy on price. They buy identity, ritual, and aesthetic excellence. The brand needed a complete worldview, not a product page.',
    solution:
      'Full brand development built on Japanese aesthetic principles: Wabi Sabi visual language, "Mindful Keeper" customer elevation, Living Art narrative positioning, and a sophisticated Next.js experience that transforms purchase from transaction to philosophical ritual.',
    outcome:
      'A luxury lifestyle brand that commands premium perception. Customers are elevated from hobbyists to artists, with every touchpoint reinforcing authenticity, serenity, and the highest quality available in the market.',
    services: ['Brand Identity', 'Premium UX', 'Next.js Build'],
  },
  {
    name: 'AS Brokers',
    slug: 'as-brokers',
    websiteUrl: 'https://asbrokers.co.za/',
    industry: 'Financial Services',
    market: 'Private Wealth',
    headline: 'High-net-worth prospects do not fill generic contact forms. They need diagnostic proof.',
    problem:
      'AS Brokers (FSP 17273, Category 1.8) needed more than a brochure site. Wealth advisory prospects require institutional credibility, compliance-aware trust signals, and interactive tools that convert passive browsing into explicit high-intent lead signals. Not vague enquiries.',
    solution:
      'Complete wealth engineering platform: actuarial calculator suite (retirement, tax, estate, premium risk), Code 1.8 compliance messaging, Bento-layout premium UX, HubSpot CRM integration, and content silo architecture for SEO topical authority.',
    outcome:
      'Passive browsers become qualified prospects through calculator-led diagnostics. Every enquiry arrives with intent context, compliance trust is established before the first consultation, and the pipeline is measurable from first click to CRM handoff.',
    services: ['Calculator Funnels', 'CRM Integration', 'Compliance UX'],
  },
];

const engagementPattern = [
  {
    step: '01',
    title: 'Diagnose the real bottleneck',
    body: 'We start with the business problem. Not the brief. Is it trust, speed, positioning, local visibility, or conversion friction? Every case study began with identifying where pipeline was actually leaking.',
  },
  {
    step: '02',
    title: 'Engineer the strategic pivot',
    body: 'Repositioning beats redesigning. Tyre Clinic pivoted to safety. Maverick pivoted to asset maintenance. QJ pivoted to technical supplier. The website follows the strategy, never the other way around.',
  },
  {
    step: '03',
    title: 'Build on Next.js infrastructure',
    body: 'Sub-second load times, schema markup, conversion architecture, and tracking wired from day one. No page builders. No plugin bloat. Infrastructure that paid traffic and organic search can both run on.',
  },
  {
    step: '04',
    title: 'Measure pipeline. Not page views',
    body: 'Quote submissions, emergency calls, calculator completions, Map Pack movement, and CRM-qualified leads. If the phone does not ring or the form does not submit, the project is not done.',
  },
];

const proofMetrics = [
  { stat: '7', label: 'Industries transformed: automotive, B2B, luxury, finance' },
  { stat: '100/100', label: 'Core Web Vitals targets on Next.js builds' },
  { stat: 'Map Pack', label: 'Local SEO wins across Gauteng service territories' },
  { stat: 'Daily', label: 'Lead flow reported post-launch by service clients' },
];

const testimonials = [
  {
    quote:
      "We went from being buried on page three to the top of the Google Map Pack for 'emergency electrician Sandton'. The phone rings consistently now. This isn't just a website; it's a reliable lead generation engine.",
    author: 'David M.',
    role: 'Owner, Ampere Electrical Solutions (Sandton)',
    initial: 'D',
  },
  {
    quote:
      'I needed a professional online presence for my plumbing business but felt overwhelmed. Endpoint handled everything, explaining the process clearly. Now I receive quote requests daily through the site. It has been a total game changer.',
    author: 'Sipho N.',
    role: 'Lead Plumber, Randburg Flow Plumbing (Randburg)',
    initial: 'S',
  },
];

const marqueeItems = caseStudies.map((study) => study.name);

const caseStudyListSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${BASE_URL}/case-studies#collection`,
  name: 'Endpoint Media Case Studies',
  description:
    "Real-world examples of Endpoint Media's high-performance web design and local SEO results across Johannesburg.",
  url: `${BASE_URL}/case-studies`,
  isPartOf: {
    '@id': `${BASE_URL}#webpage`,
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: caseStudies.map((study, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: study.name,
      url: `${BASE_URL}/case-studies/${study.slug}`,
      description: `${study.problem} ${study.outcome}`,
    })),
  },
};

function StoryBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-400/80">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{children}</p>
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group flex flex-col rounded-sm border border-zinc-800 bg-zinc-950/70 transition-colors hover:border-teal-400/70">
      <div className="border-b border-zinc-800 bg-black/50 px-6 py-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
          {study.industry} · {study.market}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white group-hover:text-zinc-100">
          {study.name}
        </h3>
        <p className="mt-3 text-base leading-snug text-zinc-300">{study.headline}</p>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <StoryBlock label="The Problem">{study.problem}</StoryBlock>
        <StoryBlock label="What We Built">{study.solution}</StoryBlock>
        <StoryBlock label="The Outcome">{study.outcome}</StoryBlock>

        <div className="mt-10 flex flex-wrap gap-2 border-t border-zinc-800 pt-10 pb-10">
          {study.services.map((service) => (
            <span
              key={service}
              className="rounded-sm border border-zinc-800 bg-black/40 px-2.5 py-1 text-xs text-zinc-400"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={`/case-studies/${study.slug}`}
            className="text-sm font-semibold text-white transition-colors hover:text-teal-400/90"
          >
            Read full case study →
          </Link>
          <Link
            href={study.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Live website ↗
          </Link>
        </div>
      </div>
    </article>
  );
}

const CaseStudiesPage = () => {
  return (
    <div className="bg-black text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(caseStudyListSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Client Proof · Johannesburg & Beyond
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Stories Of Problems Solved
          </h1>
          <p className="mb-8 max-w-3xl text-lg tracking-[-0.3px] text-[#A1A1AA] md:text-xl">
            Every client came to us with a pipeline problem. Not a website request. These are the
            stories of how we diagnosed the bottleneck, engineered the fix, and measured what moved.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Get Your Free Growth Audit
          </Link>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-zinc-800 bg-zinc-950/85 py-8 md:py-10">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            Engineering Revenue Systems For
          </p>
          <div className="proof-marquee relative overflow-hidden">
            <div className="proof-marquee-track flex w-max items-center gap-3">
              {[...marqueeItems, ...marqueeItems].map((name, index) => (
                <span
                  key={`${name}-${index}`}
                  className="whitespace-nowrap rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we approach every story */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Our Case Study Pattern
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-1.5px] text-white md:text-5xl">
                Every Story Follows The Same Logic
              </h2>
              <div
                aria-hidden="true"
                className="mt-5 h-px w-28 bg-gradient-to-r from-teal-400/90 to-transparent"
              />
              <p className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-1px] text-zinc-500 md:text-3xl">
                Problem → Pivot → Build → Pipeline.
              </p>
            </div>

            <div className="space-y-4">
              {engagementPattern.map((item) => (
                <article
                  key={item.step}
                  className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6"
                >
                  <p className="font-mono text-xs tracking-[0.2em] text-zinc-500">{item.step}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {proofMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-5 md:p-6"
              >
                <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {metric.stat}
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Client Stories
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
              {caseStudies.length} Case Studies · Full Narrative
            </p>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            The Problem. What We Built. The Outcome.
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            Panel beaters losing emergency calls to faster competitors. Tyre shops fighting national
            chains on price. B2B suppliers looking like retail stores. Wealth advisors with no
            conversion funnel. Different problems, same engineering discipline.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Client Testimonials
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            What Operators Say After Launch
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            The case studies above show what we built. These testimonials show what happened after
            launch: phones ringing, forms submitting, and Map Pack rankings moving.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="relative rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 md:p-8"
              >
                <span
                  className="pointer-events-none absolute -left-1 -top-6 select-none font-serif text-[5rem] leading-none text-zinc-900"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="relative text-base leading-relaxed text-zinc-300 md:text-lg">
                  {testimonial.quote}
                </p>
                <footer className="mt-8 flex items-center gap-4 border-t border-zinc-800 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-zinc-700 bg-black font-mono text-sm text-white">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center md:p-12">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              What Is Your Pipeline Problem?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
              Every success story started with a diagnosis. Tell us where you are leaking, visibility,
              trust, conversion, or local search, and we will show you what the fix looks like before
              you commit to anything.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Get Free Growth Audit
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                See Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
