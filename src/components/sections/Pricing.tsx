// src/components/sections/Pricing.tsx
import React from 'react';
import Link from 'next/link';

const packages = [
  {
    name: 'Strategic Foundation',
    description: 'For businesses ready to outrank local competitors and establish market authority.',
    price: 'R25,000',
    tag: 'Entry Tier',
    highlight: false,
    features: [
      'Deep competitor & market analysis',
      'Custom 5-7 page architecture with Next.js 15',
      'Entity-based SEO with Knowledge Graph integration',
      'Comprehensive suburb targeting strategy',
      'Performance engineered (LCP <1s, 100/100 Core Web Vitals)',
      '60-day intensive research & build process',
    ],
  },
  {
    name: 'Market Dominance',
    description: 'For serious operators who want to completely outrank every competitor in their market.',
    price: 'R45,000',
    tag: 'Most Popular',
    highlight: true,
    features: [
      'Everything in Strategic Foundation, plus:',
      'Complete competitor teardown & positioning strategy',
      '10-15 page architecture with service clusters',
      'Advanced semantic SEO & entity injection',
      'Custom conversion funnels & lead generation systems',
      '90-day intensive research, build & optimization',
      'Post-launch growth acceleration program',
    ],
  },
  {
    name: 'Category Authority',
    description: 'For businesses determined to become the undisputed leader in their category.',
    price: 'R75,000+',
    tag: 'Enterprise',
    highlight: false,
    features: [
      'Everything in Market Dominance, plus:',
      'Full market mapping & competitive intelligence',
      'Custom integrations & automation systems',
      'Multi-location/suburb expansion architecture',
      'Advanced analytics & conversion optimization',
      '120-day comprehensive strategy, build & scale',
      'Ongoing strategic partnership & optimization',
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
            Premium Investment. Maximum Return.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don&apos;t compete on price. We compete on results. Every package is an intensive, research-driven investment engineered to put you <strong className="text-gray-900">completely above your competitors</strong> and generate measurable growth. We&apos;d rather work with fewer clients who excel than hundreds who just become statistics.
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
                  {pkg.name === 'Strategic Foundation' && 'Start Strategic Foundation'}
                  {pkg.name === 'Market Dominance' && 'Start Market Dominance'}
                  {pkg.name === 'Category Authority' && 'Start Category Authority'}
                </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 text-gray-600">
          <p className="text-lg">
            Not sure which investment level is right? Our <Link href="/contact" className="text-teal-600 font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-1">Free Architecture Audit</Link> analyzes your market, competitors, and opportunities to determine the optimal strategy for dominating your category.
          </p>
          <p className="mt-2 text-sm"><strong>What&apos;s Included:</strong> All packages include premium hosting, domain registration, SSL, comprehensive research, competitor analysis, and strategic consultation. We don&apos;t charge monthly maintenance fees—our Next.js architecture is self-sustaining and requires minimal ongoing support.</p>
          <p className="mt-2 text-xs italic">*Pricing reflects intensive research, custom engineering, and strategic consultation. We work exclusively with businesses committed to market leadership.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
