import React from 'react';
import { H2, H3, P, Lead, UL, Callout, InternalLink, CodeBlock } from '@/components/blog/blog-prose';

function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-8 overflow-x-auto rounded-sm border border-zinc-800">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-zinc-900">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold text-zinc-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-zinc-800">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-zinc-400">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AeoShiftChatgptGemini() {
  return (
    <>
      <p className="article-summary mb-6 text-xl font-semibold leading-relaxed text-zinc-200">
        Answer Engine Optimization (AEO) replaces keyword density with vector-embeddable, schema-backed
        content that RAG systems can retrieve and cite. If your DOM cannot be chunked, embedded, and
        validated by LLMs, your brand disappears from the AI-generated internet.
      </p>

      <H2>The Fundamental Depreciation of Traditional Search Algorithms</H2>
      <P>
        Traditional SEO relied on keyword density, backlink volume, and superficial text matching. That
        paradigm is obsolete. Modern answer engines — ChatGPT, Google Gemini, Perplexity — evaluate sites
        through Retrieval-Augmented Generation (RAG): user prompts become vector arrays, the system retrieves
        the closest semantic chunks, and responses are grounded in those citations. Unparseable content
        never enters the retrieval pipeline.
      </P>

      <H3>The Technical Mechanics of Semantic Vector Extraction</H3>
      <P>
        Embedding models convert text into high-dimensional numerical representations — often 1,024+
        dimensions mapping semantic meaning. Keyword stuffing dilutes vector clarity. LLM parsers penalize
        documents that bury answers beneath introductory fluff. They demand BLUF (Bottom Line Up Front):
        the definitive answer within the first three sentences of a discrete DOM node.
      </P>
      <P>
        RAG systems prioritize structural clarity. Flattened DOM layouts degrade chunking performance by up
        to 20%. Content must use strict H2 and H3 nodes so each section functions as a standalone,
        extractable micro-answer.
      </P>

      <H3>The Citation Mandate and JSON-LD Injection</H3>
      <P>
        Schema implementation is the highest-leverage technical investment for answer engine visibility.
        Domains with correctly formatted FAQPage and Article structured data achieve citation frequencies
        approximately 2.7× higher than identical sites without explicit schema.
      </P>

      <ComparisonTable
        headers={['Technical Signal', 'Traditional SEO', 'RAG/AEO Function', 'Algorithmic Impact']}
        rows={[
          ['Keyword Density', 'Primary ranking mechanism', 'Dilutes vector math', 'High negative impact on LLM retrieval'],
          ['JSON-LD Schema', 'Snippet enhancement', 'Explicit entity mapping', '2.7× citation multiplier for AI engines'],
          ['Content Structure', 'Long-form engagement', 'Hierarchical chunking', 'BLUF formatting determines extraction'],
          ['Brand Consensus', 'Domain Authority (links)', 'Anchor graph validation', 'Contradictions cause hallucination blocks'],
        ]}
      />

      <P>
        LLMs demand explicit entity declaration. Without HowTo, Speakable, and Organization schemas, AI
        systems cannot confidently assess source validity. Unsupported claims lacking statistical backing
        are rejected to prevent hallucination.
      </P>

      <Callout title="Immediate Action Required" variant="red">
        <p>
          Stop guessing about AI citation visibility. Run a live diagnostic with the{' '}
          <InternalLink href="/#audit">Endpoint Media Vicious Web Auditor</InternalLink> to uncover semantic
          omissions, missing schema validators, and hidden LLM extraction failures before organic traffic
          bleeds to zero.
        </p>
      </Callout>

      <H2>Engineering the CITABLE DOM Architecture</H2>
      <P>
        The CITABLE framework — Clear entity structure, Intent architecture, Entity graph markup — must
        execute at the engineering layer. Authoritative brands and key definitions must use identical
        semantic terminology across the web. If internal definitions contradict Wikidata or LinkedIn
        verification nodes, semantic drift signals unreliability and triggers algorithmic demotion.
      </P>
      <P>
        Data freshness dictates vector selection. Outdated statistics are flagged as deprecated context.
        Engineers must deploy automated monitoring to iterate content and track AI citation performance
        across distinct LLM platforms.
      </P>

      <H2>The Cost of Architectural Inaction</H2>
      <P>
        Agentic AI is contracting traditional browser-based discovery. Competitors structuring digital
        payloads for machine extraction intercept organic pipelines at the prompt layer. Treating AEO as a
        marketing add-on rather than a database engineering requirement guarantees domain obsolescence.
      </P>
      <UL
        items={[
          <>Implement FAQPage and BlogPosting JSON-LD on every instructional page</>,
          <>Use SpeakableSpecification targeting h1 and .article-summary</>,
          <>Structure content with BLUF summaries in the first paragraph of each section</>,
          <>Cross-link entity @id references across author, publisher, and service schema</>,
        ]}
      />
      <P>
        <InternalLink href="/blog/answer-engine-optimization-aeo">Read our foundational AEO guide</InternalLink>{' '}
        · <InternalLink href="/#audit">Run a live diagnostic</InternalLink>
      </P>
    </>
  );
}

