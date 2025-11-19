// src/app/locations/rivonia/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Rivonia | Website Design Services Rivonia | Endpoint Media",
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
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://endpointmedia.co.za/locations/rivonia#localbusiness",
    name: "Endpoint Media - Web Design Rivonia",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rivonia",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.0500,
      longitude: 28.0667,
    },
    url: "https://endpointmedia.co.za/locations/rivonia",
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
        name: "Rivonia",
        item: "https://endpointmedia.co.za/locations/rivonia",
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
            <li className="text-gray-900 font-semibold">Rivonia</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design Rivonia: Office Park Business Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Endpoint Media builds high-performance websites for Rivonia businesses seeking market dominance. 
            From Rivonia Road office parks to tech companies and professional services, we help local 
            businesses establish a powerful online presence.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Rivonia Audit
          </Link>
        </div>
      </section>

      {/* Why Rivonia Businesses Choose Endpoint Media */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Why Rivonia Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  💼 Office Park & Tech Hub
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Rivonia is a major business district with numerous office parks, tech companies, 
                  and professional service providers. We understand the B2B focus and build websites 
                  that generate qualified leads for Rivonia businesses.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🎯 B2B Market Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dominate searches for &quot;web design Rivonia&quot;, &quot;Rivonia Road office parks&quot;, 
                  and &quot;tech companies Rivonia&quot;. Our hyper-local SEO strategy targets 
                  Rivonia-specific business districts and builds authority for B2B companies.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  ⚡ Enterprise-Grade Performance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Rivonia businesses require professional, high-performance websites. We build 
                  authoritative websites using Next.js that reflect corporate professionalism and 
                  convert visitors into clients.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  📈 Lead Generation Focus
                </h3>
                <p className="text-gray-700 leading-relaxed">
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
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Rivonia Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Rivonia Road</h3>
                <p className="text-gray-600 text-sm">
                  Major business corridor, office parks, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Rivonia Office Parks</h3>
                <p className="text-gray-600 text-sm">
                  Corporate offices, tech companies, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Rivonia Village</h3>
                <p className="text-gray-600 text-sm">
                  Shopping precinct, retail, dining, services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Sloane Street</h3>
                <p className="text-gray-600 text-sm">
                  Business district, professional services, offices
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Sunnyridge</h3>
                <p className="text-gray-600 text-sm">
                  Adjacent business area, professional services
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Sandton Extensions</h3>
                <p className="text-gray-600 text-sm">
                  Nearby commercial area, mixed-use developments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Rivonia */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Services for Rivonia Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Corporate & Professional Services Websites
                </h3>
                <p className="text-gray-700 mb-4">
                  Perfect for Rivonia office park tenants, tech companies, and professional service providers. 
                  We build authoritative websites that establish trust and generate qualified B2B leads.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Corporate branding and design</li>
                  <li>Service showcase pages</li>
                  <li>Case study presentations</li>
                  <li>Client portal integration</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Tech Company Website Design
                </h3>
                <p className="text-gray-700 mb-4">
                  For Rivonia tech companies and software developers. We build modern, innovative 
                  websites that showcase your technology and generate qualified leads.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Technology showcases</li>
                  <li>Product demonstration pages</li>
                  <li>API documentation integration</li>
                  <li>Developer portal integration</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Local SEO for Rivonia
                </h3>
                <p className="text-gray-700 mb-4">
                  Dominate Google Maps and local search results for Rivonia. We optimize for 
                  landmark-specific searches and ensure you appear when businesses search nearby.
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
            Ready to Establish Your Rivonia Online Presence?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Join the Rivonia businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you generate qualified B2B leads.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Rivonia Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default RivoniaPage;

