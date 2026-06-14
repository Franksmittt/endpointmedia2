import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import CaseStudyArticleSchema from '@/components/seo/CaseStudyArticleSchema';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

const LIVE_SITE_URL = 'https://www.vaalpenskraalhunts.co.za/';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Vaalpenskraal Game Reserve Case Study | Waterberg Hunting Website',
    description:
      'How Endpoint Media built a Next.js marketing and enquiry platform for Vaalpenskraal Game Reserve, a premium fair-chase hunting estate in the Waterberg, Limpopo.',
    path: '/case-studies/vaalpenskraal-game-reserve',
    keywords: [
      'hunting lodge website case study',
      'game reserve website design South Africa',
      'Waterberg hunting website',
      'Vaalpenskraal Game Reserve website',
    ],
    openGraph: {
      type: 'article',
    },
  });
}

export default function VaalpenskraalGameReserveCaseStudy() {
  return (
    <>
      <CaseStudyArticleSchema slug="vaalpenskraal-game-reserve" />
      <article itemScope itemType="https://schema.org/Article" className="bg-black text-zinc-300">
        <section data-chunk-boundary="true" className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 text-white md:pb-20 md:pt-28">
          <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
          <div className="container mx-auto px-6">
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center text-zinc-400 transition hover:text-white"
            >
              Back to Case Studies
            </Link>

            <figure className="max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-sm border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-400/90">
                  Game Reserve
                </span>
                <span className="rounded-sm border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Waterberg, Limpopo
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Vaalpenskraal Game Reserve: Building a Premium Hunting Estate Web Platform
              </h1>
              <figcaption className="max-w-3xl text-lg text-zinc-400 md:text-xl">
                A Next.js App Router marketing and enquiry site for a premium fair-chase hunting
                estate, built around PH-led hunting, a census-driven quarry roster, camp
                hospitality, and practical enquiry flows.
              </figcaption>
            </figure>
          </div>
        </section>

        <section data-chunk-boundary="true" className="bg-black py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Project Overview</h2>
              <p className="mb-6 text-lg leading-relaxed text-zinc-400">
                Vaalpenskraal Game Reserve needed a website that could communicate the seriousness
                of a Waterberg hunting estate without turning the experience into a generic safari
                brochure. The positioning had to respect the land, the PH-led process, and the
                practical planning information hunters need before making an enquiry.
              </p>
              <p className="text-lg leading-relaxed text-zinc-400">
                The resulting site is a mostly static editorial marketing platform with route-level
                metadata, a generated sitemap, species detail routes, lodge/camp education, and
                enquiry flows that frame dates as planning requests rather than confirmed bookings.
              </p>
            </div>
          </div>
        </section>

        <section data-chunk-boundary="true" className="bg-zinc-950 py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Strategic Challenge</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <article data-chunk-boundary="true" className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <h3 className="text-xl font-semibold text-white">Avoid Brochure Hunting</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">
                    The brand needed to signal fair chase, field discipline, and Waterberg terrain
                    without leaning on empty lifestyle copy.
                  </p>
                </article>
                <article data-chunk-boundary="true" className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <h3 className="text-xl font-semibold text-white">Make the Roster Practical</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">
                    The quarry roster needed route-level structure so hunters could explore species
                    information without losing the broader estate story.
                  </p>
                </article>
                <article data-chunk-boundary="true" className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <h3 className="text-xl font-semibold text-white">Keep Enquiries Honest</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">
                    Forms had to support planning conversations while making clear that submitted
                    dates are enquiry requests, not confirmed bookings or payments.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section data-chunk-boundary="true" className="bg-black py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">What We Built</h2>
              <table className="w-full border border-zinc-800 text-left text-sm">
                <thead className="bg-zinc-950">
                  <tr>
                    <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Layer</th>
                    <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Implementation</th>
                    <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Business Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-chunk-boundary="true" className="border-t border-zinc-800">
                    <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                      Editorial App Router Site
                    </th>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Static Next.js 16 App Router pages with route-level metadata and static export
                      readiness.
                    </td>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Gives the estate a fast, crawlable marketing platform that can be hosted
                      without runtime booking infrastructure.
                    </td>
                  </tr>
                  <tr data-chunk-boundary="true" className="border-t border-zinc-800">
                    <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                      Species Architecture
                    </th>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Twenty-two generated species detail routes, with Greater Kudu receiving a
                      custom guide and the remaining roster using structured monograph content.
                    </td>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Turns the quarry roster into searchable education instead of a flat species
                      list.
                    </td>
                  </tr>
                  <tr data-chunk-boundary="true" className="border-t border-zinc-800">
                    <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                      Lodge and Enquiry Flow
                    </th>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Lodge/camp content for four chalets, Vark Kraal, catered hospitality, gallery
                      routes, reserve enquiry, and contact mailto flows.
                    </td>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Gives hunters the practical planning information they need before starting a
                      conversation with the reserve.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section data-chunk-boundary="true" className="bg-zinc-950 py-20 text-white md:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Outcome</h2>
              <p className="mx-auto mb-10 max-w-2xl text-xl text-zinc-400">
                Vaalpenskraal now has a focused digital front-end for hunters researching the
                estate, quarry roster, lodge setup, and enquiry process before contacting the team.
              </p>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <div className="mb-2 text-3xl font-bold">39</div>
                  <p className="text-sm text-zinc-400">Static Pages in Build</p>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <div className="mb-2 text-3xl font-bold">22</div>
                  <p className="text-sm text-zinc-400">Species Routes</p>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <div className="mb-2 text-3xl font-bold">4</div>
                  <p className="text-sm text-zinc-400">Guest Chalets</p>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <div className="mb-2 text-3xl font-bold">PH</div>
                  <p className="text-sm text-zinc-400">Led Hunt Planning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-chunk-boundary="true" className="bg-black py-20 text-white md:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Visit Vaalpenskraal Game Reserve</h2>
              <p className="mb-8 text-xl text-zinc-400">
                The live site is ready for readers who want to explore the Waterberg hunting
                estate, quarry roster, camp details, and enquiry flow directly.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href={LIVE_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-zinc-200"
                >
                  Visit Vaalpenskraal
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-100 transition hover:bg-zinc-900"
                >
                  Build a Tourism Platform
                </Link>
              </div>
            </div>
          </div>
        </section>

        <HubSpokeLinks variant="case-study" slug="vaalpenskraal-game-reserve" />
      </article>
    </>
  );
}
