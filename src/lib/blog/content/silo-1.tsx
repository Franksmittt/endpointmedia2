import React from 'react';
import { H2, H3, P, Lead, UL, Callout, InternalLink } from '@/components/blog/blog-prose';
import {
  LatencyChart,
  ArchitectureDiagram,
  JsonLdCodeBlock,
  AECitationGraph,
  TailwindPayloadChart,
  RedirectMapper,
} from '@/components/blog/interactives-static';
import {
  RevenueLossCalculator,
  ComponentTearDown,
  MigrationChecklist,
} from '@/components/blog/interactives-client';

export function BrutalTruthWordPress() {
  return (
    <>
      <Lead>
        Every 100ms of server latency costs B2B operators measurable conversion rate. WordPress on typical South African hosting averages 680ms Time to First Byte before a single pixel renders . And that is before Elementor, WooCommerce, or your SEO plugin chain fires another 20 database queries.
      </Lead>
      <P>
        This is not a preference debate between modern web architecture vs WordPress. It is a direct mapping between backend request lifecycle and front-end revenue loss. High-ticket business owners in Johannesburg, Alberton, and Sandton are losing qualified leads because their CMS was never engineered for performance . It was assembled from plugins.
      </P>

      <H2>The WordPress Request Lifecycle: Where Revenue Dies</H2>
      <P>
        A standard WordPress page load executes a synchronous PHP bootstrap, loads 15–40 active plugins, opens a MySQL connection pool, runs uncached queries for menus, widgets, custom fields, and SEO metadata, then renders a bloated template. TTFB regularly exceeds 600ms on shared hosting. Mobile users on South African mobile networks experience Largest Contentful Paint above 4 seconds . A Google &quot;Poor&quot; rating that suppresses rankings and inflates Google Ads Quality Score penalties.
      </P>
      <ArchitectureDiagram />
      <LatencyChart />

      <H2>Plugin Debt: The Hidden Cost of &quot;Free&quot; Extensions</H2>
      <P>
        Each plugin adds HTTP requests, database queries, and JavaScript payloads. A typical enterprise WordPress stack runs Contact Form 7, Yoast SEO, WP Rocket, Elementor Pro, WooCommerce, and three analytics plugins . Collectively adding 800KB+ to first load. None of this is visible on the invoice. All of it is visible in Search Console Core Web Vitals reports and your Google Ads CPA dashboard.
      </P>
      <UL items={[
        <>Database query count per page: <strong>10–40 uncached queries</strong></>,
        <>JavaScript payload: <strong>340KB–1.2MB</strong> before interaction</>,
        <>CSS payload: <strong>200KB–847KB</strong> with 60–70% unused rules</>,
        <>Security surface: <strong>plugin CVEs</strong> requiring weekly patch cycles</>,
      ]} />

      <H2>Next.js Static Generation: The Engineering Alternative</H2>
      <P>
        Fast enterprise websites built on Next.js App Router pre-render HTML at deploy time. There is zero database round-trip at request time. React Server Components ship no client JavaScript for static content. Tailwind CSS purges unused styles to a 12KB production bundle. The result: TTFB under 50ms on edge CDN, LCP under 1.2 seconds, and conversion rates that stabilize at 5–8% instead of the sub-3% baseline of legacy CMS landing pages.
      </P>
      <Callout title="South African B2B Benchmark" variant="teal">
        <p>SEO &amp; Content compounding delivers qualified leads at R500–R1,200 CPL over 6–12 months . Versus R800–R2,000 for Google Ads alone. Your website architecture determines which end of that range you occupy.</p>
      </Callout>

      <H2>When WordPress Still Makes Sense</H2>
      <P>
        WordPress remains viable for low-traffic editorial blogs with no conversion requirements. The moment your site must rank competitively, pass Core Web Vitals, implement programmatic schema, and convert high-intent B2B traffic . The architecture decision is made. You need server-rendered React, not PHP plugin chains.
      </P>
      <P>
        Ready to audit your current stack? <InternalLink href="/contact">Request a performance diagnostic</InternalLink> or review our <InternalLink href="/services/website-redesign">website redesign process</InternalLink>.
      </P>
    </>
  );
}

