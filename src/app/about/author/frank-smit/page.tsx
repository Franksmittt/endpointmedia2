// src/app/about/author/frank-smit/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, FRANK_SMIT_ID } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Frank Smit - Web Design Expert Johannesburg | Founder",
    description: "Frank Smit is the founder of Endpoint Media, specializing in high-performance web design and local SEO for Johannesburg businesses. Expert in Next.js, technical SEO, and lead generation.",
    path: "/about/author/frank-smit",
    keywords: [
      "frank smit web designer",
      "johannesburg web developer",
      "endpoint media founder",
      "web design expert johannesburg",
    ],
    openGraph: {
      type: "profile",
    },
  });
}

const FrankSmitPage = () => {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: { "@id": FRANK_SMIT_ID },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(profilePageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-6xl font-bold text-teal-400/90">
                FS
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-heading">
                  Frank Smit
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 mb-4">
                  Web Design Expert & Founder of Endpoint Media
                </p>
                <p className="text-lg text-zinc-500">
                  Specializing in high-performance web design and local SEO for Johannesburg businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              About Frank Smit
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Frank Smit is the founder of Endpoint Media, a Johannesburg-based web design and 
                local SEO agency dedicated to helping service businesses dominate their local markets 
                through high-performance websites and strategic digital marketing.
              </p>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                With expertise in modern web technologies including Next.js, React, and TypeScript, 
                Frank builds websites that don&apos;t just look good. They generate measurable ROI. 
                Every website is engineered for speed, optimized for search engines, and designed to 
                convert visitors into leads.
              </p>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Frank&apos;s approach combines technical excellence with deep understanding of local 
                SEO and conversion optimization. He specializes in helping Johannesburg businesses 
                dominate hyper-local search results, from Sandton to Randburg, ensuring they appear 
                first when potential customers search for their services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Areas of Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">Web Development</h3>
                <ul className="text-zinc-400 space-y-2">
                  <li>• Next.js & React Development</li>
                  <li>• TypeScript & Modern JavaScript</li>
                  <li>• Performance Optimization</li>
                  <li>• Core Web Vitals Optimization</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">Local SEO</h3>
                <ul className="text-zinc-400 space-y-2">
                  <li>• Hyper-Local SEO Strategy</li>
                  <li>• Schema Markup Implementation</li>
                  <li>• Technical SEO Audits</li>
                  <li>• Local Search Optimization</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">Conversion Optimization</h3>
                <ul className="text-zinc-400 space-y-2">
                  <li>• Lead Generation Strategy</li>
                  <li>• Conversion Rate Optimization</li>
                  <li>• User Experience Design</li>
                  <li>• A/B Testing & Analytics</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">E-commerce</h3>
                <ul className="text-zinc-400 space-y-2">
                  <li>• Shopify Development</li>
                  <li>• WooCommerce Integration</li>
                  <li>• Payment Gateway Setup</li>
                  <li>• E-commerce SEO</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Articles by Frank Smit
            </h2>
            <div className="space-y-4">
              <Link
                href="/blog/the-true-cost-of-a-website-in-johannesburg"
                className="block rounded-sm border border-zinc-800 bg-black/40 p-6 border border-zinc-800 hover:border-teal-400/70 transition duration-300"
              >
                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  The True Cost of a Website in Johannesburg: 2025 Price Guide
                </h3>
                <p className="text-zinc-500">
                  Comprehensive guide to website costs in Johannesburg, including hidden fees and ROI analysis.
                </p>
              </Link>
              <Link
                href="/blog/wix-vs-wordpress-guide-johannesburg-small-businesses"
                className="block rounded-sm border border-zinc-800 bg-black/40 p-6 border border-zinc-800 hover:border-teal-400/70 transition duration-300"
              >
                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  Wix vs WordPress: A Guide for Johannesburg Small Businesses
                </h3>
                <p className="text-zinc-500">
                  DIY website builders vs professional development - make the right choice for your business.
                </p>
              </Link>
              <Link
                href="/blog/the-schema-vacuum-technical-seo-advantage"
                className="block rounded-sm border border-zinc-800 bg-black/40 p-6 border border-zinc-800 hover:border-teal-400/70 transition duration-300"
              >
                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  The Schema Vacuum: Technical SEO Advantage
                </h3>
                <p className="text-zinc-500">
                  How schema markup gives you a competitive advantage in Johannesburg local search.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Work with Frank?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-8">
            Get a free website audit and discover how Endpoint Media can help your Johannesburg 
            business dominate local search and generate more leads.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default FrankSmitPage;

