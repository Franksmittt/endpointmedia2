import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { CheckCircle2, FileText, ShieldCheck, Truck } from 'lucide-react';

// 1. METADATA: Aggressive B2B Targeting
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Industrial Web Design Alrode | B2B Procurement Portals | Endpoint Media",
    description: "We build ISO-compliant websites for Alrode manufacturers and logistics firms. Secure document portals, catalogue digitization, and supply chain integration.",
    path: "/industries/manufacturing-logistics",
    keywords: [
      "industrial web design alrode",
      "B2B portal development johannesburg",
      "manufacturing website design",
      "logistics web design R59",
      "SAB supplier website requirements",
      "ISO 9001 compliant websites",
      "catalogue digitization alrode",
      "B2B procurement portals gauteng",
    ],
    openGraph: {
      type: 'article',
    },
  });
}

export default function ManufacturingPage() {
  // 2. SCHEMA: "IndustrialBusiness" is the power move here
  const industrialSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/industries/manufacturing-logistics#service`,
    "name": "Alrode Industrial Web Development",
    "description": "Specialized digital services for heavy industry, logistics, and manufacturing in the Alrode/Alrode South node.",
    "areaServed": [
      { "@type": "Place", "name": "Alrode" },
      { "@type": "Place", "name": "Alrode South" },
      { "@type": "Place", "name": "Wadeville" }
    ],
    "serviceType": "B2B Digital Transformation",
    "provider": { "@id": ORG_ID }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://endpointmedia.co.za"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": "https://endpointmedia.co.za/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Alrode Manufacturing",
        "item": "https://endpointmedia.co.za/industries/manufacturing-logistics"
      }
    ]
  };

  // FAQ Schema for "People Also Ask" boxes
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the website requirements for Alrode suppliers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Suppliers in Alrode often need ISO 9001 compliant portals, secure document storage for BEE certificates, and Tax Clearance availability for procurement audits."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer industrial photography in Alrode?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Endpoint Media provides on-site industrial photography in Alrode and Wadeville to ensure your digital presence reflects your physical scale."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate my website with ERP systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We integrate websites with ERP systems for real-time inventory display, automated catalogue updates, and seamless supply chain visibility."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(industrialSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }}
      />

      {/* SECTION 1: The "Heavy Industry" Hero */}
      <section className="relative bg-gray-900 text-white h-screen flex items-center overflow-hidden border-b-8 border-orange-600 pt-20 md:pt-24">
        {/* Abstract Industrial Background */}
        <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-orange-900/20 to-gray-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent z-10" />
        
        <div className="container mx-auto px-6 relative z-20 py-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500 text-orange-400 text-xs md:text-sm font-mono mb-4 md:mb-6">
              <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
              <span>ISO 9001 / 27001 READY ARCHITECTURE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight mb-4 md:mb-6">
              Your Website Is Not a Brochure.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                It Is A Procurement Tool.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl">
              Alrode&apos;s supply chain runs on data, not aesthetics. We build <strong>high-performance B2B portals</strong> that streamline tenders, host compliance docs, and integrate with your logistics network.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wider text-sm md:text-base">
                <Link href="/contact">Audit My Supply Chain Visibility</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-sm md:text-base">
                <Link href="/case-studies">View B2B Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: The "Tender Vault" (The USP) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">
                Stop Emailing BEE Certificates.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Major clients like SAB and Henkel don&apos;t have time to chase you for paperwork. 
                We build a <strong>Secure Client Portal</strong> directly into your Next.js site.
              </p>
              
              <div className="space-y-4">
                {[
                  "Secure Login for Procurement Officers",
                  "One-Click Download: BEE, Tax Clearance, ISO Certs",
                  "Digital Product Catalogues (No more PDF attachments)",
                  "Real-Time Stock Integration (ERP)"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* VISUAL COMPONENT: The "Vault" UI Mockup */}
            <div className="relative bg-gray-100 rounded-xl border border-gray-200 p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-orange-600 text-white px-4 py-1 text-sm font-bold uppercase tracking-wider rounded shadow-lg">
                Live Demo
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-300 pb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-gray-500" />
                    <div>
                      <p className="font-bold text-gray-900">BEE_Certificate_2025.pdf</p>
                      <p className="text-xs text-gray-500">Updated: 2 Hours Ago</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="text-orange-600 border-orange-200">Download</Button>
                </div>
                <div className="flex items-center justify-between border-b border-gray-300 pb-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-gray-500" />
                    <div>
                      <p className="font-bold text-gray-900">ISO_9001_Compliance.pdf</p>
                      <p className="text-xs text-gray-500">Status: Valid</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="text-orange-600 border-orange-200">Download</Button>
                </div>
                {/* Blur effect to suggest more content */}
                <div className="h-12 w-full bg-gray-200 rounded opacity-50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Local Moat (Alrode Heritage) */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Built for the R59 Corridor
            </h2>
            <p className="text-lg text-gray-600">
              We don&apos;t just build websites; we understand the industrial geography of Alberton. 
              From the heavy manufacturing of Alrode to the logistics hubs of Alrode South.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              icon={<Truck className="w-10 h-10 text-orange-600" />}
              title="Logistics Ready"
              desc="Sites optimized for fleet tracking links and driver portal integration, serving the N3/R59 logistics nexus."
            />
             <Card 
              icon={<ShieldCheck className="w-10 h-10 text-orange-600" />}
              title="Safety & SHEQ"
              desc="Dedicated sections for Safety, Health, Environment, and Quality (SHEQ) policies to reassure multinational partners."
            />
             <Card 
              icon={<FileText className="w-10 h-10 text-orange-600" />}
              title="Legacy & Heritage"
              desc="We tell the story of your factory's history, tapping into the 1943 wartime industrial roots of the area."
              link="/alberton-business-heritage"
              linkText="Explore Heritage"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: The Alrode Guarantee */}
      <section className="py-16 bg-orange-50 border-y border-orange-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-xl p-8 border-l-4 border-orange-600 shadow-lg">
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">
              The Alrode Guarantee
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We don&apos;t just build the site. We stay until your first ISO Audit is passed. If your site fails a procurement compliance check, we fix it for free.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ Section (Visible) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                What are the website requirements for Alrode suppliers?
              </h3>
              <p className="text-gray-700">
                Suppliers in Alrode often need ISO 9001 compliant portals, secure document storage for BEE certificates, and Tax Clearance availability for procurement audits.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                Do you offer industrial photography in Alrode?
              </h3>
              <p className="text-gray-700">
                Yes. Endpoint Media provides on-site industrial photography in Alrode and Wadeville to ensure your digital presence reflects your physical scale.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                Can you integrate my website with ERP systems?
              </h3>
              <p className="text-gray-700">
                Yes. We integrate websites with ERP systems for real-time inventory display, automated catalogue updates, and seamless supply chain visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Final CTA */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-heading mb-6">
            Is Your Website Costing You Tenders?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Get a free &quot;Procurement Readiness Audit&quot; of your current site. We will check your speed, security, and compliance visibility.
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-10 py-6 h-auto">
            <Link href="/contact">Secure My Digital Supply Chain</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

// Simple Card Component for Clean Code
function Card({ 
  icon, 
  title, 
  desc, 
  link, 
  linkText 
}: { 
  icon: React.ReactNode; 
  title: string; 
  desc: string;
  link?: string;
  linkText?: string;
}) {
  const cardContent = (
    <>
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>
      {link && linkText && (
        <span className="text-orange-600 font-semibold hover:underline inline-flex items-center gap-1">
          {linkText} →
        </span>
      )}
    </>
  );

  if (link) {
    return (
      <Link href={link} className="block bg-white p-8 rounded-xl shadow-lg border-b-4 border-gray-200 hover:border-orange-500 transition-all">
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-gray-200 hover:border-orange-500 transition-all">
      {cardContent}
    </div>
  );
}