export function CoreWebVitalsFinancial() {
  return (
    <>
      <Lead>
        Largest Contentful Paint is not a developer vanity metric. It is a direct input to your Cost Per Lead formula. A B2B site rendering at 4.2 seconds LCP loses an estimated 35% of conversions compared to the same traffic at 1.8 seconds . Before you spend a single rand on Google Ads.
      </Lead>

      <H2>LCP: The Revenue Clock</H2>
      <P>
        Google defines Good LCP as ≤2.5 seconds. Poor LCP (&gt;4.0s) triggers ranking suppression and Quality Score degradation in Google Ads. For a Johannesburg B2B operator running 5,000 monthly sessions at 3% conversion and R15,000 average deal value, a 35% conversion penalty from slow LCP equals R787,500 in monthly revenue at risk.
      </P>
      <RevenueLossCalculator />

      <H2>CLS: The Trust Destroyer</H2>
      <P>
        Cumulative Layout Shift measures visual stability. When buttons jump as ads, fonts, or lazy-loaded images load, users misclick, abandon forms, and bounce. CLS above 0.25 is &quot;Poor.&quot; WordPress themes with async font loading and injected ad scripts routinely fail this metric. Next.js with explicit width/height on images and font-display: swap in Tailwind eliminates layout shift at the component level.
      </P>

      <H2>INP: Interaction Responsiveness</H2>
      <P>
        Interaction to Next Paint replaced First Input Delay as a Core Web Vital. Heavy JavaScript hydration from page builders creates 200ms+ input delays on mobile. React Server Components defer client JavaScript to isolated islands . Keeping INP under 200ms on mid-range Android devices common in the South African market.
      </P>

      <H3>Core Web Vitals Optimization Checklist</H3>
      <UL items={[
        <>Pre-render above-the-fold content via static generation</>,
        <>Serve images in WebP/AVIF with explicit dimensions</>,
        <>Eliminate render-blocking third-party scripts from critical path</>,
        <>Use edge CDN (Vercel) for sub-100ms TTFB in Gauteng</>,
        <>Monitor weekly in Google Search Console Experience report</>,
      ]} />

      <P>
        Core Web Vitals optimization is web performance ROI . Not a technical side project. <InternalLink href="/services/website-development">See our development standards</InternalLink>.
      </P>
    </>
  );
}

export function AnswerEngineOptimization() {
  return (
    <>
      <p className="article-summary mb-6 text-xl font-semibold text-gray-900 leading-relaxed">
        Answer Engine Optimization (AEO) is the practice of structuring web content so AI search models , ChatGPT, Perplexity, Google AI Overviews . Cite your domain as an authoritative source. It requires programmatic JSON-LD, semantic HTML hierarchy, and entity-linked schema graphs.
      </p>

      <H2>Why AEO Replaces Traditional Keyword Density</H2>
      <P>
        LLM crawlers do not rank pages by keyword frequency. They extract entities, relationships, and citation-worthy statements from structured documents. A page with clean H1→H2→H3 hierarchy, FAQ schema, and speakable specifications is parseable. A page builder output with div soup is invisible to answer engines regardless of word count.
      </P>
      <AECitationGraph />

      <H2>Implementing Schema Markup for AI in Next.js</H2>
      <P>
        Next.js Metadata API and secureJsonLD() injection at build time ensure every blog post ships BlogPosting schema, author Person entities linked to E-E-A-T profiles, and publisher Organization references . All XSS-sanitized per Next.js security guidelines.
      </P>
      <JsonLdCodeBlock title="BlogPosting + Speakable Schema" />

      <H2>Semantic Entity Grouping</H2>
      <P>
        Connect articles to organization, author, and service entities via @id references. When ChatGPT crawls your AEO-optimized content cluster, it resolves Frank Smit as author, Endpoint Media as publisher, and Google Ads Management as related service . Building a knowledge graph that competitors with flat HTML cannot replicate.
      </P>
      <UL items={[
        <>Use @id canonical URIs across all schema types</>,
        <>Implement FAQPage schema on instructional content</>,
        <>Add SpeakableSpecification for voice/AI snippet extraction</>,
        <>Cross-link silo articles via InternalLinks pillar-cluster model</>,
      ]} />

      <P>
        <InternalLink href="/blog/the-schema-vacuum-technical-seo-advantage">Read our Schema Vacuum analysis</InternalLink> for Johannesburg competitive context.
      </P>
    </>
  );
}