export function NextjsHydrationSeoTraps() {
  return (
    <>
      <Lead>
        Next.js hydration mismatches and indiscriminate &apos;use client&apos; directives lock the main
        thread, destroy INP metrics, and cause Googlebot to index empty skeleton HTML — erasing
        revenue-generating pages from search results.
      </Lead>

      <H2>The Hydration Bottleneck in Modern Web Architecture</H2>
      <P>
        The pathology is rarely content quality. It is flawed rendering architecture where bloated JavaScript
        payloads lock the browser main thread during hydration — when React attaches event handlers to
        server-rendered HTML. Crawlers operate on strict CPU and time budgets. If compilation and Virtual DOM
        hydration exceed hundreds of milliseconds, the crawler abandons the thread and indexes an empty
        document.
      </P>

      <H3>DOM Mismatches and The Uncanny Valley of Performance</H3>
      <P>
        Hydration mismatches occur when server HTML deviates from the client React tree — from improper HTML
        nesting, browser-only APIs during initial render, or time-dependent calculations. React destroys the
        entire DOM and rebuilds from scratch, obliterating Interaction to Next Paint (INP) and spiking Total
        Blocking Time beyond the 200ms Core Web Vitals threshold.
      </P>

      <CodeBlock
        title="Fatal hydration trap — DOM mismatch on every request"
        code={`'use client';
export function UserDashboard() {
  // Time APIs during initial render break SSR parity
  const localTime = new Date().toLocaleTimeString();
  return <div>Current Time: {localTime}</div>;
}`}
      />

      <H3>Total Blocking Time and React Server Components</H3>
      <P>
        Technical SEO must be approached as infrastructure engineering. React Server Components render to
        pure HTML on the server and transmit zero kilobytes of JavaScript for static content. Push client
        boundaries exclusively to leaf nodes. Off-screen interactive elements — charting libraries, modals —
        must be dynamically imported to strip them from the initial crawler execution path.
      </P>

      <CodeBlock
        title="Correct pattern — code-split non-critical JS"
        code={`import dynamic from 'next/dynamic';

const AnalyticsModal = dynamic(() => import('../components/HeavyModal'), {
  ssr: false,
});`}
      />

      <ComparisonTable
        headers={['Rendering Metric', 'Bottleneck Source', 'CWV Impact', 'Remediation']}
        rows={[
          ['Input Delay', 'Heavy hydration bundles', 'Severe INP degradation', "Push 'use client' to leaf nodes"],
          ['Processing Duration', 'DOM mismatches', 'CPU spikes / layout shifts', 'Strict semantic HTML rules'],
          ['Presentation Delay', 'Redundant re-renders', 'High TBT', 'Utilize next/dynamic imports'],
          ['Payload Bloat', 'Un-pruned __NEXT_DATA__', 'Crawler timeout drops', 'Map precise JSON in Server Actions'],
        ]}
      />

      <Callout title="Immediate Action Required" variant="red">
        <p>
          Your infrastructure may be suffering invisible render blocking. Deploy the{' '}
          <InternalLink href="/#audit">Vicious Web Auditor</InternalLink> to measure Total Blocking Time,
          detect &apos;use client&apos; boundary violations, and eliminate DOM mismatch teardowns before
          crawler budget is exhausted.
        </p>
      </Callout>

      <H2>CI/CD Quality Control Execution</H2>
      <P>
        Resolving hydration issues requires automated governance. Integrate Playwright checks for console
        hydration warnings in staging builds. Enforce strict bundle budget limits that fail builds when the
        main chunk exceeds predefined thresholds. Treat DOM mismatches as critical build failures.
      </P>
      <P>
        <InternalLink href="/blog/core-web-vitals-financial-metric">Core Web Vitals as a financial metric</InternalLink>{' '}
        · <InternalLink href="/services/website-development">Next.js development services</InternalLink>
      </P>
    </>
  );
}

