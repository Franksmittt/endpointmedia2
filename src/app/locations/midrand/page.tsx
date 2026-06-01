// src/app/locations/midrand/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL, buildLocationLocalBusinessSchema, WIKIDATA } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Midrand | Website Design Services Midrand",
    description: "Professional web design and local SEO services for Midrand businesses. Growing commercial hub between Joburg and Pretoria. Build a high-performance, lead-generating website. Free audit available.",
    path: "/locations/midrand",
    keywords: [
      "web design midrand",
      "website design midrand",
      "local SEO midrand",
      "web developer midrand",
      "hyper-local SEO midrand",
      "midrand mall web design",
      "website design midrand CBD",
      "local SEO services midrand",
    ],
  });
}

const MidrandPage = () => {
  const locationSchema = buildLocationLocalBusinessSchema({
    slug: 'midrand',
    label: 'Midrand',
    latitude: -25.9964,
    longitude: 28.1372,
    wikidataUrl: WIKIDATA.midrand,
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${BASE_URL}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Midrand",
        item: `${BASE_URL}/locations/midrand`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="border-b border-zinc-800 bg-black py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-zinc-500">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/locations" className="hover:text-white transition">Locations</Link>
            </li>
            <li>/</li>
            <li className="text-white font-semibold">Midrand</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-heading">
            Web Design Midrand: Strategic Location Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8">
            Endpoint Media builds high-performance websites for Midrand businesses seeking measurable growth. 
            From Midrand Mall to office parks, we help local businesses capture customers from both 
            Johannesburg and Pretoria.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Get Your Free Midrand Audit
          </Link>
        </div>
      </section>

      {/* Why Midrand Businesses Choose Endpoint Media */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Why Midrand Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  📍 Strategic Location Advantage
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Midrand is strategically located between Johannesburg and Pretoria, making it a 
                  prime location for businesses serving both cities. We understand the dual-market 
                  opportunity and build websites that capture customers from both regions.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  🎯 Growing Market Positioning
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Dominate searches for &quot;web design Midrand&quot;, &quot;Midrand Mall businesses&quot;, 
                  and &quot;services Midrand&quot;. Our hyper-local SEO strategy targets 
                  Midrand-specific landmarks and captures the growing commercial market.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  ⚡ Performance-Optimized Websites
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Midrand customers expect fast, professional experiences. We build blazing-fast, 
                  mobile-optimized websites using Next.js that convert visitors into customers 
                  and rank higher in search results.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  📈 Dual-Market Growth
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every Midrand website we build is designed to capture customers from both 
                  Johannesburg and Pretoria. We optimize for location-based searches from both 
                  markets to maximize your reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Midrand Service Areas */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Midrand Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Midrand CBD</h3>
                <p className="text-zinc-500 text-sm">
                  Central business district, offices, professional services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Midrand Mall</h3>
                <p className="text-zinc-500 text-sm">
                  Major shopping center, retail businesses, restaurants
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Centurion</h3>
                <p className="text-zinc-500 text-sm">
                  Nearby commercial area, professional services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Allandale</h3>
                <p className="text-zinc-500 text-sm">
                  Business area, offices, retail
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Vorna Valley</h3>
                <p className="text-zinc-500 text-sm">
                  Residential and commercial area, local businesses
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Carlswald</h3>
                <p className="text-zinc-500 text-sm">
                  Office parks, professional services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Midrand */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Services for Midrand Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Retail & E-commerce Website Design
                </h3>
                <p className="text-zinc-400 mb-4">
                  Perfect for Midrand Mall retailers and online stores. We build high-converting 
                  e-commerce websites with Shopify integration, secure payment gateways, and 
                  inventory management systems.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Shopify store development</li>
                  <li>Product catalog management</li>
                  <li>Payment gateway integration</li>
                  <li>Mobile shopping optimization</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Professional Services Websites
                </h3>
                <p className="text-zinc-400 mb-4">
                  For Midrand lawyers, accountants, consultants, and medical practices. We build 
                  authoritative websites that establish trust and generate qualified leads from 
                  both Johannesburg and Pretoria.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Credential showcasing</li>
                  <li>Client portal integration</li>
                  <li>Appointment booking systems</li>
                  <li>Dual-market service area pages</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Local SEO for Midrand
                </h3>
                <p className="text-zinc-400 mb-4">
                  Dominate Google Maps and local search results for Midrand. We optimize for 
                  landmark-specific searches and ensure you appear when customers search nearby, 
                  whether coming from Johannesburg or Pretoria.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Google Business Profile optimization</li>
                  <li>Local citation building</li>
                  <li>Landmark-targeted content</li>
                  <li>Review generation strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Dominate Midrand&apos;s Growing Market?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-8">
            Join the Midrand businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you capture customers from both 
            Johannesburg and Pretoria.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Midrand Audit
          </Link>
        </div>
      </section>
      <HubSpokeLinks variant="location" slug="midrand" />
    </>
  );
};

export default MidrandPage;

