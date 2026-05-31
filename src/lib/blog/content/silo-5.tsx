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

export function MetaAndromedaManualMediaBuying() {
  return (
    <>
      <p className="article-summary mb-6 text-xl font-semibold leading-relaxed text-zinc-200">
        Meta&apos;s Andromeda engine treats the creative asset as the primary targeting vector via Entity ID
        clustering — not your audience stacks. Manual media buying that tweaks demographics while cloning
        visuals is now mathematically obsolete for high-ticket B2B and retail scaling.
      </p>

      <H2>What Changed: From Audience Gates to Intent Retrieval</H2>
      <P>
        Before Andromeda, advertisers built campaigns around lookalikes, interest stacks, and demographic
        filters. Media buyers justified retainers by &quot;testing audiences.&quot; That model collapsed when Meta
        inserted a GPU-accelerated retrieval stage that scans tens of millions of ad candidates and narrows
        to roughly 1,000 finalists in under 300 milliseconds — before your bid or budget ever matter.
      </P>
      <P>
        Andromeda reads pixel data, motion, audio pacing, on-screen text, and semantic context, then assigns
        an <strong>Entity ID</strong>: a computer-vision fingerprint that determines who sees the ad. Manual
        targeting inputs become suggestions. Broad Advantage+ configurations are not lazy — they are structural
        requirements that let the algorithm map Entity IDs to psychographic intent.
      </P>

      <H3>Entity ID vs Creative ID: Why Your &quot;A/B Tests&quot; Lie to You</H3>
      <P>
        Changing a headline generates a new Creative ID. Changing background colour or aspect ratio also
        generates a new Creative ID. But if visual similarity exceeds Meta&apos;s clustering threshold, all
        those variations collapse under one Entity ID — one auction ticket, one shared learning pool.
      </P>
      <ComparisonTable
        headers={['What you change', 'Creative ID', 'Entity ID', 'Actual test value']}
        rows={[
          ['Headline copy only', 'New', 'Often same', 'Low — text-only swaps rarely diversify retrieval'],
          ['CTA button colour', 'New', 'Same', 'None — cosmetic noise'],
          ['Same layout, new music on video', 'New', 'Same', 'None — audio alone does not break clustering'],
          ['Different format, environment, persona, benefit axis', 'New', 'New', 'High — opens new auction pockets'],
        ]}
      />

      <H2>Premature Algorithmic Convergence: How Agencies Burn Budget</H2>
      <P>
        When ten &quot;different&quot; ads share one Entity ID, they bid against each other in the same retrieval
        subset. Spend rises. Reach stagnates. The account looks active while the algorithm learns nothing
        new. This is premature algorithmic convergence — and it is the hidden tax of template-factory
        creative.
      </P>
      <Callout title="Systems Engineering, Not Button-Clicking" variant="teal">
        <p>
          Scaling profitably in 2026 means feeding Andromeda structurally divergent Entity IDs: different
          layouts, proof structures, environments, and benefit axes — not colour swaps on one Canva frame.
          Endpoint Media builds programmatic creative pipelines and API-governed campaign architecture for
          exactly this problem.{' '}
          <InternalLink href="/services/facebook-ads">Explore Meta ads engineering</InternalLink>.
        </p>
      </Callout>

      <H2>What High-Ticket Operators Should Demand Instead</H2>
      <UL
        items={[
          <>Creative volume targets tied to Entity ID diversity — not &quot;12 posts that look identical&quot;</>,
          <>Broad or Advantage+ structures that let retrieval map creative signals to intent</>,
          <>Documentation of layout archetypes, not just copy variations</>,
          <>API-first graduation from sandbox to scale — not manual duplication in Ads Manager</>,
        ]}
      />
      <P>
        <InternalLink href="/blog/programmatic-design-factory-meta-creative-disparity">
          Read: The Programmatic Design Factory
        </InternalLink>{' '}
        ·{' '}
        <InternalLink href="/contact">Request a Meta account architecture audit</InternalLink>
      </P>
    </>
  );
}

