import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';
import { Button } from '@/components/ui/button';
import { Scale, Calculator, Building, Users, FileCheck, CheckCircle2 } from 'lucide-react';

// 1. METADATA: Targeting "Trust" Keywords for Law & Finance
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "New Redruth Professional Web Design | Legal & Financial Marketing",
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
        "item": BASE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": `${BASE_URL}/locations`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "New Redruth",
        "item": `${BASE_URL}/locations/new-redruth`
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
      <section className="relative overflow-hidden bg-black text-zinc-300 min-h-[85vh] flex items-center pt-24 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10 py-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-zinc-700 bg-zinc-900 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4 md:mb-6">
              <Building className="w-4 h-4" />
              <span>The New CBD of Alberton</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6 leading-tight tracking-[-2px] text-white">
              Don&apos;t Let a Cheap Website<br />
              <span className="text-teal-400/90">Kill Your Referrals.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-500 mb-6 md:mb-8 leading-relaxed max-w-2xl">
              New Redruth is the professional heart of the South. Your firm competes with Sandton. 
              Does your digital presence reflect your <strong>hourly rate</strong>, or does it look like a DIY project?
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-lg shadow-lg">
                <Link href="/contact?type=professional">Audit My Firm&apos;s Authority</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border border-zinc-700 text-zinc-100 hover:bg-zinc-900 px-6 md:px-8 py-5 md:py-6 text-sm md:text-lg">
                <Link href="/industries/law-firms">View Legal Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* THE "TRUST ENGINE" FEATURES */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Engineered for the &quot;Van Rensburg Street&quot; Elite
            </h2>
            <p className="text-lg text-zinc-500">
              We understand the specific needs of Alberton&apos;s attorneys and financial planners. 
              We build systems that build trust before you enter the room.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: The Team Grid */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 hover:border-teal-400/70 transition-colors group">
              <div className="w-12 h-12 rounded-sm border border-zinc-800 bg-zinc-950 flex items-center justify-center text-teal-400/90 mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">The &quot;Partner Profile&quot; System</h3>
              <p className="text-zinc-500 leading-relaxed">
                Clients hire people, not logos. We build high-end bio pages that highlight your 
                <strong> qualifications, admitted status, and case history</strong>.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400/90 mt-0.5 flex-shrink-0" />
                  <span>Professional bio pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400/90 mt-0.5 flex-shrink-0" />
                  <span>Qualifications display</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400/90 mt-0.5 flex-shrink-0" />
                  <span>Case history showcase</span>
                </li>
              </ul>
            </div>

            {/* Feature 2: Service Silos */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 hover:border-teal-400/70 transition-colors group">
              <div className="w-12 h-12 rounded-sm border border-zinc-800 bg-zinc-950 flex items-center justify-center text-teal-400/90 mb-6 group-hover:scale-110 transition-transform">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">Practice Area Silos</h3>
              <p className="text-zinc-500 leading-relaxed">
                Stop listing &quot;Services.&quot; Start owning <strong>&quot;Divorce Law Alberton&quot;</strong> or 
                <strong> &quot;Tax Consulting New Redruth.&quot;</strong> We structure your content to dominate niche searches.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400/90 mt-0.5 flex-shrink-0" />
                  <span>Niche practice area pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400/90 mt-0.5 flex-shrink-0" />
                  <span>Local SEO optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400/90 mt-0.5 flex-shrink-0" />
                  <span>Referral capture systems</span>
                </li>
              </ul>
            </div>

            {/* Feature 3: Compliance */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 hover:border-teal-400/70 transition-colors group">
              <div className="w-12 h-12 rounded-sm border border-zinc-800 bg-zinc-950 flex items-center justify-center text-teal-400/90 mb-6 group-hover:scale-110 transition-transform">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">Secure Client Portals</h3>
              <p className="text-zinc-500 leading-relaxed">
                For Accountants &amp; Auditors: We integrate secure portals for document exchange (SharePoint/OneDrive/Xero), 
                keeping your client data safe and compliant.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400/90 mt-0.5 flex-shrink-0" />
                  <span>Document exchange systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400/90 mt-0.5 flex-shrink-0" />
                  <span>Compliance-ready architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400/90 mt-0.5 flex-shrink-0" />
                  <span>Xero/SharePoint integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE LOCAL AUTHORITY MAP (Ego Bait for the Area) */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                The New Redruth Village Advantage
              </h2>
              <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
                As the original CBD decays, New Redruth has risen as the prestigious address for 
                Alberton&apos;s professional class. Your digital presence must align with this physical shift.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-400/90 rounded-full mt-2 flex-shrink-0" />
                  <span>Optimized for &quot;Near Me&quot; searches in the <strong>New Redruth Village</strong> node.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-400/90 rounded-full mt-2 flex-shrink-0" />
                  <span>Targeting the <strong>Union Hospital</strong> medical referral network.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-400/90 rounded-full mt-2 flex-shrink-0" />
                  <span>Positioning against generic agencies who don&apos;t know <strong>Van Rensburg Street</strong> from Voortrekker.</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold px-8 py-6">
                <Link href="/contact">Dominate My Local Niche</Link>
              </Button>
            </div>
            {/* Abstract Map Graphic or Placeholder */}
            <div className="relative h-[400px] rounded-sm border border-zinc-800 bg-zinc-950/70 overflow-hidden flex items-center justify-center">
               <div className="text-zinc-500 text-center p-8">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="uppercase tracking-widest text-sm font-bold">High-Trust Zone</p>
                  <p className="text-xs mt-2 text-zinc-500">New Redruth Professional Hub</p>
               </div>
               {/* Decorative circles representing the "Hub" */}
               <div className="absolute inset-0 border-2 border-teal-400/60/20 rounded-full scale-150 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Visible) */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-6 border-l border-teal-400/60">
              <h3 className="text-xl font-bold mb-3 font-heading text-white">
                Do you build websites for New Redruth attorneys and accountants?
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Yes. Endpoint Media specializes in high-authority websites for New Redruth&apos;s legal and financial sector. 
                We build digital presences that convert referrals into retained clients and match your professional reputation.
              </p>
            </div>
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-6 border-l border-teal-400/60">
              <h3 className="text-xl font-bold mb-3 font-heading text-white">
                Can you integrate client portals for accounting firms?
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Yes. We integrate secure client portals with SharePoint, OneDrive, and Xero for document exchange, 
                keeping your client data safe and compliant with South African financial regulations.
              </p>
            </div>
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-6 border-l border-teal-400/60">
              <h3 className="text-xl font-bold mb-3 font-heading text-white">
                Do you optimize for local New Redruth searches?
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Absolutely. We optimize for searches like &quot;divorce lawyer New Redruth&quot;, &quot;tax consultant Alberton&quot;, 
                and &quot;attorney near Union Hospital&quot;. We understand the local geography and referral networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: The "Referral Defense" Pitch */}
      <section className="py-20 md:py-28 bg-zinc-950 text-white text-center border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Your Reputation is Premium. Your Website is a Liability.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We fix the disconnect. Build a digital presence that matches your hourly rate and converts 
            referrals into retained clients. Don&apos;t let a cheap website kill your referrals.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold px-10 py-6 text-lg shadow-xl">
            <Link href="/contact?type=professional">Build My Referral Defense System</Link>
          </Button>
        </div>
      </section>

      <HubSpokeLinks variant="location" slug="new-redruth" />
    </>
  );
}

