// src/app/services/local-seo/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/services/local-seo';

const faqs = [
  {
    question: 'How long does it take to see local SEO traction?',
    answer:
      'Quick wins show up in 30-45 days once Google Business Profile, citations, and service pages are aligned. Full suburb dominance typically takes 3-4 months depending on competition and review cadence.',
  },
  {
    question: 'Will you manage Google Business Profile posts and messaging?',
    answer:
      'Yes. We schedule weekly post assets, reply to reviews, combat spam edits, and wire GBP messaging directly into your CRM or WhatsApp workflows so every lead is captured.',
  },
  {
    question: 'Do you build location pages as part of this service?',
    answer:
      'Absolutely. We ship suburb-specific landing pages with unique proof, FAQs, and structured data so you capture “service + suburb” searches across Johannesburg.',
  },
  {
    question: 'Can you migrate my existing citations without breaking NAP consistency?',
    answer:
      'We audit every listing, clean duplicates, and migrate to a master NAP so phones, addresses, and categories match everywhere Google crawls.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Local SEO & Google Business Profile Domination',
  description:
    'Hyper-local SEO sprints for Johannesburg service businesses: GBP optimisation, suburb landing pages, review acceleration, and conversion tracking.',
  provider: {
    '@id': `${BASE_URL}#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
  serviceType: 'Local SEO',
  audience: {
    '@type': 'Audience',
    audienceType: 'Trades, professional services, medical practices, retail operators',
  },
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

const proofStats = [
  { value: '184%', label: 'Average map-pack impression lift in 60 days' },
  { value: '71', label: 'Verified GBP actions per month (calls, direction requests)' },
  { value: '4.92★', label: 'Review average after automation workflows' },
  { value: '< 2.5s', label: 'Average LCP on suburb landing pages' },
];

const levers = [
  {
    title: 'Google Business Profile engineering',
    body: 'Category stack, services, booking links, products, Q&A, and weekly post cadence wired into analytics.',
  },
  {
    title: 'Suburb landing page silos',
    body: 'Unique copy, proof, schema, and CTAs for every target suburb so you win “service + location” searches.',
  },
  {
    title: 'Review & reputation automation',
    body: 'WhatsApp/SMS/email automations with smart reminders so every happy customer leaves a keyword-rich review.',
  },
  {
    title: 'Citation & NAP governance',
    body: 'Audit, clean, and lock down NAP data across 60+ directories to eliminate duplicate/conflicting listings.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Local Intelligence Sprint',
    body: 'We audit GBP, competitors, citations, analytics, and call logs to map suburb difficulty, search volume, and quick wins.',
  },
  {
    step: '02',
    title: 'Deployment & automation',
    body: 'Ship suburb landing pages, cite cleanup, review funnels, tracking, and GBP content so every lever is live simultaneously.',
  },
  {
    step: '03',
    title: 'Measure & scale',
    body: 'Weekly dashboards covering rankings, call actions, leads per suburb, and review velocity. Double down on suburbs with the best CPA.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Local SEO & Google Business Profile Services Johannesburg | Endpoint Media',
    description:
      'Own the map pack in Sandton, Randburg, Midrand, and beyond. Endpoint Media engineers Local SEO sprints: GBP optimisation, suburb landing pages, review automation, and conversion tracking.',
    path: PAGE_PATH,
    keywords: [
      'local seo johannesburg',
      'google business profile management',
      'map pack optimization joburg',
      'local seo agency sandton',
      'local citation cleanup south africa',
      'review management johannesburg',
    ],
  });
}

const LocalSEOPage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <p className="text-teal-300 text-xs md:text-sm uppercase tracking-[0.35em] mb-4">
            Local SEO • GBP • Reviews • Suburb Funnels
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Dominate Google’s map pack before your competitors even see the brief.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            We build Local SEO systems for Johannesburg’s hardest-working service businesses. From Sandton electricians to
            Rosebank dentists, you get suburb-specific landing pages, Google Business Profile engineering, review automation,
            and airtight tracking—shipped in one sprint.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/30 hover:bg-teal-400 transition"
            >
              Book a Local SEO audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              See ranking wins
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Built for operators across Sandton, Randburg, Bryanston, Midrand, Fourways, Roodepoort, and the East Rand.
          </p>
        </div>
      </section>

      {/* Proof stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {proofStats.map((stat) => (
              <div key={stat.label} className="text-center border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
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
            <p className="text-teal-600 font-semibold uppercase tracking-wide">Local growth engines</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Four levers that compound into suburb dominance.
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We align Google Business Profile, landing pages, citations, and reviews so every signal points to your company as
              the only credible choice in your service area.
            </p>
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
            <p className="text-teal-600 font-semibold uppercase tracking-wide">Proven sprint</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">How we ship measurable gains in 30 days.</h2>
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
            <p className="text-teal-300 font-semibold uppercase tracking-wide">Included in every sprint</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Everything you need to outrank entrenched competitors.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'GBP category, services, product, and booking optimisation',
              'Weekly posts + photo cadence mapped to service themes',
              'Suburb landing pages with WebPage + LocalBusiness schema',
              'Citation cleanup, duplicate suppression, and NAP sync',
              'Review acquisition funnels with automation + reporting',
              'Call tracking, UTM wiring, and dashboard reporting',
            ].map((item) => (
              <div key={item} className="bg-gray-800 rounded-2xl p-6 border border-white/10">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <p className="text-teal-600 font-semibold uppercase tracking-wide text-sm mb-3">Complementary service</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Boost your local rankings with review management</h3>
            <p className="text-gray-600 mb-6">
              Reviews are a critical local ranking factor. Our review management service automates review generation, handles
              professional responses, and protects your reputation—complementing your Local SEO strategy perfectly.
            </p>
            <Link
              href="/services/review-management"
              className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition"
            >
              Learn about review management
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to turn &quot;near me&quot; searches into booked jobs?</h2>
          <p className="text-lg text-teal-50 max-w-3xl mx-auto mb-8">
            Request your free Local SEO growth audit. We will show you the exact suburbs, keywords, and review plays to tackle
            first—and the projected call volume you can expect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-white text-teal-700 hover:bg-teal-50 transition"
          >
            Claim your Local SEO audit
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">Local SEO questions we answer daily.</h2>
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

export default LocalSEOPage;

