// src/app/locations/bryanston/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Bryanston | Website Design Services Bryanston | Endpoint Media",
    description: "Professional web design and local SEO services for Bryanston businesses. Premium area with medical practices, professional services, and retail. Build a high-performance website. Free audit available.",
    path: "/locations/bryanston",
    keywords: [
        "web design bryanston",
        "website design bryanston",
        "local SEO bryanston",
        "web developer bryanston",
        "hyper-local SEO bryanston",
        "bryanston medical website",
        "website design bryanston drive",
        "local SEO services bryanston",
    ],
  });
}

const BryanstonPage = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://endpointmedia.co.za/locations/bryanston#localbusiness",
    name: "Endpoint Media - Web Design Bryanston",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bryanston",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.0561,
      longitude: 28.0178,
    },
    url: "https://endpointmedia.co.za/locations/bryanston",
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
        name: "Bryanston",
        item: "https://endpointmedia.co.za/locations/bryanston",
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
            <li className="text-gray-900 font-semibold">Bryanston</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design Bryanston: Premium Professional Excellence
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Endpoint Media builds high-performance websites for Bryanston businesses seeking measurable ROI. 
            From Bryanston Drive medical practices to professional services, we help premium businesses 
            establish authoritative online presence.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Bryanston Audit
          </Link>
        </div>
      </section>

      {/* Why Bryanston Businesses Choose Endpoint Media */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Why Bryanston Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🏥 Medical & Professional Services Focus
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Bryanston is home to numerous medical practices, specialist doctors, lawyers, 
                  accountants, and professional consultants. We understand the need for trust, 
                  credibility, and professional presentation that these businesses require.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🎯 Premium Market Positioning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dominate searches for &quot;web design Bryanston&quot;, &quot;Bryanston Drive medical practice&quot;, 
                  and &quot;professional services Bryanston&quot;. Our hyper-local SEO strategy targets 
                  Bryanston-specific areas and builds authority for premium businesses.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  ⚡ High-Performance, Professional Design
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Bryanston customers expect professional, trustworthy experiences. We build 
                  authoritative websites that reflect the premium nature of your business and 
                  convert visitors into clients.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  📈 Credibility & Trust Building
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every Bryanston website we build is designed to establish credibility and trust. 
                  From credential showcasing to client testimonials, we optimize for the trust signals 
                  that premium service providers need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bryanston Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Bryanston Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Bryanston Drive</h3>
                <p className="text-gray-600 text-sm">
                  Medical practices, professional services, offices
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">William Nicol Drive</h3>
                <p className="text-gray-600 text-sm">
                  Professional services, retail, dining
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Bryanston Shopping Centre</h3>
                <p className="text-gray-600 text-sm">
                  Retail businesses, services, restaurants
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Rivonia Road</h3>
                <p className="text-gray-600 text-sm">
                  Adjacent business district, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Bryanston East</h3>
                <p className="text-gray-600 text-sm">
                  Residential services, local businesses
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Witkoppen Road</h3>
                <p className="text-gray-600 text-sm">
                  Medical practices, professional services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Bryanston */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Services for Bryanston Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Medical Practice Website Design
                </h3>
                <p className="text-gray-700 mb-4">
                  Perfect for Bryanston medical practices and specialists. We build HIPAA-compliant, 
                  patient-focused websites with online booking, secure portals, and provider profiles.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provider profile pages</li>
                  <li>Online appointment booking</li>
                  <li>Secure patient portals</li>
                  <li>Service and speciality pages</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Professional Services Websites
                </h3>
                <p className="text-gray-700 mb-4">
                  For Bryanston lawyers, accountants, consultants, and financial advisors. We build 
                  authoritative websites that establish trust and generate qualified leads.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Credential and certification showcases</li>
                  <li>Client portal integration</li>
                  <li>Case study and testimonial pages</li>
                  <li>Service area deep-dives</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Local SEO for Bryanston
                </h3>
                <p className="text-gray-700 mb-4">
                  Dominate Google Maps and local search results for Bryanston. We optimize for 
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
            Ready to Establish Your Bryanston Online Presence?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Join the Bryanston businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you build trust and generate leads.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Bryanston Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default BryanstonPage;

