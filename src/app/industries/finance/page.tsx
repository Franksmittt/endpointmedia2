// src/app/industries/finance/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design for Financial Services Johannesburg | Finance Website Design | Endpoint Media",
    description: "Professional web design for Johannesburg financial advisors, accountants, and finance firms. Trust, security, and compliance-focused websites that generate qualified leads.",
    path: "/industries/finance",
    keywords: [
      "web design for financial services johannesburg",
      "financial advisor website design",
      "accountant website design johannesburg",
      "finance firm website",
      "financial services SEO",
    ],
  });
}

const FinancePage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/industries/finance#service`,
    name: "Web Design for Financial Services",
    description: "Professional web design services specifically for financial services firms",
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    serviceType: "Financial Services Website Design",
    areaServed: {
      "@type": "City",
      name: "Johannesburg",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/industries/finance#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a financial services website cost in Johannesburg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Financial services websites typically range from R20,000 to R80,000 depending on complexity, secure portal requirements, and integration with CRM/financial systems.",
        },
      },
      {
        "@type": "Question",
        name: "Are financial services websites secure and compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build websites with SSL encryption, secure client portals, and compliance with financial regulations. Security is non-negotiable for financial services.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate with financial planning software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We integrate with financial planning tools, CRM systems, and portfolio management software. We can also build custom integrations for proprietary systems.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure client data privacy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement end-to-end encryption, secure client portals, data encryption at rest, and comply with financial data protection regulations. Client privacy is our top priority.",
        },
      },
      {
        "@type": "Question",
        name: "Will my financial services website build trust with potential clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We showcase credentials, certifications, regulatory compliance, and testimonials. Trust signals are essential for financial services, and we optimize for them throughout your website.",
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
            Web Design for Financial Services: Trust & Compliance Online
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Trust, security, and compliance are non-negotiable for financial services. We build 
            professional websites that establish credibility, showcase expertise, and generate qualified 
            leads for Johannesburg financial advisors, accountants, and finance firms.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Finance Website Audit
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Financial Services Website Features
            </h2>
            <div className="space-y-6">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">Secure Client Portals</h3>
                <p className="text-gray-700 mb-4">
                  Encrypted client portals for secure document sharing, financial statements, and communication.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">Compliance & Trust Signals</h3>
                <p className="text-gray-700 mb-4">
                  Display credentials, certifications, and regulatory compliance information to build trust with potential clients.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">Service Area Pages</h3>
                <p className="text-gray-700 mb-4">
                  Dedicated pages for investment planning, tax preparation, retirement planning, and other financial services.
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
              Frequently Asked Questions About Financial Services Websites
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How much does a financial services website cost in Johannesburg?
                </h3>
                <p className="text-gray-700">
                  Financial services websites typically range from R20,000 to R80,000 depending on 
                  complexity, secure portal requirements, and integration with CRM/financial systems.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Are financial services websites secure and compliant?
                </h3>
                <p className="text-gray-700">
                  Yes. We build websites with SSL encryption, secure client portals, and compliance 
                  with financial regulations. Security is non-negotiable for financial services.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Can you integrate with financial planning software?
                </h3>
                <p className="text-gray-700">
                  Yes. We integrate with financial planning tools, CRM systems, and portfolio 
                  management software. We can also build custom integrations for proprietary systems.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How do you ensure client data privacy?
                </h3>
                <p className="text-gray-700">
                  We implement end-to-end encryption, secure client portals, data encryption at rest, 
                  and comply with financial data protection regulations. Client privacy is our top priority.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Will my financial services website build trust with potential clients?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We showcase credentials, certifications, regulatory compliance, and 
                  testimonials. Trust signals are essential for financial services, and we optimize 
                  for them throughout your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
            Ready to Establish Your Financial Services Online?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Finance Website Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default FinancePage;

