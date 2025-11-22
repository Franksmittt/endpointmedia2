import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Gem, Fingerprint, EyeOff, CheckCircle2 } from 'lucide-react';

// 1. METADATA: Targeting Wealth & Reputation Keywords
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Meyersdal Executive Digital Services | Private Client Web Design | Endpoint Media",
    description: "Exclusive digital architecture for Meyersdal's business elite. Reputation management, privacy-first hosting, and bespoke development. By Invitation.",
    path: "/locations/meyersdal",
    keywords: [
      "reputation management meyersdal",
      "luxury web design johannesburg",
      "meyersdal eco estate business services",
      "private client seo",
      "executive personal branding",
      "meyersdal web design",
      "high-end website design alberton",
      "executive digital services",
      "private client web development",
      "discreet digital services",
    ],
    openGraph: {
      type: "website",
    },
  });
}

export default function MeyersdalPage() {
  // 2. SCHEMA: "ProfessionalService" with a focus on Consulting/Security
  const vipSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/locations/meyersdal#service`,
    "name": "Endpoint Media Private Client Services",
    "description": "Discreet digital services for high-net-worth individuals and executives in Meyersdal Eco Estate.",
    "areaServed": {
      "@type": "Place",
      "name": "Meyersdal Eco Estate"
    },
    "serviceType": "Reputation Management & Private Digital Infrastructure",
    "provider": { "@id": ORG_ID },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${BASE_URL}/contact`,
      "availableLanguage": "English"
    }
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
        "name": "Meyersdal",
        "item": "https://endpointmedia.co.za/locations/meyersdal"
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
        "name": "Do you offer private client services for Meyersdal Eco Estate residents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Endpoint Media provides exclusive, discreet digital services for high-net-worth individuals and executives in Meyersdal. We offer reputation management, privacy-first hosting, and bespoke development with NDA protection."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your Private Client service package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Private Client division includes digital reputation defense (SEO to push down negative results), privacy-first architecture with dedicated encrypted hosting, and concierge support with direct access to the founder—no tickets, no waiting."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure privacy for Meyersdal clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use dedicated, encrypted infrastructure (no shared hosting), implement strict access controls, include NDAs as standard, and limit our Private Client roster to 5 active partners in the Meyersdal area to ensure absolute discretion."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(vipSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }}
      />

      {/* HERO: Dark Mode, "Velvet Rope" Aesthetic - Above the Fold */}
      <section className="relative bg-slate-950 text-white h-screen flex items-center overflow-hidden pt-20 md:pt-24">
        {/* Subtle Gold Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10 py-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs tracking-[0.3em] uppercase mb-6 md:mb-8">
              <Gem className="w-3 h-3" />
              <span>Private Client Division</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-heading mb-4 md:mb-6 leading-tight">
              The <span className="font-serif italic text-amber-500">Sandton</span> of the South<br />
              <span className="text-white">Deserves a Higher Standard.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-6 md:mb-10 max-w-2xl font-light leading-relaxed">
              Meyersdal is an enclave of excellence. Your digital presence should be no exception. 
              We provide discreet, high-security web architecture for the executives and estate owners of Alberton.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-start items-start">
              <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-amber-50 font-semibold px-6 md:px-8 text-sm md:text-base">
                <Link href="/contact?type=private">Request Consultation</Link>
              </Button>
              <span className="flex items-center gap-2 text-slate-500 text-sm mt-2 sm:mt-0">
                <Lock className="w-4 h-4" />
                NDA Included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* THE OFFER: Why "Regular" Web Design Isn't Enough */}
      <section className="py-24 bg-slate-950 text-slate-200 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-4 font-light">
              Why Regular Web Design Doesn&apos;t Cut It
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              For Meyersdal&apos;s executive class, your digital presence is your reputation. 
              We don&apos;t build websites. We build digital fortresses.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1: Reputation */}
            <div className="space-y-4 group">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-amber-500/50 transition-colors">
                <Fingerprint className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-heading text-white font-light">Digital Reputation Defense</h3>
              <p className="text-slate-400 leading-relaxed">
                You have built a reputation in the boardroom. We protect it on Google. 
                Our SEO strategies push down negative search results and elevate your controlled assets (LinkedIn, Personal Site).
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Negative result suppression</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Executive personal branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Controlled asset optimization</span>
                </li>
              </ul>
            </div>

            {/* Feature 2: Privacy */}
            <div className="space-y-4 group">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-amber-500/50 transition-colors">
                <EyeOff className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-heading text-white font-light">Privacy-First Architecture</h3>
              <p className="text-slate-400 leading-relaxed">
                For clients in the <strong className="text-white">Meyersdal Eco Estate</strong>, privacy is paramount. 
                We build secure, hardened sites that do not leak data. No cheap shared hosting. 
                Only dedicated, encrypted infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Dedicated encrypted hosting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Zero data leakage protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Hardened security architecture</span>
                </li>
              </ul>
            </div>

            {/* Feature 3: Concierge */}
            <div className="space-y-4 group">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-amber-500/50 transition-colors">
                <Shield className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-heading text-white font-light">Concierge Support</h3>
              <p className="text-slate-400 leading-relaxed">
                No tickets. No waiting. You get a direct line to the Founder. 
                We understand that for a CEO, time is the most expensive asset.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Direct founder access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>No support queues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Priority response times</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE PSYCHOLOGICAL PROOF: Meyersdal Knowledge */}
      <section className="py-24 bg-slate-900 text-slate-200 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-950/50 rounded-2xl p-8 md:p-12 border border-slate-800">
              <h3 className="text-2xl md:text-3xl font-heading text-white mb-6 font-light">
                We Know the Landscape
              </h3>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                <strong className="text-white">Meyersdal Eco Estate</strong> isn&apos;t just a suburb—it&apos;s a statement. 
                Situated on the far side of Meyers Kop hill, physically separated from the rest of Alberton, 
                it represents the pinnacle of exclusivity in Johannesburg South.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                The residents of Meyersdal don&apos;t need another service provider. They need a <em className="text-amber-500">Consigliere</em>—someone 
                who understands that discretion, security, and status aren&apos;t features. They&apos;re requirements.
              </p>
              <div className="mt-8 pt-8 border-t border-slate-800">
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">The Meyersdal Standard</p>
                <p className="text-slate-400">
                  Freehold mansions. Estate-level security. The highest property values in the region. 
                  Your digital presence should match the standard you&apos;ve set in every other aspect of your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Visible) */}
      <section className="py-24 bg-slate-950 text-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-12 text-center font-light">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-amber-500">
              <h3 className="text-xl font-heading mb-3 text-white font-light">
                Do you offer private client services for Meyersdal Eco Estate residents?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Yes. Endpoint Media provides exclusive, discreet digital services for high-net-worth individuals and executives in Meyersdal. 
                We offer reputation management, privacy-first hosting, and bespoke development with NDA protection.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-amber-500">
              <h3 className="text-xl font-heading mb-3 text-white font-light">
                What is included in your Private Client service package?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Our Private Client division includes digital reputation defense (SEO to push down negative results), 
                privacy-first architecture with dedicated encrypted hosting, and concierge support with direct access to the founder—no tickets, no waiting.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-amber-500">
              <h3 className="text-xl font-heading mb-3 text-white font-light">
                How do you ensure privacy for Meyersdal clients?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We use dedicated, encrypted infrastructure (no shared hosting), implement strict access controls, include NDAs as standard, 
                and limit our Private Client roster to 5 active partners in the Meyersdal area to ensure absolute discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE "VELVET ROPE" CTA */}
      <section className="py-32 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-slate-900"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading text-white mb-6 font-light">
            Not for Everyone.
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
            We limit our Private Client roster to 5 active partners in the Meyersdal area to 
            ensure absolute focus and conflict-free service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white text-base md:text-lg px-8 md:px-10 py-6">
              <Link href="/contact?type=private">Inquire About Availability</Link>
            </Button>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-2 sm:mt-0 sm:ml-4">
              Application Only
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

