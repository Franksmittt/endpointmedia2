// src/app/industries/medical/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL } from "@/lib/seo";
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design for Medical Practices Johannesburg | Healthcare Website Design",
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

      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-heading">
            Web Design for Medical Practices: Patient Care Online
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8">
            HIPAA-compliant, patient-focused websites for Johannesburg medical practices, clinics, and 
            healthcare providers. Online booking, secure patient portals, and local SEO that helps patients find you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Get Your Free Medical Practice Website Audit
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Medical Practice Website Features
            </h2>
            <div className="space-y-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">Online Appointment Booking</h3>
                <p className="text-zinc-400 mb-4">
                  Let patients book appointments 24/7 with integrated booking systems that sync with your practice management software.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">Secure Patient Portals</h3>
                <p className="text-zinc-400 mb-4">
                  HIPAA-compliant patient portals for secure communication, medical records access, and prescription refills.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">Provider Profiles</h3>
                <p className="text-zinc-400 mb-4">
                  Showcase your medical team with professional profiles, specialties, and credentials to build trust with patients.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">Local Healthcare SEO</h3>
                <p className="text-zinc-400 mb-4">
                  Optimize for searches like &quot;doctor near me&quot;, &quot;GP Sandton&quot;, or &quot;specialist Johannesburg&quot; 
                  to help patients find your practice when they need you most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Frequently Asked Questions About Medical Practice Websites
            </h2>
            <div className="space-y-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  How much does a medical practice website cost in Johannesburg?
                </h3>
                <p className="text-zinc-400">
                  Medical practice websites typically range from R18,000 to R60,000 depending on 
                  number of providers, booking system requirements, and patient portal features.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Are medical websites HIPAA compliant?
                </h3>
                <p className="text-zinc-400">
                  Yes. We build websites with HIPAA-compliant patient portals, encrypted data 
                  transmission, secure forms, and compliance with healthcare data protection regulations.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Can you integrate with practice management software?
                </h3>
                <p className="text-zinc-400">
                  Yes. We integrate with major practice management systems for appointment booking, 
                  patient records, and billing. We can also build custom integrations when needed.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  How does online appointment booking work?
                </h3>
                <p className="text-zinc-400">
                  Patients can book appointments 24/7 through your website. The system syncs with 
                  your practice management software, sends confirmation emails, and can send SMS 
                  reminders. You control availability and appointment types.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Will my medical practice website help patients find me?
                </h3>
                <p className="text-zinc-400">
                  Absolutely. We optimize for searches like &quot;doctor near me&quot;, &quot;GP Sandton&quot;, 
                  &quot;specialist Johannesburg&quot;, and &quot;medical clinic near me&quot;. Local SEO is 
                  critical for medical practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Enhance Your Medical Practice&apos;s Online Presence?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Medical Practice Website Audit
          </Link>
        </div>
      </section>
      <HubSpokeLinks variant="industry" slug="medical" />
    </>
  );
};

export default MedicalPage;

