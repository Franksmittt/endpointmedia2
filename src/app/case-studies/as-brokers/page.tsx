import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CaseStudyArticleSchema from '@/components/seo/CaseStudyArticleSchema';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "AS Brokers Case Study | Wealth Engineering Platform & Calculator Ecosystem",
    description:
      "See how Endpoint Media engineered AS Brokers into a premium wealth platform with actuarial calculator funnels, compliance-first messaging, and CRM-ready lead systems for high-net-worth advisory growth.",
    path: "/case-studies/as-brokers",
    keywords: [
      "financial services website case study",
      "wealth management web design south africa",
      "next.js calculator funnel case study",
      "as brokers digital transformation",
    ],
    openGraph: {
      type: "article",
    },
  });
}

const AsBrokersCaseStudy = () => {
  return (
    <>
      <CaseStudyArticleSchema slug="as-brokers" />
      <article itemScope itemType="https://schema.org/Article">
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-zinc-400 hover:text-white transition mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>

          <figure className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400/90 bg-cyan-400/20 px-4 py-2 rounded-full border border-cyan-400/30">Financial Services</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 bg-cyan-800/50 px-4 py-2 rounded-full border border-cyan-700">Code 1.8 Strategy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-heading">
              AS Brokers: Engineering a High-Trust Wealth Conversion Platform
            </h1>
            <figcaption className="text-lg md:text-xl text-zinc-400 max-w-3xl">A complete digital transformation for AS Brokers CC, repositioning the brand around private wealth engineering with premium design, institutional messaging, and calculator-led lead generation.</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-heading">
              Project Overview
            </h2>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              This project rebuilt the AS Brokers website as a modern growth platform for a regulated financial advisory business (FSP 17273, Category 1.8). The objective was not just aesthetics, but tighter alignment between positioning, trust, and lead intent.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              We shifted the experience to a clear high-net-worth pathway: a strong top-of-funnel narrative, actuarial diagnostic calculators, conversion-focused calls to action, and seamless progression into consultation and CRM workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              Strategic Delivery
            </h2>
            <div className="grid gap-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">1) Positioning & Message Architecture</h3>
                <p className="text-zinc-400">
                  Reframed the site around &quot;wealth engineering&quot; with institutional tone, code 1.8 credibility, and decision-focused content blocks that guide prospects from uncertainty to action.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">2) Calculator-Led Conversion System</h3>
                <p className="text-zinc-400">
                  Built and refined a full diagnostic calculator suite (retirement, tax, estate, premium risk, and Everest product models) to convert passive browsing into explicit, high-intent lead signals.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">3) Compliance + CRM Readiness</h3>
                <p className="text-zinc-400">
                  Implemented compliance-aware trust signaling, structured metadata/schema, and CRM-linked enquiry flows with HubSpot integration to support measurable pipeline tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              Platform Highlights
            </h2>
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 border-b md:border-b-0 md:border-r border-zinc-800">
                  <h3 className="text-xl font-bold mb-3 text-white font-heading">Premium UX System</h3>
                  <p className="text-zinc-400">
                    Apple x Samsung-inspired visual language with Bento card layouts, high-contrast gradients, trust markers, and motion designed for perceived authority.
                  </p>
                </div>
                <div className="p-8 border-b md:border-b-0 border-zinc-800">
                  <h3 className="text-xl font-bold mb-3 text-white font-heading">Content Silo Engineering</h3>
                  <p className="text-zinc-400">
                    Structured route architecture across solutions, calculators, and advisory pathways, improving topical relevance and internal linking for SEO.
                  </p>
                </div>
                <div className="p-8 md:border-r border-zinc-800">
                  <h3 className="text-xl font-bold mb-3 text-white font-heading">Advisory Assistant + Tooling</h3>
                  <p className="text-zinc-400">
                    Added deterministic financial tools and guided assistant experiences to increase clarity, engagement, and confidence before contact.
                  </p>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-white font-heading">Lead Pipeline Enablement</h3>
                  <p className="text-zinc-400">
                    Connected enquiry capture and calculator outcomes to workflow-ready lead handling for faster follow-up and stronger consultation quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Outcome
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              AS Brokers now operates with a digital front-end that aligns brand trust, technical depth, and conversion mechanics into one coherent wealth acquisition engine.
            </p>
            <figure>
              <figcaption className="sr-only">Key project outcomes</figcaption>
              <div className="grid md:grid-cols-4 gap-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">FSP</div>
                <p className="text-zinc-400 text-sm">Credibility Framed</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">Multi</div>
                <p className="text-zinc-400 text-sm">Calculator Funnels</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">SEO</div>
                <p className="text-zinc-400 text-sm">Silo Architecture</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">CRM</div>
                <p className="text-zinc-400 text-sm">Lead Routing Ready</p>
              </div>
            </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Ready to Build Your Own Growth Engine?
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              If your business needs a high-trust platform that generates qualified demand, we can architect it end to end.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-10 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-teal-300"
              >
                Get Your Free Growth Audit
              </Link>
              <Link
                href="/case-studies"
                className="inline-block bg-transparent border border-zinc-700 text-zinc-100 font-semibold py-4 px-10 rounded-sm hover:bg-zinc-200 hover:text-black transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-white"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
      <HubSpokeLinks variant="case-study" slug="as-brokers" />
      </article>
    </>
  );
};

export default AsBrokersCaseStudy;
