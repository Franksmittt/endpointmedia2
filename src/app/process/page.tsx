// src/app/process/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL, buildHowToSchema } from '@/lib/seo';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Our Web Design & SEO Process',
    description:
      "Discover Endpoint Media's proven 3-step process for building high-performance, lead-generating websites that dominate the Johannesburg market. Learn how we deliver ROI.",
    path: '/process',
    keywords: [
      'web design process johannesburg',
      'local seo process',
      'endpoint media method',
      'website launch process',
    ],
  });
}

const processSteps = [
  {
    step: '01',
    title: 'Elite Performance Foundation',
    body: 'We engineer sub-second load times and flawless mobile execution across all devices. Google prioritizes speed, especially for "near me" searches originating in Johannesburg. By optimizing Core Web Vitals from day one, your site dominates performance rankings — not just competes.',
    highlight: 'Sub-second load times',
  },
  {
    step: '02',
    title: 'Hyper-Local SEO Architecture',
    body: 'Generic nationwide SEO fails in the competitive Johannesburg market. We map your services to precise suburb-level search queries — "emergency plumber Sandton," "electrician Randburg" — and build geographically targeted pages that become the definitive local answer at the moment of need.',
    highlight: 'Suburb-level precision',
  },
  {
    step: '03',
    title: 'Map Pack Dominance & Authority Building',
    body: 'Ranking high is not enough. We optimize your Google Business Profile, implement a consistent review generation system, and build the authority signals needed to secure Map Pack placement — the primary source of ready-to-buy local leads.',
    highlight: 'Map Pack visibility',
  },
];

const processMarqueeItems = processSteps.map((step) => step.title);

const faqItems = [
  {
    question: 'How long does the Endpoint Media process take from start to launch?',
    answer:
      'Most engagement timelines are 4-6 weeks end-to-end. Discovery and blueprint take one week, design and development take 2-3 weeks, and optimization plus QA fill the final week. Clear milestones keep the timeline tight.',
  },
  {
    question: 'What do I need to provide during the process?',
    answer:
      'We run a focused intake so you only share what matters: brand assets, service details, proof (reviews, photos), and compliance requirements. Our team handles copy structure, layouts, and local SEO architecture.',
  },
  {
    question: 'How is ROI measured throughout the process?',
    answer:
      'We set KPIs during blueprint, instrument analytics during build, and report on leads, calls, and rankings post-launch. Every deliverable maps back to conversion or visibility metrics.',
  },
  {
    question: 'Can the process adapt if I already have a website?',
    answer:
      'Absolutely. We treat it as a redesign. The discovery phase includes a technical SEO audit, we maintain URL structures and redirects, and we upgrade performance without sacrificing current rankings.',
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
  name: 'Endpoint Media Web Design & Local SEO Process',
  description:
    'A proven three-step process for building high-performance websites that dominate Johannesburg local search.',
  steps: processSteps.map((step) => ({
    name: step.title,
    text: step.body,
  })),
});

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
            Delivery Methodology · Johannesburg
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Our Proven Process for Market Dominance
          </h1>
          <p className="mb-8 max-w-3xl text-lg tracking-[-0.3px] text-[#A1A1AA] md:text-xl">
            Transparency builds trust. Here is our disciplined 3-step blueprint designed to engineer
            predictable growth for your Johannesburg service business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Get Your Free Growth Audit
          </Link>
        </div>
      </section>

      {/* Process marquee */}
      <section className="border-y border-zinc-800 bg-zinc-950/85 py-8 md:py-10">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            The Johannesburg Dominance Blueprint
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

      {/* Process steps */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Three-Step Blueprint
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
              4-6 Weeks · Milestone-Based Delivery
            </p>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            From Audit To Map Pack Dominance
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            We transform local search intent into your next paying customer through a meticulous,
            results-driven methodology — not generic templates or monthly reports nobody reads.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="flex flex-col rounded-sm border border-zinc-800 bg-zinc-950/70 p-6"
              >
                <p className="font-mono text-xs tracking-[0.2em] text-zinc-500">{step.step}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                <span className="mt-5 inline-block rounded-sm border border-zinc-800 bg-black/40 px-2.5 py-1 text-xs text-teal-400/90">
                  {step.highlight}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why this process works */}
      <section className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Process Philosophy
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-1.5px] text-white md:text-5xl">
                Every Stage Ties To Measurable Outcomes
              </h2>
              <div
                aria-hidden="true"
                className="mt-5 h-px w-28 bg-gradient-to-r from-teal-400/90 to-transparent"
              />
              <p className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-1px] text-zinc-500 md:text-3xl">
                No cosmetic refreshes. No guesswork.
              </p>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              <p className="text-zinc-300">
                Most agencies treat web design as a deliverable. We treat it as infrastructure —
                engineered for speed, discoverability, and conversion from the first line of code.
              </p>

              <blockquote className="border-l border-teal-400/60 bg-zinc-900/35 py-3 pl-6 pr-4 text-xl leading-snug text-white md:text-2xl">
                During blueprint we set KPIs. During build we implement tracking. During launch we
                benchmark form submissions, calls, and ranking improvements for key suburbs.
              </blockquote>

              <p>
                Whether you are starting from scratch or upgrading an existing site, the process
                adapts without sacrificing rankings. Discovery includes a technical SEO audit, URL
                structures and redirects are preserved, and performance is upgraded systematically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">FAQ</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Process Questions
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            Common questions about timelines, deliverables, and how we measure ROI throughout
            engagement.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center md:p-12">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready To Implement The Blueprint?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
              See how this process can be tailored to your specific Johannesburg service business.
              Start with a free audit and get a priority roadmap with actionable next steps.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Get Your Free Growth Audit
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
