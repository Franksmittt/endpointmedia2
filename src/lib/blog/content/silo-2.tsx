import React from 'react';
import { H2, H3, P, Lead, UL, Callout, InternalLink } from '@/components/blog/blog-prose';
import {
  ServerSideTrackingFlow,
  AlgorithmTrainingGraph,
  LeadScoringMatrix,
  CpaProfitabilityDashboard,
} from '@/components/blog/interactives-static';
import { CpcReductionSimulator } from '@/components/blog/interactives-client';

export function GoogleAdsTrackingErrors() {
  return (
    <>
      <Lead>
        Most Google Ads accounts hemorrhage budget before the first optimization cycle completes. The cause is not bid strategy. It is foundational tracking errors that feed garbage data to Google&apos;s algorithm while ad blockers silently discard half your conversion signals.
      </Lead>

      <H2>Error 1: Broad Match Without Negative Keywords</H2>
      <P>
        Broad match in 2026 without a rigorous negative keyword list sends B2B budgets to job seekers, students, and DIY researchers. For a R45,000/month Google Ads spend, 20% waste on irrelevant queries equals R9,000/month burned: R108,000 annually with zero pipeline contribution.
      </P>

      <H2>Error 2: Soft Conversion Goals</H2>
      <P>
        Tracking page views, time-on-site, or scroll depth as primary conversions trains Smart Bidding to optimize for browsers, not buyers. Hard conversions only: form submissions, phone calls (minimum 60 seconds), qualified chat initiations, and offline CRM-imported closed deals.
      </P>

      <H2>Error 3: Client-Side Tracking Only</H2>
      <P>
        Browser ad blockers and iOS ATT eliminate 15–30% of client-side gtag events. Server-side conversion tracking via Next.js API routes captures the event before the browser can block it.
      </P>
      <ServerSideTrackingFlow />

      <H3>Next.js API Route Pattern</H3>
      <UL items={[
        <>POST /api/contact fires server-side conversion event on valid submission</>,
        <>Enhanced conversions hash email/phone for Google matching</>,
        <>Offline conversion import syncs CRM closed-won data weekly</>,
        <>Validate with Google Tag Assistant and Ads conversion diagnostics</>,
      ]} />

      <P>
        <InternalLink href="/services/google-ads">Google Ads management</InternalLink> · <InternalLink href="/compare/google-ads-flat-fee-vs-percentage-spend">Flat fee vs percentage pricing</InternalLink>
      </P>
    </>
  );
}

export function LandingPageSpeedQualityScore() {
  return (
    <>
      <Lead>
        Google Ads Quality Score is not opaque. Landing page experience is 39% of the formula. And page speed is its primary input. A Next.js landing page loading in 1.2 seconds can reduce effective CPC by 30–50% versus the same keyword on a 4-second WordPress page.
      </Lead>

      <H2>The Auction Math</H2>
      <P>
        Ad Rank = Bid × Quality Score × Expected Impact of Extensions. Quality Score 8 vs 5 on the same keyword can halve your actual CPC while improving average position. For high-intent B2B keywords at R45–R120 CPC in Gauteng, this is not marginal. It is account-level profitability.
      </P>
      <CpcReductionSimulator />

      <H2>Landing Page Speed Impact on CPC: Technical Requirements</H2>
      <UL items={[
        <>LCP under 2.5s on mobile (Google Ads mobile-first crawling)</>,
        <>No interstitials or pop-ups blocking content on load</>,
        <>HTTPS with valid certificate. Non-negotiable</>,
        <>Content relevance: H1 must match ad headline keyword intent</>,
        <>Privacy policy and contact information visible without scroll</>,
      ]} />

      <Callout title="Engineering Pays for Itself" variant="teal">
        <p>Investing R25,000 in a Next.js landing page that improves Quality Score from 5 to 8 on R30,000/month ad spend typically saves R6,000–R9,000/month in CPC. ROI within 3–4 months from ad efficiency alone.</p>
      </Callout>

      <P>
        <InternalLink href="/services/google-ads-landing-pages">Dedicated landing page builds</InternalLink> · <InternalLink href="/blog/core-web-vitals-financial-metric">Core Web Vitals financial impact</InternalLink>
      </P>
    </>
  );
}

