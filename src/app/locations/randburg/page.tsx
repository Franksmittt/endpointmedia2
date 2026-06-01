// src/app/locations/randburg/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL, buildLocationLocalBusinessSchema, WIKIDATA } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Randburg | Website Design Services Randburg",
    description: "Professional web design and local SEO services for Randburg businesses. Build a high-performance website that dominates local search. Free audit available.",
    path: "/locations/randburg",
    keywords: [
      "web design randburg",
      "website design randburg",
      "local SEO randburg",
      "web developer randburg",
      "hyper-local SEO randburg",
      "randburg mall web design",
      "website design randburg CBD",
      "local SEO services randburg",
    ],
  });
}

const RandburgPage = () => {
  const locationSchema = buildLocationLocalBusinessSchema({
    slug: 'randburg',
    label: 'Randburg',
    latitude: -26.0936,
    longitude: 28.0064,
    wikidataUrl: WIKIDATA.randburg,
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
        name: "Randburg",
        item: `${BASE_URL}/locations/randburg`,
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
            <li className="text-white font-semibold">Randburg</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-heading">
            Web Design Randburg: Major Commercial Hub Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8">
            Endpoint Media builds high-performance websites for Randburg businesses seeking 
            measurable growth and local search dominance. From Randburg Mall to Clearwater Mall, 
            we help local businesses capture more customers online.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Get Your Free Randburg Audit
          </Link>
        </div>
      </section>

      {/* Why Randburg Businesses Choose Endpoint Media */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Why Randburg Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  🏬 Major Commercial District
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Randburg is a major commercial and residential hub with diverse businesses, 
                  shopping centers, and professional services. We understand the competitive 
                  landscape and build websites that help Randburg businesses stand out.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  🎯 Hyper-Local SEO Expertise
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Dominate searches for &quot;web design Randburg&quot;, &quot;Randburg Mall businesses&quot;, 
                  and &quot;local services Randburg&quot;. Our hyper-local SEO strategy targets 
                  Randburg-specific landmarks and neighborhoods.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  ⚡ High-Performance Websites
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Randburg customers expect fast, professional experiences. We build blazing-fast, 
                  mobile-optimized websites using Next.js that convert visitors into customers.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  📈 Measurable ROI Focus
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every Randburg website we build is designed to generate leads and drive revenue. 
                  From retail stores to professional services, we optimize for conversions and track results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Randburg Service Areas */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Randburg Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Randburg CBD</h3>
                <p className="text-zinc-500 text-sm">
                  Commercial district, offices, professional services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Randburg Mall</h3>
                <p className="text-zinc-500 text-sm">
                  Major shopping center, retail businesses, restaurants
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Clearwater Mall</h3>
                <p className="text-zinc-500 text-sm">
                  Shopping precinct, retail, dining, services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Ferndale</h3>
                <p className="text-zinc-500 text-sm">
                  Business area, professional services, retail
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Northgate</h3>
                <p className="text-zinc-500 text-sm">
                  Shopping and commercial area, retail, services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Blairgowrie</h3>
                <p className="text-zinc-500 text-sm">
                  Residential and commercial area, local businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Randburg */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Services for Randburg Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Retail & E-commerce Website Design
                </h3>
                <p className="text-zinc-400 mb-4">
                  Perfect for Randburg Mall and Clearwater Mall retailers. We build high-converting 
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
                  For Randburg lawyers, accountants, consultants, and medical practices. We build 
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
                  Local SEO for Randburg
                </h3>
                <p className="text-zinc-400 mb-4">
                  Dominate Google Maps and local search results for Randburg. We optimize for 
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
            Ready to Dominate Randburg&apos;s Online Market?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-8">
            Join the Randburg businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you capture more customers.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Randburg Audit
          </Link>
        </div>
      </section>
      <HubSpokeLinks variant="location" slug="randburg" />
    </>
  );
};

export default RandburgPage;

