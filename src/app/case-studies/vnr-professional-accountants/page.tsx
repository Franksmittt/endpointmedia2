import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import CaseStudyArticleSchema from '@/components/seo/CaseStudyArticleSchema';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

const LIVE_SITE_URL = 'https://vnr.co.za/';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'VNR Professional Accountants Case Study | Accounting Website Strategy',
    description:
      'How Endpoint Media positioned VNR Professional Accountants around sustainable wealth, business growth, cash flow, tax, asset protection, and legacy planning with a modern conversion-ready website.',
    path: '/case-studies/vnr-professional-accountants',
    keywords: [
      'accounting firm website case study',
      'professional accountants web design south africa',
      'VNR Professional Accountants website',
      'financial services web design',
    ],
    openGraph: {
      type: 'article',
    },
  });
}

export default function VnrProfessionalAccountantsCaseStudy() {
  return (
    <>
      <CaseStudyArticleSchema slug="vnr-professional-accountants" />
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
                  Professional Accountants
                </span>
                <span className="rounded-sm border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Business Advisory
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                VNR Professional Accountants: Turning Accounting Expertise Into a Growth Platform
              </h1>
              <figcaption className="max-w-3xl text-lg text-zinc-400 md:text-xl">
                A professional services website built to communicate VNR&apos;s role beyond compliance:
                helping clients grow businesses, increase profit, improve cash flow, minimise tax,
                protect assets, and leave a legacy.
              </figcaption>
            </figure>
          </div>
        </section>

        <section data-chunk-boundary="true" className="bg-black py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Project Overview</h2>
              <p className="mb-6 text-lg leading-relaxed text-zinc-400">
                VNR Professional Accountants needed a public-facing site that could do more than list
                accounting services. The message had to reflect strategic financial guidance,
                sustainable wealth, relevant knowledge, and technology-enabled advisory support.
              </p>
              <p className="text-lg leading-relaxed text-zinc-400">
                The live site now gives prospects a clear pathway into the business: understand the
                outcomes VNR helps create, recognize the advisory value, and navigate directly to the
                firm for the next step.
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
                  <h3 className="text-xl font-semibold text-white">Compliance Is Not Enough</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">
                    Accounting buyers are not only looking for returns and submissions. They want
                    guidance that protects cash flow, tax position, and long-term business value.
                  </p>
                </article>
                <article data-chunk-boundary="true" className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <h3 className="text-xl font-semibold text-white">Trust Must Be Immediate</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">
                    A professional services website has seconds to signal competence, clarity, and
                    reliability before a prospect decides whether to call.
                  </p>
                </article>
                <article data-chunk-boundary="true" className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <h3 className="text-xl font-semibold text-white">Outcomes Need Structure</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">
                    The site had to organize VNR&apos;s value around the outcomes business owners care
                    about: growth, profit, cash flow, tax, assets, and legacy.
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
                      Positioning
                    </th>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Framed VNR around sustainable wealth, relevant knowledge, and technology.
                    </td>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Moves the firm from commodity accounting to advisory value.
                    </td>
                  </tr>
                  <tr data-chunk-boundary="true" className="border-t border-zinc-800">
                    <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                      Outcome Navigation
                    </th>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Built clear themes for business growth, profit, cash flow, tax, asset
                      protection, and legacy.
                    </td>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Lets prospects self-identify the financial problem they need solved.
                    </td>
                  </tr>
                  <tr data-chunk-boundary="true" className="border-t border-zinc-800">
                    <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                      Conversion Path
                    </th>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Prominent contact access and clean routing into the live business website.
                    </td>
                    <td className="px-4 py-4 align-top text-zinc-400">
                      Gives the reviewing client and future readers a direct path to VNR.
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
                VNR now has a public web presence that communicates advisory depth, supports
                trust-building, and gives prospects a direct path to the firm&apos;s live website.
              </p>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <div className="mb-2 text-3xl font-bold">6</div>
                  <p className="text-sm text-zinc-400">Outcome Themes</p>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <div className="mb-2 text-3xl font-bold">VNR</div>
                  <p className="text-sm text-zinc-400">Brand Clarity</p>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <div className="mb-2 text-3xl font-bold">Live</div>
                  <p className="text-sm text-zinc-400">Website Link Ready</p>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                  <div className="mb-2 text-3xl font-bold">SEO</div>
                  <p className="text-sm text-zinc-400">Case Study Indexed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-chunk-boundary="true" className="bg-black py-20 text-white md:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Visit VNR Professional Accountants</h2>
              <p className="mb-8 text-xl text-zinc-400">
                The client is reviewing the website, and the live destination is ready for readers
                who want to navigate from this case study to VNR directly.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href={LIVE_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-zinc-200"
                >
                  Visit vnr.co.za
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-100 transition hover:bg-zinc-900"
                >
                  Build a Professional Services Platform
                </Link>
              </div>
            </div>
          </div>
        </section>

        <HubSpokeLinks variant="case-study" slug="vnr-professional-accountants" />
      </article>
    </>
  );
}
