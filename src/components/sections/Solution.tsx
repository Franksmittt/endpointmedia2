// src/components/sections/Solution.tsx
import React from 'react';
import Image from 'next/image';

const Solution = () => {
  return (
    <section id="solution" className="py-24 bg-white relative overflow-hidden">
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
              Your Growth Partner
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
            We Engineer Lead-Generating Engines for Johannesburg.
          </h2>
          <p className="text-xl text-gray-600">
            Endpoint Media focuses exclusively on Johannesburg&apos;s hardest-working service businesses. We are your local digital growth partner – direct, transparent, and relentlessly focused on your ROI.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
            <Image
              src="/images/solution-growth-partner.jpg"
              alt="A custom-generated architectural blueprint showing a cohesive digital strategy for web design and local SEO."
              width={600}
              height={400}
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover border-2 border-cyan-100 group-hover:border-cyan-200 transition-all"
              priority={false}
              unoptimized={false}
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-heading text-gray-900">Your Dedicated Johannesburg Growth Partner</h3>
            <p className="text-lg text-gray-700">
              Forget impersonal agencies. You get direct access and accountability. We understand the nuances of the Johannesburg market—from Sandton to Soweto—because we operate within it. Your success is our focus.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-6 h-6 mr-3 mt-1 bg-cyan-50 rounded-full flex items-center justify-center border-2 border-cyan-200 group-hover:border-cyan-400 transition-colors">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>
                  <strong className="font-semibold text-gray-900">Radical Transparency:</strong> A straightforward process, clear pricing, and measurable results (qualified leads, increased calls, new customers).
                </span>
              </li>
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-6 h-6 mr-3 mt-1 bg-cyan-50 rounded-full flex items-center justify-center border-2 border-cyan-200 group-hover:border-cyan-400 transition-colors">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>
                  <strong className="font-semibold text-gray-900">Performance Engineered:</strong> Blazing-fast, mobile-first websites optimized to dominate local Johannesburg Google searches and convert visitors effectively.
                </span>
              </li>
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-6 h-6 mr-3 mt-1 bg-cyan-50 rounded-full flex items-center justify-center border-2 border-cyan-200 group-hover:border-cyan-400 transition-colors">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>
                  <strong className="font-semibold text-gray-900">Rapid Deployment:</strong> See a custom mockup in 48 hours. Launch your revenue-generating website in days, not months.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