export function ProgrammaticDesignFactoryMeta() {
  return (
    <>
      <Lead>
        Andromeda rewards creative disparity at scale. Human designers approving one layout at a time cannot
        supply the Entity ID volume modern retrieval demands. A Next.js + Python + Figma pipeline renders
        pixel-perfect, mathematically constrained ad variations without human latency.
      </Lead>

      <H2>The Bottleneck Is Not Media Buying — It Is Creative Throughput</H2>
      <P>
        Accounts that sustain 20+ visually distinct concepts per month report materially higher ROAS than
        accounts recycling one template. The constraint is production speed. The programmatic design factory
        injects database variables — headlines, geo tags, offers, proof points — into pre-engineered layout
        nodes and rasterizes production PNGs via the Figma REST API at api.figma.com/v1.
      </P>

      <H3>Spatial Mathematics: 9:16 Is Mandatory, Edge-to-Edge Is Suicide</H3>
      <P>
        Vertical 1080×1920 is the default for Reels, Stories, and vertical placements. But native UI covers
        roughly the top 220px (username, progress bars) and bottom 220px (captions, engagement row). Critical
        copy and CTAs must live inside the center safe zone — often implemented as the 1080×1080 center-square
        method with messaging constrained to roughly Y 250–1248 on a 1920px canvas.
      </P>

      <H3>Split-Frame 60/40: One Archetype, Not the Only Archetype</H3>
      <P>
        Split-frame layouts isolate documentary imagery (top 60%) from high-contrast copy blocks (bottom
        40%). That architecture works for B2B proof and local retail trust — but Entity ID diversity
        requires multiple archetypes: comparison grids, carousel series, masthead typography, multi-image
        proof boards, and geo-specific variants. One template repeated twelve times defeats the entire
        system.
      </P>

      <ComparisonTable
        headers={['Engineering action', 'Business outcome']}
        rows={[
          ['Figma API variable injection', 'Same-day creative liquidity without designer queue backlog'],
          ['Safe-zone hardcoding in render pipeline', 'Zero UI occlusion — higher thumb-stop and readability'],
          ['Layout archetype rotation', 'Distinct Entity IDs — lower CPA from reduced self-competition'],
          ['Tracking code per angle (e.g. ATC_916_HOOK_A)', 'Clean attribution from ad click to CRM stage'],
        ]}
      />

      <H2>Cognitive Typography Rules Worth Hardcoding</H2>
      <UL
        items={[
          <>Display hooks: tight line-height (90–120%), negative letter-spacing (~−3%)</>,
          <>Max 7–8 words per line on mobile hooks — forces fast retinal parsing</>,
          <>Three-tone palette: dominant field, high-contrast type, single accent for CTA only</>,
          <>Documentary imagery briefs — not stock gloss — for authentic local trust (especially Gauteng B2C/B2B)</>,
        ]}
      />

      <Callout title="We Build the Factory, Not Just the Ads" variant="teal">
        <p>
          Endpoint Media engineers creative systems — layout specs, export pipelines, and entity-diverse
          Meta programs for multi-location clients. Stop mail-merging one template.{' '}
          <InternalLink href="/case-studies/alberton-tyre-clinic">See Alberton Tyre Clinic positioning</InternalLink>{' '}
          · <InternalLink href="/contact">Book a creative systems consult</InternalLink>
        </p>
      </Callout>
    </>
  );
}

export function AboTestingSandboxMetaLiquidity() {
  return (
    <>
      <p className="article-summary mb-6 text-xl font-semibold leading-relaxed text-zinc-200">
        Meta ad sets need roughly 50 conversion events in a 7-day window to exit learning phase. ABO sandboxes
        isolate variables with mathematically computed daily budgets — then API AdRules enforce 15-minute
        pacing instead of a media buyer checking Ads Manager once a day.
      </p>

      <H2>The Minimum Daily Budget Formula</H2>
      <P>
        Algorithmic liquidity — reliable delivery and stable CPA — requires enough conversion density per ad
        set. The minimum viable daily test budget follows:
      </P>
      <CodeBlock
        title="ABO sandbox daily budget"
        code={`daily_budget = (50 ÷ 7) × target_CPA

Example: target CPA R850 → daily_budget ≈ R6,071`}
      />
      <P>
        Under-funding traps ad sets in learning limbo: volatile CPMs, unpredictable delivery, and false negatives
        on creatives that would win with adequate signal. Emotional budget allocation is financial negligence
        on a hardware-accelerated platform.
      </P>

      <H2>Why ABO Before CBO</H2>
      <P>
        Campaign Budget Optimization prematurely concentrates spend on early false positives. ABO sandboxes
        force Meta to spend against specific creative hypotheses until statistical signal exists. Winners
        graduate to Advantage+ CBO scale environments — but only through API workflows that preserve social
        proof.
      </P>

      <H3>Graduation Without Destroying Social Proof</H3>
      <P>
        Manually duplicating a winning ad in Ads Manager creates a new post — likes, comments, and shares
        reset. The programmatic approach extracts <code>effective_object_story_id</code> via Graph API{' '}
        <code>ads_read</code>, then injects that immutable Post ID into the scale campaign JSON payload.
        Engagement history and algorithmic weight transfer intact.
      </P>

      <H2>Sub-Hourly AdRules: Capital Protection at Machine Speed</H2>
      <P>
        Human operators evaluate performance daily. Runaway ad sets can burn thousands before anyone pauses
        them. Python AdRules scripts polling rolling 7-day ROAS every 15 minutes implement kill switches on
        unprofitable spend and scale winners by ~19.5% per interval — respecting Meta&apos;s ~20% daily
        increase guardrail that resets learning phase if violated.
      </P>

      <ComparisonTable
        headers={['Manual agency habit', 'Automated engine behaviour', 'Client value']}
        rows={[
          ['Check dashboard once daily', '15-minute ROAS evaluation', 'Stop budget bleed while team sleeps'],
          ['Duplicate winning ad in UI', 'Graph API Post ID extraction', 'Scale with social proof preserved'],
          ['+50% budget jump on a hunch', '19.5% incremental scaling', 'Maintain learning momentum'],
          ['Pause after 3x CPA spike next morning', 'Programmatic kill switch', 'Lower wasted spend per incident'],
        ]}
      />

      <P>
        <InternalLink href="/blog/meta-andromeda-manual-media-buying-dead">
          Andromeda & Entity ID primer
        </InternalLink>{' '}
        · <InternalLink href="/services/facebook-ads">Meta ads management</InternalLink> ·{' '}
        <InternalLink href="/contact">Audit your sandbox structure</InternalLink>
      </P>
    </>
  );
}

