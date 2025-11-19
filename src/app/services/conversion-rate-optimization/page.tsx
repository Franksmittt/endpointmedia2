// src/app/services/conversion-rate-optimization/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/services/conversion-rate-optimization';

const faqs = [
  {
    question: 'How long before CRO tests show results?',
    answer:
      'Our sprints run in 30-day cycles. We deploy prioritized tests in week one, monitor for statistical significance, and either lock in winners or iterate quickly so you see measurable gains inside the same month.',
  },
  {
    question: 'Do you need a lot of traffic for CRO to work?',
    answer:
      'Not necessarily. We blend qualitative audits, heuristic analysis, and micro-conversion tracking so even lower-traffic service sites can benefit from funnel fixes.',
  },
  {
    question: 'What tools do you use for testing?',
    answer:
      'We lean on Splitbee/Google Optimize alternatives, server-side experiments, heatmaps, and GA4 exploration. No bloated MarTech stack required.',
  },
  {
    question: 'Can you implement the winning changes for us?',
    answer:
      'Yes. As a Next.js team we ship the UI/dev updates, hook up analytics, and ensure every improvement is tracked back to leads and booked work.',
  },
];

const proofStats = [
  { stat: '+46%', label: 'Average lift in form submissions after first sprint' },
  { stat: '31%', label: 'Decrease in cost per qualified lead' },
  { stat: '12', label: 'Experiments launched per quarter on average' },
  { stat: '<2s', label: 'Average mobile LCP after performance fixes' },
];

const leveragePoints = [
  {
    title: 'Funnel forensics',
    body: 'Deep-dive into analytics, session recordings, forms, and heatmaps to map drop-offs and blockers.',
  },
  {
    title: 'Offer & messaging upgrades',
    body: 'Reposition CTAs, risk reversals, proof, and urgency so visitors know exactly why to act now.',
  },
  {
    title: 'UX & performance fixes',
    body: 'Kill friction with faster pages, simplified layouts, and mobile-first interactions tuned for Thumb Zone behaviour.',
  },
  {
    title: 'Test & learn rhythm',
    body: 'Prioritized testing roadmap with confidence scoring, so engineering time goes to the highest impact experiments.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Audit & roadmap',
    body: 'We audit analytics, forms, CTAs, copy, and performance to identify conversion leaks, then deliver a prioritized testing roadmap.',
  },
  {
    step: '02',
    title: 'Deploy & measure',
    body: 'We implement UI/UX tweaks, copy updates, and technical fixes, then run experiments with proper tracking to measure lift.',
  },
  {
    step: '03',
    title: 'Scale winners',
    body: 'Promote winning variants across the site, roll insights into paid landing pages, and line up the next batch of ideas.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Conversion Rate Optimization & Funnel Diagnostics',
  description:
    'CRO sprints for Johannesburg service businesses: audits, testing, UX fixes, and tracking to turn existing traffic into booked calls.',
  provider: {
    '@id': `${BASE_URL}#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
  serviceType: 'Conversion Rate Optimization',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'ZAR',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}${PAGE_PATH}`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}${PAGE_PATH}#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Conversion Rate Optimization Johannesburg | Endpoint Media CRO Sprints',
    description:
      'Stop leaking leads. Endpoint Media runs CRO sprints for Johannesburg service businesses: funnel audits, UX fixes, testing, and analytics to turn visits into booked calls.',
    path: PAGE_PATH,
    keywords: [
      'conversion rate optimization johannesburg',
      'cro agency south africa',
      'website conversion audit',
      'landing page optimization joburg',
      'funnel diagnostics',
    ],
  });
}

const ConversionRateOptimizationPage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <p className="text-emerald-300 text-xs md:text-sm uppercase tracking-[0.35em] mb-4">CRO • Analytics • UX</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Turn existing traffic into booked calls and signed retainers.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            Our CRO sprints uncover friction inside your funnel—from slow hero sections to weak CTAs—and replace them with
            high-performing experiences backed by data. No new ad spend required.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
            >
              Request a CRO audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              See before & afters
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Ideal for established service businesses in Sandton, Rosebank, Midrand, Bryanston, and the broader Gauteng region.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {proofStats.map((stat) => (
              <div key={stat.label} className="text-center border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">{stat.stat}</p>
                <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leverage points */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-emerald-500 font-semibold uppercase tracking-wide">Where we attack first</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Four leverage points that compound into higher conversion rates.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {leveragePoints.map((point) => (
              <div key={point.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-emerald-500 font-semibold uppercase tracking-wide">CRO sprint flow</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">Audit. Deploy. Scale.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-emerald-500 text-sm font-semibold">Step {step.step}</p>
                <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-emerald-300 font-semibold uppercase tracking-wide">Included in every sprint</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Everything required to fix conversion leaks.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'GA4 + funnel tracking cleanup',
              'Heuristic + UX audit with annotated Loom walkthrough',
              'Form, CTA, and copy rewrites',
              'Design + dev implementation of test variants',
              'A/B or server-side experiments',
              'Weekly reporting with insights + next actions',
            ].map((item) => (
              <div key={item} className="bg-gray-800 rounded-2xl p-6 border border-white/10">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to squeeze more revenue from your current traffic?</h2>
          <p className="text-lg text-emerald-50 max-w-3xl mx-auto mb-8">
            Book a free CRO audit. We will map the exact pages, forms, and CTAs costing you leads—and the fixes we would deploy in
            the next sprint.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-white text-emerald-700 hover:bg-emerald-50 transition"
          >
            Claim your CRO audit
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-emerald-500 font-semibold uppercase tracking-wide">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Common conversion questions from Johannesburg teams.
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  {faq.question}
                  <span className="text-emerald-500 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConversionRateOptimizationPage;

