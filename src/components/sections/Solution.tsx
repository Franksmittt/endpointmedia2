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
            Extreme Focus. Uncompromising Attention to Every Detail.
          </h2>
          <p className="text-xl text-gray-600">
            We don&apos;t just build websites. We <strong className="text-gray-900">dissect every millimeter</strong> of your business, your market, your competitors, and your customers. Every decision is backed by research. Every pixel is intentional. Every word is strategic. This is how we engineer competitive advantages that can&apos;t be replicated.
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
            <h3 className="text-3xl font-bold font-heading text-gray-900">The Endpoint Difference: Deep Research, Precision Execution</h3>
            <p className="text-lg text-gray-700">
              Before we write a single line of code, we spend weeks uncovering every detail. We analyze your competitors&apos; weaknesses. We map your market&apos;s search behavior. We understand your customer&apos;s psychology. Then we engineer a solution that puts you in a league of your own.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-6 h-6 mr-3 mt-1 bg-cyan-50 rounded-full flex items-center justify-center border-2 border-cyan-200 group-hover:border-cyan-400 transition-colors">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>
                  <strong className="font-semibold text-gray-900">Competitive Intelligence:</strong> We tear down every competitor in your market. We identify their weaknesses, analyze their SEO strategies, and engineer positioning that makes you the obvious choice. You don&apos;t just compete—you dominate.
                </span>
              </li>
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-6 h-6 mr-3 mt-1 bg-cyan-50 rounded-full flex items-center justify-center border-2 border-cyan-200 group-hover:border-cyan-400 transition-colors">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>
                  <strong className="font-semibold text-gray-900">Market Deep-Dive:</strong> We uncover search patterns, analyze customer intent, map suburb-by-suburb opportunities, and build an architecture that captures high-value traffic your competitors miss. Nothing is left to chance.
                </span>
              </li>
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-6 h-6 mr-3 mt-1 bg-cyan-50 rounded-full flex items-center justify-center border-2 border-cyan-200 group-hover:border-cyan-400 transition-colors">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>
                  <strong className="font-semibold text-gray-900">Extreme Attention to Detail:</strong> Every word, every image, every technical decision is backed by research and strategy. We don&apos;t use templates. We don&apos;t cut corners. We engineer solutions that generate measurable ROI and put you completely above your competition.
                </span>
              </li>
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-6 h-6 mr-3 mt-1 bg-cyan-50 rounded-full flex items-center justify-center border-2 border-cyan-200 group-hover:border-cyan-400 transition-colors">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>
                  <strong className="font-semibold text-gray-900">Selective Partnership:</strong> We work with a handful of clients at a time. Your success is not optional—it&apos;s our only metric. We&apos;d rather have 10 clients who dominate than 100 who just become numbers. You get our full attention, expertise, and commitment to your growth.
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
