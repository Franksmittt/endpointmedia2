// src/app/locations/sandton/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Sandton | Website Design Services Sandton | Endpoint Media",
    description: "Professional web design and local SEO services for Sandton businesses. Dominate Africa's richest square mile with a high-performance, lead-generating website. Free audit available.",
    path: "/locations/sandton",
    keywords: [
      "web design sandton",
      "website design sandton",
      "local SEO sandton",
      "web developer sandton",
      "website redesign sandton",
      "shopify expert sandton",
      "web design sandton CBD",
      "website design sandton city",
      "local SEO services sandton",
      "lead generation website sandton",
      "google business profile sandton",
      "hyper-local SEO sandton",
    ],
  });
}

const SandtonPage = () => {
  // JSON-LD Schema for Sandton location page
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://endpointmedia.co.za/locations/sandton#localbusiness",
    name: "Endpoint Media - Web Design Sandton",
    image: "https://endpointmedia.co.za/images/logo.png",
    description: "Professional web design and local SEO services for Sandton businesses",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sandton",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
      streetAddress: "Sandton Central",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.1076,
      longitude: 28.0567,
    },
    url: "https://endpointmedia.co.za/locations/sandton",
    telephone: "+27-76-972-4559",
    email: "hello@endpointmedia.co.za",
    priceRange: "R5,500 - R15,000",
    areaServed: {
      "@type": "City",
      name: "Sandton",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -26.1076,
        longitude: 28.0567,
      },
      geoRadius: {
        "@type": "Distance",
        value: "10",
        unitCode: "KM",
      },
    },
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
        name: "Sandton",
        item: "https://endpointmedia.co.za/locations/sandton",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
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
              <Link href="/" className="hover:text-teal-600 transition">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/locations" className="hover:text-teal-600 transition">
                Locations
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-semibold">Sandton</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section - Hyper-Local for Sandton */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design Sandton: Dominate Africa&apos;s Richest Square Mile
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Stop losing Sandton clients to competitors with outdated websites. Endpoint Media builds 
            high-performance, lead-generating websites specifically engineered for Sandton businesses 
            seeking market dominance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500"
            >
              Get Your Free Sandton Audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Why Sandton Businesses Choose Endpoint Media */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Why Sandton Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🏆 Financial Hub Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sandton is Africa&apos;s financial capital, home to the JSE and major corporate headquarters. 
                  We understand the sophisticated needs of Sandton businesses—trust, professionalism, and 
                  measurable ROI are non-negotiable.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🎯 Hyper-Local SEO Domination
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When Sandton customers search for your services, we ensure you appear first. Our 
                  hyper-local SEO strategy targets Sandton CBD, Sandton City, Nelson Mandela Square, 
                  and surrounding landmarks.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  ⚡ Performance-Optimized
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sandton professionals don&apos;t have time for slow websites. We engineer blazing-fast, 
                  mobile-first websites that convert visitors into leads, backed by Next.js and Core 
                  Web Vitals optimization.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  📈 Measurable ROI
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We don&apos;t build online brochures. We build lead-generating assets. Every Sandton 
                  website we create is designed to generate measurable business results, from increased 
                  bookings to higher conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sandton Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Sandton Service Areas We Cover
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Sandton CBD</h3>
                <p className="text-gray-600 text-sm">
                  Financial district, corporate headquarters, JSE
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Sandton City</h3>
                <p className="text-gray-600 text-sm">
                  Shopping precinct, retail businesses, restaurants
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Nelson Mandela Square</h3>
                <p className="text-gray-600 text-sm">
                  Iconic landmark, high-end retail, hospitality
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Rivonia Road</h3>
                <p className="text-gray-600 text-sm">
                  Office parks, professional services, tech companies
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Grayson Drive</h3>
                <p className="text-gray-600 text-sm">
                  Mixed-use developments, medical practices, consulting
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Benmore Gardens</h3>
                <p className="text-gray-600 text-sm">
                  Residential services, local businesses, community-focused
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Sandton Businesses */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Services Designed for Sandton Success
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Website Design & Development
                </h3>
                <p className="text-gray-700 mb-4">
                  Custom, high-performance websites engineered for Sandton businesses. From financial 
                  services to legal firms, we build websites that reflect your professionalism and 
                  generate leads.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Mobile-first responsive design</li>
                  <li>Next.js-powered for maximum speed</li>
                  <li>Custom branding and UI/UX design</li>
                  <li>Lead capture forms and integrations</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Hyper-Local SEO for Sandton
                </h3>
                <p className="text-gray-700 mb-4">
                  Dominate Google Maps and local search results for Sandton. Our hyper-local SEO 
                  strategy ensures you rank for searches like &quot;web design Sandton&quot;, 
                  &quot;lawyer Sandton CBD&quot;, or &quot;accountant Sandton City&quot;.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Google Business Profile optimization</li>
                  <li>Local citation building</li>
                  <li>Landmark-inclusive content strategy</li>
                  <li>Schema markup for local SEO</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Website Redesign Services
                </h3>
                <p className="text-gray-700 mb-4">
                  Is your Sandton website outdated, underperforming, or mobile-incompatible? We 
                  specialize in transforming existing websites into high-converting, modern assets 
                  that generate measurable ROI.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Performance audits and recommendations</li>
                  <li>Modern design refresh</li>
                  <li>Mobile compatibility fixes</li>
                  <li>Conversion rate optimization</li>
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
            Ready to Dominate Sandton&apos;s Digital Landscape?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Join the Sandton businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you dominate Africa&apos;s richest square mile.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500"
          >
            Get Your Free Sandton Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default SandtonPage;

