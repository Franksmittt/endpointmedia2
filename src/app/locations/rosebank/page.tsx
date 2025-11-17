// src/app/locations/rosebank/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Rosebank | Website Design Services Rosebank | Endpoint Media",
  description: "Professional web design and local SEO services for Rosebank businesses. Dominate local search in this premium Johannesburg commercial hub. Free audit available.",
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
  alternates: {
    canonical: "/locations/rosebank",
  },
  openGraph: {
    title: "Web Design Rosebank | Endpoint Media",
    description: "Professional web design and local SEO services for Rosebank businesses.",
    url: "https://endpointmedia.co.za/locations/rosebank",
    type: "website",
  },
};

const RosebankPage = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://endpointmedia.co.za/locations/rosebank#localbusiness",
    name: "Endpoint Media - Web Design Rosebank",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosebank",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.1467,
      longitude: 28.0431,
    },
    url: "https://endpointmedia.co.za/locations/rosebank",
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
        name: "Rosebank",
        item: "https://endpointmedia.co.za/locations/rosebank",
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
            <li className="text-gray-900 font-semibold">Rosebank</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design Rosebank: Premium Commercial Hub Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Endpoint Media builds high-performance websites for Rosebank businesses seeking to 
            dominate this premium Johannesburg commercial district. From Rosebank Mall to The Zone, 
            we help local businesses establish a powerful online presence.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Rosebank Audit
          </Link>
        </div>
      </section>

      {/* Why Rosebank Businesses Choose Endpoint Media */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Why Rosebank Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🛍️ Retail & Commercial Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Rosebank is a premier commercial hub with Rosebank Mall, The Zone, and numerous 
                  retail and professional service businesses. We understand the competitive landscape 
                  and build websites that help Rosebank businesses stand out.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🎯 Hyper-Local SEO Mastery
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dominate searches for &quot;web design Rosebank&quot;, &quot;Rosebank Mall businesses&quot;, 
                  and &quot;professional services Rosebank&quot;. Our hyper-local SEO strategy targets 
                  Rosebank-specific landmarks and neighborhoods.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  ⚡ High-Performance Websites
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Rosebank customers expect fast, professional experiences. We build blazing-fast, 
                  mobile-optimized websites using Next.js that convert visitors into customers.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  📈 Conversion-Focused Design
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every Rosebank website we build is designed to generate leads and drive sales. 
                  From e-commerce stores to professional services, we optimize for conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rosebank Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Rosebank Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Rosebank Mall</h3>
                <p className="text-gray-600 text-sm">
                  Major shopping center, retail businesses, restaurants
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">The Zone</h3>
                <p className="text-gray-600 text-sm">
                  Shopping and entertainment precinct, retail, dining
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Rosebank CBD</h3>
                <p className="text-gray-600 text-sm">
                  Business district, professional services, offices
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Hyde Park Corner</h3>
                <p className="text-gray-600 text-sm">
                  Upmarket shopping area, premium retail, services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Illovo</h3>
                <p className="text-gray-600 text-sm">
                  Adjacent business area, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Melrose</h3>
                <p className="text-gray-600 text-sm">
                  Nearby residential and commercial area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Rosebank */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Services for Rosebank Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  E-commerce & Retail Website Design
                </h3>
                <p className="text-gray-700 mb-4">
                  Perfect for Rosebank Mall retailers and online stores. We build high-converting 
                  e-commerce websites with Shopify integration, secure payment gateways, and 
                  inventory management.
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
                  For Rosebank lawyers, accountants, consultants, and professional service providers. 
                  We build authoritative websites that establish trust and generate qualified leads.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Credential showcasing</li>
                  <li>Client portal integration</li>
                  <li>Appointment booking systems</li>
                  <li>Case study presentation</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Local SEO for Rosebank
                </h3>
                <p className="text-gray-700 mb-4">
                  Dominate Google Maps and local search results for Rosebank. We optimize for 
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
            Ready to Dominate Rosebank&apos;s Online Market?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Join the Rosebank businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you capture more customers.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Rosebank Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default RosebankPage;

