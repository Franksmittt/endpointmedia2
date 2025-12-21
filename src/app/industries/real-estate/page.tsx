// src/app/industries/real-estate/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design for Real Estate Johannesburg | Property Website Design | Endpoint Media",
    description: "Professional web design for Johannesburg real estate agents and agencies. Property listings, IDX integration, lead capture, and local SEO optimized for real estate success.",
    path: "/industries/real-estate",
    keywords: [
      "web design for real estate johannesburg",
      "real estate website design",
      "property website design johannesburg",
      "real estate agent website",
      "IDX integration johannesburg",
      "property listings website",
    ],
  });
}

const RealEstatePage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/industries/real-estate#service`,
    name: "Web Design for Real Estate",
    description: "Professional web design services specifically for real estate agents and agencies",
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    serviceType: "Real Estate Website Design",
    areaServed: {
      "@type": "City",
      name: "Johannesburg",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/industries/real-estate#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a real estate website cost in Johannesburg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Real estate websites typically range from R20,000 to R60,000 depending on IDX integration, number of property listings, and required features like lead capture systems.",
        },
      },
      {
        "@type": "Question",
        name: "Do you integrate with MLS/IDX systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We integrate with major MLS/IDX systems to display live property listings, ensuring your website stays updated automatically with new listings.",
        },
      },
      {
        "@type": "Question",
        name: "Can you add property search and filtering features?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We build advanced property search with filters for price, location, property type, bedrooms, and more to help visitors find exactly what they're looking for.",
        },
      },
      {
        "@type": "Question",
        name: "Will my real estate website work on mobile devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every real estate website we build is mobile-first and responsive, ensuring property listings look perfect on phones, tablets, and desktops. Most property searches happen on mobile.",
        },
      },
      {
        "@type": "Question",
        name: "How do you capture leads from property listings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement lead capture forms on property pages, saved search functionality, newsletter signups, and inquiry forms. All leads are automatically forwarded to your email and CRM if integrated.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design for Real Estate: Property Success Online
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Property listings, IDX integration, lead capture, and local SEO optimized for Johannesburg 
            real estate agents and agencies. We build websites that showcase properties and generate qualified leads.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Real Estate Website Audit
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Real Estate Website Features
            </h2>
            <div className="space-y-6">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">Property Listings</h3>
                <p className="text-gray-700 mb-4">
                  Beautiful property galleries with search, filters, and detailed listings that convert browsers into buyers.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">IDX Integration</h3>
                <p className="text-gray-700 mb-4">
                  Integrate with your MLS/IDX system to display live property listings and keep your site updated automatically.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">Lead Capture</h3>
                <p className="text-gray-700 mb-4">
                  Property inquiry forms, saved searches, and newsletter signups to capture and nurture leads effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Frequently Asked Questions About Real Estate Websites
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How much does a real estate website cost in Johannesburg?
                </h3>
                <p className="text-gray-700">
                  Real estate websites typically range from R20,000 to R60,000 depending on IDX 
                  integration, number of property listings, and required features like lead capture systems.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Do you integrate with MLS/IDX systems?
                </h3>
                <p className="text-gray-700">
                  Yes. We integrate with major MLS/IDX systems to display live property listings, 
                  ensuring your website stays updated automatically with new listings.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Can you add property search and filtering features?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We build advanced property search with filters for price, location, 
                  property type, bedrooms, and more to help visitors find exactly what they&apos;re looking for.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Will my real estate website work on mobile devices?
                </h3>
                <p className="text-gray-700">
                  Yes. Every real estate website we build is mobile-first and responsive, ensuring 
                  property listings look perfect on phones, tablets, and desktops. Most property 
                  searches happen on mobile.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How do you capture leads from property listings?
                </h3>
                <p className="text-gray-700">
                  We implement lead capture forms on property pages, saved search functionality, 
                  newsletter signups, and inquiry forms. All leads are automatically forwarded to 
                  your email and CRM if integrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
            Ready to Showcase Your Properties Online?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Real Estate Website Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default RealEstatePage;

