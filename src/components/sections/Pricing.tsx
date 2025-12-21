// src/components/sections/Pricing.tsx
import React from 'react';
import Link from 'next/link';

const packages = [
  {
    name: 'Foundation',
    description: 'Establish your essential, professional online footprint.',
    price: 'R5,500',
    tag: '',
    highlight: false,
    features: [
      '<strong>3-Page Custom Website</strong> (Home, About, Services/Contact)',
      'Essential <strong>Local SEO Setup</strong> & Google Business Profile Optimization',
      'Mobile-First Responsive Design',
      '<strong>Rapid 48-Hour</strong> Initial Mockup',
      'Built for Speed & Performance',
      'Contact Form Integration',
    ],
  },
  {
    name: 'Growth Engine',
    description: 'The complete toolkit for serious lead generation and local dominance.',
    price: 'R10,000',
    tag: 'Most Popular',
    highlight: true,
    features: [
      'Everything in Foundation, plus:',
      '<strong>5-7 Page Website</strong> (Incl. dedicated service pages, blog setup)',
      '<strong>Advanced Local SEO</strong> (Johannesburg suburb targeting, schema markup)',
      'Google Analytics Setup & Reporting Intro',
      'Enhanced Contact Forms & Social Media Links',
      'Priority Performance Tuning',
    ],
  },
  {
    name: 'Market Leader',
    description: 'For established pros aiming for total Johannesburg market saturation.',
    price: 'R15,000',
    tag: '',
    highlight: false,
    features: [
      'Everything in Growth Engine, plus:',
      '<strong>8+ Pages</strong> & Advanced Features (e.g., booking/quote system integration)',
      '<strong>Comprehensive SEO Strategy</strong> & Competitor Analysis',
      'Advanced Google Analytics Goal Tracking',
      'Priority Support & Launch Training Session',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-4 py-2 rounded-full border border-teal-200">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
            Website Packages Engineered for Local ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the investment level designed to make your Johannesburg business the obvious choice for local customers searching online right now.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`group relative flex flex-col p-8 rounded-xl border transition-all duration-300 ${
                pkg.highlight
                  ? 'bg-gray-900 text-white border-4 border-teal-500 shadow-2xl lg:scale-105'
                  : 'bg-white text-gray-900 border-gray-200 shadow-lg hover:shadow-xl hover:border-teal-300'
              }`}
            >
              {pkg.tag && (
                <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  {pkg.tag}
                </span>
              )}
              <div className="flex-grow">
                <h3 className="text-3xl font-bold font-heading mb-2">{pkg.name}</h3>
                <p className={pkg.highlight ? 'text-gray-300 mb-6' : 'text-gray-500 mb-6'}>{pkg.description}</p>
                <p className={`text-5xl font-extrabold mb-6 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.price} <span className={`text-lg font-normal ${pkg.highlight ? 'text-gray-400' : 'text-gray-500'}`}>once-off</span>
                </p>
                <ul className={`space-y-4 text-sm mb-8 ${pkg.highlight ? 'text-gray-200' : 'text-gray-700'}`}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className={pkg.highlight ? 'text-teal-400 mr-3 mt-1 font-bold' : 'text-teal-500 mr-3 mt-1'}>&#10003;</span>
                      <span dangerouslySetInnerHTML={{ __html: feature.replace(/<strong>/g, '<strong className="font-semibold">') }} />
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                  href="/contact"
                  className={`w-full mt-8 text-center block font-bold py-3 px-6 rounded-lg transition duration-300 ${
                    pkg.highlight
                      ? 'bg-teal-500 hover:bg-teal-600 text-white'
                      : 'bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500`}
                >
                  {pkg.name === 'Foundation' && 'Get Foundation'}
                  {pkg.name === 'Growth Engine' && 'Choose Growth Engine'}
                  {pkg.name === 'Market Leader' && 'Go Market Leader'}
                </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 text-gray-600">
          <p className="text-lg">
            Not sure which package is right? Your <Link href="/contact" className="text-teal-600 font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-1">Free Growth Audit</Link> will provide clarity.
          </p>
          <p className="mt-2 text-sm">All packages include 1 year of free essential hosting & domain name registration if required.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
