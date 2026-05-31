// src/app/locations/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Web Design Locations Johannesburg | Sandton, Bryanston, Rivonia, Midrand, Roodepoort',
    description:
      'Professional web design and local SEO services across Johannesburg. We serve Sandton, Bryanston, Rivonia, Midrand, Roodepoort, and surrounding areas.',
    path: '/locations',
    keywords: [
      'web design johannesburg locations',
      'web design sandton',
      'web design bryanston',
      'web design rivonia',
      'web design midrand',
      'web design roodepoort',
      'local SEO johannesburg',
    ],
  });
}

const locations = [
  {
    name: 'Sandton',
    slug: 'sandton',
    description: "Africa's richest square mile. Financial hub and corporate headquarters.",
    highlights: ['JSE', 'Sandton City', 'Nelson Mandela Square'],
  },
  {
    name: 'Meyersdal',
    slug: 'meyersdal',
    description: 'The Sandton of the South. Exclusive enclave for executives and estate owners.',
    highlights: ['Eco Estate', 'Private Client Services', 'Executive Level'],
  },
  {
    name: 'New Redruth',
    slug: 'new-redruth',
    description: 'The de facto CBD of Alberton. Legal and financial professional hub.',
    highlights: ['Van Rensburg Street', 'Union Hospital', 'Professional Services'],
  },
  {
    name: 'Rosebank',
    slug: 'rosebank',
    description: 'Premium commercial hub with retail, offices, and professional services.',
    highlights: ['Commercial Hub', 'Retail', 'Professional Services'],
  },
  {
    name: 'Randburg',
    slug: 'randburg',
    description: 'Major commercial and residential area with diverse business community.',
    highlights: ['Commercial District', 'Diverse Businesses', 'Growing Market'],
  },
  {
    name: 'Bryanston',
    slug: 'bryanston',
    description: 'Premium residential and commercial area with high-value businesses.',
    highlights: ['Professional Services', 'Medical Practices', 'Retail'],
  },
  {
    name: 'Rivonia',
    slug: 'rivonia',
    description: 'Business district with office parks and professional services.',
    highlights: ['Office Parks', 'Tech Companies', 'Professional Services'],
  },
  {
    name: 'Midrand',
    slug: 'midrand',
    description: 'Growing commercial hub between Johannesburg and Pretoria.',
    highlights: ['Growing Market', 'Commercial Developments', 'Strategic Location'],
  },
  {
    name: 'Roodepoort',
    slug: 'roodepoort',
    description: 'Western Johannesburg suburb with diverse business community.',
    highlights: ['Local Businesses', 'Community Focused', 'Growing Market'],
  },
  {
    name: 'Fourways',
    slug: 'fourways',
    description: 'Growing commercial hub with retail, offices, and business services.',
    highlights: ['Growing Market', 'Commercial Hub', 'Retail District'],
  },
  {
    name: 'Waterfall',
    slug: 'waterfall',
    description: 'Emerging business district with modern developments and offices.',
    highlights: ['Emerging District', 'Modern Developments', 'Business Hub'],
  },
  {
    name: 'Benoni',
    slug: 'benoni',
    description: 'Eastern Johannesburg hub with established commercial district.',
    highlights: ['Established Hub', 'Commercial District', 'Local Businesses'],
  },
];

const approachItems = [
  {
    title: 'Suburb-Specific Landing Pages',
    body: 'Each location page is optimized for local keywords, landmarks, and business districts unique to that area.',
  },
  {
    title: 'LocalBusiness Schema',
    body: 'Every location page includes comprehensive LocalBusiness schema markup with geo coordinates, service areas, and NAP data.',
  },
  {
    title: 'Local Citations',
    body: 'We ensure consistent Name, Address, Phone (NAP) data across all major directories for each service area.',
  },
  {
    title: 'Content Depth',
    body: 'Each page includes 1000+ words of location-specific content, local landmarks, business districts, and service area coverage.',
  },
];

const LocationsPage = () => {
  return (
    <div className="bg-black text-zinc-300">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Hyper-Local SEO · Johannesburg
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Web Design Services Across Johannesburg
          </h1>
          <p className="mb-8 max-w-3xl text-lg tracking-[-0.3px] text-[#A1A1AA] md:text-xl">
            We engineer location-specific revenue systems for businesses across Johannesburg.
            Select your suburb below to see how we dominate local search in your market.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Request A Location Audit
          </Link>
        </div>
      </section>

      {/* Location strip */}
      <section className="border-y border-zinc-800 bg-zinc-950/85 py-8 md:py-10">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            Service Areas Across Johannesburg
          </p>
          <div className="proof-marquee relative overflow-hidden">
            <div className="proof-marquee-track flex w-max items-center gap-3">
              {[...locations, ...locations].map((location, index) => (
                <Link
                  key={`${location.slug}-${index}`}
                  href={`/locations/${location.slug}`}
                  className="whitespace-nowrap rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-teal-400/50 hover:text-white"
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Location Hub
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
              12 Suburbs · Senior-Led Delivery
            </p>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            Choose Your Suburb
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-400">
            Each location page targets suburb-specific keywords, landmarks, and buyer intent — not
            generic &quot;web design Johannesburg&quot; copy that every competitor uses.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group flex flex-col rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 transition-colors hover:border-teal-400/70"
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-zinc-100">
                  {location.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {location.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {location.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-sm border border-zinc-800 bg-black/40 px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-block text-sm text-zinc-400 group-hover:text-white">
                  View {location.name} services →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why location SEO matters */}
      <section className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Local Strategy
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-1.5px] text-white md:text-5xl">
                Why Location-Specific SEO Matters
              </h2>
              <div
                aria-hidden="true"
                className="mt-5 h-px w-28 bg-gradient-to-r from-teal-400/90 to-transparent"
              />
              <p className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-1px] text-zinc-500 md:text-3xl">
                Generic pages lose to hyper-local competitors.
              </p>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              <p className="text-zinc-300">
                Johannesburg is a sprawling metropolis with distinct business districts, each with
                unique characteristics, customer behaviors, and competitive landscapes. A generic
                &quot;web design Johannesburg&quot; approach won&apos;t cut it when your competitors
                are targeting specific suburbs like Sandton, Randburg, or Bryanston.
              </p>

              <blockquote className="border-l border-teal-400/60 bg-zinc-900/35 py-3 pl-6 pr-4 text-xl leading-snug text-white md:text-2xl">
                Hyper-local SEO means creating location-specific landing pages that target
                &quot;service + suburb&quot; keyword combinations — precision targeting that
                dramatically increases conversion rates and local search visibility.
              </blockquote>

              <p>
                When a potential customer in Sandton searches for &quot;web design Sandton,&quot;
                they see your Sandton-specific page. Not a generic homepage. That is how you win
                local intent at the moment of purchase.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {approachItems.map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-zinc-800 bg-black/40 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center md:p-12">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Don&apos;t See Your Location?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
              We serve businesses across Johannesburg and surrounding areas. Contact us to discuss
              how we can help your business dominate local search in your suburb.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                Run Deep Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HubSpokeLinks variant="location" slug="index" theme="dark" title="Related Resources" />
    </div>
  );
};

export default LocationsPage;
