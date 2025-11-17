// src/app/industries/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry-Specific Web Design Johannesburg | Law Firms, Real Estate, Finance, Medical | Endpoint Media",
  description: "Specialized web design services for Johannesburg businesses. We serve law firms, real estate agents, financial advisors, medical practices, and more with industry-specific solutions.",
  keywords: [
    "industry-specific web design johannesburg",
    "web design for law firms",
    "web design for real estate",
    "web design for financial services",
    "web design for medical practices",
  ],
  alternates: {
    canonical: "/industries",
  },
};

const IndustriesPage = () => {
  const industries = [
    {
      name: "Law Firms",
      slug: "law-firms",
      description: "Professional websites that establish trust, showcase expertise, and generate qualified legal leads.",
      icon: "⚖️",
      highlights: ["Attorney Profiles", "Practice Areas", "Client Portals", "Legal SEO"],
    },
    {
      name: "Real Estate",
      slug: "real-estate",
      description: "Property listings, IDX integration, and lead capture optimized for real estate success.",
      icon: "🏠",
      highlights: ["Property Listings", "IDX Integration", "Lead Capture", "Local SEO"],
    },
    {
      name: "Financial Services",
      slug: "finance",
      description: "Trust, security, and compliance-focused websites for financial advisors and accountants.",
      icon: "💼",
      highlights: ["Secure Portals", "Compliance", "Service Pages", "Trust Signals"],
    },
    {
      name: "Medical Practices",
      slug: "medical",
      description: "HIPAA-compliant, patient-focused websites with online booking and secure portals.",
      icon: "🏥",
      highlights: ["Online Booking", "Patient Portals", "Provider Profiles", "Healthcare SEO"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Industry-Specific Web Design for Johannesburg Businesses
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Every industry has unique needs. We build specialized websites for law firms, real estate 
            agents, financial advisors, medical practices, and more—each optimized for your industry&apos;s 
            specific requirements.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-teal-300 transition duration-300 p-8 block"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h2 className="text-2xl font-bold font-heading text-gray-900 group-hover:text-teal-700 transition mb-3">
                  {industry.name}
                </h2>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {industry.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-semibold"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <span className="text-teal-600 font-semibold text-sm group-hover:underline inline-flex items-center">
                  View {industry.name} Services →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 font-heading">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We serve businesses across industries. Contact us to discuss how we can create a specialized 
            website solution for your industry.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default IndustriesPage;

