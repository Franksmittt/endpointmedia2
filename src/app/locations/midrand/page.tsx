// src/app/locations/midrand/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Midrand | Website Design Services Midrand | Endpoint Media",
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
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://endpointmedia.co.za/locations/midrand#localbusiness",
    name: "Endpoint Media - Web Design Midrand",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Midrand",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.9964,
      longitude: 28.1372,
    },
    url: "https://endpointmedia.co.za/locations/midrand",
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
        name: "Midrand",
        item: "https://endpointmedia.co.za/locations/midrand",
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
            <li className="text-gray-900 font-semibold">Midrand</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design Midrand: Strategic Location Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Endpoint Media builds high-performance websites for Midrand businesses seeking measurable growth. 
            From Midrand Mall to office parks, we help local businesses capture customers from both 
            Johannesburg and Pretoria.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Midrand Audit
          </Link>
        </div>
      </section>

      {/* Why Midrand Businesses Choose Endpoint Media */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Why Midrand Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  📍 Strategic Location Advantage
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Midrand is strategically located between Johannesburg and Pretoria, making it a 
                  prime location for businesses serving both cities. We understand the dual-market 
                  opportunity and build websites that capture customers from both regions.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🎯 Growing Market Positioning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dominate searches for &quot;web design Midrand&quot;, &quot;Midrand Mall businesses&quot;, 
                  and &quot;services Midrand&quot;. Our hyper-local SEO strategy targets 
                  Midrand-specific landmarks and captures the growing commercial market.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  ⚡ Performance-Optimized Websites
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Midrand customers expect fast, professional experiences. We build blazing-fast, 
                  mobile-optimized websites using Next.js that convert visitors into customers 
                  and rank higher in search results.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  📈 Dual-Market Growth
                </h3>
                <p className="text-gray-700 leading-relaxed">
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
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Midrand Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Midrand CBD</h3>
                <p className="text-gray-600 text-sm">
                  Central business district, offices, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Midrand Mall</h3>
                <p className="text-gray-600 text-sm">
                  Major shopping center, retail businesses, restaurants
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Centurion</h3>
                <p className="text-gray-600 text-sm">
                  Nearby commercial area, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Allandale</h3>
                <p className="text-gray-600 text-sm">
                  Business area, offices, retail
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Vorna Valley</h3>
                <p className="text-gray-600 text-sm">
                  Residential and commercial area, local businesses
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Carlswald</h3>
                <p className="text-gray-600 text-sm">
                  Office parks, professional services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Midrand */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Services for Midrand Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Retail & E-commerce Website Design
                </h3>
                <p className="text-gray-700 mb-4">
                  Perfect for Midrand Mall retailers and online stores. We build high-converting 
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
                  For Midrand lawyers, accountants, consultants, and medical practices. We build 
                  authoritative websites that establish trust and generate qualified leads from 
                  both Johannesburg and Pretoria.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Credential showcasing</li>
                  <li>Client portal integration</li>
                  <li>Appointment booking systems</li>
                  <li>Dual-market service area pages</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Local SEO for Midrand
                </h3>
                <p className="text-gray-700 mb-4">
                  Dominate Google Maps and local search results for Midrand. We optimize for 
                  landmark-specific searches and ensure you appear when customers search nearby, 
                  whether coming from Johannesburg or Pretoria.
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
            Ready to Dominate Midrand&apos;s Growing Market?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Join the Midrand businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you capture customers from both 
            Johannesburg and Pretoria.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Midrand Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default MidrandPage;