export function ServerSideCapiMiddlewareRoi() {
  return (
    <>
      <Lead>
        Browser pixels fail on iOS, ad blockers, and ITP — blinding Andromeda to the conversions it drives.
        Server-side Conversions API middleware with SHA-256 PII normalization, UUID deduplication, and CRM
        stage feedback is the only durable attribution stack for high-ticket B2B in 2026.
      </Lead>

      <H2>Why Client-Side Tracking Is a Structural Vulnerability</H2>
      <P>
        When the pixel misfires, Smart Bidding optimizes on incomplete data — often toward low-intent form
        fills instead of qualified pipeline. CAPI sends events from your server after form validation or CRM
        updates, enriched with first-party fields Meta can match against logged-in users.
      </P>

      <H3>PII Normalization Before Hashing</H3>
      <UL
        items={[
          <>Email: lowercase, trim whitespace, then SHA-256 — capitalization differences break matching</>,
          <>Phone: E.164 format (+27…) with no spaces or dashes before hash</>,
          <><code>_fbc</code> and <code>_fbp</code> cookies: transmit unhashed from request headers</>,
          <>Generate UUID <code>event_id</code> once — pass identical ID in browser pixel and CAPI payload</>,
        ]}
      />

      <H2>Event Match Quality (EMQ): The Score That Gates Optimization</H2>
      <P>
        EMQ measures how well server events match Meta users. Scores below 7.0 on bottom-funnel events signal
        degraded training data. Hashed email (~+4 EMQ points) and E.164 phone (~+3 points) plus client IP and
        user agent typically lift accounts into the 8.0–9.5 range required for Value Optimization on qualified
        leads.
      </P>

      <H3>Closed-Loop CRM for B2B: Beyond the Lead Event</H3>
      <P>
        A top-of-funnel lead is noise until CRM progression proves intent. Middleware should fire offline
        events when records hit MQL, SQL, Proposal Sent, and Closed-Won — training GEM sequence models to
        pursue buyers with corporate authority, not form spammers.
      </P>

      <Callout title="Data Sovereignty Is a Revenue Feature" variant="teal">
        <p>
          Endpoint Media implements Next.js API routes and Python CAPI middleware with deduplication and CRM
          stage mapping — the same architecture we deploy for{' '}
          <InternalLink href="/case-studies/as-brokers">AS Brokers</InternalLink> and industrial clients.{' '}
          <InternalLink href="/blog/google-ads-tracking-errors-budget">Compare: Google Ads server-side tracking</InternalLink>
        </p>
      </Callout>

      <ComparisonTable
        headers={['Failure mode', 'Symptom', 'Fix']}
        rows={[
          ['Double-counting pixel + CAPI', 'Inflated ROAS, broken bidding', 'Shared event_id UUID per action'],
          ['Unnormalized email hash', 'EMQ collapse', 'Lowercase + trim before SHA-256'],
          ['Local phone format', 'Match failures in SA', 'E.164 +27 normalization'],
          ['Lead-only optimization', 'Cheap junk leads', 'CRM stage events with value weighting'],
        ]}
      />
    </>
  );
}

