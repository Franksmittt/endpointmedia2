import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { ScrollText, Flag, Building2 } from 'lucide-react';

// 1. METADATA: Targeting "History" to capture local intent
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "History of Business in Alberton (1904-2025)",
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
        "item": BASE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Alberton Business Heritage",
        "item": `${BASE_URL}/alberton-business-heritage`
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
      <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden pt-32 md:pt-40">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-900/10 to-black" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-zinc-700 bg-zinc-900 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6">
            <ScrollText className="w-4 h-4" />
            <span>ESTABLISHED 1904</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            From Elandsfontein Farm<br /> to Industrial Powerhouse
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Alberton is not just a suburb; it is a legacy. Endpoint Media pays tribute to the pioneers, the 
            industries, and the <span className="text-teal-400/90 font-semibold">120 years of commerce</span> that built our town.
          </p>
        </div>
      </section>

      {/* TIMELINE: The "Ego Bait" Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="border-l-4 border-amber-200 ml-4 md:ml-8 space-y-16">
            
            {/* 1904: The Origin */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-teal-400/90 rounded-full border-4 border-zinc-950 shadow-lg" />
              <h2 className="text-3xl font-bold text-white mb-2 font-heading">1904: The General&apos;s Vision</h2>
              <p className="text-zinc-500 mb-4">
                General Hendrik Abraham Alberts purchases a portion of the farm <em>Elandsfontein</em>. 
                He didn&apos;t just buy land; he bought a future for his community. This agrarian root is why Alberton businesses still value 
                <span className="font-semibold text-teal-400/90"> honor and handshake deals</span> today.
              </p>
              <div className="bg-zinc-950/70 p-4 rounded-lg border border-zinc-800 text-sm text-zinc-500 flex gap-2 items-start">
                <Flag className="w-5 h-5 text-teal-400/90 flex-shrink-0" />
                <p>Fact: The original farmhouse built by Jan Meyer in 1890 still stands near the N12 highway.</p>
              </div>
            </div>

            {/* 1938: The Civic Pride */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-zinc-600 rounded-full border-4 border-zinc-950 shadow-lg" />
              <h2 className="text-3xl font-bold text-white mb-2 font-heading">1938: The Town Hall & Identity</h2>
              <p className="text-zinc-500 mb-4">
                Construction begins on the Town Hall, coinciding with the Great Trek Centenary. 
                Street names in Alberton North (Piet Retief, Gerrit Maritz) are dedicated, cementing a distinct cultural identity.
              </p>
              <p className="text-zinc-500">
                <strong>Legacy Businesses:</strong> The ABC Store (1943) and Blou Meul (1954) emerged from this era. 
                They understood that <span className="italic">consistency builds brands</span>.
              </p>
            </div>

            {/* 1943: The Industrial Pivot (INTERNAL LINK OPPORTUNITY) */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-teal-400/90 rounded-full border-4 border-zinc-950 shadow-lg" />
              <h2 className="text-3xl font-bold text-white mb-2 font-heading">1943: The Birth of Alrode</h2>
              <p className="text-zinc-500 mb-4">
                Established during WWII to drive industrial independence, Alrode became the economic engine of the South. 
                Heavy rail sidings and massive power infrastructure attracted giants like CJ Fuchs (Pty) Ltd.
              </p>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l border-teal-400/60">
                <h3 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Modern Alrode
                </h3>
                <p className="text-orange-800 text-sm mb-4">
                  Today, Alrode demands digital infrastructure as robust as its physical infrastructure.
                </p>
                <Link href="/industries/manufacturing-logistics">
                  <Button size="sm" className="bg-white text-black hover:bg-zinc-200 w-full sm:w-auto">
                    View Digital Solutions for Alrode Manufacturers
                  </Button>
                </Link>
              </div>
            </div>

             {/* 1961: The Institutions */}
             <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg" />
              <h2 className="text-3xl font-bold text-white mb-2 font-heading">1961: Marais Viljoen & Community</h2>
              <p className="text-zinc-500 mb-4">
                Hoërskool Marais Viljoen is established, becoming an academic and sporting powerhouse. 
                Along with the <strong>Reading Country Club (est. 1923)</strong>, these institutions prove that Alberton 
                competes at a national level.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA: The "Digital Archivist" Pitch */}
      <section className="py-20 md:py-28 bg-black text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Your Business is Part of this History.
          </h2>
          <p className="text-lg text-zinc-500 mb-10">
            Endpoint Media helps established Alberton businesses modernize without losing their heritage. 
            Let&apos;s ensure your digital presence honors your legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold">
              <Link href="/contact">Modernize My Legacy Brand</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zinc-700 text-zinc-400 hover:bg-zinc-900">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

