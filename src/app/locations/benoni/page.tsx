// src/app/locations/benoni/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL, buildLocationLocalBusinessSchema, WIKIDATA } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Benoni | Website Design Services Benoni",
    description: "Professional web design and local SEO services for Benoni businesses. Build a high-performance, lead-generating website. Free audit available.",
    path: "/locations/benoni",
    keywords: [
      "web design benoni",
      "website design benoni",
      "local SEO benoni",
      "web developer benoni",
      "hyper-local SEO benoni",
      "benoni CBD web design",
      "website design benoni mall",
      "local SEO services benoni",
    ],
  });
}

const BenoniPage = () => {
  const locationSchema = buildLocationLocalBusinessSchema({
    slug: 'benoni',
    label: 'Benoni',
    latitude: -26.1889,
    longitude: 28.3206,
    wikidataUrl: WIKIDATA.benoni,
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
        name: "Benoni",
        item: `${BASE_URL}/locations/benoni`,
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
            <li className="text-white font-semibold">Benoni</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-heading">
            Web Design Benoni: Eastern Johannesburg Hub Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8">
            Endpoint Media builds high-performance websites for Benoni businesses seeking 
            measurable growth in this established commercial hub. From Benoni CBD to Lakefield, 
            we help local businesses establish a powerful online presence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Get Your Free Benoni Audit
          </Link>
        </div>
      </section>

      {/* Why Benoni Businesses Choose Endpoint Media */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Why Benoni Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  🏢 Established Commercial Hub
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Benoni is a well-established commercial hub in Eastern Johannesburg with a diverse 
                  business community, retail centers, and professional services. We understand the 
                  local market and build websites that connect with Benoni customers.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  🎯 Local Market Expertise
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Dominate searches for &quot;web design Benoni&quot;, &quot;Benoni CBD businesses&quot;, 
                  and &quot;local services Benoni&quot;. Our hyper-local SEO strategy targets 
                  Benoni-specific landmarks and neighborhoods to capture local customers.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  ⚡ Affordable Excellence
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Benoni businesses need high-performance websites without premium pricing. We deliver 
                  professional, fast-loading websites using Next.js that compete with Sandton-quality 
                  sites at accessible prices.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  📈 Growth-Focused Solutions
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every Benoni website we build is designed to generate leads and drive revenue. 
                  From retail stores to professional services, we optimize for conversions and 
                  track measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benoni Service Areas */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Benoni Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Benoni CBD</h3>
                <p className="text-zinc-500 text-sm">
                  Central business district, offices, professional services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Benoni Lakefield</h3>
                <p className="text-zinc-500 text-sm">
                  Shopping center, retail businesses, dining
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Benoni North</h3>
                <p className="text-zinc-500 text-sm">
                  Residential and commercial area, local businesses
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Boksburg East</h3>
                <p className="text-zinc-500 text-sm">
                  Adjacent area, commercial district
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Farrarmere</h3>
                <p className="text-zinc-500 text-sm">
                  Nearby suburb, professional services, retail
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Kempton Park</h3>
                <p className="text-zinc-500 text-sm">
                  Nearby commercial area, diverse businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Benoni */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Services for Benoni Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Retail & E-commerce Website Design
                </h3>
                <p className="text-zinc-400 mb-4">
                  Perfect for Benoni retailers and online stores. We build high-converting 
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
                  For Benoni lawyers, accountants, consultants, and medical practices. We build 
                  authoritative websites that establish trust and generate qualified leads.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Credential showcasing</li>
                  <li>Client portal integration</li>
                  <li>Appointment booking systems</li>
                  <li>Service area pages</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Local SEO for Benoni
                </h3>
                <p className="text-zinc-400 mb-4">
                  Dominate Google Maps and local search results for Benoni. We optimize for 
                  landmark-specific searches and ensure you appear when customers search nearby.
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
            Ready to Dominate Benoni&apos;s Online Market?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-8">
            Join the Benoni businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you capture more customers in this 
            established commercial hub.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Benoni Audit
          </Link>
        </div>
      </section>
      <HubSpokeLinks variant="location" slug="benoni" />
    </>
  );
};

export default BenoniPage;

