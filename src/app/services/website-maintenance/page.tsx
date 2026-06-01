// src/app/services/website-maintenance/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/services/website-maintenance';

const faqs = [
  {
    question: 'What is included in your maintenance packages?',
    answer:
      'All packages include security updates, daily backups, uptime monitoring, SSL certificate management, and performance optimization. Higher tiers add content updates, SEO monitoring, and priority support.',
  },
  {
    question: 'Do you work with websites built by other agencies?',
    answer:
      'Yes. We maintain Next.js, WordPress, Shopify, and custom-built sites. We audit your current setup, document dependencies, and ensure smooth ongoing support regardless of who built it.',
  },
  {
    question: 'How quickly do you respond to urgent issues?',
    answer:
      'Priority support clients get same-day responses. Standard packages receive responses within 24-48 business hours. Critical security issues are addressed immediately for all clients.',
  },
  {
    question: 'Can I cancel or change my maintenance plan anytime?',
    answer:
      'Yes. All plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel with 30 days notice. We make it easy to scale support as your business grows.',
  },
];

const proofStats = [
  { stat: '99.9%', label: 'Average uptime across maintained sites' },
  { stat: '<24h', label: 'Average response time for support requests' },
  { stat: '0', label: 'Security breaches on sites under our care' },
  { stat: '150+', label: 'Sites maintained across Johannesburg' },
];

const maintenanceTiers = [
  {
    name: 'Essential',
    price: 'R500',
    period: 'month',
    description: 'Core security and performance for small service businesses.',
    features: [
      'Daily automated backups',
      'Security updates & patches',
      'Uptime monitoring & alerts',
      'SSL certificate management',
      'Performance optimization',
      'Email support (24-48h response)',
    ],
  },
  {
    name: 'Growth',
    price: 'R1,200',
    period: 'month',
    description: 'For businesses actively growing their online presence.',
    features: [
      'Everything in Essential, plus:',
      'Content updates (up to 5 pages/month)',
      'SEO monitoring & basic fixes',
      'Google Analytics health checks',
      'Priority email support (same-day)',
      'Quarterly performance reports',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'R2,500',
    period: 'month',
    description: 'White-glove support for mission-critical websites.',
    features: [
      'Everything in Growth, plus:',
      'Unlimited content updates',
      'Advanced SEO audits & fixes',
      'Dedicated account manager',
      'Phone & WhatsApp support',
      'Monthly strategy calls',
      'Custom integrations & automations',
    ],
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Website Maintenance & Ongoing Support',
  description:
    'Comprehensive website maintenance, security updates, backups, and support for Johannesburg service businesses. Keep your site fast, secure, and updated.',
  provider: {
    '@id': `${BASE_URL}#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
  serviceType: 'Website Maintenance',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'ZAR',
    lowPrice: '500',
    highPrice: '2500',
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
    title: 'Website Maintenance Johannesburg | Ongoing Support & Updates',
    description:
      'Keep your website fast, secure, and updated. Endpoint Media offers comprehensive maintenance packages for Johannesburg businesses: security updates, backups, content changes, and priority support.',
    path: PAGE_PATH,
    keywords: [
      'website maintenance johannesburg',
      'ongoing website support',
      'website updates south africa',
      'website security maintenance',
      'website backup service joburg',
    ],
  });
}

const WebsiteMaintenancePage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4">Maintenance • Security • Support</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Keep your website fast, secure, and updated. Without the headaches.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-400">
            Your website is a revenue engine. We handle security updates, backups, performance tuning, and content changes so you
            can focus on running your Johannesburg business, not managing technical debt.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-sm bg-white text-black hover:bg-zinc-200 transition"
            >
              Get a maintenance quote
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-sm border border-zinc-700 text-white hover:bg-white/10 transition"
            >
              View package options
            </Link>
          </div>
          <p className="text-sm text-zinc-500 mt-6">
            Trusted by service businesses across Sandton, Rosebank, Midrand, Bryanston, and the broader Gauteng region.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {proofStats.map((stat) => (
              <div key={stat.label} className="text-center rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <p className="text-3xl font-bold text-white">{stat.stat}</p>
                <p className="text-sm text-zinc-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we handle */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 uppercase tracking-wide">What we handle</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Everything required to keep your website running smoothly.
            </h2>
            <p className="text-lg text-zinc-500 mt-4">
              From security patches to content updates, we take care of the technical details so your site stays fast, secure, and
              up-to-date.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Security & updates',
                body: 'Regular security patches, plugin updates, and vulnerability scans to protect your site from threats.',
              },
              {
                title: 'Backups & recovery',
                body: 'Daily automated backups with off-site storage. Quick restore if anything goes wrong.',
              },
              {
                title: 'Performance monitoring',
                body: 'Uptime monitoring, speed checks, and Core Web Vitals tracking to catch issues before they impact users.',
              },
              {
                title: 'Content updates',
                body: 'Text changes, image swaps, new pages, and blog posts. Handled quickly without breaking your workflow.',
              },
              {
                title: 'SEO maintenance',
                body: 'Monitor rankings, fix broken links, update schema markup, and ensure technical SEO stays healthy.',
              },
              {
                title: 'Support & troubleshooting',
                body: 'Fast response times for bugs, errors, and questions. Priority support available for urgent issues.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12 text-center mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 uppercase tracking-wide">Flexible plans</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Choose the support level that fits your business.
            </h2>
            <p className="text-lg text-zinc-500 mt-4">
              All plans are month-to-month with no long-term contracts. Upgrade, downgrade, or cancel anytime.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {maintenanceTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-sm border p-8 ${
                  tier.highlight
                    ? 'border-teal-400/60 bg-zinc-950/90 text-white shadow-2xl lg:scale-105'
                    : 'border-zinc-800 bg-zinc-950/70 text-zinc-300'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-sm border border-teal-400/40 bg-teal-400/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-teal-400/90">
                    Most Popular
                  </span>
                )}
                <div className="flex-grow">
                  <h3 className="text-3xl font-bold font-heading mb-2 text-white">{tier.name}</h3>
                  <p className="text-zinc-500 mb-6">{tier.description}</p>
                  <p className="text-5xl font-bold mb-6 text-white">
                    {tier.price} <span className="text-lg font-normal text-zinc-500">{tier.period}</span>
                  </p>
                  <ul className="space-y-4 text-sm mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-teal-400/90 mr-3 mt-1 font-bold">
                          &#10003;
                        </span>
                        <span className="text-zinc-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className={`w-full mt-auto text-center block font-semibold py-3 px-6 rounded-sm transition duration-300 ${
                    tier.highlight
                      ? 'bg-white text-black hover:bg-zinc-200'
                      : 'border border-zinc-700 text-zinc-100 hover:bg-zinc-900'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 focus-visible:ring-offset-zinc-950`}
                >
                  Start {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-zinc-950 text-white text-center border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop worrying about website maintenance.</h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-8">
            Get a free maintenance audit. We will review your current setup, identify risks, and recommend the right support level
            for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-sm bg-white text-black hover:bg-zinc-200 transition"
          >
            Request a maintenance audit
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-black" id="faq">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 uppercase tracking-wide">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Common maintenance questions from Johannesburg businesses.
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-sm border border-zinc-800 bg-black/40 p-6 group">
                <summary className="text-lg font-semibold text-white cursor-pointer flex items-center justify-between">
                  {faq.question}
                  <span className="text-zinc-4000 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-zinc-500 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteMaintenancePage;

