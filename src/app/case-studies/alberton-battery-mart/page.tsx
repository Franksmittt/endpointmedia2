// src/app/case-studies/alberton-battery-mart/page.tsx
import React from 'react';
import Link from 'next/link';

// METADATA: SEO-optimized case study page
export const metadata = {
  title: "Alberton Battery Mart Case Study | Mobile Battery Service & E-commerce | Endpoint Media",
  description: "Discover how Endpoint Media created a ground-up strategic overhaul for Alberton Battery Mart, positioning them as the fastest mobile battery service with advanced product search, local SEO dominance, and Google Merchant Center integration.",
};

const AlbertonBatteryMartCaseStudy = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-orange-200 hover:text-white transition mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-300 bg-orange-400/20 px-4 py-2 rounded-full border border-orange-400/30">Battery Retail & Mobile Service</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-200 bg-orange-800/50 px-4 py-2 rounded-full border border-orange-700">Alberton Region</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-heading">
              Alberton Battery Mart: Authority & Speed in Mobile Battery Service
            </h1>
            <p className="text-lg md:text-xl text-orange-100 max-w-3xl">
              A ground-up strategic and technical overhaul positioning Alberton Battery Mart as the fastest, most reliable mobile battery service with advanced product discovery and Google integration.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 font-heading">
                💡 Project Overview
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This project was a <strong className="font-semibold text-gray-900">ground-up strategic and technical overhaul</strong> to position Alberton Battery Mart as the undeniable authority and fastest, most reliable mobile service in the region.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every decision—from technical architecture to content strategy—was designed with one goal: <strong className="text-orange-700 font-semibold">generating qualified leads that convert</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion & Performance Focus */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading">
              🎯 Conversion & Performance Focus
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Our development approach was dictated by conversion performance and technical excellence:
            </p>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              {/* Flawless Speed */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                      Flawless Speed
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 ml-16">
                  The Next.js App Router framework ensured <strong className="font-semibold">lightning-fast load times</strong> and seamless navigation, achieving <strong className="text-orange-700 font-semibold">perfect Lighthouse scores right out of the box</strong>. Speed isn&apos;t just a nice-to-have—it&apos;s essential for converting stranded customers.
                </p>
              </div>

              {/* Immediate Contact */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-teal-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                      Immediate Contact
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 ml-16">
                  We maximized lead flow by integrating <strong className="font-semibold">WhatsApp messaging and direct Call buttons</strong> into the sticky header, hero section, and final footer CTA. Customers can contact the business <strong className="text-teal-700 font-semibold">within seconds from any page</strong>—critical for emergency battery replacement scenarios.
                </p>
              </div>

              {/* E-commerce Ready */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    🛒
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                      Ready for E-commerce
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 ml-16">
                  The entire site architecture is prepared for future e-commerce integration, already featuring <strong className="font-semibold">dynamic price data, structured product feeds, and detailed product schemas</strong>. This foundation enables seamless expansion into online ordering and inventory management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Expertise Building */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading">
              👑 Authority & Expertise Building
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              We built massive digital trust and authority that competitors simply cannot match:
            </p>

            {/* Local Specialist Positioning */}
            <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-xl shadow-lg p-8 mb-8 border-t-4 border-orange-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Local Specialist Positioning
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16 mb-4">
                We explicitly defined the service area, with <strong className="font-semibold">dedicated landing pages created for high-value suburbs</strong> (Meyersdal, New Redruth) that use local landmarks and language to <strong className="text-orange-700 font-semibold">dominate local search results</strong>.
              </p>
              <ul className="space-y-2 text-gray-700 ml-16">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 font-bold">•</span>
                  <span>Hyper-local landing pages targeting &quot;battery replacement Meyersdal&quot; and similar high-intent searches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 font-bold">•</span>
                  <span>Local landmarks and community language that resonates with residents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 font-bold">•</span>
                  <span>Strategic positioning for Google Map Pack dominance</span>
                </li>
              </ul>
            </div>

            {/* Specialist Service Pillar */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8 mb-8 border-t-4 border-blue-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Specialist Service Pillar
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16 mb-4">
                We created extensive service pages detailing complex, high-margin services, such as <strong className="font-semibold">Advanced Diagnostics, Alternator Testing</strong>, and <strong className="text-blue-700 font-semibold">Specialist BMS Coding</strong> (the service required for premium vehicles like BMW, Mercedes, and Ford Ranger).
              </p>
              <ul className="space-y-2 text-gray-700 ml-16">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span>Captures high-margin, specialist vehicle owners (BMW, Mercedes, Ford Ranger)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span>Positions Alberton Battery Mart as the go-to expert for complex battery management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span>Differentiates from basic battery replacement competitors</span>
                </li>
              </ul>
            </div>

            {/* Content Hub Creation */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl shadow-lg p-8 border-t-4 border-teal-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Content Hub Creation
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16 mb-4">
                We developed <strong className="font-semibold">over 30 targeted blog posts</strong> categorized into &quot;Local Problem-Solving&quot; (e.g., &quot;Stuck in Alberton?&quot;) and &quot;Technical Guides&quot; (e.g., &quot;AGM vs. EFB Batteries&quot;). This content positions the client as <strong className="text-teal-700 font-semibold">the most knowledgeable expert in the region</strong>.
              </p>
              <ul className="space-y-2 text-gray-700 ml-16">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                  <span>Captures long-tail search traffic from customers researching battery solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                  <span>Builds long-term organic authority and trust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                  <span>Solves customer objections before they even call, reducing friction in the sales process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product & Data Excellence */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading">
              🛒 Product & Data Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              The product display is designed for clarity, choice, and immediate conversion:
            </p>

            {/* Flawless Product Pages */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-orange-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Flawless Product Pages (PDPs)
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16 mb-4">
                Every battery has its own <strong className="font-semibold">dedicated page with a unique URL, price, full specifications</strong> (CCA, Ah, Warranty), and specific SEO targeting. These pages are designed to <strong className="text-orange-700 font-semibold">reassure the customer and guide them immediately to calling for fitment</strong>.
              </p>
            </div>

            {/* Advanced Search & Filtering */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-teal-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Advanced Search & Filtering
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16 mb-4">
                We engineered a robust browsing experience that allows customers to find the exact battery they need, either by <strong className="font-semibold">Quick Code Lookup</strong> (e.g., searching &quot;619&quot;) or filtering by vehicle type, brand, and Ah capacity.
              </p>
              <ul className="space-y-2 text-gray-700 ml-16">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                  <span>Quick Code Lookup for customers who know their battery code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                  <span>Filter by vehicle type, brand, and capacity (Ah)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                  <span>Streamlined user experience that reduces decision friction</span>
                </li>
              </ul>
            </div>

            {/* Google Integration */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Google Integration for Sales
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16 mb-4">
                We created <strong className="font-semibold">real-time dynamic XML feed routes</strong> to plug directly into Google Merchant Center and Google Local Inventory Ads (LIA). This technical feature ensures the client&apos;s inventory and pricing are <strong className="text-blue-700 font-semibold">instantly available for Google Shopping and Maps ads</strong>.
              </p>
              <ul className="space-y-2 text-gray-700 ml-16">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span>Maximizes visibility when customers search for &quot;batteries near me&quot;</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span>Enables high-return Google Shopping and Local Inventory Ads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span>Real-time inventory and pricing synchronization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading">
              📈 Bottom Line Benefit for the Client
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              This website is not just a beautiful brochure; it is a <strong className="text-orange-700 font-semibold">sales funnel built to generate leads</strong> that are ready to convert:
            </p>

            {/* Benefits Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-600 to-teal-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold font-heading">Feature</th>
                      <th className="px-6 py-4 text-left font-bold font-heading">Client Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-semibold text-gray-900">Mobile Callout & Hours in Header</td>
                      <td className="px-6 py-4 text-gray-700">Converts stranded customers instantly.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition bg-gray-50/50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Hyper-Local Landing Pages</td>
                      <td className="px-6 py-4 text-gray-700">Dominates local SEO for high-intent searches (&quot;battery replacement Meyersdal&quot;).</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-semibold text-gray-900">BMS Coding & Diagnostics Content</td>
                      <td className="px-6 py-4 text-gray-700">Captures high-margin, specialist vehicle owners (BMW, Mercedes).</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition bg-gray-50/50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Product Data Integration</td>
                      <td className="px-6 py-4 text-gray-700">Enables high-return Google Shopping and Local Inventory Ads.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-semibold text-gray-900">Content Marketing/Blog</td>
                      <td className="px-6 py-4 text-gray-700">Builds long-term organic authority and captures customers who are researching (not just buying).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
              Results & Impact
            </h2>
            <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
              A strategic website transformation that positions Alberton Battery Mart as the fastest, most authoritative mobile battery service in the region.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">30+</div>
                <p className="text-orange-100 text-sm">Targeted Blog Posts</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">100%</div>
                <p className="text-orange-100 text-sm">Lighthouse Score</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">Real-Time</div>
                <p className="text-orange-100 text-sm">Google Integration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">Instant</div>
                <p className="text-orange-100 text-sm">Contact Options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
              Ready to Build Your Authority?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how we can create a strategic website transformation that generates qualified leads and positions you as the regional expert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-10 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-teal-300"
              >
                Get Your Free Growth Audit
              </Link>
              <Link
                href="/case-studies"
                className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-white"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlbertonBatteryMartCaseStudy;

