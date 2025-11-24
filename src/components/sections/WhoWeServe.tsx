import React from 'react';
import Link from 'next/link';

const WhoWeServe = () => {
  const industries = [
    {
      title: 'Home & Automotive Services',
      description:
        'Panel beaters, mobile mechanics, battery services, and premium detailing studios that need phone calls and quote requests today.',
      highlights: ['Instant quote funnels', 'Sticky click-to-call', 'Local SEO domination'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Professional Practices',
      description:
        'Law firms, medical practices, and financial advisors that require authority, trust signals, and airtight conversion paths.',
      highlights: ['E-E-A-T content architecture', 'Schema + reviews', 'High intent landing pages'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'B2B & Industrial Suppliers',
      description:
        'Painting contractors, coating specialists, and technical distributors that compete on expertise and predictable lead flow.',
      highlights: ['Technical resource hubs', 'ABM-ready lead magnets', 'CRM-integrated forms'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden" id="who-we-serve">
      {/* Digital Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
              Target Market
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
            Built for High-Stakes Service Businesses
          </h2>
          <p className="text-gray-300 text-lg">
            If your business relies on qualified inbound leads, controlled positioning, and
            measurable ROI, our playbooks are built for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative p-8 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/10 transition-all duration-500 hover:border-cyan-400/60 hover:shadow-cyan-400/20 hover:-translate-y-2"
            >
              {/* Glowing Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Wireframe Decoration */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-cyan-500/20 rounded opacity-30 group-hover:opacity-60 transition-opacity">
                <div className="absolute inset-0 border-t border-l border-cyan-500/40"></div>
              </div>

              <div className="relative z-10">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-300 flex-1 mb-6">{industry.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {industry.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-semibold tracking-wide px-10 py-4 rounded-lg shadow-2xl shadow-cyan-500/30 border-2 border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <span>See Who We&apos;ve Helped</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
