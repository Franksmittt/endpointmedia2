// src/app/industries/medical/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design for Medical Practices Johannesburg | Healthcare Website Design | Endpoint Media",
    description: "Professional web design for Johannesburg medical practices, clinics, and healthcare providers. HIPAA-compliant, patient-focused websites with online booking and secure portals.",
    path: "/industries/medical",
    keywords: [
      "web design for medical practices johannesburg",
      "healthcare website design",
      "medical clinic website",
      "doctor website design johannesburg",
      "HIPAA compliant website",
      "medical practice SEO",
    ],
  });
}

const MedicalPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/industries/medical#service`,
    name: "Web Design for Medical Practices",
    description: "Professional web design services specifically for medical practices and healthcare providers",
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    serviceType: "Healthcare Website Design",
    areaServed: {
      "@type": "City",
      name: "Johannesburg",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/industries/medical#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a medical practice website cost in Johannesburg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Medical practice websites typically range from R18,000 to R60,000 depending on number of providers, booking system requirements, and patient portal features.",
        },
      },
      {
        "@type": "Question",
        name: "Are medical websites HIPAA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build websites with HIPAA-compliant patient portals, encrypted data transmission, secure forms, and compliance with healthcare data protection regulations.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate with practice management software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We integrate with major practice management systems for appointment booking, patient records, and billing. We can also build custom integrations when needed.",
        },
      },
      {
        "@type": "Question",
        name: "How does online appointment booking work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Patients can book appointments 24/7 through your website. The system syncs with your practice management software, sends confirmation emails, and can send SMS reminders. You control availability and appointment types.",
        },
      },
      {
        "@type": "Question",
        name: "Will my medical practice website help patients find me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We optimize for searches like 'doctor near me', 'GP Sandton', 'specialist Johannesburg', and 'medical clinic near me'. Local SEO is critical for medical practices.",
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
            Web Design for Medical Practices: Patient Care Online
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            HIPAA-compliant, patient-focused websites for Johannesburg medical practices, clinics, and 
            healthcare providers. Online booking, secure patient portals, and local SEO that helps patients find you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Medical Practice Website Audit
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Medical Practice Website Features
            </h2>
            <div className="space-y-6">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">Online Appointment Booking</h3>
                <p className="text-gray-700 mb-4">
                  Let patients book appointments 24/7 with integrated booking systems that sync with your practice management software.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">Secure Patient Portals</h3>
                <p className="text-gray-700 mb-4">
                  HIPAA-compliant patient portals for secure communication, medical records access, and prescription refills.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">Provider Profiles</h3>
                <p className="text-gray-700 mb-4">
                  Showcase your medical team with professional profiles, specialties, and credentials to build trust with patients.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">Local Healthcare SEO</h3>
                <p className="text-gray-700 mb-4">
                  Optimize for searches like &quot;doctor near me&quot;, &quot;GP Sandton&quot;, or &quot;specialist Johannesburg&quot; 
                  to help patients find your practice when they need you most.
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
              Frequently Asked Questions About Medical Practice Websites
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How much does a medical practice website cost in Johannesburg?
                </h3>
                <p className="text-gray-700">
                  Medical practice websites typically range from R18,000 to R60,000 depending on 
                  number of providers, booking system requirements, and patient portal features.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Are medical websites HIPAA compliant?
                </h3>
                <p className="text-gray-700">
                  Yes. We build websites with HIPAA-compliant patient portals, encrypted data 
                  transmission, secure forms, and compliance with healthcare data protection regulations.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Can you integrate with practice management software?
                </h3>
                <p className="text-gray-700">
                  Yes. We integrate with major practice management systems for appointment booking, 
                  patient records, and billing. We can also build custom integrations when needed.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How does online appointment booking work?
                </h3>
                <p className="text-gray-700">
                  Patients can book appointments 24/7 through your website. The system syncs with 
                  your practice management software, sends confirmation emails, and can send SMS 
                  reminders. You control availability and appointment types.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Will my medical practice website help patients find me?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We optimize for searches like &quot;doctor near me&quot;, &quot;GP Sandton&quot;, 
                  &quot;specialist Johannesburg&quot;, and &quot;medical clinic near me&quot;. Local SEO is 
                  critical for medical practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
            Ready to Enhance Your Medical Practice&apos;s Online Presence?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Medical Practice Website Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default MedicalPage;

