// src/app/process/page.tsx
import React from 'react';
import Link from 'next/link';

// METADATA: Trust-building page
export const metadata = {
  title: "Our Web Design & SEO Process | Endpoint Media Johannesburg",
  description: "Discover Endpoint Media's proven 3-step process for building high-performance, lead-generating websites that dominate the Johannesburg market. Learn how we deliver ROI.",
};

const ProcessPage = () => {
  return (
    <>
      {/* Hero Section for Process Page */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Our Proven Process for Johannesburg Market Dominance
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Transparency builds trust. Here&apos;s our disciplined, 3-step blueprint designed to engineer predictable growth for your Johannesburg service business.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-24 bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
              The Johannesburg Dominance Blueprint
            </h2>
            <p className="text-lg text-gray-600">
              We transform local search intent into your next paying customer through a meticulous, results-driven methodology.
            </p>
          </header>

          {/* Timeline / Steps */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-teal-500/30 hidden md:block"
              aria-hidden="true"
            ></div>

            {/* Step 1 */}
            <div className="md:flex md:items-start w-full mb-16 md:space-x-12 relative">
              <div className="md:w-5/12 md:text-right">
                <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-teal-500 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">1. Elite Performance Foundation</h3>
                  <p className="text-gray-700">
                    We start by engineering for <strong className="text-teal-700 font-semibold">sub-second load times</strong> and flawless mobile execution across all devices. Google prioritizes speed, especially for &quot;near me&quot; searches originating in Johannesburg. By optimizing Core Web Vitals (like LCP) from day one, your site doesn&apos;t just compete; it dominates performance rankings. This isn&apos;t just speed; it&apos;s a competitive weapon.
                  </p>
                </div>
              </div>
              <div className="md:w-2/12 hidden md:block text-center z-10 pt-4"> 
                <div className="w-16 h-16 mx-auto bg-teal-500 rounded-full text-white flex items-center justify-center font-extrabold text-2xl shadow-xl ring-8 ring-gray-100">1</div>
              </div>
              <div className="md:w-5/12 hidden md:block"></div> 
            </div>

            {/* Step 2 */}
            <div className="md:flex md:items-start w-full mb-16 md:space-x-12 md:flex-row-reverse relative">
              <div className="md:w-5/12 md:text-left">
                <div className="p-8 bg-gray-900 text-white rounded-xl shadow-lg border-r-4 border-blue-500 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3 font-heading">2. Hyper-Local SEO Architecture</h3>
                  <p className="text-gray-300">
                    Generic, nationwide SEO strategies fail in the competitive Johannesburg market. We meticulously research and map your specific services to the precise suburbs and search queries your ideal customers use (e.g., &quot;emergency plumber Sandton,&quot; &quot;electrician Randburg&quot;). Each core service page is then engineered with geographically-targeted content and technical optimizations to become the definitive online answer for a local customer in their exact moment of need. This precision targeting drives qualified, high-intent local leads directly to your business.
                  </p>
                </div>
              </div>
              <div className="md:w-2/12 hidden md:block text-center z-10 pt-4"> 
                <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full text-white flex items-center justify-center font-extrabold text-2xl shadow-xl ring-8 ring-gray-100">2</div>
              </div>
              <div className="md:w-5/12 hidden md:block"></div> 
            </div>

            {/* Step 3 */}
            <div className="md:flex md:items-start w-full mb-8 md:space-x-12 relative"> 
              <div className="md:w-5/12 md:text-right">
                <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-teal-500 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">3. Map Pack Dominance &amp; Authority Building</h3>
                  <p className="text-gray-700">
                    Ranking high isn&apos;t enough; converting searchers requires trust. We establish your business&apos;s authority through comprehensive **Google Business Profile (GBP) optimization**, ensuring every detail positions you as the local expert. Simultaneously, we implement a system to help you generate a consistent stream of high-quality customer reviews. This combined strategy is designed to secure prominent placement in the lucrative **Google Map Pack** – the primary source of ready-to-buy local leads – and build the credibility needed to turn visibility into revenue.
                  </p>
                </div>
              </div>
              <div className="md:w-2/12 hidden md:block text-center z-10 pt-4"> 
                <div className="w-16 h-16 mx-auto bg-teal-500 rounded-full text-white flex items-center justify-center font-extrabold text-2xl shadow-xl ring-8 ring-gray-100">3</div>
              </div>
              <div className="md:w-5/12 hidden md:block"></div> 
            </div>

          </div> 

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold font-heading mb-4 text-gray-800">Ready to Implement the Blueprint?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">See how this process can be tailored to your specific Johannesburg service business.</p>
            <Link
              href="/contact" 
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 focus-visible:ring-teal-500" 
            >
              Get Your Free Growth Audit
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProcessPage;