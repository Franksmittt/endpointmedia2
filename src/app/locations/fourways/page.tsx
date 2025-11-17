// src/app/locations/fourways/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Fourways | Website Design Services Fourways | Endpoint Media",
  description: "Professional web design and local SEO services for Fourways businesses. Build a high-performance, lead-generating website. Free audit available.",
  keywords: [
    "web design fourways",
    "website design fourways",
    "local SEO fourways",
    "web developer fourways",
    "hyper-local SEO fourways",
    "fourways mall web design",
    "website design fourways crossing",
    "local SEO services fourways",
  ],
  alternates: {
    canonical: "/locations/fourways",
  },
  openGraph: {
    title: "Web Design Fourways | Endpoint Media",
    description: "Professional web design and local SEO services for Fourways businesses.",
    url: "https://endpointmedia.co.za/locations/fourways",
    type: "website",
  },
};

const FourwaysPage = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://endpointmedia.co.za/locations/fourways#localbusiness",
    name: "Endpoint Media - Web Design Fourways",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fourways",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.0167,
      longitude: 28.0167,
    },
    url: "https://endpointmedia.co.za/locations/fourways",
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
        name: "Fourways",
        item: "https://endpointmedia.co.za/locations/fourways",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <li className="text-gray-900 font-semibold">Fourways</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design Fourways: Growing Commercial Hub Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Endpoint Media builds high-performance websites for Fourways businesses seeking 
            measurable growth in this expanding commercial district. From Fourways Mall to 
            Fourways Crossing, we help local businesses establish a powerful online presence.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Fourways Audit
          </Link>
        </div>
      </section>

      {/* Why Fourways Businesses Choose Endpoint Media */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Why Fourways Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🏢 Rapid Growth District
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Fourways is one of Johannesburg&apos;s fastest-growing commercial hubs with Fourways Mall, 
                  Fourways Crossing, and new developments constantly emerging. We help businesses establish 
                  their online presence early to capture market share.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🎯 Early Mover Advantage
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dominate searches for &quot;web design Fourways&quot;, &quot;Fourways Mall businesses&quot;, 
                  and &quot;local services Fourways&quot; before competition intensifies. Our hyper-local 
                  SEO strategy targets Fourways-specific landmarks and neighborhoods.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  ⚡ Performance-First Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Fourways customers expect modern, fast experiences. We build blazing-fast, 
                  mobile-optimized websites using Next.js that convert visitors into customers 
                  and rank higher in search results.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  📈 Scalable Solutions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  As Fourways grows, your website grows with you. We build scalable solutions that 
                  handle increased traffic and can expand with additional features as your business evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourways Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Fourways Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Fourways Mall</h3>
                <p className="text-gray-600 text-sm">
                  Major shopping center, retail businesses, restaurants, services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Fourways Crossing</h3>
                <p className="text-gray-600 text-sm">
                  Shopping and entertainment precinct, retail, dining, offices
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Fourways Gardens</h3>
                <p className="text-gray-600 text-sm">
                  Office parks, professional services, medical practices
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Fourways Golf Park</h3>
                <p className="text-gray-600 text-sm">
                  Golf estate, hospitality, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Montrose</h3>
                <p className="text-gray-600 text-sm">
                  Adjacent business area, retail, services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Witkoppen</h3>
                <p className="text-gray-600 text-sm">
                  Nearby commercial area, mixed-use developments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Fourways */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Services for Fourways Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Retail & E-commerce Website Design
                </h3>
                <p className="text-gray-700 mb-4">
                  Perfect for Fourways Mall and Fourways Crossing retailers. We build high-converting 
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
                  For Fourways lawyers, accountants, consultants, and medical practices. We build 
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
                  Local SEO for Fourways
                </h3>
                <p className="text-gray-700 mb-4">
                  Dominate Google Maps and local search results for Fourways. We optimize for 
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
            Ready to Dominate Fourways&apos;s Growing Market?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Join the Fourways businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you capture market share in this growing hub.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Fourways Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default FourwaysPage;

