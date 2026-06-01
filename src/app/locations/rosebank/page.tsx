// src/app/locations/rosebank/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL, buildLocationLocalBusinessSchema, WIKIDATA } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Rosebank | Website Design Services Rosebank",
    description: "Professional web design and local SEO services for Rosebank businesses. Dominate local search in this premium Johannesburg commercial hub. Free audit available.",
    path: "/locations/rosebank",
    keywords: [
      "web design rosebank",
      "website design rosebank",
      "local SEO rosebank",
      "web developer rosebank",
      "hyper-local SEO rosebank",
      "rosebank mall web design",
      "website design rosebank CBD",
      "local SEO services rosebank",
    ],
  });
}

const RosebankPage = () => {
  const locationSchema = buildLocationLocalBusinessSchema({
    slug: 'rosebank',
    label: 'Rosebank',
    latitude: -26.1467,
    longitude: 28.0431,
    wikidataUrl: WIKIDATA.rosebank,
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
        name: "Rosebank",
        item: `${BASE_URL}/locations/rosebank`,
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
            <li className="text-white font-semibold">Rosebank</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-heading">
            Web Design Rosebank: Premium Commercial Hub Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8">
            Endpoint Media builds high-performance websites for Rosebank businesses seeking to 
            dominate this premium Johannesburg commercial district. From Rosebank Mall to The Zone, 
            we help local businesses establish a powerful online presence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Get Your Free Rosebank Audit
          </Link>
        </div>
      </section>

      {/* Why Rosebank Businesses Choose Endpoint Media */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Why Rosebank Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  🛍️ Retail & Commercial Expertise
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Rosebank is a premier commercial hub with Rosebank Mall, The Zone, and numerous 
                  retail and professional service businesses. We understand the competitive landscape 
                  and build websites that help Rosebank businesses stand out.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  🎯 Hyper-Local SEO Mastery
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Dominate searches for &quot;web design Rosebank&quot;, &quot;Rosebank Mall businesses&quot;, 
                  and &quot;professional services Rosebank&quot;. Our hyper-local SEO strategy targets 
                  Rosebank-specific landmarks and neighborhoods.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  ⚡ High-Performance Websites
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Rosebank customers expect fast, professional experiences. We build blazing-fast, 
                  mobile-optimized websites using Next.js that convert visitors into customers.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  📈 Conversion-Focused Design
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every Rosebank website we build is designed to generate leads and drive sales. 
                  From e-commerce stores to professional services, we optimize for conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rosebank Service Areas */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Rosebank Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Rosebank Mall</h3>
                <p className="text-zinc-500 text-sm">
                  Major shopping center, retail businesses, restaurants
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">The Zone</h3>
                <p className="text-zinc-500 text-sm">
                  Shopping and entertainment precinct, retail, dining
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Rosebank CBD</h3>
                <p className="text-zinc-500 text-sm">
                  Business district, professional services, offices
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Hyde Park Corner</h3>
                <p className="text-zinc-500 text-sm">
                  Upmarket shopping area, premium retail, services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Illovo</h3>
                <p className="text-zinc-500 text-sm">
                  Adjacent business area, professional services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Melrose</h3>
                <p className="text-zinc-500 text-sm">
                  Nearby residential and commercial area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Rosebank */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Services for Rosebank Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  E-commerce & Retail Website Design
                </h3>
                <p className="text-zinc-400 mb-4">
                  Perfect for Rosebank Mall retailers and online stores. We build high-converting 
                  e-commerce websites with Shopify integration, secure payment gateways, and 
                  inventory management.
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
                  For Rosebank lawyers, accountants, consultants, and professional service providers. 
                  We build authoritative websites that establish trust and generate qualified leads.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Credential showcasing</li>
                  <li>Client portal integration</li>
                  <li>Appointment booking systems</li>
                  <li>Case study presentation</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Local SEO for Rosebank
                </h3>
                <p className="text-zinc-400 mb-4">
                  Dominate Google Maps and local search results for Rosebank. We optimize for 
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
            Ready to Dominate Rosebank&apos;s Online Market?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-8">
            Join the Rosebank businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you capture more customers.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Rosebank Audit
          </Link>
        </div>
      </section>
      <HubSpokeLinks variant="location" slug="rosebank" />
    </>
  );
};

export default RosebankPage;

