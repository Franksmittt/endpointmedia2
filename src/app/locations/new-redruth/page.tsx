import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { Scale, Calculator, Building, Users, FileCheck, CheckCircle2 } from 'lucide-react';

// 1. METADATA: Targeting "Trust" Keywords for Law & Finance
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "New Redruth Professional Web Design | Legal & Financial Marketing | Endpoint Media",
    description: "We build high-authority websites for New Redruth's attorneys and accountants. Convert referrals into retained clients with a digital presence that matches your reputation.",
    path: "/locations/new-redruth",
    keywords: [
      "attorney web design alberton",
      "accountant website new redruth",
      "law firm marketing alberton",
      "professional services seo",
      "new redruth business hub",
      "van renburg street attorneys",
      "legal website design new redruth",
      "accounting firm website alberton",
    ],
    openGraph: {
      type: "website",
    },
  });
}

export default function NewRedruthPage() {
  // 2. SCHEMA: ProfessionalService for New Redruth
  const professionalSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/locations/new-redruth#service`,
    "name": "New Redruth Digital Authority Services",
    "description": "Specialized web development for the legal and financial sector in New Redruth.",
    "areaServed": {
      "@type": "Place",
      "name": "New Redruth"
    },
    "provider": { "@id": ORG_ID },
    "serviceType": "Legal & Financial Professional Web Development",
    "knowsAbout": ["Legal SEO", "Practice Management Integration", "Client Portals", "Professional Services Marketing"]
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
        "name": "Locations",
        "item": "https://endpointmedia.co.za/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "New Redruth",
        "item": "https://endpointmedia.co.za/locations/new-redruth"
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
        "name": "Do you build websites for New Redruth attorneys and accountants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Endpoint Media specializes in high-authority websites for New Redruth's legal and financial sector. We build digital presences that convert referrals into retained clients and match your professional reputation."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate client portals for accounting firms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We integrate secure client portals with SharePoint, OneDrive, and Xero for document exchange, keeping your client data safe and compliant with South African financial regulations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you optimize for local New Redruth searches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We optimize for searches like 'divorce lawyer New Redruth', 'tax consultant Alberton', and 'attorney near Union Hospital'. We understand the local geography and referral networks."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(professionalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }}
      />

      {/* HERO: Clean, Corporate, Blue/Slate (Trust Colors) - Above the Fold */}
      <section className="relative bg-slate-50 text-slate-900 h-screen flex items-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-200/50 skew-x-12 hidden md:block" />
        
        <div className="container mx-auto px-6 relative z-10 py-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
              <Building className="w-4 h-4" />
              <span>The New CBD of Alberton</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6 leading-tight text-slate-900">
              Don&apos;t Let a Cheap Website<br />
              <span className="text-blue-700">Kill Your Referrals.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed max-w-2xl">
              New Redruth is the professional heart of the South. Your firm competes with Sandton. 
              Does your digital presence reflect your <strong>hourly rate</strong>, or does it look like a DIY project?
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-lg shadow-lg">
                <Link href="/contact?type=professional">Audit My Firm&apos;s Authority</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-lg">
                <Link href="/industries/law-firms">View Legal Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* THE "TRUST ENGINE" FEATURES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
              Engineered for the &quot;Van Rensburg Street&quot; Elite
            </h2>
            <p className="text-lg text-slate-600">
              We understand the specific needs of Alberton&apos;s attorneys and financial planners. 
              We build systems that build trust before you enter the room.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: The Team Grid */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-700 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">The &quot;Partner Profile&quot; System</h3>
              <p className="text-slate-600 leading-relaxed">
                Clients hire people, not logos. We build high-end bio pages that highlight your 
                <strong> qualifications, admitted status, and case history</strong>.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Professional bio pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Qualifications display</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Case history showcase</span>
                </li>
              </ul>
            </div>

            {/* Feature 2: Service Silos */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-700 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">Practice Area Silos</h3>
              <p className="text-slate-600 leading-relaxed">
                Stop listing &quot;Services.&quot; Start owning <strong>&quot;Divorce Law Alberton&quot;</strong> or 
                <strong> &quot;Tax Consulting New Redruth.&quot;</strong> We structure your content to dominate niche searches.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Niche practice area pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Local SEO optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Referral capture systems</span>
                </li>
              </ul>
            </div>

            {/* Feature 3: Compliance */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-700 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">Secure Client Portals</h3>
              <p className="text-slate-600 leading-relaxed">
                For Accountants &amp; Auditors: We integrate secure portals for document exchange (SharePoint/OneDrive/Xero), 
                keeping your client data safe and compliant.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Document exchange systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Compliance-ready architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Xero/SharePoint integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE LOCAL AUTHORITY MAP (Ego Bait for the Area) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                The New Redruth Village Advantage
              </h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                As the original CBD decays, New Redruth has risen as the prestigious address for 
                Alberton&apos;s professional class. Your digital presence must align with this physical shift.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Optimized for &quot;Near Me&quot; searches in the <strong>New Redruth Village</strong> node.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Targeting the <strong>Union Hospital</strong> medical referral network.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Positioning against generic agencies who don&apos;t know <strong>Van Rensburg Street</strong> from Voortrekker.</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6">
                <Link href="/contact">Dominate My Local Niche</Link>
              </Button>
            </div>
            {/* Abstract Map Graphic or Placeholder */}
            <div className="relative h-[400px] bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex items-center justify-center">
               <div className="text-slate-600 text-center p-8">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="uppercase tracking-widest text-sm font-bold">High-Trust Zone</p>
                  <p className="text-xs mt-2 text-slate-500">New Redruth Professional Hub</p>
               </div>
               {/* Decorative circles representing the "Hub" */}
               <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full scale-150 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Visible) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 font-heading text-slate-900">
                Do you build websites for New Redruth attorneys and accountants?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Yes. Endpoint Media specializes in high-authority websites for New Redruth&apos;s legal and financial sector. 
                We build digital presences that convert referrals into retained clients and match your professional reputation.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 font-heading text-slate-900">
                Can you integrate client portals for accounting firms?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Yes. We integrate secure client portals with SharePoint, OneDrive, and Xero for document exchange, 
                keeping your client data safe and compliant with South African financial regulations.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 font-heading text-slate-900">
                Do you optimize for local New Redruth searches?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Absolutely. We optimize for searches like &quot;divorce lawyer New Redruth&quot;, &quot;tax consultant Alberton&quot;, 
                and &quot;attorney near Union Hospital&quot;. We understand the local geography and referral networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: The "Referral Defense" Pitch */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Your Reputation is Premium. Your Website is a Liability.
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We fix the disconnect. Build a digital presence that matches your hourly rate and converts 
            referrals into retained clients. Don&apos;t let a cheap website kill your referrals.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-6 text-lg shadow-xl">
            <Link href="/contact?type=professional">Build My Referral Defense System</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

