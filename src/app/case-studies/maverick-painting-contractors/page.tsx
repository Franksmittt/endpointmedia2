// src/app/case-studies/maverick-painting-contractors/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CaseStudyArticleSchema from '@/components/seo/CaseStudyArticleSchema';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Maverick Painting Contractors Case Study | Premium Commercial Painting & Structural Maintenance",
    description: "Discover how Endpoint Media repositioned Maverick Painting Contractors as a premium, risk-averse partner for commercial and body corporate assets, with Independent QA guarantees and technical authority building.",
    path: "/case-studies/maverick-painting-contractors",
    keywords: [
      "commercial painting website",
      "body corporate maintenance marketing",
      "premium painting contractor case study",
      "endpoint media results",
    ],
    openGraph: {
      type: "article",
    },
  });
}

const MaverickPaintingContractorsCaseStudy = () => {
  return (
    <>
      <CaseStudyArticleSchema slug="maverick-painting-contractors" />
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
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400/90 bg-teal-400/10 px-4 py-2 rounded-full border border-purple-400/30">Commercial Painting</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-200 bg-purple-800/50 px-4 py-2 rounded-full border border-purple-700">Premium Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-heading">
              Maverick Painting Contractors: Premium Risk-Averse Partner for High-Value Assets
            </h1>
            <figcaption className="text-lg md:text-xl text-zinc-400 max-w-3xl">A strategic repositioning that pivots the conversation from &quot;painting&quot; to <strong className="text-purple-300 font-semibold">structural asset maintenance</strong>, emphasizing verifiability and engineering-backed processes for Trustees, Developers, and Engineers.</figcaption>
          </figure>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-heading">
                💡 Project Overview
              </h2>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                This project establishes Maverick Painting as a <strong className="font-semibold text-white">premium, risk-averse partner</strong> for high-value commercial, body corporate, and developer assets. The entire technical and content strategy pivots the conversation from &quot;painting&quot; to <strong className="text-purple-700 font-semibold">structural asset maintenance</strong> by emphasizing verifiability and engineering-backed processes.
              </p>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                The site is engineered to eliminate client risk and build trust with sophisticated, B2B-focused audiences (Trustees, Developers, Engineers).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion & Performance Focus */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              🎯 Conversion & Performance Focus
            </h2>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              {/* Flawless Performance */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                      Flawless Performance
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-400 ml-16">
                  The use of <strong className="font-semibold">Next.js 14 App Router</strong> and the Server-First Paradigm minimizes client-side JavaScript, ensuring <strong className="text-purple-700 font-semibold">lightning-fast initial load speeds</strong> and perfect Lighthouse Core Web Vitals scores. Performance matters for B2B decision-makers.
                </p>
              </div>

              {/* Immediate Contact */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                      Immediate Contact (Call/WhatsApp)
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-400 ml-16 mb-4">
                  High-conversion CTAs are centralized in the header and the reusable final strip component (<code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">CtaFinalStrip.tsx</code>), prioritizing direct calls to the owner. An optimized WhatsApp integration uses the official logo and a dedicated green button for quick communication.
                </p>
                <ul className="space-y-2 text-zinc-400 ml-16">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                    <span>Direct owner contact prioritized for high-value commercial projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                    <span>WhatsApp integration with official branding for instant communication</span>
                  </li>
                </ul>
              </div>

              {/* Streamlined Quote Capture */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-400/20 border border-teal-400/40 rounded-lg flex items-center justify-center text-teal-400/90 font-bold text-xl">
                    📋
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                      Streamlined Quote Capture
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-400 ml-16 mb-4">
                  A dedicated <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">HeroContactForm.tsx</code> handles initial lead capture, using <strong className="font-semibold">React Hook Form and Zod</strong> for robust, type-safe validation, ensuring the client receives clean, actionable project data.
                </p>
                <ul className="space-y-2 text-zinc-400 ml-16">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                    <span>Captures: Name, Email, Service Type, and Problem Description</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                    <span>Type-safe validation ensures data quality from day one</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Expertise Building */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              👑 Authority & Expertise Building
            </h2>
            <p className="text-lg text-zinc-400 mb-12">
              The site is engineered to eliminate client risk and build trust with sophisticated, B2B-focused audiences:
            </p>

            {/* Independent QA Guarantee */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-t border-teal-400/60">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Independent QA Guarantee (The Core USP)
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 ml-16 mb-4">
                The site&apos;s entire narrative is built around the commitment to paying an <strong className="font-semibold">Independent 3rd Party QA inspector</strong> to verify the project. This guarantee is prominently featured on every page, with a dedicated landing page detailing the multi-step process.
              </p>
              <ul className="space-y-2 text-zinc-400 ml-16">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1 font-bold">•</span>
                  <span><strong className="font-semibold">Pre-Assessment:</strong> Independent evaluation before work begins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1 font-bold">•</span>
                  <span><strong className="font-semibold">Film Thickness Verification:</strong> Technical compliance checking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1 font-bold">•</span>
                  <span><strong className="font-semibold">Bi-Weekly Reporting:</strong> Transparent progress updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1 font-bold">•</span>
                  <span>Eliminates Trustee Risk for Body Corporate clients</span>
                </li>
              </ul>
            </div>

            {/* Deep Technical Content */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-t border-teal-400/60">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-400/20 border border-teal-400/40 rounded-lg flex items-center justify-center text-teal-400/90 font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Deep Technical Content (SEO Silos)
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 ml-16 mb-4">
                An extensive blog structure was created with dedicated categories for high-value technical problem-solving:
              </p>
              <div className="ml-16 space-y-4">
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4">
                  <h4 className="font-bold text-white mb-2">Structural Remediation</h4>
                  <ul className="space-y-1 text-zinc-400">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>Guides on fixing <strong className="font-semibold">Concrete Spalling</strong> and <strong className="font-semibold">rebar corrosion</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>Engineer-approved protocols for permanent structural fixes</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4">
                  <h4 className="font-bold text-white mb-2">Waterproofing</h4>
                  <ul className="space-y-1 text-zinc-400">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>Technical articles comparing <strong className="font-semibold">Liquid Applied vs. Torch-On</strong> membranes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>Permanent <strong className="font-semibold">Rising Damp</strong> fixes and solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Verifiable Accreditations */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-t border-teal-400/60">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Verifiable Accreditations
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 ml-16 mb-4">
                A dedicated strip and landing page showcase official applicator status with major manufacturers like <strong className="font-semibold">Sika, Plascon, Dulux, and Marmoran</strong>, validating compliance and product warranty claims.
              </p>
              <ul className="space-y-2 text-zinc-400 ml-16">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                  <span>Validates warranty compliance for high-value commercial projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                  <span>Builds trust with Engineers and Developers who require certified applicators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">•</span>
                  <span>Differentiates from unaccredited competitors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions & Service Differentiation */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              💼 Tailored Solutions & Service Differentiation
            </h2>
            <p className="text-lg text-zinc-400 mb-12">
              The site clearly segments its services to speak directly to the target audience&apos;s pain points (Body Corporate, Developer, Homeowner):
            </p>

            {/* Services Table */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-900 text-white border-b border-zinc-800">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold font-heading">Service Pillar</th>
                      <th className="px-6 py-4 text-left font-bold font-heading">Key Features & Benefits</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr className="hover:bg-zinc-900/50 transition">
                      <td className="px-6 py-4 font-semibold text-white align-top">Structural Repairs</td>
                      <td className="px-6 py-4 text-zinc-400">
                        We pivot from cosmetic fixes to permanent structural remediation, ensuring spalling and cracks are fixed with <strong className="font-semibold text-purple-700">engineer-approved protocols</strong> before painting.
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/50 transition bg-zinc-900/30">
                      <td className="px-6 py-4 font-semibold text-white align-top">Waterproofing</td>
                      <td className="px-6 py-4 text-zinc-400">
                        Guaranteed, specialized membrane systems for complex areas like <strong className="font-semibold text-purple-700">flat roofs</strong> and <strong className="font-semibold text-purple-700">under-tile balconies</strong>.
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/50 transition">
                      <td className="px-6 py-4 font-semibold text-white align-top">Body Corporate/HOA</td>
                      <td className="px-6 py-4 text-zinc-400">
                        Solutions focused on <strong className="font-semibold text-purple-700">Eliminating Trustee Risk</strong>, offering Independent QA and scheduling protocols for minimal resident disturbance.
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/50 transition bg-zinc-900/30">
                      <td className="px-6 py-4 font-semibold text-white align-top">Specialized Coatings</td>
                      <td className="px-6 py-4 text-zinc-400">
                        Certified application of high-performance floor and wall systems, including <strong className="font-semibold text-purple-700">Hygienic Food-Grade Epoxy</strong> for cleanroom compliance.
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/50 transition">
                      <td className="px-6 py-4 font-semibold text-white align-top">High-Access Solutions</td>
                      <td className="px-6 py-4 text-zinc-400">
                        Expertise in using <strong className="font-semibold text-purple-700">Rope Access</strong> and <strong className="font-semibold text-purple-700">Scaffolding</strong> to ensure cost-effective, OHS-compliant painting of high-rise commercial facades.
                      </td>
                    </tr>
                  </tbody>
                </table>
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
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              A strategic repositioning that establishes Maverick Painting as the premium, risk-averse choice for high-value commercial and body corporate projects.
            </p>
            
            <figure><figcaption className="sr-only">Key project outcomes</figcaption><div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">100%</div><p className="text-purple-100 text-sm">Independent QA</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">4+</div>
                <p className="text-purple-100 text-sm">Major Accreditations</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">B2B</div>
                <p className="text-purple-100 text-sm">Focused Strategy</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">Perfect</div>
                <p className="text-purple-100 text-sm">Lighthouse Scores</p>
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
              Ready to Establish Your Premium Positioning?
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Let&apos;s discuss how we can reposition your business as the trusted, risk-averse partner for high-value commercial clients.
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
      <HubSpokeLinks variant="case-study" slug="maverick-painting-contractors" />
      </article>
    </>
  );
};

export default MaverickPaintingContractorsCaseStudy;

