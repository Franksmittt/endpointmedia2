// src/app/locations/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Locations Johannesburg | Sandton, Bryanston, Rivonia, Midrand, Roodepoort",
    description: "Professional web design and local SEO services across Johannesburg. We serve Sandton, Bryanston, Rivonia, Midrand, Roodepoort, and surrounding areas.",
    path: "/locations",
    keywords: [
      "web design johannesburg locations",
      "web design sandton",
      "web design bryanston",
      "web design rivonia",
      "web design midrand",
      "web design roodepoort",
      "local SEO johannesburg",
    ],
  });
}

const LocationsPage = () => {
  const locations = [
    {
      name: "Sandton",
      slug: "sandton",
      description: "Africa's richest square mile. Financial hub and corporate headquarters.",
      highlights: ["JSE", "Sandton City", "Nelson Mandela Square"],
      priority: "high",
    },
    {
      name: "Meyersdal",
      slug: "meyersdal",
      description: "The Sandton of the South. Exclusive enclave for executives and estate owners.",
      highlights: ["Eco Estate", "Private Client Services", "Executive Level"],
      priority: "high",
    },
    {
      name: "New Redruth",
      slug: "new-redruth",
      description: "The de facto CBD of Alberton. Legal and financial professional hub.",
      highlights: ["Van Rensburg Street", "Union Hospital", "Professional Services"],
      priority: "high",
    },
    {
      name: "Rosebank",
      slug: "rosebank",
      description: "Premium commercial hub with retail, offices, and professional services.",
      highlights: ["Commercial Hub", "Retail", "Professional Services"],
      priority: "high",
    },
    {
      name: "Randburg",
      slug: "randburg",
      description: "Major commercial and residential area with diverse business community.",
      highlights: ["Commercial District", "Diverse Businesses", "Growing Market"],
      priority: "high",
    },
    {
      name: "Bryanston",
      slug: "bryanston",
      description: "Premium residential and commercial area with high-value businesses.",
      highlights: ["Professional Services", "Medical Practices", "Retail"],
      priority: "high",
    },
    {
      name: "Rivonia",
      slug: "rivonia",
      description: "Business district with office parks and professional services.",
      highlights: ["Office Parks", "Tech Companies", "Professional Services"],
      priority: "high",
    },
    {
      name: "Midrand",
      slug: "midrand",
      description: "Growing commercial hub between Johannesburg and Pretoria.",
      highlights: ["Growing Market", "Commercial Developments", "Strategic Location"],
      priority: "high",
    },
    {
      name: "Roodepoort",
      slug: "roodepoort",
      description: "Western Johannesburg suburb with diverse business community.",
      highlights: ["Local Businesses", "Community Focused", "Growing Market"],
      priority: "high",
    },
    {
      name: "Fourways",
      slug: "fourways",
      description: "Growing commercial hub with retail, offices, and business services.",
      highlights: ["Growing Market", "Commercial Hub", "Retail District"],
      priority: "high",
    },
    {
      name: "Waterfall",
      slug: "waterfall",
      description: "Emerging business district with modern developments and offices.",
      highlights: ["Emerging District", "Modern Developments", "Business Hub"],
      priority: "high",
    },
    {
      name: "Benoni",
      slug: "benoni",
      description: "Eastern Johannesburg hub with established commercial district.",
      highlights: ["Established Hub", "Commercial District", "Local Businesses"],
      priority: "high",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design Services Across Johannesburg
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            We provide professional web design and local SEO services to businesses across Johannesburg. 
            Click on a location below to learn more about our hyper-local services in your area.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-teal-300 transition duration-300 p-8 block"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-bold font-heading text-gray-900 group-hover:text-teal-700 transition mb-2">
                    {location.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{location.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {location.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-semibold"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-teal-600 font-semibold text-sm group-hover:underline inline-flex items-center">
                  View {location.name} Services →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Endpoint Media for Your Location */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Why Location-Specific SEO Matters for Johannesburg Businesses
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-6">
                Johannesburg is a sprawling metropolis with distinct business districts, each with unique characteristics, 
                customer behaviors, and competitive landscapes. A generic "web design Johannesburg" approach won't cut it 
                when your competitors are targeting specific suburbs like Sandton, Randburg, or Bryanston.
              </p>
              <p className="text-lg mb-6">
                <strong className="text-gray-900">Hyper-local SEO strategy</strong> means creating location-specific 
                landing pages that target "service + suburb" keyword combinations. When a potential customer in Sandton 
                searches for "web design Sandton," they see your Sandton-specific page. Not a generic homepage. This 
                precision targeting dramatically increases conversion rates and local search visibility.
              </p>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-4">
                Our Location-Specific Approach
              </h3>
              <ul className="list-disc list-inside space-y-3 mb-6">
                <li><strong className="text-gray-900">Suburb-Specific Landing Pages:</strong> Each location page is 
                optimized for local keywords, landmarks, and business districts unique to that area.</li>
                <li><strong className="text-gray-900">LocalBusiness Schema:</strong> Every location page includes 
                comprehensive LocalBusiness schema markup with geo coordinates, service areas, and NAP data.</li>
                <li><strong className="text-gray-900">Local Citations:</strong> We ensure consistent Name, Address, 
                Phone (NAP) data across all major directories for each service area.</li>
                <li><strong className="text-gray-900">Content Depth:</strong> Each page includes 1000+ words of 
                location-specific content, local landmarks, business districts, and service area coverage.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 font-heading">
            Don&apos;t See Your Location?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We serve businesses across Johannesburg and surrounding areas. Contact us to discuss 
            how we can help your business dominate local search.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <HubSpokeLinks variant="location" slug="index" />
    </>
  );
};

export default LocationsPage;

