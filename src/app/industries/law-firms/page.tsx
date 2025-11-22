// src/app/industries/law-firms/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design for Law Firms Johannesburg | Legal Website Design | Endpoint Media",
    description: "Professional web design for Johannesburg law firms. Trust, professionalism, and user navigation are non-negotiable. We build high-performance websites that reflect your expertise and generate qualified leads.",
    path: "/industries/law-firms",
    keywords: [
      "web design for law firms johannesburg",
      "law firm website design",
      "legal website design johannesburg",
      "lawyer website design",
      "attorney website design johannesburg",
      "legal marketing website",
      "law firm SEO johannesburg",
    ],
  });
}

const LawFirmsPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://endpointmedia.co.za/industries/law-firms#service",
    name: "Web Design for Law Firms",
    description: "Professional web design services specifically for law firms",
    provider: {
      "@id": "https://endpointmedia.co.za/#organization",
    },
    serviceType: "Legal Website Design",
    areaServed: {
      "@type": "City",
      name: "Johannesburg",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://endpointmedia.co.za/industries/law-firms#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a law firm website cost in Johannesburg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Law firm websites typically range from R15,000 to R60,000 depending on number of practice areas, attorney profiles, and required features like client portals or booking systems.",
        },
      },
      {
        "@type": "Question",
        name: "Do you create practice area pages for law firms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We create dedicated practice area pages optimized for SEO, showcasing your expertise in areas like family law, corporate law, criminal defense, and estate planning.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate client portals or case management systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We integrate with Clio, PracticePanther, MyCase, and other case management systems. We can also build custom client portals for secure document sharing and communication.",
        },
      },
      {
        "@type": "Question",
        name: "Will my law firm website be optimized for local search?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We optimize for searches like 'divorce lawyer Sandton', 'criminal defense attorney Johannesburg', and 'estate planning attorney Bryanston'. Local SEO is critical for law firm success.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a law firm website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical law firm website takes 6-10 weeks depending on complexity, number of practice areas, and attorney profiles. We work efficiently while ensuring every detail reflects your firm's professionalism.",
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Web Design for Law Firms: Professional Excellence Online
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Trust, professionalism, and user navigation are non-negotiable for law firms. 
            We build high-performance websites that reflect your expertise, establish credibility, 
            and generate qualified leads from potential clients.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Law Firm Website Audit
          </Link>
        </div>
      </section>

      {/* Why Law Firms Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Why Johannesburg Law Firms Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  ⚖️ Trust & Credibility
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  First impressions matter in legal services. We design websites that establish 
                  trust, convey professionalism, and reflect your firm&apos;s expertise. Every 
                  element is crafted to build confidence in potential clients.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  🧭 Professional Navigation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Clients need to find information quickly. We design intuitive navigation that 
                  guides visitors to practice areas, attorney profiles, and contact information 
                  with ease, reducing friction and increasing inquiries.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
                  📋 Lead Qualification
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Not all inquiries are equal. We build forms and systems that qualify leads, 
                  ensuring your team spends time on serious clients, not tire-kickers. Every 
                  element is optimized for quality over quantity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Law Firms */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Essential Features for Law Firm Websites
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Practice Area Pages
                </h3>
                <p className="text-gray-700 mb-4">
                  Dedicated pages for each practice area with detailed information, case studies, 
                  and attorney expertise. Optimized for both user experience and search engines.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Individual practice area landing pages</li>
                  <li>Attorney profile pages with expertise areas</li>
                  <li>Case study and success story sections</li>
                  <li>Legal blog integration for thought leadership</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Attorney Profiles & Expertise
                </h3>
                <p className="text-gray-700 mb-4">
                  Showcase your team&apos;s expertise with professional attorney profiles, 
                  credentials, and practice areas. Build trust through transparency and professionalism.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Professional attorney profile pages</li>
                  <li>Credentials and education display</li>
                  <li>Practice area specialization tags</li>
                  <li>Contact information and consultation requests</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Client Portal & Case Management
                </h3>
                <p className="text-gray-700 mb-4">
                  Secure client portals for document sharing, case updates, and communication. 
                  Integration with your existing case management systems.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Secure client portal access</li>
                  <li>Document upload and sharing</li>
                  <li>Case status updates</li>
                  <li>CRM integration (Clio, PracticePanther, etc.)</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Consultation Request Forms
                </h3>
                <p className="text-gray-700 mb-4">
                  Lead capture forms that qualify potential clients before they contact you. 
                  Gather essential information to prioritize and respond effectively.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Multi-step consultation forms</li>
                  <li>Practice area selection</li>
                  <li>Urgency and timeline questions</li>
                  <li>Automated email notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO for Law Firms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Local SEO for Johannesburg Law Firms
            </h2>
            <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600 mb-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                When potential clients search for legal services in Johannesburg, they&apos;re 
                looking for local expertise. Our hyper-local SEO strategy ensures your firm appears 
                for searches like:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>&quot;divorce lawyer Sandton&quot;</li>
                <li>&quot;criminal defense attorney Johannesburg&quot;</li>
                <li>&quot;corporate lawyer Sandton CBD&quot;</li>
                <li>&quot;personal injury lawyer near me&quot;</li>
                <li>&quot;estate planning attorney Bryanston&quot;</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                We optimize your Google Business Profile, build local citations, create location-specific 
                content, and implement schema markup for legal services to dominate local search results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Specializing in New Redruth:</strong> Serving firms in the New Redruth legal hub, 
                we understand the specific needs of the &quot;Van Rensburg Street&quot; elite. 
                <Link href="/locations/new-redruth" className="text-teal-600 hover:text-teal-700 font-semibold ml-1">
                  Learn more about our New Redruth services →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Frequently Asked Questions About Law Firm Websites
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How much does a law firm website cost in Johannesburg?
                </h3>
                <p className="text-gray-700">
                  Law firm websites typically range from R15,000 to R60,000 depending on number of 
                  practice areas, attorney profiles, and required features like client portals or 
                  booking systems.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Do you create practice area pages for law firms?
                </h3>
                <p className="text-gray-700">
                  Yes. We create dedicated practice area pages optimized for SEO, showcasing your 
                  expertise in areas like family law, corporate law, criminal defense, and estate planning.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Can you integrate client portals or case management systems?
                </h3>
                <p className="text-gray-700">
                  Yes. We integrate with Clio, PracticePanther, MyCase, and other case management systems. 
                  We can also build custom client portals for secure document sharing and communication.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Will my law firm website be optimized for local search?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We optimize for searches like &quot;divorce lawyer Sandton&quot;, 
                  &quot;criminal defense attorney Johannesburg&quot;, and &quot;estate planning attorney Bryanston&quot;. 
                  Local SEO is critical for law firm success.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How long does it take to build a law firm website?
                </h3>
                <p className="text-gray-700">
                  A typical law firm website takes 6-10 weeks depending on complexity, number of practice 
                  areas, and attorney profiles. We work efficiently while ensuring every detail reflects 
                  your firm&apos;s professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
            Ready to Establish Your Firm&apos;s Online Presence?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Join the Johannesburg law firms that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you generate qualified leads.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Law Firm Website Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default LawFirmsPage;

