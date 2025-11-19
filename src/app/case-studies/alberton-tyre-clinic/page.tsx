// src/app/case-studies/alberton-tyre-clinic/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Alberton Tyre Clinic Case Study | Safety-Driven Vehicle Maintenance & Local Trust | Endpoint Media",
    description: "Discover how Endpoint Media transformed Alberton Tyre Clinic from a traditional tyre shop into a modern Safety-Driven Vehicle Maintenance Center, leveraging local trust, family heritage, and guaranteed safety protocols.",
    path: "/case-studies/alberton-tyre-clinic",
    keywords: [
      "tyre clinic case study",
      "vehicle safety web design",
      "alberton tyre website",
      "local trust marketing south africa",
    ],
    openGraph: {
      type: "article",
    },
  });
}

const AlbertonTyreClinicCaseStudy = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-emerald-200 hover:text-white transition mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-400/20 px-4 py-2 rounded-full border border-emerald-400/30">Tyre & Vehicle Safety</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200 bg-emerald-800/50 px-4 py-2 rounded-full border border-emerald-700">Family Heritage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-heading">
              Alberton Tyre Clinic: The Safety & Heritage Funnel
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl">
              A strategic pivot transforming a traditional tyre shop into a modern <strong className="text-emerald-300 font-semibold">Safety-Driven Minor Vehicle Maintenance Center</strong>, leveraging local trust, family heritage, and guaranteed safety protocols to combat national chain competition.
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
                🚀 Project Overview
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This project was a <strong className="font-semibold text-gray-900">strategic pivot</strong>, transforming a traditional tyre shop into a modern <strong className="text-emerald-700 font-semibold">Safety-Driven Minor Vehicle Maintenance Center</strong>. The goal was to combat the aggressive, high-pressure sales tactics of national chains by leveraging <strong className="font-semibold">local trust, family heritage, and guaranteed safety protocols</strong>.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The entire strategy pivots from competing on price to competing on <strong className="text-emerald-700 font-semibold">trust, safety, and local expertise</strong>—values that national chains cannot authentically replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Psychological Moat */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading">
              🛡️ The Psychological Moat: Selling Trust Over Price
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              We engineered the site to create a psychological moat around the brand, emphasizing values that national chains cannot authentically offer:
            </p>

            {/* FREE 6-Point Safety Assessment */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-t-4 border-emerald-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    FREE 6-Point Safety Assessment
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">The Ultimate Lead Magnet</p>
                </div>
              </div>
              <div className="ml-16 space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <p className="font-semibold text-gray-900 mb-2">Strategic & Commercial Value:</p>
                  <p className="text-gray-700 mb-3">
                    This feature eliminates the customer&apos;s perceived <strong className="font-semibold">risk</strong> of &quot;going to a mechanic.&quot; By offering a free check of <strong className="text-emerald-700 font-semibold">Brakes, Shocks, and Batteries</strong>, we maximize lead capture and create immediate cross-selling opportunities for high-margin services.
                  </p>
                  <p className="font-semibold text-gray-900 mb-2">Portfolio Selling Point:</p>
                  <p className="text-gray-700">
                    <strong className="text-emerald-700 font-semibold">High-Conversion Feature:</strong> We engineered the primary CTA to focus 100% on a risk-free value-add, guaranteeing a consistent flow of warm leads into the business.
                  </p>
                </div>
              </div>
            </div>

            {/* 36-Year Family Heritage */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-t-4 border-teal-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    36-Year Family Heritage
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">Psychological Authority</p>
                </div>
              </div>
              <div className="ml-16 space-y-4">
                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <p className="font-semibold text-gray-900 mb-2">Strategic & Commercial Value:</p>
                  <p className="text-gray-700 mb-3">
                    We immediately anchor the brand&apos;s credibility by highlighting the business has been <strong className="font-semibold">&quot;Family-Run since 1989&quot;</strong> in Alberton. This directly appeals to the desire for <strong className="text-teal-700 font-semibold">local, honest service</strong> that national chains cannot offer.
                  </p>
                  <p className="font-semibold text-gray-900 mb-2">Portfolio Selling Point:</p>
                  <p className="text-gray-700">
                    <strong className="text-teal-700 font-semibold">Unbeatable Brand Narrative:</strong> We built a psychological moat around the brand. The story isn&apos;t about cheap tyres; it&apos;s about <strong className="font-semibold">three decades of trusted local safety</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Review Wall Integration */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                    Review Wall Integration
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">Verifiable Social Proof</p>
                </div>
              </div>
              <div className="ml-16 space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="font-semibold text-gray-900 mb-2">Strategic & Commercial Value:</p>
                  <p className="text-gray-700 mb-3">
                    The site pulls genuine reviews, highlighting specific customer claims like <strong className="font-semibold">&quot;Generational Trust&quot;</strong> and <strong className="font-semibold">&quot;Best Pricing&quot;</strong>. This validates the anti-corporate narrative before the customer even makes the call.
                  </p>
                  <p className="font-semibold text-gray-900 mb-2">Portfolio Selling Point:</p>
                  <p className="text-gray-700">
                    <strong className="text-blue-700 font-semibold">Trust Automation:</strong> We use genuine social proof to validate the promise of honesty and expertise, accelerating the conversion journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Engineering & Service Expansion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading">
              🔄 Funnel Engineering & Service Expansion
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              The architecture is built to convert initial interest into booked appointments for high-value services:
            </p>

            {/* Funnel Features Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold font-heading">Feature</th>
                      <th className="px-6 py-4 text-left font-bold font-heading">Technical & Content Excellence</th>
                      <th className="px-6 py-4 text-left font-bold font-heading">SEO & Commercial Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-semibold text-gray-900 align-top">Warranty-Mandated Alignment</td>
                      <td className="px-6 py-4 text-gray-700">
                        The Terms of Service and content pages explicitly state that <strong className="font-semibold text-emerald-700">wheel alignment and balancing are mandatory every 10,000 km</strong> to maintain the tyre warranty.
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <strong className="font-semibold text-emerald-700">Guaranteed Service Revenue:</strong> This technical content strategy creates a predictable, recurring revenue stream. The customer is booking service to protect their investment, not just to fix a symptom.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition bg-gray-50/50">
                      <td className="px-6 py-4 font-semibold text-gray-900 align-top">Service Silos & Keyword Mapping</td>
                      <td className="px-6 py-4 text-gray-700">
                        Created 12 dedicated landing pages for niche services like <strong className="font-semibold">Tyres, Brakes, Shocks</strong>, and <strong className="font-semibold">Balancing/Rotation</strong>. Each page is keyword-rich and designed to capture specific long-tail search traffic (e.g., &quot;ATE Brake Experts Alberton&quot;).
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <strong className="font-semibold text-emerald-700">Local SEO Dominance:</strong> By creating a deep, organized site map, we ensured the client ranks across the full spectrum of vehicle safety services, establishing them as a full-service fitment center.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-semibold text-gray-900 align-top">Dynamic Assessment Form</td>
                      <td className="px-6 py-4 text-gray-700">
                        The <code className="bg-gray-100 px-2 py-1 rounded text-sm">/assessment</code> landing page includes a high-impact form using <strong className="font-semibold">React Hook Form</strong> that focuses only on Name and Phone Number—the bare minimum required for a successful lead. Connected directly to <strong className="font-semibold">Formspree</strong> for reliable lead routing.
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <strong className="font-semibold text-emerald-700">Optimized Lead Flow:</strong> We reduced form friction and improved lead quality by guiding the user to provide the most important information first.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Integrity & Brand Authority */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading">
              🏆 Technical Integrity & Brand Authority
            </h2>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              {/* Premium Brand Anchors */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-emerald-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    🏅
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                      Premium Brand Anchors
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 ml-16">
                  The site content consistently highlights partnerships with premium safety brands like <strong className="font-semibold">Pirelli, Michelin, and ATE Brakes</strong>. This quality focus is immediately visible in the <strong className="text-emerald-700 font-semibold">Brand Slider</strong> to signal safety and performance, reinforcing the premium positioning strategy.
                </p>
              </div>

              {/* Expert Staff Focus */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-teal-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    👥
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                      Expert Staff Focus
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 ml-16">
                  The <code className="bg-gray-100 px-2 py-1 rounded text-sm">/about</code> page introduces specific team members and their specialized roles (e.g., <strong className="font-semibold">Carel W., Lead 3D Wheel Alignment Technician</strong>), reinforcing that the staff are <strong className="text-teal-700 font-semibold">highly trained safety specialists</strong>, not just laborers.
                </p>
              </div>

              {/* Canonical Clarity */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    🔗
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">
                      Canonical Clarity (Partner Funnel)
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 ml-16">
                  The site strategically uses the <code className="bg-gray-100 px-2 py-1 rounded text-sm">/services/batteries</code> page to send traffic and SEO authority to the client&apos;s sister business, <strong className="font-semibold">Alberton Battery Mart</strong>, using a visible external link and a canonical tag. This intelligent SEO strategy ensures <strong className="text-blue-700 font-semibold">both related businesses benefit</strong> from shared authority while maintaining clear brand separation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
              Results & Impact
            </h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
              A strategic transformation that positions Alberton Tyre Clinic as the trusted, safety-focused alternative to national chain competitors.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">36</div>
                <p className="text-emerald-100 text-sm">Years Heritage</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">12</div>
                <p className="text-emerald-100 text-sm">Service Pages</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">FREE</div>
                <p className="text-emerald-100 text-sm">Safety Assessment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-extrabold mb-2">Local</div>
                <p className="text-emerald-100 text-sm">Trust First</p>
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
              Ready to Build Your Trust Moat?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how we can reposition your business to compete on trust and expertise rather than price alone.
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

export default AlbertonTyreClinicCaseStudy;

