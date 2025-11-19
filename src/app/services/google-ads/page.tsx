// src/app/services/google-ads/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/services/google-ads';

const faqs = [
  {
    question: 'How quickly can we relaunch profitable Google Ads campaigns?',
    answer:
      'Most accounts see stabilized CPAs within the first 2 weeks. We audit historical data, rebuild conversion tracking, deploy new campaign structures, and go live with at least three tested offers in 10 business days.',
  },
  {
    question: 'Do you handle landing pages and conversion tracking too?',
    answer:
      'Yes. Every sprint includes Next.js landing pages (or CRO fixes), GA4 + server-side tracking, call tracking, and CRM hand-offs so every lead is attributed correctly.',
  },
  {
    question: 'Can you integrate with our CRM or internal sales team?',
    answer:
      'We wire leads into Pipedrive, HubSpot, Monday, or even WhatsApp/email workflows so your team gets instant alerts with the exact keyword and ad they came from.',
  },
  {
    question: 'What budgets do you work with?',
    answer:
      'Most Johannesburg service businesses spend between R8k–R60k per month on Google Ads. We build plays for both emergency-response services and high-ticket B2B leads.',
  },
];

const differentiators = [
  {
    title: 'Intent-first campaign architecture',
    body: 'We structure campaigns by service, suburb, and urgency so high-value keywords get priority bids and landing pages.',
  },
  {
    title: 'Full tracking & attribution',
    body: 'GA4, server-side events, call tracking, and CRM fields to show which suburb, keyword, and ad copy generated each deal.',
  },
  {
    title: 'Creative + CRO baked in',
    body: 'Ad copy, assets, and landing pages are part of the sprint so ads and pages evolve in sync.',
  },
  {
    title: 'Weekly operator-level reporting',
    body: 'Dashboards focused on cost per booked job, pipeline value, and margin—not vanity metrics.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Forensics & rebuild',
    body: 'Audit keywords, search terms, negatives, assets, and tracking. Rebuild account structure with SKAG/SKAG-lite campaigns, add suburb modifiers, and fix conversion tracking.',
  },
  {
    step: '02',
    title: 'Creative & landing systems',
    body: 'Ship ad copy, responsive asset stacks, extensions, and dedicated landing pages with city-specific proof.',
  },
  {
    step: '03',
    title: 'Optimization & scale',
    body: 'Weekly bid adjustments, audience layering, budget reallocation, and CRO tests tied to actual lead quality feedback.',
  },
];

const metrics = [
  { stat: '38%', label: 'Average CPA reduction within 45 days' },
  { stat: '4.3x', label: 'Return on ad spend across service verticals' },
  { stat: '28', label: 'Leads captured per week after tracking fixes' },
  { stat: '12 hrs', label: 'Response time for campaign change requests' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Google Ads & Paid Search Sprints',
  description:
    'High-intent Google Ads management for Johannesburg service businesses: campaign rebuilds, landing pages, tracking, and optimization.',
  provider: {
    '@id': `${BASE_URL}#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
  serviceType: 'Google Ads Management',
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
    title: 'Google Ads Management Johannesburg | Paid Search Sprints | Endpoint Media',
    description:
      'Slash wasted ad spend and turn Google Ads into predictable lead flow. Endpoint Media rebuilds paid search for Johannesburg service businesses: campaigns, landing pages, tracking, and reporting.',
    path: PAGE_PATH,
    keywords: [
      'google ads johannesburg',
      'paid search agency joburg',
      'google ads management south africa',
      'ppc services johannesburg',
      'google ads for service businesses',
      'paid media sprint',
    ],
  });
}

const GoogleAdsPage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <p className="text-teal-300 text-xs md:text-sm uppercase tracking-[0.35em] mb-4">Paid Search • CRO • Tracking</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Turn wasted Google Ads spend into predictable booked work.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            We rebuild Google Ads for Johannesburg operators in one sprint: campaign architecture, landing pages, GA4 + call
            tracking, and relentless optimization tied to actual lead quality. No retainers—just measurable ROI.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/30 hover:bg-teal-400 transition"
            >
              Request a paid search audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              See campaign results
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Built for emergency services, legal, medical, home improvement, and B2B operators across Sandton, Midrand, and
            greater Johannesburg.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">{metric.stat}</p>
                <p className="text-sm text-gray-600 mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">Why Endpoint Media</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Paid search built for operators, not vanity dashboards.
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We obsess over booked jobs and pipeline value. That means fixing tracking, aligning landing pages, and iterating on
              real sales feedback—not just tweaking bids.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">Execution playbook</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">One sprint. Three stages.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-teal-500 text-sm font-semibold">Step {step.step}</p>
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
            <p className="text-teal-300 font-semibold uppercase tracking-wide">Every sprint includes</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">All the pieces required for profitable Google Ads.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Campaign/AdGroup rebuild with suburb + intent targeting',
              'Ad copy + asset stacks for search and Performance Max',
              'Dedicated landing pages with CRO best practices',
              'GA4, server-side tracking, and call tracking numbers',
              'Negative keyword governance & search term mining',
              'Weekly reports focused on CPA, ROAS, and pipeline value',
            ].map((item) => (
              <div key={item} className="bg-gray-800 rounded-2xl p-6 border border-white/10">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to see every Rand in your Google Ads account produce qualified leads?
          </h2>
          <p className="text-lg text-teal-50 max-w-3xl mx-auto mb-8">
            Book a free audit and we will map the keywords, budgets, landing pages, and tracking fixes required to hit your
            targets this quarter.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-white text-teal-700 hover:bg-teal-50 transition"
          >
            Claim your Google Ads audit
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Questions Johannesburg teams ask before trusting us with their ad spend.
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  {faq.question}
                  <span className="text-teal-500 group-open:rotate-45 transition-transform">+</span>
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

export default GoogleAdsPage;

