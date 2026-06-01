// src/app/locations/rivonia/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL, buildLocationLocalBusinessSchema, WIKIDATA } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Rivonia | Website Design Services Rivonia",
    description: "Professional web design and local SEO services for Rivonia businesses. Office parks and professional services. Build a high-performance, lead-generating website. Free audit available.",
    path: "/locations/rivonia",
    keywords: [
      "web design rivonia",
      "website design rivonia",
      "local SEO rivonia",
      "web developer rivonia",
      "hyper-local SEO rivonia",
      "rivonia office park web design",
      "website design rivonia road",
      "local SEO services rivonia",
    ],
  });
}

const RivoniaPage = () => {
  const locationSchema = buildLocationLocalBusinessSchema({
    slug: 'rivonia',
    label: 'Rivonia',
    latitude: -26.0500,
    longitude: 28.0667,
    wikidataUrl: WIKIDATA.rivonia,
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
        name: "Rivonia",
        item: `${BASE_URL}/locations/rivonia`,
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
            <li className="text-white font-semibold">Rivonia</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-heading">
            Web Design Rivonia: Office Park Business Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8">
            Endpoint Media builds high-performance websites for Rivonia businesses seeking market dominance. 
            From Rivonia Road office parks to tech companies and professional services, we help local 
            businesses establish a powerful online presence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Get Your Free Rivonia Audit
          </Link>
        </div>
      </section>

      {/* Why Rivonia Businesses Choose Endpoint Media */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Why Rivonia Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  💼 Office Park & Tech Hub
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Rivonia is a major business district with numerous office parks, tech companies, 
                  and professional service providers. We understand the B2B focus and build websites 
                  that generate qualified leads for Rivonia businesses.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  🎯 B2B Market Expertise
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Dominate searches for &quot;web design Rivonia&quot;, &quot;Rivonia Road office parks&quot;, 
                  and &quot;tech companies Rivonia&quot;. Our hyper-local SEO strategy targets 
                  Rivonia-specific business districts and builds authority for B2B companies.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  ⚡ Enterprise-Grade Performance
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Rivonia businesses require professional, high-performance websites. We build 
                  authoritative websites using Next.js that reflect corporate professionalism and 
                  convert visitors into clients.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  📈 Lead Generation Focus
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every Rivonia website we build is designed to generate qualified B2B leads. 
                  From service showcases to case studies, we optimize for the conversion elements 
                  that professional service providers need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rivonia Service Areas */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Rivonia Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Rivonia Road</h3>
                <p className="text-zinc-500 text-sm">
                  Major business corridor, office parks, professional services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Rivonia Office Parks</h3>
                <p className="text-zinc-500 text-sm">
                  Corporate offices, tech companies, professional services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Rivonia Village</h3>
                <p className="text-zinc-500 text-sm">
                  Shopping precinct, retail, dining, services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Sloane Street</h3>
                <p className="text-zinc-500 text-sm">
                  Business district, professional services, offices
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Sunnyridge</h3>
                <p className="text-zinc-500 text-sm">
                  Adjacent business area, professional services
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Sandton Extensions</h3>
                <p className="text-zinc-500 text-sm">
                  Nearby commercial area, mixed-use developments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Rivonia */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Services for Rivonia Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Corporate & Professional Services Websites
                </h3>
                <p className="text-zinc-400 mb-4">
                  Perfect for Rivonia office park tenants, tech companies, and professional service providers. 
                  We build authoritative websites that establish trust and generate qualified B2B leads.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Corporate branding and design</li>
                  <li>Service showcase pages</li>
                  <li>Case study presentations</li>
                  <li>Client portal integration</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Tech Company Website Design
                </h3>
                <p className="text-zinc-400 mb-4">
                  For Rivonia tech companies and software developers. We build modern, innovative 
                  websites that showcase your technology and generate qualified leads.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Technology showcases</li>
                  <li>Product demonstration pages</li>
                  <li>API documentation integration</li>
                  <li>Developer portal integration</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Local SEO for Rivonia
                </h3>
                <p className="text-zinc-400 mb-4">
                  Dominate Google Maps and local search results for Rivonia. We optimize for 
                  landmark-specific searches and ensure you appear when businesses search nearby.
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
            Ready to Establish Your Rivonia Online Presence?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-8">
            Join the Rivonia businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you generate qualified B2B leads.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Rivonia Audit
          </Link>
        </div>
      </section>
      <HubSpokeLinks variant="location" slug="rivonia" />
    </>
  );
};

export default RivoniaPage;

