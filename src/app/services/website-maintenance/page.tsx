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
    title: 'Website Maintenance Johannesburg | Ongoing Support & Updates | Endpoint Media',
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
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <p className="text-teal-300 text-xs md:text-sm uppercase tracking-[0.35em] mb-4">Maintenance • Security • Support</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Keep your website fast, secure, and updated—without the headaches.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            Your website is a revenue engine. We handle security updates, backups, performance tuning, and content changes so you
            can focus on running your Johannesburg business, not managing technical debt.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/30 hover:bg-teal-400 transition"
            >
              Get a maintenance quote
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              View package options
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Trusted by service businesses across Sandton, Rosebank, Midrand, Bryanston, and the broader Gauteng region.
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

      {/* What we handle */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">What we handle</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Everything required to keep your website running smoothly.
            </h2>
            <p className="text-lg text-gray-600 mt-4">
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
                body: 'Text changes, image swaps, new pages, and blog posts—handled quickly without breaking your workflow.',
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
              <div key={item.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12 text-center mx-auto">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">Flexible plans</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Choose the support level that fits your business.
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              All plans are month-to-month with no long-term contracts. Upgrade, downgrade, or cancel anytime.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {maintenanceTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col p-8 rounded-2xl border ${
                  tier.highlight
                    ? 'bg-gray-900 text-white border-teal-500 shadow-2xl lg:scale-105'
                    : 'bg-white text-gray-900 border-gray-200 shadow-lg'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div className="flex-grow">
                  <h3 className="text-3xl font-bold font-heading mb-2">{tier.name}</h3>
                  <p className={tier.highlight ? 'text-gray-300 mb-6' : 'text-gray-500 mb-6'}>{tier.description}</p>
                  <p className="text-5xl font-extrabold mb-6">
                    {tier.price} <span className="text-lg font-normal">{tier.period}</span>
                  </p>
                  <ul className="space-y-4 text-sm mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className={tier.highlight ? 'text-teal-400 mr-3 mt-1 font-bold' : 'text-teal-500 mr-3 mt-1'}>
                          &#10003;
                        </span>
                        <span className={tier.highlight ? 'text-gray-100' : 'text-gray-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className={`w-full mt-auto text-center block font-bold py-3 px-6 rounded-lg transition duration-300 ${
                    tier.highlight
                      ? 'bg-teal-500 hover:bg-teal-400 text-white focus-visible:ring-offset-gray-900'
                      : 'bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500`}
                >
                  Start {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Stop worrying about website maintenance.</h2>
          <p className="text-lg text-teal-50 max-w-3xl mx-auto mb-8">
            Get a free maintenance audit. We will review your current setup, identify risks, and recommend the right support level
            for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-white text-teal-700 hover:bg-teal-50 transition"
          >
            Request a maintenance audit
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Common maintenance questions from Johannesburg businesses.
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

export default WebsiteMaintenancePage;

