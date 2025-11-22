import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { ScrollText, Flag, Building2 } from 'lucide-react';

// 1. METADATA: Targeting "History" to capture local intent
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "History of Business in Alberton (1904-2025) | Endpoint Media",
    description: "A digital archive of Alberton's commercial evolution. From General Alberts' farm to the industrial powerhouse of Alrode. Exploring our town's legacy.",
    path: "/alberton-business-heritage",
    keywords: [
      "history of alberton",
      "general hendrik abraham alberts",
      "alrode industrial history",
      "reading country club history",
      "oldest businesses in alberton",
      "alberton town hall 1938",
      "voortrekker streets alberton",
    ],
    openGraph: {
      type: "article",
    },
  });
}

export default function HeritagePage() {
  // 2. SCHEMA: "Article" linked to your Organization
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}/alberton-business-heritage#article`,
    "headline": "The commercial history of Alberton: A Digital Archive",
    "author": {
      "@type": "Person",
      "name": "Frank Smit",
      "url": `${BASE_URL}/about/author/frank-smit`
    },
    "publisher": { "@id": ORG_ID },
    "datePublished": "2024-01-01T08:00:00.000Z",
    "dateModified": new Date().toISOString(),
    "about": { "@type": "Place", "name": "Alberton" }
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
        "name": "Alberton Business Heritage",
        "item": "https://endpointmedia.co.za/alberton-business-heritage"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(breadcrumbSchema) }}
      />

      {/* HERO: Emotional Connection */}
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden pt-32 md:pt-40">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-amber-900/20 to-slate-900" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-mono mb-6">
            <ScrollText className="w-4 h-4" />
            <span>ESTABLISHED 1904</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6">
            From Elandsfontein Farm<br /> to Industrial Powerhouse
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Alberton is not just a suburb; it is a legacy. Endpoint Media pays tribute to the pioneers, the 
            industries, and the <span className="text-amber-500 font-semibold">120 years of commerce</span> that built our town.
          </p>
        </div>
      </section>

      {/* TIMELINE: The "Ego Bait" Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="border-l-4 border-amber-200 ml-4 md:ml-8 space-y-16">
            
            {/* 1904: The Origin */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-amber-500 rounded-full border-4 border-white shadow-lg" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2 font-heading">1904: The General&apos;s Vision</h2>
              <p className="text-gray-600 mb-4">
                General Hendrik Abraham Alberts purchases a portion of the farm <em>Elandsfontein</em>. 
                He didn&apos;t just buy land; he bought a future for his community. This agrarian root is why Alberton businesses still value 
                <span className="font-semibold text-teal-700"> honor and handshake deals</span> today.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-500 flex gap-2 items-start">
                <Flag className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p>Fact: The original farmhouse built by Jan Meyer in 1890 still stands near the N12 highway.</p>
              </div>
            </div>

            {/* 1938: The Civic Pride */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-slate-700 rounded-full border-4 border-white shadow-lg" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2 font-heading">1938: The Town Hall & Identity</h2>
              <p className="text-gray-600 mb-4">
                Construction begins on the Town Hall, coinciding with the Great Trek Centenary. 
                Street names in Alberton North (Piet Retief, Gerrit Maritz) are dedicated, cementing a distinct cultural identity.
              </p>
              <p className="text-gray-600">
                <strong>Legacy Businesses:</strong> The ABC Store (1943) and Blou Meul (1954) emerged from this era. 
                They understood that <span className="italic">consistency builds brands</span>.
              </p>
            </div>

            {/* 1943: The Industrial Pivot (INTERNAL LINK OPPORTUNITY) */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2 font-heading">1943: The Birth of Alrode</h2>
              <p className="text-gray-600 mb-4">
                Established during WWII to drive industrial independence, Alrode became the economic engine of the South. 
                Heavy rail sidings and massive power infrastructure attracted giants like CJ Fuchs (Pty) Ltd.
              </p>
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Modern Alrode
                </h3>
                <p className="text-orange-800 text-sm mb-4">
                  Today, Alrode demands digital infrastructure as robust as its physical infrastructure.
                </p>
                <Link href="/industries/manufacturing-logistics">
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto">
                    View Digital Solutions for Alrode Manufacturers
                  </Button>
                </Link>
              </div>
            </div>

             {/* 1961: The Institutions */}
             <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2 font-heading">1961: Marais Viljoen & Community</h2>
              <p className="text-gray-600 mb-4">
                Hoërskool Marais Viljoen is established, becoming an academic and sporting powerhouse. 
                Along with the <strong>Reading Country Club (est. 1923)</strong>, these institutions prove that Alberton 
                competes at a national level.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA: The "Digital Archivist" Pitch */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Your Business is Part of this History.
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Endpoint Media helps established Alberton businesses modernize without losing their heritage. 
            Let&apos;s ensure your digital presence honors your legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-bold">
              <Link href="/contact">Modernize My Legacy Brand</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-gray-300 hover:bg-slate-800">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

