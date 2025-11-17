// src/app/locations/randburg/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Randburg | Website Design Services Randburg | Endpoint Media",
  description: "Professional web design and local SEO services for Randburg businesses. Build a high-performance website that dominates local search. Free audit available.",
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
  alternates: {
    canonical: "/locations/randburg",
  },
  openGraph: {
    title: "Web Design Randburg | Endpoint Media",
    description: "Professional web design and local SEO services for Randburg businesses.",
    url: "https://endpointmedia.co.za/locations/randburg",
    type: "website",
  },
};

const RandburgPage = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://endpointmedia.co.za/locations/randburg#localbusiness",
    name: "Endpoint Media - Web Design Randburg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Randburg",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.0936,
      longitude: 28.0064,
    },
    url: "https://endpointmedia.co.za/locations/randburg",
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
        name: "Randburg",
        item: "https://endpointmedia.co.za/locations/randburg",
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
            <li className="text-gray-900 font-semibold">Randburg</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design Randburg: Major Commercial Hub Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Endpoint Media builds high-performance websites for Randburg businesses seeking 
            measurable growth and local search dominance. From Randburg Mall to Clearwater Mall, 
            we help local businesses capture more customers online.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Randburg Audit
          </Link>
        </div>
      </section>

      {/* Why Randburg Businesses Choose Endpoint Media */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Why Randburg Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🏬 Major Commercial District
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Randburg is a major commercial and residential hub with diverse businesses, 
                  shopping centers, and professional services. We understand the competitive 
                  landscape and build websites that help Randburg businesses stand out.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🎯 Hyper-Local SEO Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dominate searches for &quot;web design Randburg&quot;, &quot;Randburg Mall businesses&quot;, 
                  and &quot;local services Randburg&quot;. Our hyper-local SEO strategy targets 
                  Randburg-specific landmarks and neighborhoods.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  ⚡ High-Performance Websites
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Randburg customers expect fast, professional experiences. We build blazing-fast, 
                  mobile-optimized websites using Next.js that convert visitors into customers.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  📈 Measurable ROI Focus
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every Randburg website we build is designed to generate leads and drive revenue. 
                  From retail stores to professional services, we optimize for conversions and track results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Randburg Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Randburg Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Randburg CBD</h3>
                <p className="text-gray-600 text-sm">
                  Commercial district, offices, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Randburg Mall</h3>
                <p className="text-gray-600 text-sm">
                  Major shopping center, retail businesses, restaurants
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Clearwater Mall</h3>
                <p className="text-gray-600 text-sm">
                  Shopping precinct, retail, dining, services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Ferndale</h3>
                <p className="text-gray-600 text-sm">
                  Business area, professional services, retail
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Northgate</h3>
                <p className="text-gray-600 text-sm">
                  Shopping and commercial area, retail, services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Blairgowrie</h3>
                <p className="text-gray-600 text-sm">
                  Residential and commercial area, local businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Randburg */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Services for Randburg Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Retail & E-commerce Website Design
                </h3>
                <p className="text-gray-700 mb-4">
                  Perfect for Randburg Mall and Clearwater Mall retailers. We build high-converting 
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
                  For Randburg lawyers, accountants, consultants, and medical practices. We build 
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
                  Local SEO for Randburg
                </h3>
                <p className="text-gray-700 mb-4">
                  Dominate Google Maps and local search results for Randburg. We optimize for 
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
            Ready to Dominate Randburg&apos;s Online Market?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Join the Randburg businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you capture more customers.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Randburg Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default RandburgPage;

