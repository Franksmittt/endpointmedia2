// src/app/case-studies/qj-paint-world/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "QJ Paint World Case Study | Expert Technical Supplier & B2B Paint Specialist | Endpoint Media",
    description: "Discover how Endpoint Media positioned QJ Paint World as the Expert Technical Supplier for professional Decorative, Automotive, and Industrial coatings in Johannesburg South, with B2B-focused conversion strategy.",
    path: "/case-studies/qj-paint-world",
    keywords: [
      "b2b paint supplier website",
      "technical coatings case study",
      "qj paint world web design",
      "endpoint media b2b case study",
    ],
    openGraph: {
      type: "article",
    },
  });
}

const QJPaintWorldCaseStudy = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-slate-800 to-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-red-200 hover:text-white transition mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-300 bg-red-400/20 px-4 py-2 rounded-full border border-red-400/30">Technical Paint Supplier</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-200 bg-red-800/50 px-4 py-2 rounded-full border border-red-700">B2B Focus</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-heading">
              QJ Paint World: Expert Technical Supplier for Professional Coatings
            </h1>
            <p className="text-lg md:text-xl text-red-100 max-w-3xl">
              A strategic B2B positioning that establishes QJ Paint World as the <strong className="text-red-300 font-semibold">Expert Technical Supplier</strong> for professional Decorative, Automotive, and Industrial coatings in the Johannesburg South region.
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
                This project establishes QJ Paint World as the <strong className="font-semibold text-gray-900">Expert Technical Supplier</strong> for professional Decorative, Automotive, and Industrial coatings in the Johannesburg South region. The strategy is built on maximizing B2B conversions by emphasizing <strong className="text-red-700 font-semibold">technical specialization, reliable supply chains, and superior product knowledge</strong>.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The core business goal is loyalty and lead generation from professional contractors, positioning QJ as a trusted technical solutions partner rather than a retail paint store.
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

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              {/* Video Hero & Visual Impact */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    🎥
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                      Video Hero & Visual Impact
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 ml-16">
                  The homepage features a dynamic, full-screen video hero with an animated shimmer bar and a <strong className="font-semibold">Hyper-Red/Deep Slate</strong> palette to create an immediate, high-impact sense of quality and urgency. This visual strategy immediately communicates premium positioning to professional contractors.
                </p>
              </div>

              {/* Performance Speed */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-slate-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                      Performance (Speed)
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 ml-16">
                  The core architecture is based on <strong className="font-semibold">Next.js 14</strong> using the App Router, optimized with <code className="bg-gray-100 px-2 py-1 rounded text-sm">swcMinify: true</code> and asset optimizations to ensure <strong className="text-slate-700 font-semibold">lightning-fast loading speeds for trade professionals</strong> who need quick access to product specifications and technical data.
                </p>
              </div>

              {/* Supply Chain Reliability */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-teal-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    🚚
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                      Supply Chain Reliability
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 ml-16 mb-4">
                  The <strong className="font-semibold">Trade Delivery Program</strong> is productized and placed alongside key technical services, assuring contractors that reliable, priority delivery is part of the partnership benefits, <strong className="text-teal-700 font-semibold">minimizing their project downtime</strong>.
                </p>
                <ul className="space-y-2 text-gray-700 ml-16">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                    <span>Productized delivery service reduces contractor uncertainty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                    <span>Priority handling for trade partners ensures project continuity</span>
                  </li>
                </ul>
              </div>

              {/* Always On Contact */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                      Always On Contact
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 ml-16">
                  Canonical phone numbers (<code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">010 216 9131</code>) are consistently visible in the <code className="bg-gray-100 px-2 py-1 rounded text-sm">TopBar.tsx</code>, <code className="bg-gray-100 px-2 py-1 rounded text-sm">Header.tsx</code>, and <code className="bg-gray-100 px-2 py-1 rounded text-sm">Footer.tsx</code>, ensuring <strong className="text-blue-700 font-semibold">quick access for urgent trade orders</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Technical Specialization */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading">
              👑 Authority & Technical Specialization
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              The site differentiates QJ from retail competitors by positioning the business as a <strong className="text-red-700 font-semibold">Technical Solutions Partner</strong> across three core verticals:
            </p>

            {/* Expert Generalist USP */}
            <div className="bg-gradient-to-br from-red-50 to-slate-50 rounded-xl shadow-lg p-8 mb-8 border-t-4 border-red-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    The Expert Generalist USP
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16 mb-4">
                The site is structured into three main hubs (Decorative, Automotive, Industrial), reinforcing the unique claim that QJ provides <strong className="font-semibold">certified expertise for all three verticals under one roof</strong>—a significant competitive advantage over single-vertical competitors.
              </p>
              <ul className="space-y-2 text-gray-700 ml-16">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1 font-bold">•</span>
                  <span>One-stop technical solutions for contractors working across multiple verticals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1 font-bold">•</span>
                  <span>Eliminates need to source from multiple suppliers, saving time and ensuring consistency</span>
                </li>
              </ul>
            </div>

            {/* Productized Technical Services */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg p-8 mb-8 border-t-4 border-slate-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Productized Technical Services
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16 mb-4">
                Services are offered as defined, value-added products that eliminate contractor risk and guesswork:
              </p>
              <div className="ml-16 space-y-4">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h4 className="font-bold text-gray-900 mb-2">Expert Paint Colour Matching</h4>
                  <p className="text-gray-700 text-sm">
                    Utilizes an in-house <strong className="font-semibold">digital spectrophotometer</strong> to guarantee perfect color matching for any substrate (automotive, decorative, industrial).
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h4 className="font-bold text-gray-900 mb-2">On-Site Technical Consultation</h4>
                  <p className="text-gray-700 text-sm">
                    Offers engineers to visit industrial sites for <strong className="font-semibold">certified coating specifications</strong> (Epoxy, Polyurethane, Anti-Corrosion) based on environment and traffic.
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced Navigation */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl shadow-lg p-8 border-t-4 border-blue-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Advanced Navigation
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16 mb-4">
                The desktop navigation uses a sophisticated <strong className="font-semibold">Radix UI Navigation Menu</strong> to present complex, specialized product silos (e.g., Industrial → Anti-Corrosion, Consumables → Automotive Bodyshop), quickly guiding B2B users to the exact specification they need.
              </p>
              <ul className="space-y-2 text-gray-700 ml-16">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span>Reduces decision friction for professional contractors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span>Organizes complex product catalogs into logical, searchable hierarchies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span>Enables quick access to technical specifications and product data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Growth & Loyalty */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading">
              💼 B2B Growth & Loyalty
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              The core business goal is loyalty and lead generation from professional contractors:
            </p>

            {/* Contractor's Hub */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-red-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    The Contractor&apos;s Hub (Lead Generation Moat)
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16 mb-4">
                The <strong className="font-semibold">Trade Partner Program</strong> is the centerpiece of the B2B strategy, marketed with the explicit benefit: <strong className="text-red-700 font-semibold">&quot;We get you more work.&quot;</strong> This is backed by the promise of an exclusive <strong className="font-semibold">QJ-Approved Referral Directory</strong> to funnel B2C leads to contractors, locking in loyalty.
              </p>
              <ul className="space-y-2 text-gray-700 ml-16">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1 font-bold">•</span>
                  <span>Creates a value proposition beyond just product supply</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1 font-bold">•</span>
                  <span>Builds a network effect that increases contractor retention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1 font-bold">•</span>
                  <span>Differentiates from transactional competitors by offering business growth support</span>
                </li>
              </ul>
            </div>

            {/* Product-Focused Content */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-slate-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Product-Focused Content
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16 mb-4">
                Detailed landing pages were created for high-value B2B brands, establishing QJ as the official local supplier for <strong className="font-semibold">mipa, HB BODY, SHIELD, PAINTCHEM, and Flash Harry</strong>.
              </p>
              <ul className="space-y-2 text-gray-700 ml-16">
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3 mt-1 font-bold">•</span>
                  <span>Positions QJ as the authorized technical partner for premium brands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3 mt-1 font-bold">•</span>
                  <span>Builds trust through brand association and official supplier status</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3 mt-1 font-bold">•</span>
                  <span>Captures search traffic from contractors seeking specific brand availability</span>
                </li>
              </ul>
            </div>

            {/* Visual Proof */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-teal-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Visual Proof of Finish
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16">
                The <strong className="font-semibold">Artisan Gallery</strong> component is integrated on the homepage to visually demonstrate quality and finish across different verticals (high-gloss automotive, industrial screeds, custom decorative), providing immediate visual proof of technical capability and quality outcomes.
              </p>
            </div>

            {/* Location Hub */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Detailed Location Hub
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 ml-16">
                The site centralizes all <strong className="font-semibold">NAP (Name, Address, Phone)</strong> data around a single <strong className="text-blue-700 font-semibold">Alberton Trade Centre</strong> location, which functions as the primary hub for sales, technical service, and trade delivery, ensuring <strong className="font-semibold">strong local SEO and trade reliability</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
              Results & Impact
            </h2>
            <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
              A strategic B2B positioning that establishes QJ Paint World as the Expert Technical Supplier for professional contractors across three verticals.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">3</div>
                <p className="text-red-100 text-sm">Core Verticals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">5+</div>
                <p className="text-red-100 text-sm">Brand Partners</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">B2B</div>
                <p className="text-red-100 text-sm">Focused Strategy</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">24/7</div>
                <p className="text-red-100 text-sm">Contact Access</p>
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
              Ready to Position Your Business as the Technical Expert?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how we can transform your B2B positioning and build a website that drives contractor loyalty and lead generation.
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

export default QJPaintWorldCaseStudy;