export function ShopifyCanonicalLoopDuplicatePaths() {
  return (
    <>
      <Lead>
        Shopify&apos;s default Liquid routing generates duplicate product URLs via the{' '}
        <code className="text-zinc-300">within: collection</code> filter — splintering ranking signals,
        exhausting crawl budget, and triggering de-indexation when Google cannot resolve canonical conflicts.
      </Lead>

      <H2>The Architectural Flaw in Default E-Commerce Routing</H2>
      <P>
        A single Shopify product can be accessed via half a dozen distinct URLs. The primary failure vector
        is the Liquid <code className="text-zinc-300">within: collection</code> filter, designed to preserve
        breadcrumb context but forcing collection-aware URLs instead of clean root product paths.
      </P>

      <CodeBlock
        title="Toxic pattern — collection-aware product links"
        code={`<a href="{{ product.url | within: collection }}">`}
      />

      <P>
        When crawlers discover{' '}
        <code className="text-zinc-300">/collections/summer/products/blue-widget</code> and{' '}
        <code className="text-zinc-300">/products/blue-widget</code> simultaneously, they encounter identical
        DOM. Link equity divides and algorithms frequently de-index the entity to resolve the conflict.
      </P>

      <H2>Decoupling the Liquid AST and Enforcing Root Canonicals</H2>
      <P>
        Strip <code className="text-zinc-300">within: collection</code> from all product grid iterators.
        Crawlers must only discover clean, unparameterized product nodes.
      </P>

      <CodeBlock title="Correct internal product link" code={`<a href="{{ product.url }}">`} />

      <P>
        Link remediation alone is insufficient. Override theme.liquid to forcefully control Shopify&apos;s
        automated canonical tag generation.
      </P>

      <CodeBlock
        title="Universal canonical tag enforcer"
        code={`{% comment %} Universal Canonical Tag Enforcer {% endcomment %}
{% if template contains 'product' %}
  <link rel="canonical" href="{{ shop.url }}{{ product.url }}">
{% else %}
  <link rel="canonical" href="{{ canonical_url | split: '?' | first }}">
{% endif %}`}
      />

      <H2>Navigating Pagination and Product Variant Cannibalization</H2>
      <P>
        Canonicalizing paginated collection nodes (e.g. ?page=2) back to the root page commands crawlers to
        ignore subsequent inventory pages. Paginated nodes need self-referencing canonicals with rel=&quot;prev&quot;
        and rel=&quot;next&quot; mapping. Variant parameters (?variant=12345) generate dozens of duplicate pages per
        SKU — intercept variant selection with JavaScript and sessionStorage to update DOM without appending
        URL parameters.
      </P>

      <ComparisonTable
        headers={['Vulnerability', 'URL Generated', 'SEO Consequence', 'Mitigation']}
        rows={[
          ['Collection-aware links', '/collections/x/products/y', 'Keyword cannibalization', 'Remove | within: collection'],
          ['Variant switching', '/products/y?variant=123', 'Index bloat / duplication', 'Deploy sessionStorage scripts'],
          ['Tracking parameters', '/?utm_source=email', 'Crawl budget exhaustion', 'Split canonicals at ? delimiter'],
          ['Pagination merging', 'Canonicalizing ?page=2 to root', 'Deep catalog de-indexation', 'Self-referencing nodes'],
        ]}
      />

      <Callout title="Immediate Action Required" variant="red">
        <p>
          Your storefront may be hemorrhaging link equity. Run the{' '}
          <InternalLink href="/#audit">Vicious Web Auditor</InternalLink> to expose hidden collection-aware
          loops, detect improperly mapped variant URLs, and secure canonical structure before further
          indexing failures.
        </p>
      </Callout>

      <P>
        <InternalLink href="/services/shopify-expert">Shopify expert services</InternalLink> ·{' '}
        <InternalLink href="/blog/the-brutal-truth-about-wordpress">Legacy CMS vs modern architecture</InternalLink>
      </P>
    </>
  );
}