export function SystemicDivergenceIndustryVsRetailSa() {
  return (
    <>
      <p className="article-summary mb-6 text-xl font-semibold leading-relaxed text-zinc-200">
        One ad engine cannot serve Alrode industrial procurement and Alberton retail tyre trust with the same
        funnel, payload, or creative psychology. Autonomous infrastructure must diverge by sector economics
        and South Africa&apos;s network realities — load shedding, tower outages, and mobile-first buyers.
      </p>

      <H2>Heavy Industry: Alrode, Wadeville, and High-Friction Qualification</H2>
      <P>
        B2B manufacturing and logistics buyers in Gauteng industrial nodes evaluate uptime, capacity, and
        compliance — not impulse offers. The engine deploys sequential 5-card carousels: infrastructure
        scale, operational proof, technical metrics, certification, then Higher Intent lead forms requiring
        corporate credentials. Friction is intentional. It filters retail curiosity and feeds qualified MQLs
        into CAPI closed-loop pipelines.
      </P>
      <P>
        <InternalLink href="/services/google-ads-manufacturing">Manufacturing Google Ads</InternalLink> ·{' '}
        <InternalLink href="/services/google-ads-alrode">Alrode service positioning</InternalLink> ·{' '}
        <InternalLink href="/blog/b2b-digital-marketing-specialized-industries">B2B research-phase capture</InternalLink>
      </P>

      <H2>Localized Retail: Zero-Friction Trust Funnels</H2>
      <P>
        Affluent suburban retail — tyre clinics, medical, home services — demands documentary authenticity and
        instant conversational routing. WhatsApp Business API integrations qualify leads in-chat before human
        handoff, eliminating landing-page latency and drop-off. Creative psychology competes on safety,
        heritage, and anti-chain-store trust — not price gimmicks.
      </P>
      <P>
        <InternalLink href="/case-studies/alberton-tyre-clinic">Alberton Tyre Clinic case study</InternalLink> ·{' '}
        <InternalLink href="/services/facebook-ads">Meta retail programs</InternalLink>
      </P>

      <H3>Infrastructure-Aware Payload Delivery in South Africa</H3>
      <P>
        Load shedding and cell tower battery theft degrade MTN and Vodacom latency outside stable grid windows.
        Heavy video payloads fail to load; bounce rates spike; ad sets get auction penalties. Programmatic
        engines monitor connection viability and swap to compressed static WebP or JPEG under ~30MB when
        geotargeting nodes with acute degradation — while weighting B2B delivery toward early-morning windows
        (02:00–04:00) when grid stability and procurement research peaks align.
      </P>

      <ComparisonTable
        headers={['Sector', 'Creative psychology', 'Funnel architecture', 'Primary KPI']}
        rows={[
          ['Industrial B2B (Alrode)', 'Credibility, capacity, compliance', '5-card carousel + Higher Intent form', 'Qualified MQL → SQL cost'],
          ['Local retail (Alberton)', 'Trust, safety, heritage', 'WhatsApp / Messenger + documentary static', 'Booked appointment CPA'],
          ['Financial / legal high-ticket', 'Institutional density, proof', 'Long-form landing + CRM VO', 'Proposal-stage ROAS'],
          ['Automotive engineering', 'Documentary workshop proof', 'Reels + technical carousel', 'Quote request CPA'],
        ]}
      />

      <Callout title="Stop Hiring Button-Clickers" variant="red">
        <p>
          Legacy agencies pull levers in an interface built for machines. Endpoint Media engineers autonomous
          ad infrastructure — creative factories, ABO sandboxes, CAPI middleware, and sector-specific funnel
          divergence — for Gauteng operators who need pipeline sovereignty, not monthly PDF reports.{' '}
          <InternalLink href="/contact">Get your growth audit</InternalLink>
        </p>
      </Callout>

      <H2>Engineering Metrics → Client Value (Quick Reference)</H2>
      <UL
        items={[
          <>Entity ID decentralization → eliminated ad fatigue and self-competition in auction</>,
          <>Post ID graduation → scale winners without resetting social proof</>,
          <>15-minute AdRules → capital protection while humans sleep</>,
          <>CAPI + EMQ 8+ → algorithm sees real buyers, not browser ghosts</>,
          <>Payload compression in degraded networks → leads captured when competitors&apos; ads never load</>,
        ]}
      />
    </>
  );
}
