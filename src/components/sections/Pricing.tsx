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
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-200">
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
              className={`group relative flex flex-col p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                pkg.highlight
                  ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white border-cyan-500/50 shadow-2xl shadow-cyan-500/20 lg:scale-105'
                  : 'bg-white text-gray-900 border-cyan-100 shadow-lg hover:shadow-xl hover:border-cyan-200'
              }`}
            >
              {/* Glowing Effect for Highlighted */}
              {pkg.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              )}

              {/* Wireframe Decoration */}
              <div className={`absolute top-4 right-4 w-12 h-12 border rounded opacity-20 group-hover:opacity-40 transition-opacity ${
                pkg.highlight ? 'border-cyan-500/30' : 'border-cyan-200'
              }`}>
                <div className={`absolute inset-0 border-t border-l ${
                  pkg.highlight ? 'border-cyan-500/40' : 'border-cyan-200'
                }`}></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold font-heading">{pkg.name}</h3>
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
                      pkg.highlight ? 'bg-cyan-600 text-white' : 'bg-cyan-50 text-cyan-600'
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
                      <div className={`flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 ${
                        pkg.highlight 
                          ? 'bg-cyan-500/20 border-cyan-400' 
                          : 'bg-cyan-50 border-cyan-200'
                      }`}>
                        <svg className={`w-3 h-3 ${pkg.highlight ? 'text-cyan-300' : 'text-cyan-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className={pkg.highlight ? 'text-gray-100' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#audit"
                  className={`w-full mt-8 text-center block font-bold py-3 px-6 rounded-lg transition duration-300 ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-white border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500`}
                >
                  Start {pkg.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 text-gray-600">
          <p className="text-lg max-w-3xl mx-auto">
            Not sure which investment level is right? Our{' '}
            <Link
              href="#audit"
              className="text-cyan-600 font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded px-1"
            >
              Free Architecture Audit
            </Link>{' '}
            analyzes your market, competitors, and opportunities to determine the optimal strategy for dominating your category.
          </p>
          <p className="mt-4 text-sm max-w-2xl mx-auto">
            <strong className="text-gray-900">What&apos;s Included:</strong> All packages include premium hosting, domain registration, SSL, comprehensive research, competitor analysis, and strategic consultation. We don&apos;t charge monthly maintenance fees—our Next.js architecture is self-sustaining and requires minimal ongoing support.
          </p>
          <p className="mt-4 text-xs text-gray-500 italic max-w-2xl mx-auto">
            *Pricing reflects intensive research, custom engineering, and strategic consultation. We work exclusively with businesses committed to market leadership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
