// src/components/sections/Pricing.tsx
import React from 'react';
import Link from 'next/link';

const packages = [
  {
    name: 'Foundation',
    description: 'Launch a credible, professional presence engineered for Johannesburg buyers.',
    price: 'R5,500',
    tag: 'Entry',
    highlight: false,
    features: [
      '3-page build (Home, About, Services/Contact)',
      'Essential Local SEO + Google Business Profile setup',
      'Mobile-first responsive layout',
      '48-hour strategy + mockup preview',
      'Performance tuned for Core Web Vitals',
    ],
  },
  {
    name: 'Growth Engine',
    description: 'Full-stack demand engine for operators who want measurable lead flow.',
    price: 'R10,000',
    tag: 'Most popular',
    highlight: true,
    features: [
      '5–7 page architecture incl. service silos & blog',
      'Advanced schema + suburb targeting',
      'Analytics, call tracking & CRM hand-off',
      'Conversion-focused copywriting & UX polish',
      'Priority performance + QA pass',
    ],
  },
  {
    name: 'Market Leader',
    description: 'For teams hell-bent on suburb domination, automation, and authority.',
    price: 'R15,000',
    tag: 'All-in',
    highlight: false,
    features: [
      '8+ pages with calculators, booking or quote flows',
      'Competitor teardown & bespoke copy system',
      'Review acceleration + trust badge deployment',
      'Automation & CRM/API integrations',
      'Launch training + priority post-launch support',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-teal-600 font-semibold uppercase tracking-wide">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
            Pricing engineered for local ROI.
          </h2>
          <p className="text-xl text-gray-600">
            No retainers or vague estimates. Every package is a defined sprint built to produce leads in the suburbs that matter most.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col p-8 rounded-2xl border ${
                pkg.highlight
                  ? 'bg-gray-900 text-white border-teal-500 shadow-2xl lg:scale-105'
                  : 'bg-white text-gray-900 border-gray-200 shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold font-heading">{pkg.name}</h3>
                <span
                  className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
                    pkg.highlight ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-600'
                  }`}
                >
                  {pkg.tag}
                </span>
              </div>
              <p className={pkg.highlight ? 'text-gray-200 mb-6' : 'text-gray-500 mb-6'}>{pkg.description}</p>
              <p className="text-5xl font-extrabold mb-6">
                {pkg.price} <span className="text-lg font-normal">once-off</span>
              </p>
              <ul className="space-y-4 text-sm flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className={`mr-3 mt-1 ${pkg.highlight ? 'text-teal-300' : 'text-teal-500'}`}>&#10003;</span>
                    <span className={pkg.highlight ? 'text-gray-100' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#audit"
                className={`w-full mt-8 text-center block font-bold py-3 px-6 rounded-lg transition duration-300 ${
                  pkg.highlight
                    ? 'bg-teal-500 hover:bg-teal-400 text-white focus-visible:ring-offset-gray-900'
                    : 'bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500`}
              >
                Start {pkg.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 text-gray-600">
          <p className="text-lg">
            Unsure which sprint fits? Your{' '}
            <Link
              href="#audit"
              className="text-teal-600 font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-1"
            >
              Free Growth Audit
            </Link>{' '}
            breaks down deliverables, timelines, and projected lead volume.
          </p>
          <p className="mt-2 text-sm">
            All packages include 1 year of essential hosting, domain registration, SSL, and launch support. Maintenance retainers
            start at R500/month if needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;