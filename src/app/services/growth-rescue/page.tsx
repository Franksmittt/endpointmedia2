// src/app/services/growth-rescue/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/services/growth-rescue';

const faqs = [
  {
    question: 'How quickly can you stabilise our marketing funnels?',
    answer:
      'Most clients see controlled lead flow within 21–30 days. We triage tracking, rebuild priority landing pages, restructure campaigns, and eliminate wasted spend before rolling out scale plays.',
  },
  {
    question: 'Will you work with our existing agency or replace them?',
    answer:
      'We can do both. Many partners keep their media buyers or dev teams and plug us in as the Growth Lead. Others hand us the keys completely. The only rule: we implement what the data shows—no politics.',
  },
  {
    question: 'Do you handle both paid media and organic fixes?',
    answer:
      'Yes. Growth Rescue is a full-spectrum engagement: CRO, landing pages, tracking, Google Ads, Meta Ads, SEO/technical audits, automation, and reporting. We focus on the levers that generate revenue fastest.',
  },
  {
    question: 'What if our site is on Wix / WordPress / legacy stacks?',
    answer:
      'We work across any stack. When we need performance gains we build a high-speed Next.js microsite that plugs into your CRM and ad accounts without touching the legacy monolith.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Growth Rescue: CRO, SEO & Paid Media Turnaround',
  serviceType: 'Digital Marketing',
  description:
    'Rapid-response growth squad that fixes broken funnels, landing pages, and ad accounts for service businesses in Johannesburg.',
  provider: {
    '@id': `${BASE_URL}#organization`,
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'ZAR',
    price: '20000',
    url: `${BASE_URL}${PAGE_PATH}`,
    availability: 'https://schema.org/InStock',
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}${PAGE_PATH}#faq`,
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const stack = [
  {
    title: 'Tracking & analytics triage',
    bullets: [
      'GA4 + server-side tracking fix within 48 hours.',
      'Event taxonomy + UTM governance so every lead is sourced.',
      'Call tracking, WhatsApp click tracking, and CRM sync.',
    ],
  },
  {
    title: 'CRO + landing page rebuilds',
    bullets: [
      'Rapid launch Next.js landing pages with modular sections.',
      'Offer testing (pricing, guarantees, bonuses) to lift CVR.',
      'Page speed, Core Web Vitals, and form UX fixes.',
    ],
  },
  {
    title: 'Paid media rescue',
    bullets: [
      'Account audit, wasted spend removal, negative keyword lists.',
      'Rebuilt campaign structures (SKAGs, Performance Max, retargeting).',
      'Creative + copy refresh aligned to new landing page narrative.',
    ],
  },
  {
    title: 'SEO + content fixes',
    bullets: [
      'Technical audit (indexing, sitemap, schema, internal links).',
      'High-intent landing pages for service + location keywords.',
      'Review & backlink plays to boost Local Map Pack rankings.',
    ],
  },
];

const wins = [
  { stat: '3.6x', label: 'Lead volume within 45 days for a B2B facilities group.' },
  { stat: '63%', label: 'Decrease in cost per qualified call after ad/account rebuild.' },
  { stat: '18 hrs', label: 'Average time to fix mission-critical tracking issues.' },
  { stat: '90+', label: 'Funnels and ad accounts rescued since 2022.' },
];

const process = [
  {
    step: '01',
    title: 'Forensics & Priorities',
    body:
      'We audit analytics, ad accounts, landing pages, CRM, and offer positioning. Within 72 hours you get a Growth Deck outlining the leaks, the revenue impact, and the exact order we’ll fix them.',
  },
  {
    step: '02',
    title: 'Stabilise & Ship',
    body:
      'We run parallel workstreams: tracking + CRO + creative + media restructure. Daily or twice-weekly standups keep your team aligned while new funnels go live.',
  },
  {
    step: '03',
    title: 'Scale & Systemise',
    body:
      'Once leads are flowing, we layer in SEO content, retargeting, lead nurture automations, and reporting dashboards so you can predict revenue and scale spend safely.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Growth Rescue | Fix Broken Websites, Ads & SEO in 30 Days',
    description:
      'Lost in stalled pipelines, wasted ad spend, or tracking chaos? Endpoint Media’s Growth Rescue squad fixes CRO, analytics, Google Ads, Meta Ads, and SEO for service businesses in Johannesburg.',
    path: PAGE_PATH,
    keywords: [
      'growth rescue johannesburg',
      'landing page optimisation south africa',
      'google ads agency johannesburg',
      'seo audit johannesburg',
      'conversion rate optimisation joburg',
    ],
  });
}

export default function GrowthRescuePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <p className="text-teal-300 text-xs md:text-sm uppercase tracking-[0.4em] mb-4">
            Emergency CRO • Tracking • Paid Media • SEO
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Broken funnels? We fix them before payroll hits.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            When lead flow stalls or ad spend burns cash, Endpoint’s Growth Rescue team steps in: rebuild landing
            pages, repair tracking, relaunch ads, and get you back in the black—fast.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/30 hover:bg-teal-400 transition"
            >
              Request a rescue audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              View turnaround stories
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Serving service businesses in Gauteng, KZN, Western Cape & remote teams worldwide.
          </p>
        </div>
      </section>

      {/* Wins */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {wins.map((win) => (
              <div key={win.label} className="text-center border border-white/10 rounded-2xl p-6">
                <p className="text-3xl font-bold text-teal-300">{win.stat}</p>
                <p className="text-sm text-gray-200 mt-2">{win.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">Growth rescue stack</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              One team. All the levers that drive revenue.
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We deploy CROs, media buyers, copywriters, and engineers as a single strike team so fixes happen
              simultaneously—not in slow silos.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {stack.map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">How we work</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Forensic audit. Rapid deployments. Repeatable wins.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step) => (
              <div key={step.step} className="bg-white border border-gray-200 rounded-2xl p-6">
                <p className="text-teal-500 text-sm font-semibold">Step {step.step}</p>
                <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to stop wasting spend and start scaling again?
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
            Request a free Growth Rescue audit. We’ll show you exactly where money is leaking and what we’ll
            deploy in the next 30 days to fix it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-teal-500 text-white hover:bg-teal-400 transition"
          >
            Get your rescue plan
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Answers for founders, marketing leads, and revenue teams.
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group"
              >
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  {item.question}
                  <span className="text-teal-500 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