export function SmartBiddingVsManual() {
  return (
    <>
      <Lead>
        Google Ads smart bidding strategies (Target CPA, Maximize Conversion Value, Target ROAS) only outperform manual CPC when the conversion data pipeline is clean, fast, and voluminous. Feed the algorithm lies and it optimizes for fiction.
      </Lead>

      <H2>The Conversion Data Feedback Loop</H2>
      <P>
        Smart Bidding requires 30–50 conversions per month per campaign to exit learning phase. Each conversion event must fire within seconds of the user action, carry accurate value data, and deduplicate correctly. WordPress sites with delayed form plugins and double-fired analytics tags poison this loop.
      </P>
      <AlgorithmTrainingGraph />

      <H2>Maximize Conversion Value for B2B</H2>
      <P>
        Assign dynamic conversion values: contact form = R500, phone call &gt;60s = R1,500, qualified meeting booked = R5,000, closed deal imported from CRM = actual contract value. This teaches the algorithm to find users who progress through your 60–90 day B2B sales cycle. Not just form fillers.
      </P>

      <H3>When Manual Bidding Still Wins</H3>
      <UL items={[
        <>New accounts with &lt;15 conversions/month per campaign</>,
        <>Hyper-niche industrial keywords with &lt;50 monthly searches</>,
        <>Brand defense campaigns requiring exact bid control</>,
      ]} />

      <P>
        <InternalLink href="/services/b2b-google-ads-management">B2B Google Ads management</InternalLink>
      </P>
    </>
  );
}

export function PerformanceEngineHighTicket() {
  return (
    <>
      <Lead>
        High-ticket digital marketing strategy for South African B2B is not about click volume. It is about filtering intent across 60–90 day procurement cycles while your content engine nurtures prospects who will never convert on first visit.
      </Lead>

      <H2>Ad Copy as Qualification Filter</H2>
      <P>
        Explicit pricing signals (&quot;From R25,000&quot;), industry specificity (&quot;Manufacturing Google Ads&quot;), and contract language (&quot;Minimum 6-month engagement&quot;) repel tire-kickers before they click. Lower CTR with higher conversion rate beats high CTR with 0.5% form completion every time.
      </P>

      <H2>Lead Scoring Architecture</H2>
      <LeadScoringMatrix />

      <H2>Nurture Integration</H2>
      <P>
        60–70% of B2B buyers complete research before contacting sales. Your ad strategy must feed a content education system: case studies, pricing transparency, technical blog silos, and retargeting sequences aligned to buyer journey stage. Not a single landing page expecting instant conversion.
      </P>
      <UL items={[
        <>Tier A leads: sales call within 4 hours</>,
        <>Tier B: automated email sequence + case study retargeting</>,
        <>Tier C: blog content drip + Lookalike audience build</>,
      ]} />

      <P>
        <InternalLink href="/case-studies/as-brokers">AS Brokers case study</InternalLink> · <InternalLink href="/services/google-ads-manufacturing">Manufacturing Google Ads</InternalLink>
      </P>
    </>
  );
}

export function PerformanceOverVanity() {
  return (
    <>
      <Lead>
        Impressions and clicks are vanity metrics. Cost Per Acquisition against Customer Lifetime Value is the only dashboard that matters. A campaign generating 10,000 clicks at 0.3% conversion is a failure. Even if the agency report highlights &quot;record traffic.&quot;
      </Lead>

      <H2>CPA Optimization Framework</H2>
      <P>
        Target CPA = (Average Deal Value × Gross Margin × Close Rate) × 0.33. For a R85,000 contract at 40% margin and 25% close rate, maximum sustainable CPA is approximately R2,800. Any campaign exceeding this is subsidizing Google&apos;s revenue, not yours.
      </P>
      <CpaProfitabilityDashboard />

      <H2>The 5–8% Conversion Baseline</H2>
      <P>
        Elite Next.js architecture targets 5–8% landing page conversion for qualified traffic. Legacy CMS sites average below 3%. The difference is not copy. It is render speed, trust signals, form UX, and zero layout shift. Without the infrastructure, no amount of ad spend fixes unit economics.
      </P>

      <H2>Audit Your Agency Report</H2>
      <UL items={[
        <>Demand CPA and ROAS. Not CTR and impressions</>,
        <>Require conversion value tracking, not conversion count alone</>,
        <>Segment by campaign intent: brand vs commercial vs competitor</>,
        <>Compare blended CPL against SEO content CPL monthly</>,
      ]} />

      <P>
        <InternalLink href="/insights/south-africa-google-ads-cpc-benchmarks">SA CPC benchmarks</InternalLink> · <InternalLink href="/contact">Request account audit</InternalLink>
      </P>
    </>
  );
}
