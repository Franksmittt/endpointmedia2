// src/app/locations/waterfall/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Waterfall | Website Design Services Waterfall | Endpoint Media",
    description: "Professional web design and local SEO services for Waterfall businesses. Dominate this emerging business district with a high-performance website. Free audit available.",
    path: "/locations/waterfall",
    keywords: [
      "web design waterfall",
      "website design waterfall",
      "local SEO waterfall",
      "web developer waterfall",
      "hyper-local SEO waterfall",
      "waterfall city web design",
      "waterfall office park website",
    ],
  });
}

const WaterfallPage = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/locations/waterfall#localbusiness`,
    name: "Endpoint Media - Web Design Waterfall",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waterfall",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.0967,
      longitude: 28.0867,
    },
    url: `${BASE_URL}/locations/waterfall`,
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
        name: "Waterfall",
        item: `${BASE_URL}/locations/waterfall`,
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
            <li className="text-gray-900 font-semibold">Waterfall</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design Waterfall: Emerging Business District Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Endpoint Media builds high-performance websites for Waterfall businesses seeking to 
            establish dominance in this emerging commercial hub. From Waterfall City to modern 
            office parks, we help businesses establish a powerful online presence early.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Waterfall Audit
          </Link>
        </div>
      </section>

      {/* Why Waterfall Businesses Choose Endpoint Media */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Why Waterfall Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🏗️ Future-Forward Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Waterfall is one of Johannesburg&apos;s newest and most modern business districts with 
                  Waterfall City, modern office parks, and cutting-edge developments. We help businesses 
                  establish their digital presence to match the innovation of the area.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🎯 Early Market Position
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dominate searches for &quot;web design Waterfall&quot;, &quot;Waterfall City businesses&quot;, 
                  and &quot;office space Waterfall&quot; before competition intensifies. Our hyper-local 
                  SEO strategy targets Waterfall-specific landmarks and developments.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  ⚡ Modern Technology Stack
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Waterfall businesses demand modern, high-performance solutions. We build blazing-fast, 
                  mobile-optimized websites using Next.js that reflect the innovation of the area and 
                  convert visitors into customers.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  📈 Scalable Growth Platform
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  As Waterfall develops and your business grows, your website scales with you. We build 
                  enterprise-ready solutions that handle growth and can expand with advanced features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waterfall Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Waterfall Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Waterfall City</h3>
                <p className="text-gray-600 text-sm">
                  Modern mixed-use development, offices, retail, residential
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Waterfall Office Parks</h3>
                <p className="text-gray-600 text-sm">
                  Corporate offices, professional services, tech companies
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Waterfall Mall</h3>
                <p className="text-gray-600 text-sm">
                  Shopping center, retail businesses, dining, services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Gallo Manor</h3>
                <p className="text-gray-600 text-sm">
                  Adjacent business area, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Broadacres</h3>
                <p className="text-gray-600 text-sm">
                  Nearby commercial area, retail, services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Kyalami</h3>
                <p className="text-gray-600 text-sm">
                  Surrounding area, mixed-use developments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Waterfall */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Services for Waterfall Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Corporate & Enterprise Website Design
                </h3>
                <p className="text-gray-700 mb-4">
                  Perfect for Waterfall City office tenants and corporate headquarters. We build 
                  professional, high-performance websites that reflect your company&apos;s innovation 
                  and establish authority.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Corporate branding and design</li>
                  <li>Team and leadership pages</li>
                  <li>Service and solution showcases</li>
                  <li>Client portal integration</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  E-commerce & Retail Solutions
                </h3>
                <p className="text-gray-700 mb-4">
                  For Waterfall Mall retailers and online stores. We build high-converting 
                  e-commerce websites with Shopify integration and modern shopping experiences.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Shopify store development</li>
                  <li>Modern shopping experiences</li>
                  <li>Payment gateway integration</li>
                  <li>Inventory management systems</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Local SEO for Waterfall
                </h3>
                <p className="text-gray-700 mb-4">
                  Dominate Google Maps and local search results for Waterfall. We optimize for 
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
            Ready to Establish Your Waterfall Presence?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Join the Waterfall businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you dominate this emerging business district.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Waterfall Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default WaterfallPage;