export function WordpressRestApiUserLeakSecurity() {
  return (
    <>
      <Lead>
        WordPress exposes the unauthenticated <code className="text-zinc-300">/wp-json/wp/v2/users</code>{' '}
        endpoint by default — enabling Oracle-style enumeration attacks that harvest administrator usernames
        and feed credential-stuffing pipelines against wp-login.php.
      </Lead>

      <H2>The Unauthenticated REST API Catastrophe</H2>
      <P>
        Visual page builders destroy Core Web Vitals through DOM depth and synchronous JavaScript. A more
        severe vulnerability lives in the application layer: the native WP-JSON REST API. The{' '}
        <code className="text-zinc-300">/wp-json/wp/v2/users</code> endpoint permits unauthenticated
        connections to extract the platform&apos;s user entity graph — administrator usernames, user IDs, and
        exposed email addresses (CVE-2023-5561).
      </P>

      <H3>The Toxic Brute-Force Pipeline</H3>
      <P>
        Attackers employ Oracle-style enumeration, sending iterative queries against the unthrottled API to
        map the entire user database. Harvested administrator identities feed automated brute-force scripts
        targeting wp-login.php. Verified high-privilege account names scale compromise probability
        exponentially versus dictionary attacks.
      </P>

      <H3>Mitigating API Leaks at the Filter Layer</H3>
      <P>
        Security-by-obfuscation and basic plugin firewalls are insufficient. Exposed routing nodes must be
        surgically removed at the PHP application layer using the rest_endpoints filter.
      </P>

      <CodeBlock
        title="Architectural fix — sever the exposed user endpoint"
        code={`add_filter('rest_endpoints', function( $endpoints ) {
  if ( isset( $endpoints['/wp/v2/users'] ) ) {
    unset( $endpoints['/wp/v2/users'] );
  }
  if ( isset( $endpoints['/wp/v2/users/(?P<id>[\\d]+)'] ) ) {
    unset( $endpoints['/wp/v2/users/(?P<id>[\\d]+)'] );
  }
  return $endpoints;
});`}
      />

      <P>
        To lock down REST topology entirely, intercept incoming requests, evaluate{' '}
        <code className="text-zinc-300">is_user_logged_in()</code>, and throw HTTP 401 for external requests
        lacking session tokens.
      </P>

      <CodeBlock
        title="Enforce session authentication for JSON payloads"
        code={`add_filter( 'rest_authentication_errors', function( $result ) {
  if ( ! empty( $result ) ) {
    return $result;
  }
  if ( ! is_user_logged_in() ) {
    return new WP_Error(
      'rest_not_logged_in',
      'Unauthorized REST access.',
      array( 'status' => 401 )
    );
  }
  return $result;
});`}
      />

      <H2>Eradicating Cross-Origin Resource Misconfigurations</H2>
      <P>
        CORS misconfigurations compound API vulnerability. Broadcasting{' '}
        <code className="text-zinc-300">Access-Control-Allow-Credentials: true</code> without strict domain
        whitelisting permits malicious third-party scripts to execute privileged actions. Supplement
        application-level PHP blocks with Nginx directives returning HTTP 404 for unauthorized REST attempts
        and WAF rules dropping rapid iterative requests against JSON pathways.
      </P>

      <Callout title="Immediate Action Required" variant="red">
        <p>
          Your infrastructure may be actively leaking user schemas. Run the{' '}
          <InternalLink href="/#audit">Vicious Web Auditor</InternalLink> to detect unauthenticated wp-json
          exposures and identify fatal API vulnerabilities before full brute-force compromise.
        </p>
      </Callout>

      <P>
        <InternalLink href="/blog/the-brutal-truth-about-wordpress">WordPress architecture breakdown</InternalLink>{' '}
        · <InternalLink href="/services/website-redesign">Migrate to Next.js</InternalLink>
      </P>
    </>
  );
}

