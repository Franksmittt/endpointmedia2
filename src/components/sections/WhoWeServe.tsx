import React from 'react';
import Link from 'next/link';

const WhoWeServe = () => {
  const industries = [
    {
      title: 'Home & Automotive Services',
      description:
        'Panel beaters, mobile mechanics, battery services, and premium detailing studios that need phone calls and quote requests today.',
      highlights: ['Instant quote funnels', 'Sticky click-to-call', 'Local SEO domination'],
    },
    {
      title: 'Professional Practices',
      description:
        'Law firms, medical practices, and financial advisors that require authority, trust signals, and airtight conversion paths.',
      highlights: ['E-E-A-T content architecture', 'Schema + reviews', 'High intent landing pages'],
    },
    {
      title: 'B2B & Industrial Suppliers',
      description:
        'Painting contractors, coating specialists, and technical distributors that compete on expertise and predictable lead flow.',
      highlights: ['Technical resource hubs', 'ABM-ready lead magnets', 'CRM-integrated forms'],
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="who-we-serve">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
            Who We Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-heading mb-4">
            Built for High-Stakes Service Businesses
          </h2>
          <p className="text-gray-600 text-lg">
            If your business relies on qualified inbound leads, controlled positioning, and
            measurable ROI, our playbooks are built for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-600 flex-1">{industry.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {industry.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">●</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/case-studies"
            className="inline-block bg-gray-900 text-white font-semibold tracking-wide px-10 py-4 rounded-full hover:bg-gray-800 transition"
          >
            See Who We&apos;ve Helped
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;

