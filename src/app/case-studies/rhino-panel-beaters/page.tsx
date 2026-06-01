// src/app/case-studies/rhino-panel-beaters/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CaseStudyArticleSchema from '@/components/seo/CaseStudyArticleSchema';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Rhino Panel Beaters Case Study | High-Performance Web Design",
    description: "Discover how Endpoint Media engineered a conversion-focused, high-performance website for Rhino Panel Beaters using Next.js, featuring a multi-step quote engine and local SEO optimization for Zululand market dominance.",
    path: "/case-studies/rhino-panel-beaters",
    keywords: [
      "panel beater website design",
      "next.js case study south africa",
      "local seo zululand",
      "rhino panel beaters web design",
    ],
    openGraph: {
      type: "article",
    },
  });
}

const RhinoPanelBeatersCaseStudy = () => {
  return (
    <>
      <CaseStudyArticleSchema slug="rhino-panel-beaters" />
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
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400/90 bg-teal-400/10 px-4 py-2 rounded-sm border border-teal-400/30">Panel Beaters</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 bg-zinc-900 px-4 py-2 rounded-sm border border-zinc-700">Zululand Market</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-heading">
              Rhino Panel Beaters: Engineering Trust & Conversion in Zululand
            </h1>
            <figcaption className="text-lg md:text-xl text-zinc-400 max-w-3xl">A modern, high-performance marketing website built on Next.js that transforms digital visitors into qualified quote requests and emergency calls through strategic trust-building and authority positioning.</figcaption>
          </figure>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-heading">
                🎨 Project Overview
              </h2>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                You have successfully designed and developed a modern, high-performance, and conversion-focused marketing website for <strong className="font-semibold text-white">Rhino Panel Beaters</strong>. The entire project is built on the Next.js App Router framework and Tailwind CSS.
              </p>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                The core strategy focuses on three key pillars: building <strong className="text-teal-400/90 font-semibold">trust</strong>, emphasizing <strong className="text-teal-400/90 font-semibold">authority</strong>, and driving <strong className="text-teal-400/90 font-semibold">conversions</strong> (specifically digital quote requests and emergency calls) by leveraging the client&apos;s position in the Zululand market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Achievements */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              💻 Technical & Architectural Achievements
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              The website is based on a contemporary, robust, and scalable foundation:
            </p>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              {/* Technology Stack Card */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">Technology Stack</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1 font-bold">→</span>
                    <span><strong className="font-semibold">Frontend Framework:</strong> Next.js (App Router)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1 font-bold">→</span>
                    <span><strong className="font-semibold">Styling:</strong> Tailwind CSS, configured with a custom, high-contrast, &quot;sleek blue&quot; design system based on shadcn/ui components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1 font-bold">→</span>
                    <span><strong className="font-semibold">Form Management:</strong> React Hook Form with Zod for schema validation, ensuring all user inputs, particularly on the critical Quote Form, are strictly validated client-side</span>
                  </li>
                </ul>
              </div>

              {/* Design System Card */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">Design System Implementation</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-3 mt-1 font-bold">→</span>
                    <span>A central <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">components.json</code> file configures the project to use a <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">new-york</code> style for its UI primitives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-3 mt-1 font-bold">→</span>
                    <span><strong className="font-semibold">Primary Color:</strong> Deep Navy Blue, used for primary actions and dark backgrounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-3 mt-1 font-bold">→</span>
                    <span><strong className="font-semibold">Accent Color:</strong> Vibrant Cyan/Aqua, used for highlights and primary conversion text</span>
                  </li>
                </ul>
              </div>

              {/* Project Structure Card */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">Project Structure</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 font-bold">→</span>
                    <span>The file structure separates application pages (<code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">/src/app</code>) from reusable components (<code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">/src/components</code>)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 font-bold">→</span>
                    <span>Dedicated routes for the <strong className="font-semibold">Quote Page</strong> (<code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">/quote</code>) and <strong className="font-semibold">Approvals</strong> page</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design & UX Highlights */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              ✨ Design & User Experience (UX) Highlights
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              The design aesthetic is high-contrast and professional, utilizing a dark theme to project authority and trustworthiness in the vehicle repair industry.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8">
                <h3 className="text-xl font-bold mb-4 font-heading text-white">Color Palette</h3>
                <p className="text-zinc-400 mb-4">
                  The combination of a strong Navy Blue background paired with a Vibrant Cyan/Aqua highlight color creates a striking, modern, and trustworthy appearance.
                </p>
                <div className="flex gap-3 mt-4">
                  <div className="w-16 h-16 bg-blue-900 rounded-lg shadow-lg"></div>
                  <div className="w-16 h-16 bg-cyan-400 rounded-lg shadow-lg"></div>
                </div>
              </div>

              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8">
                <h3 className="text-xl font-bold mb-4 font-heading text-white">Custom Animations</h3>
                <p className="text-zinc-400 mb-4">
                  Subtle CSS keyframes and utility classes were created for enhanced interactivity:
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><strong>slide-in:</strong> Used for components to gently appear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><strong>pulse-slow:</strong> Applied to the 24/7 Emergency Towing CTA for urgency</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
              <h3 className="text-xl font-bold mb-4 font-heading text-white">Conversion-Focused Layout</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">✓</span>
                  <span><strong className="font-semibold">Global Navigation:</strong> Header and Footer consistently feature the <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300 font-mono">0860 ACCIDENT</code> emergency number and a prominent &quot;Get A Free Quote&quot; button</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">✓</span>
                  <span><strong className="font-semibold">Home Hero:</strong> Includes dual CTAs and is immediately followed by a crucial, negative-margined Contact Block Strip that pulls key contact details above the fold</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Delivery */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              ✅ Feature Delivery & Strategic Content
            </h2>
            <p className="text-lg text-zinc-400 mb-12">
              Key components developed to directly support the customer&apos;s marketing and business goals:
            </p>

            {/* Feature 1: Digital Quote Engine */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-t-4 border-teal-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    The Digital Quote Engine (High-Value Conversion)
                  </h3>
                </div>
              </div>
              <ul className="space-y-4 text-zinc-400 ml-16">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">→</span>
                  <span>A multi-step, client-side <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">QuoteForm.tsx</code> component built using a wizard pattern, guiding users through contact details, vehicle information, insurance status, and damage photo upload</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">→</span>
                  <span>Zod validation with conditional checks (e.g., requiring insurer&apos;s name if user selects &quot;Yes&quot; for claiming insurance) and file validation (max 5MB, accepted image types)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">→</span>
                  <span>Final step provides confirmation message with expected response time (2-4 hours)</span>
                </li>
              </ul>
            </div>

            {/* Feature 2: Authority & Trust Building */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-t-4 border-cyan-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-400/20 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Authority & Trust Building
                  </h3>
                </div>
              </div>
              <ul className="space-y-4 text-zinc-400 ml-16">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 mt-1 font-bold">→</span>
                  <span><strong className="font-semibold">LogoScrollStrip.tsx:</strong> Infinite, continuous horizontal marquee of major OEM approvals (VW, Toyota, BMW, etc.) to signal factory-spec quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 mt-1 font-bold">→</span>
                  <span><strong className="font-semibold">ProcessPreview.tsx:</strong> Highlights four key steps from the comprehensive 14-Step Quality Promise, emphasizing transparency and quality control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 mt-1 font-bold">→</span>
                  <span><strong className="font-semibold">TestimonialAnchor.tsx:</strong> Features the strong 4.1 Google Rating and real customer testimonials, driving crucial social proof</span>
                </li>
              </ul>
            </div>

            {/* Feature 3: Local Expertise */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-t-4 border-teal-400/60">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-400/20 border border-teal-400/40 rounded-lg flex items-center justify-center text-teal-400/90 font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Local Expertise & Targeted Services
                  </h3>
                </div>
              </div>
              <ul className="space-y-4 text-zinc-400 ml-16">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">→</span>
                  <span><strong className="font-semibold">ServicesGrid.tsx:</strong> Organizes service offerings into a strategic, asymmetrical grid layout. Visually prioritizes high-value services: <strong className="text-teal-400/90">Truck & Bus Repairs</strong> and <strong className="text-teal-400/90">4x4 & Safari Vehicles</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">→</span>
                  <span><strong className="font-semibold">SafetyGuidePreview.tsx:</strong> Positions Rhino Panel Beaters as the local expert by referencing key regional roads (N2, R618, Hluhluwe) and offering local safety content, boosting local SEO and community trust</span>
                </li>
              </ul>
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
            <p className="text-xl text-teal-100 mb-12 max-w-2xl mx-auto">
              This high-performance website delivers on its core promise: converting digital visitors into qualified leads through strategic trust-building, authority positioning, and seamless user experience.
            </p>
            
            <figure>
              <figcaption className="sr-only">Key project outcomes</figcaption>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-teal-100">Client-Side Validated Forms</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-4xl font-bold mb-2">Multi-Step</div>
                <p className="text-teal-100">Quote Conversion Engine</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-4xl font-bold mb-2">Local</div>
                <p className="text-teal-100">Zululand SEO Optimized</p>
              </div>
            </div>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Ready to Transform Your Service Business?
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Let&apos;s discuss how we can engineer a high-performance website that converts visitors into customers for your business.
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
      <HubSpokeLinks variant="case-study" slug="rhino-panel-beaters" />
      </article>
    </>
  );
};

export default RhinoPanelBeatersCaseStudy;