export function AiBotEdgeMiddlewareCloudflareBlocking() {
  return (
    <>
      <Lead>
        While engineering teams invest in Answer Engine Optimization, edge networks silently block verified
        AI crawlers — GPTBot, ClaudeBot — with HTTP 403 responses before requests reach your application,
        leaving domains totally asphyxiated from AI training and citation models.
      </Lead>

      <H2>The Silent Eradication of AI Crawler Traffic</H2>
      <P>
        CDNs and serverless architectures deploy aggressive managed rulesets against automated scraping. These
        features inadvertently drop connections from compliant AI crawlers at the Edge tier — absent from
        standard application logs. Organizations remain blind while their domain is excluded from AI discovery
        entirely.
      </P>

      <H3>Cloudflare&apos;s Managed Execution Hierarchy</H3>
      <P>
        Cloudflare WAF evaluates rules in rigid order: Custom WAF Rules first, then Managed &quot;Block AI
        Bots,&quot; then Super Bot Fight Mode. Without an explicit Custom Rule to Skip verified AI platforms,
        the managed rule terminates connections with HTTP 403 Forbidden.
      </P>
      <P>
        Cloudflare&apos;s Managed robots.txt prepends strict Disallow: / directives for 8+ major AI bots at
        the top of the file. Crawler protocols dictate first matching User-Agent block wins — overriding any
        Allow: / rules coded lower in the document.
      </P>

      <ComparisonTable
        headers={['WAF Phase', 'Rule Type', 'Action', 'AI Crawler Impact']}
        rows={[
          ['Phase 1', 'Custom WAF Rules', 'Skip or Block', 'Verified AI ASNs must be explicitly Allowed here'],
          ['Phase 2', 'Managed Block AI Bots', 'Block (auto-updated)', 'Traps GPTBot/ClaudeBot if Phase 1 lacks bypass'],
          ['Phase 3', 'Super Bot Fight Mode', 'Challenge', 'Evaluates remaining automated traffic'],
          ['Edge Intercept', 'Managed robots.txt', 'Prepend Disallow', 'Overrides custom developer crawler configs'],
        ]}
      />

      <H3>Vercel Edge Middleware and Proxy Traps</H3>
      <P>
        Early-return security filters in Next.js middleware.ts effectively drop script kiddies before lambda
        invocation. But naive User-Agent string matching is highly destructive — and trivially spoofed.
        Blocking exact GPTBot strings guarantees your entity schema is never ingested by OpenAI.
      </P>

      <CodeBlock
        title="Lethal middleware trap — indiscriminately dropping AI bots"
        code={`import { NextResponse } from 'next/server';

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  if (userAgent.includes('GPTBot') || userAgent.includes('ClaudeBot')) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  return NextResponse.next();
}`}
      />

      <Callout title="Immediate Action Required" variant="red">
        <p>
          Your domain may be suffering silent AI crawler rejection. Run the{' '}
          <InternalLink href="/#audit">Vicious Web Auditor</InternalLink> to map WAF execution sequences,
          detect prepended robots.txt blockers, and verify ASN allowlists before organic AI discovery is
          permanently severed.
        </p>
      </Callout>

      <H2>Reverse DNS Verification and Architectural Bypass</H2>
      <P>
        Security must exceed string matching. WAF layers should execute Reverse DNS lookups or evaluate
        Autonomous System Numbers (ASNs) to verify GPTBot requests originate from registered OpenAI IP
        blocks. Once verified, program a definitive Skip action routing AI crawlers past Managed bot
        protections while maintaining Geo-Block and rate-limits against unauthorized directory fuzzers.
      </P>
      <UL
        items={[
          <>Audit Cloudflare Managed robots.txt for prepended AI bot Disallow directives</>,
          <>Add Custom WAF Skip rules for verified AI crawler ASNs before managed rules execute</>,
          <>Remove naive User-Agent blocks from middleware.ts that target GPTBot or ClaudeBot strings</>,
          <>Monitor edge logs separately from application logs for silent 403 responses</>,
        ]}
      />
      <P>
        <InternalLink href="/blog/aeo-shift-chatgpt-gemini-optimization">The AEO shift guide</InternalLink>{' '}
        · <InternalLink href="/blog/answer-engine-optimization-aeo">AEO implementation in Next.js</InternalLink>
      </P>
    </>
  );
}
