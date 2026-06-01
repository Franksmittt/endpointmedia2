// src/app/case-studies/alberton-tyre-clinic/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CaseStudyArticleSchema from '@/components/seo/CaseStudyArticleSchema';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Alberton Tyre Clinic Case Study | Safety-Driven Vehicle Maintenance & Local Trust",
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
      <CaseStudyArticleSchema slug="alberton-tyre-clinic" />
      <article itemScope itemType="https://schema.org/Article">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-zinc-400 hover:text-white transition mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
          
          <figure className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400/90 bg-emerald-400/20 px-4 py-2 rounded-full border border-emerald-400/30">Tyre & Vehicle Safety</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200 bg-emerald-800/50 px-4 py-2 rounded-full border border-emerald-700">Family Heritage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-heading">
              Alberton Tyre Clinic: The Safety & Heritage Funnel
            </h1>
            <figcaption className="text-lg md:text-xl text-zinc-400 max-w-3xl">A strategic pivot transforming a traditional tyre shop into a modern <strong className="text-teal-400/90 font-semibold">Safety-Driven Minor Vehicle Maintenance Center</strong>, leveraging local trust, family heritage, and guaranteed safety protocols to combat national chain competition.</figcaption>
          </figure>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-heading">
                🚀 Project Overview
              </h2>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                This project was a <strong className="font-semibold text-white">strategic pivot</strong>, transforming a traditional tyre shop into a modern <strong className="text-black font-semibold">Safety-Driven Minor Vehicle Maintenance Center</strong>. The goal was to combat the aggressive, high-pressure sales tactics of national chains by leveraging <strong className="font-semibold">local trust, family heritage, and guaranteed safety protocols</strong>.
              </p>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                The entire strategy pivots from competing on price to competing on <strong className="text-black font-semibold">trust, safety, and local expertise</strong>. Values that national chains cannot authentically replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Psychological Moat */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              🛡️ The Psychological Moat: Selling Trust Over Price
            </h2>
            <p className="text-lg text-zinc-400 mb-12">
              We engineered the site to create a psychological moat around the brand, emphasizing values that national chains cannot authentically offer:
            </p>

            {/* FREE 6-Point Safety Assessment */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-t-4 border-emerald-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    FREE 6-Point Safety Assessment
                  </h3>
                  <p className="text-sm text-zinc-500 mb-4">The Ultimate Lead Magnet</p>
                </div>
              </div>
              <div className="ml-16 space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <p className="font-semibold text-white mb-2">Strategic & Commercial Value:</p>
                  <p className="text-zinc-400 mb-3">
                    This feature eliminates the customer&apos;s perceived <strong className="font-semibold">risk</strong> of &quot;going to a mechanic.&quot; By offering a free check of <strong className="text-black font-semibold">Brakes, Shocks, and Batteries</strong>, we maximize lead capture and create immediate cross-selling opportunities for high-margin services.
                  </p>
                  <p className="font-semibold text-white mb-2">Portfolio Selling Point:</p>
                  <p className="text-zinc-400">
                    <strong className="text-black font-semibold">High-Conversion Feature:</strong> We engineered the primary CTA to focus 100% on a risk-free value-add, guaranteeing a consistent flow of warm leads into the business.
                  </p>
                </div>
              </div>
            </div>

            {/* 36-Year Family Heritage */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-t-4 border-teal-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    36-Year Family Heritage
                  </h3>
                  <p className="text-sm text-zinc-500 mb-4">Psychological Authority</p>
                </div>
              </div>
              <div className="ml-16 space-y-4">
                <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-4 border-l border-teal-400/60">
                  <p className="font-semibold text-white mb-2">Strategic & Commercial Value:</p>
                  <p className="text-zinc-400 mb-3">
                    We immediately anchor the brand&apos;s credibility by highlighting the business has been <strong className="font-semibold">&quot;Family-Run since 1989&quot;</strong> in Alberton. This directly appeals to the desire for <strong className="text-teal-400/90 font-semibold">local, honest service</strong> that national chains cannot offer.
                  </p>
                  <p className="font-semibold text-white mb-2">Portfolio Selling Point:</p>
                  <p className="text-zinc-400">
                    <strong className="text-teal-400/90 font-semibold">Unbeatable Brand Narrative:</strong> We built a psychological moat around the brand. The story isn&apos;t about cheap tyres; it&apos;s about <strong className="font-semibold">three decades of trusted local safety</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Review Wall Integration */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-t-4 border-teal-400/60">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-400/20 border border-teal-400/40 rounded-lg flex items-center justify-center text-teal-400/90 font-bold text-xl">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Review Wall Integration
                  </h3>
                  <p className="text-sm text-zinc-500 mb-4">Verifiable Social Proof</p>
                </div>
              </div>
              <div className="ml-16 space-y-4">
                <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-4 border-l border-teal-400/60">
                  <p className="font-semibold text-white mb-2">Strategic & Commercial Value:</p>
                  <p className="text-zinc-400 mb-3">
                    The site pulls genuine reviews, highlighting specific customer claims like <strong className="font-semibold">&quot;Generational Trust&quot;</strong> and <strong className="font-semibold">&quot;Best Pricing&quot;</strong>. This validates the anti-corporate narrative before the customer even makes the call.
                  </p>
                  <p className="font-semibold text-white mb-2">Portfolio Selling Point:</p>
                  <p className="text-zinc-400">
                    <strong className="text-blue-700 font-semibold">Trust Automation:</strong> We use genuine social proof to validate the promise of honesty and expertise, accelerating the conversion journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Engineering & Service Expansion */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              🔄 Funnel Engineering & Service Expansion
            </h2>
            <p className="text-lg text-zinc-400 mb-12">
              The architecture is built to convert initial interest into booked appointments for high-value services:
            </p>

            {/* Funnel Features Table */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-900 text-white border-b border-zinc-800">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold font-heading">Feature</th>
                      <th className="px-6 py-4 text-left font-bold font-heading">Technical & Content Excellence</th>
                      <th className="px-6 py-4 text-left font-bold font-heading">SEO & Commercial Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr className="hover:bg-zinc-900/50 transition">
                      <td className="px-6 py-4 font-semibold text-white align-top">Warranty-Mandated Alignment</td>
                      <td className="px-6 py-4 text-zinc-400">
                        The Terms of Service and content pages explicitly state that <strong className="font-semibold text-black">wheel alignment and balancing are mandatory every 10,000 km</strong> to maintain the tyre warranty.
                      </td>
                      <td className="px-6 py-4 text-zinc-400">
                        <strong className="font-semibold text-black">Guaranteed Service Revenue:</strong> This technical content strategy creates a predictable, recurring revenue stream. The customer is booking service to protect their investment, not just to fix a symptom.
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/50 transition bg-zinc-900/30">
                      <td className="px-6 py-4 font-semibold text-white align-top">Service Silos & Keyword Mapping</td>
                      <td className="px-6 py-4 text-zinc-400">
                        Created 12 dedicated landing pages for niche services like <strong className="font-semibold">Tyres, Brakes, Shocks</strong>, and <strong className="font-semibold">Balancing/Rotation</strong>. Each page is keyword-rich and designed to capture specific long-tail search traffic (e.g., &quot;ATE Brake Experts Alberton&quot;).
                      </td>
                      <td className="px-6 py-4 text-zinc-400">
                        <strong className="font-semibold text-black">Local SEO Dominance:</strong> By creating a deep, organized site map, we ensured the client ranks across the full spectrum of vehicle safety services, establishing them as a full-service fitment center.
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/50 transition">
                      <td className="px-6 py-4 font-semibold text-white align-top">Dynamic Assessment Form</td>
                      <td className="px-6 py-4 text-zinc-400">
                        The <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">/assessment</code> landing page includes a high-impact form using <strong className="font-semibold">React Hook Form</strong> that focuses only on Name and Phone Number. The bare minimum required for a successful lead. Connected directly to <strong className="font-semibold">Formspree</strong> for reliable lead routing.
                      </td>
                      <td className="px-6 py-4 text-zinc-400">
                        <strong className="font-semibold text-black">Optimized Lead Flow:</strong> We reduced form friction and improved lead quality by guiding the user to provide the most important information first.
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
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              🏆 Technical Integrity & Brand Authority
            </h2>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              {/* Premium Brand Anchors */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l-4 border-emerald-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    🏅
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                      Premium Brand Anchors
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-400 ml-16">
                  The site content consistently highlights partnerships with premium safety brands like <strong className="font-semibold">Pirelli, Michelin, and ATE Brakes</strong>. This quality focus is immediately visible in the <strong className="text-black font-semibold">Brand Slider</strong> to signal safety and performance, reinforcing the premium positioning strategy.
                </p>
              </div>

              {/* Expert Staff Focus */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    👥
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                      Expert Staff Focus
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-400 ml-16">
                  The <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">/about</code> page introduces specific team members and their specialized roles (e.g., <strong className="font-semibold">Carel W., Lead 3D Wheel Alignment Technician</strong>), reinforcing that the staff are <strong className="text-teal-400/90 font-semibold">highly trained safety specialists</strong>, not just laborers.
                </p>
              </div>

              {/* Canonical Clarity */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-400/20 border border-teal-400/40 rounded-lg flex items-center justify-center text-teal-400/90 font-bold text-xl">
                    🔗
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                      Canonical Clarity (Partner Funnel)
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-400 ml-16">
                  The site strategically uses the <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">/services/batteries</code> page to send traffic and SEO authority to the client&apos;s sister business, <strong className="font-semibold">Alberton Battery Mart</strong>, using a visible external link and a canonical tag. This intelligent SEO strategy ensures <strong className="text-blue-700 font-semibold">both related businesses benefit</strong> from shared authority while maintaining clear brand separation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 md:py-28 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Results & Impact
            </h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
              A strategic transformation that positions Alberton Tyre Clinic as the trusted, safety-focused alternative to national chain competitors.
            </p>
            
            <figure><figcaption className="sr-only">Key project outcomes</figcaption><div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">36</div><p className="text-emerald-100 text-sm">Years Heritage</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">12</div>
                <p className="text-emerald-100 text-sm">Service Pages</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">FREE</div>
                <p className="text-emerald-100 text-sm">Safety Assessment</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">Local</div>
                <p className="text-emerald-100 text-sm">Trust First</p>
              </div>
            </div></figure>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Ready to Build Your Trust Moat?
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Let&apos;s discuss how we can reposition your business to compete on trust and expertise rather than price alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-10 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-teal-300"
              >
                Get Your Free Growth Audit
              </Link>
              <Link
                href="/case-studies"
                className="inline-block bg-transparent border border-zinc-700 text-zinc-100 font-semibold py-4 px-10 rounded-sm hover:bg-zinc-200 hover:text-black transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-white"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
      <HubSpokeLinks variant="case-study" slug="alberton-tyre-clinic" />
      </article>
    </>
  );
};

export default AlbertonTyreClinicCaseStudy;