export function AnatomyEliteLandingPage() {
  return (
    <>
      <Lead>
        A high-converting landing page is not a design template . It is an engineering artifact. Zero runtime CSS bloat, single-purpose DOM hierarchy, and one primary conversion action. Everything else is distraction that costs you Quality Score points and conversion rate.
      </Lead>

      <H2>Minimalist UI Development Principles</H2>
      <P>
        C-suite buyers decide trust within 3 seconds. Cluttered WordPress templates with stock photos, three font families, and competing CTAs signal amateur execution. Elite landing pages use high-contrast typography, generous whitespace, and a single value proposition above the fold.
      </P>
      <ComponentTearDown />
      <TailwindPayloadChart />

      <H2>React Server Components for Landing Pages</H2>
      <P>
        Mark marketing sections as Server Components. Hydrate only interactive elements . Calculators, forms, chat widgets . As client islands. This architecture delivers HTML-first rendering that Google Ads crawlers score favorably for landing page experience.
      </P>

      <H2>Conversion Architecture</H2>
      <UL items={[
        <>One H1 with primary keyword + value proposition</>,
        <>Social proof within first viewport (logos, metrics)</>,
        <>Single primary CTA . No navigation distraction</>,
        <>Form above fold on mobile with 3 fields maximum</>,
        <>Page weight under 500KB total transferred</>,
      ]} />

      <P>
        <InternalLink href="/services/google-ads-landing-pages">Google Ads landing page builds</InternalLink> · <InternalLink href="/services/conversion-rate-optimization">CRO services</InternalLink>
      </P>
    </>
  );
}

export function WebsiteMigrationBlueprint() {
  return (
    <>
      <Lead>
        Enterprise website migrations fail when teams treat SEO as a launch-day checkbox. Indexation loss, redirect chains, and canonical conflicts destroy years of link equity in 48 hours. This is the safe website migration checklist we execute on every Next.js rebuild.
      </Lead>

      <H2>Phase 1: Pre-Migration Audit</H2>
      <P>
        Export every indexed URL from Google Search Console Coverage report. Crawl with Screaming Frog or Sitebulb. Document current rankings for top 50 queries. This baseline is your insurance policy . Any post-launch traffic drop gets traced to a specific URL mapping failure.
      </P>
      <MigrationChecklist />

      <H2>Phase 2: 301 Redirect Mapping</H2>
      <P>
        Every legacy URL must map to exactly one canonical destination with a 301 permanent redirect. Avoid chains (A→B→C). Implement in next.config.mjs redirects array or middleware. Test every mapping with curl -I before DNS cutover.
      </P>
      <RedirectMapper />

      <H2>Phase 3: Dynamic Sitemap Architecture</H2>
      <P>
        Next.js sitemap.ts programmatically generates XML from your route registry. Set accurate lastModified dates per content type. Submit to Google Search Console within 24 hours of launch. Use IndexNow API for Bing instant notification.
      </P>

      <H2>Phase 4: Post-Launch Monitoring (14 Days)</H2>
      <UL items={[
        <>Daily GSC Coverage report . Watch for spike in &quot;Page with redirect&quot; or &quot;Not found&quot;</>,
        <>Compare organic sessions week-over-week in GA4</>,
        <>Validate canonical tags on all migrated URLs</>,
        <>Re-submit sitemap if new blog/content routes added</>,
      ]} />

      <P>
        <InternalLink href="/contact">Book a migration consultation</InternalLink> · <InternalLink href="/services/website-redesign">Redesign services</InternalLink>
      </P>
    </>
  );
}
