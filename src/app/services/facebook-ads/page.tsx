// src/app/services/facebook-ads/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/services/facebook-ads';

const faqs = [
  {
    question: 'Do you handle both Facebook and Instagram placements?',
    answer:
      'Yes. We build Meta campaign structures that leverage Facebook, Instagram, Messenger, and Audience Network placements, optimizing creative per placement for best CPM and conversion rates.',
  },
  {
    question: 'Can you work with my existing creative assets?',
    answer:
      'Absolutely. We audit your current library, rebuild hooks, copy, and offers, and create new statics/videos where needed so every ad feels native to the feed.',
  },
  {
    question: 'How do you track leads from Facebook Ads?',
    answer:
      'We wire Meta CAPI, GA4, and CRM events so each lead is linked to campaign, ad set, and ad creative. Call tracking and WhatsApp flows are included when needed.',
  },
  {
    question: 'What budgets do you recommend to start?',
    answer:
      'Most Johannesburg service businesses see traction with R8k–R25k/month. We tailor budgets by offer, seasonality, and the number of locations you serve.',
  },
];

const levers = [
  {
    title: 'Offer engineering',
    body: 'We craft irresistible offers, lead magnets, and follow-up flows so cold audiences convert without aggressive discounting.',
  },
  {
    title: 'Creative systems',
    body: 'Hook-first creative and copy variations tailored to Meta placements, refreshed every sprint to prevent fatigue.',
  },
  {
    title: 'Audience layering',
    body: 'Geo, interest, lookalike, and remarketing stacks tuned to Johannesburg service territories.',
  },
  {
    title: 'Full-funnel tracking',
    body: 'Meta CAPI, GA4, and CRM event mapping to connect ad spend to actual revenue.',
  },
];

const proofStats = [
  { stat: '3.7x', label: 'Average return on ad spend after 8 weeks' },
  { stat: '64%', label: 'Average CPL reduction vs. previous agencies' },
  { stat: '42', label: 'Qualified enquiries captured per week via lead forms' },
  { stat: '18 hrs', label: 'Turnaround for new creative deployment' },
];

const processSteps = [
  {
    step: '01',
    title: 'Audit & reset',
    body: 'Review offers, targeting, creative, and tracking. Install Meta CAPI, refactor pixels, and rebuild campaign architecture by funnel stage.',
  },
  {
    step: '02',
    title: 'Creative & launch',
    body: 'Ship a batch of scroll-stopping ads (statics/video), landing pages or instant forms, and automated follow-up sequences.',
  },
  {
    step: '03',
    title: 'Optimization & scale',
    body: 'Weekly tests across hooks, audiences, and bids. Reinvest into top-performing ad sets and expand to new suburbs or service lines.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Facebook & Instagram Ads Sprints',
  description:
    'Meta (Facebook & Instagram) advertising campaigns for Johannesburg service businesses: offers, creative, tracking, and optimization.',
  provider: {
    '@id': `${BASE_URL}#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
  serviceType: 'Facebook Ads Management',
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
    title: 'Facebook & Instagram Ads Management Johannesburg | Endpoint Media',
    description:
      'Launch Meta ads that actually convert. Endpoint Media runs Facebook & Instagram campaigns with irresistible offers, fresh creative, and full-funnel tracking for Johannesburg service businesses.',
    path: PAGE_PATH,
    keywords: [
      'facebook ads johannesburg',
      'instagram ads agency joburg',
      'meta ads management',
      'social media ads johannesburg',
      'facebook lead generation south africa',
    ],
  });
}

const FacebookAdsPage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#1e293b] text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <p className="text-pink-300 text-xs md:text-sm uppercase tracking-[0.35em] mb-4">
            Facebook • Instagram • WhatsApp
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Scroll-stopping Meta ads built for Johannesburg operators.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            We run Facebook & Instagram ads for trades, clinics, and pro services that turn cold audiences into booked calls.
            Offers, creative, landing pages, and automation handled in one sprint.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-pink-500 text-white shadow-lg shadow-pink-500/30 hover:bg-pink-400 transition"
            >
              Request a Meta ads audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              View campaign wins
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Built for law firms, medical practices, home services, and e-commerce operators across Sandton, Rosebank, Midrand, and
            beyond.
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

      {/* Levers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-pink-500 font-semibold uppercase tracking-wide">Growth levers</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              The four moves that make Meta ads work for local services.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {levers.map((lever) => (
              <div key={lever.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{lever.title}</h3>
                <p className="text-gray-600">{lever.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-pink-500 font-semibold uppercase tracking-wide">Execution process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">Launch. Optimize. Scale.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-pink-500 text-sm font-semibold">Step {step.step}</p>
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
            <p className="text-pink-300 font-semibold uppercase tracking-wide">Included in every sprint</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Everything required to make Meta ads profitable.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Campaign rebuild (lead gen, traffic, conversion, remarketing)',
              'Creative batch: hooks, headlines, primary text, statics, motion',
              'Landing pages or instant forms with automation follow-ups',
              'Meta CAPI + GA4 tracking & CRM integrations',
              'Audience strategy (cold, warm, lookalike, remarketing)',
              'Weekly reporting with CPL, booked jobs, and ROAS insights',
            ].map((item) => (
              <div key={item} className="bg-gray-800 rounded-2xl p-6 border border-white/10">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-500 to-rose-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to turn Facebook & Instagram into your best-performing pipeline?
          </h2>
          <p className="text-lg text-pink-50 max-w-3xl mx-auto mb-8">
            Book a free Meta ads audit. We will show you the creative angles, audience stacks, and automation flows that can
            generate predictable leads within 30 days.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-white text-pink-600 hover:bg-pink-50 transition"
          >
            Claim your Meta ads audit
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-pink-500 font-semibold uppercase tracking-wide">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Answers before you hand over your Meta ad spend.
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  {faq.question}
                  <span className="text-pink-500 group-open:rotate-45 transition-transform">+</span>
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

export default FacebookAdsPage;

