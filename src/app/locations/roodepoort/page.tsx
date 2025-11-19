// src/app/locations/roodepoort/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Roodepoort | Website Design Services Roodepoort | Endpoint Media",
    description: "Professional web design and local SEO services for Roodepoort businesses. Build a high-performance, lead-generating website that dominates local search. Free audit available.",
    path: "/locations/roodepoort",
    keywords: [
      "web design roodepoort",
      "website design roodepoort",
      "local SEO roodepoort",
      "web developer roodepoort",
      "website redesign roodepoort",
      "hyper-local SEO roodepoort",
      "lead generation website roodepoort",
      "roodepoort mall web design",
      "website design roodepoort CBD",
      "local SEO services roodepoort",
    ],
  });
}

const RoodepoortPage = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://endpointmedia.co.za/locations/roodepoort#localbusiness",
    name: "Endpoint Media - Web Design Roodepoort",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Roodepoort",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.1625,
      longitude: 27.8725,
    },
    url: "https://endpointmedia.co.za/locations/roodepoort",
    telephone: "+27-76-972-4559",
    email: "hello@endpointmedia.co.za",
    priceRange: "R5,500 - R15,000",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://endpointmedia.co.za",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://endpointmedia.co.za/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Roodepoort",
        item: "https://endpointmedia.co.za/locations/roodepoort",
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
      <nav className="bg-gray-100 py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-teal-600 transition">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/locations" className="hover:text-teal-600 transition">Locations</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-semibold">Roodepoort</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design Roodepoort: Western Johannesburg Hub Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Endpoint Media builds high-performance, lead-generating websites specifically engineered 
            for Roodepoort businesses seeking market dominance. From Roodepoort Mall to local 
            businesses, we help establish a powerful online presence.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Roodepoort Audit
          </Link>
        </div>
      </section>

      {/* Why Roodepoort Businesses Choose Endpoint Media */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Why Roodepoort Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🏘️ Community-Focused Market
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Roodepoort is a diverse, community-focused suburb with local businesses, retail centers, 
                  and professional services. We understand the local market and build websites that 
                  connect with Roodepoort customers.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🎯 Local Market Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dominate searches for &quot;web design Roodepoort&quot;, &quot;Roodepoort Mall businesses&quot;, 
                  and &quot;local services Roodepoort&quot;. Our hyper-local SEO strategy targets 
                  Roodepoort-specific landmarks and neighborhoods to capture local customers.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  ⚡ Value-Focused Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Roodepoort businesses need high-performance websites at accessible prices. We deliver 
                  professional, fast-loading websites using Next.js that compete with premium-quality 
                  sites at competitive prices.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  📈 Growth-Focused Solutions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every Roodepoort website we build is designed to generate leads and drive revenue. 
                  From retail stores to professional services, we optimize for conversions and 
                  track measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roodepoort Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Roodepoort Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Roodepoort CBD</h3>
                <p className="text-gray-600 text-sm">
                  Central business district, offices, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Roodepoort Mall</h3>
                <p className="text-gray-600 text-sm">
                  Major shopping center, retail businesses, restaurants
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Honeydew</h3>
                <p className="text-gray-600 text-sm">
                  Nearby suburb, commercial area, local businesses
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Strubensvalley</h3>
                <p className="text-gray-600 text-sm">
                  Adjacent area, retail, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Helderkruin</h3>
                <p className="text-gray-600 text-sm">
                  Nearby residential and commercial area
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Wilropark</h3>
                <p className="text-gray-600 text-sm">
                  Adjacent suburb, local businesses, services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Roodepoort */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Services for Roodepoort Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Retail & E-commerce Website Design
                </h3>
                <p className="text-gray-700 mb-4">
                  Perfect for Roodepoort Mall retailers and online stores. We build high-converting 
                  e-commerce websites with Shopify integration, secure payment gateways, and 
                  inventory management systems.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Shopify store development</li>
                  <li>Product catalog management</li>
                  <li>Payment gateway integration</li>
                  <li>Mobile shopping optimization</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Professional Services Websites
                </h3>
                <p className="text-gray-700 mb-4">
                  For Roodepoort lawyers, accountants, consultants, and medical practices. We build 
                  authoritative websites that establish trust and generate qualified leads.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Credential showcasing</li>
                  <li>Client portal integration</li>
                  <li>Appointment booking systems</li>
                  <li>Service area pages</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Local SEO for Roodepoort
                </h3>
                <p className="text-gray-700 mb-4">
                  Dominate Google Maps and local search results for Roodepoort. We optimize for 
                  landmark-specific searches and ensure you appear when customers search nearby.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
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
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
            Ready to Dominate Roodepoort&apos;s Online Market?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Join the Roodepoort businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you capture more customers in this 
            community-focused market.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Roodepoort Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default RoodepoortPage;

