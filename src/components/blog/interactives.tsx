'use client';

import React, { useState } from 'react';

/* ─── Silo 1: Web Architecture ─── */

export function LatencyChart() {
  const data = [
    { label: 'WordPress (PHP + DB)', ttfb: 680, lcp: 4200 },
    { label: 'Next.js SSG', ttfb: 45, lcp: 1200 },
    { label: 'Next.js Edge', ttfb: 28, lcp: 890 },
  ];
  const max = 4500;
  return (
    <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h4 className="font-bold text-gray-900 mb-4 font-heading">TTFB & LCP Comparison (ms)</h4>
      <div className="space-y-4">
        {data.map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-semibold text-gray-800">{row.label}</span>
              <span className="text-gray-500">TTFB {row.ttfb}ms · LCP {row.lcp}ms</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600 rounded-full transition-all"
                style={{ width: `${(row.lcp / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4">Source: typical enterprise benchmarks, South African hosting.</p>
    </div>
  );
}

export function ArchitectureDiagram() {
  return (
    <div className="my-8 grid md:grid-cols-2 gap-4">
      <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
        <h4 className="font-bold text-red-800 mb-2">Legacy CMS Request</h4>
        <ol className="text-sm text-red-900 space-y-1 list-decimal list-inside">
          <li>DNS → Apache/Nginx</li>
          <li>PHP bootstrap + plugin load</li>
          <li>MySQL query chain (10–40 queries)</li>
          <li>Template render + minify</li>
          <li>HTML + 800KB JS/CSS to client</li>
        </ol>
      </div>
      <div className="p-5 bg-teal-50 border border-teal-200 rounded-xl">
        <h4 className="font-bold text-teal-800 mb-2">Next.js Static Generation</h4>
        <ol className="text-sm text-teal-900 space-y-1 list-decimal list-inside">
          <li>Pre-built HTML at deploy time</li>
          <li>Zero database round-trips</li>
          <li>Edge CDN cache hit</li>
          <li>React Server Components (no client JS for content)</li>
          <li>HTML + &lt;100KB critical assets</li>
        </ol>
      </div>
    </div>
  );
}

export function RevenueLossCalculator() {
  const [traffic, setTraffic] = useState(5000);
  const [cvr, setCvr] = useState(3);
  const [aov, setAov] = useState(15000);
  const slowPenalty = 0.35;
  const lostRevenue = Math.round(traffic * (cvr / 100) * slowPenalty * aov);
  return (
    <div className="my-8 p-6 bg-gray-900 text-white rounded-xl">
      <h4 className="font-bold mb-4 font-heading text-teal-400">Revenue Loss Calculator</h4>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <label className="text-sm">
          Monthly sessions
          <input type="number" value={traffic} onChange={(e) => setTraffic(+e.target.value)} className="mt-1 w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600" />
        </label>
        <label className="text-sm">
          Conversion rate (%)
          <input type="number" step="0.1" value={cvr} onChange={(e) => setCvr(+e.target.value)} className="mt-1 w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600" />
        </label>
        <label className="text-sm">
          Avg deal value (ZAR)
          <input type="number" value={aov} onChange={(e) => setAov(+e.target.value)} className="mt-1 w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600" />
        </label>
      </div>
      <p className="text-2xl font-bold text-red-400">
        Estimated monthly revenue at risk: R{lostRevenue.toLocaleString()}
      </p>
      <p className="text-sm text-gray-400 mt-2">Assumes 35% conversion drop from LCP &gt; 2.5s (Google/CWV data).</p>
    </div>
  );
}

export function JsonLdCodeBlock({ title = 'BlogPosting Schema' }: { title?: string }) {
  const code = `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Answer Engine Optimization Guide",
  "author": { "@type": "Person", "name": "Frank Smit" },
  "publisher": { "@type": "Organization", "name": "Endpoint Media" },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-summary", "h1"]
  }
}`;
  return (
    <div className="my-8 rounded-lg overflow-hidden border border-gray-200">
      <div className="bg-gray-800 text-gray-300 text-sm px-4 py-2 font-mono">{title}</div>
      <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm"><code>{code}</code></pre>
    </div>
  );
}

export function AECitationGraph() {
  const nodes = ['Your Article', 'ChatGPT', 'Perplexity', 'Google AI Overviews', 'Bing Copilot'];
  return (
    <div className="my-8 p-6 bg-teal-50 rounded-xl border border-teal-200 text-center">
      <h4 className="font-bold text-teal-900 mb-4 font-heading">AEO Citation Flow</h4>
      <div className="flex flex-wrap justify-center gap-3">
        {nodes.map((n, i) => (
          <React.Fragment key={n}>
            <span className="px-4 py-2 bg-white rounded-lg border border-teal-300 text-sm font-semibold text-teal-800">{n}</span>
            {i < nodes.length - 1 && <span className="text-teal-600 self-center">→</span>}
          </React.Fragment>
        ))}
      </div>
      <p className="text-sm text-teal-700 mt-4">Structured entities + clean headers = LLM citation eligibility.</p>
    </div>
  );
}

export function ComponentTearDown() {
  const [mode, setMode] = useState<'legacy' | 'modern'>('legacy');
  return (
    <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <div className="flex gap-2 mb-4">
        <button type="button" onClick={() => setMode('legacy')} className={`px-4 py-2 rounded-lg text-sm font-semibold ${mode === 'legacy' ? 'bg-red-600 text-white' : 'bg-white border'}`}>Legacy DOM</button>
        <button type="button" onClick={() => setMode('modern')} className={`px-4 py-2 rounded-lg text-sm font-semibold ${mode === 'modern' ? 'bg-teal-600 text-white' : 'bg-white border'}`}>React Server Components</button>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto">
        {mode === 'legacy'
          ? `<div class="wrapper">\n  <div class="row">\n    <div class="col-md-12">\n      <div class="elementor-widget">\n        ... 847 nested divs ...\n      </div>\n    </div>\n  </div>\n</div>\nPayload: 1.2MB CSS + 340KB JS`
          : `<main>\n  <Hero />        {/* Server Component */}\n  <Proof />       {/* Static HTML */}\n  <Audit />       {/* Client island */}\n</main>\nPayload: 42KB CSS + 18KB JS`}
      </pre>
    </div>
  );
}

export function TailwindPayloadChart() {
  return (
    <div className="my-8 grid sm:grid-cols-2 gap-4">
      <div className="p-4 bg-red-50 rounded-lg border border-red-200 text-center">
        <p className="text-3xl font-bold text-red-700">847KB</p>
        <p className="text-sm text-red-600">Bootstrap + theme CSS (unused 70%)</p>
      </div>
      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200 text-center">
        <p className="text-3xl font-bold text-teal-700">12KB</p>
        <p className="text-sm text-teal-600">Tailwind purged production bundle</p>
      </div>
    </div>
  );
}

export function MigrationChecklist() {
  const items = [
    'Export all URLs from GSC + Screaming Frog',
    'Map 301 redirects in next.config.mjs',
    'Validate canonical tags on every route',
    'Deploy sitemap.ts with lastModified dates',
    'Submit updated sitemap in Search Console',
    'Monitor 404 spike for 14 days post-launch',
  ];
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  return (
    <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h4 className="font-bold mb-4 font-heading">Migration Checklist</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <input type="checkbox" checked={!!checked[i]} onChange={() => setChecked((c) => ({ ...c, [i]: !c[i] }))} className="w-5 h-5 accent-teal-600" />
            <span className={checked[i] ? 'line-through text-gray-400' : 'text-gray-800'}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RedirectMapper() {
  return (
    <div className="my-8 rounded-lg overflow-hidden border border-gray-200">
      <div className="bg-gray-800 text-gray-300 text-sm px-4 py-2 font-mono">next.config.mjs redirects</div>
      <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm">{`async redirects() {
  return [
    { source: '/old-services', destination: '/services', permanent: true },
    { source: '/blog/:slug', destination: '/blog/:slug', permanent: false },
  ];
}`}</pre>
    </div>
  );
}

/* ─── Silo 2: Google Ads ─── */

export function ServerSideTrackingFlow() {
  const steps = ['Ad Click', 'Next.js Page Load', 'API Route /api/convert', 'Google Ads gtag', 'Offline Conversion Import'];
  return (
    <div className="my-8 flex flex-wrap items-center justify-center gap-2 p-6 bg-gray-50 rounded-xl">
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <span className="px-3 py-2 bg-teal-600 text-white text-xs font-bold rounded-lg">{s}</span>
          {i < steps.length - 1 && <span className="text-gray-400">→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export function CpcReductionSimulator() {
  const [qs, setQs] = useState(5);
  const baseCpc = 45;
  const adjustedCpc = Math.round(baseCpc * (10 / (qs + 5)));
  return (
    <div className="my-8 p-6 bg-gray-900 text-white rounded-xl">
      <h4 className="font-bold mb-4 text-teal-400 font-heading">CPC Reduction Simulator</h4>
      <label className="text-sm block mb-4">
        Quality Score: {qs}/10
        <input type="range" min={1} max={10} value={qs} onChange={(e) => setQs(+e.target.value)} className="w-full mt-2 accent-teal-500" />
      </label>
      <p className="text-xl">Estimated CPC at QS {qs}: <strong className="text-teal-400">R{adjustedCpc}</strong> (baseline R{baseCpc} at QS 5)</p>
    </div>
  );
}

export function AlgorithmTrainingGraph() {
  return (
    <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h4 className="font-bold mb-3 font-heading">Smart Bidding Feedback Loop</h4>
      <p className="text-sm text-gray-600 mb-4">Clean conversion data → faster algorithm learning → lower CPA within 30–45 days.</p>
      <div className="h-32 flex items-end gap-2">
        {[20, 35, 50, 65, 80, 92].map((h, i) => (
          <div key={i} className="flex-1 bg-teal-600 rounded-t" style={{ height: `${h}%` }} title={`Week ${i + 1}`} />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-2">Conversion signal quality over 6 weeks</p>
    </div>
  );
}

export function LeadScoringMatrix() {
  const rows = [
    { tier: 'A', signal: 'Form + phone + pricing page', action: 'Sales call within 4h' },
    { tier: 'B', signal: 'Case study + contact page', action: 'Email nurture sequence' },
    { tier: 'C', signal: 'Blog only', action: 'Retargeting + content drip' },
  ];
  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left font-bold">Tier</th>
            <th className="px-4 py-2 text-left font-bold">Intent Signal</th>
            <th className="px-4 py-2 text-left font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.tier} className="border-t">
              <td className="px-4 py-2 font-bold text-teal-700">{r.tier}</td>
              <td className="px-4 py-2">{r.signal}</td>
              <td className="px-4 py-2">{r.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CpaProfitabilityDashboard() {
  return (
    <div className="my-8 grid sm:grid-cols-3 gap-4">
      {[
        { label: 'CPA', value: 'R1,240', sub: 'Target: R1,500' },
        { label: 'LTV', value: 'R85,000', sub: '12-month contract avg' },
        { label: 'ROAS', value: '6.8x', sub: 'Blended paid + organic' },
      ].map((m) => (
        <div key={m.label} className="p-4 bg-teal-50 rounded-xl border border-teal-200 text-center">
          <p className="text-xs uppercase text-teal-600 font-semibold">{m.label}</p>
          <p className="text-2xl font-bold text-teal-900">{m.value}</p>
          <p className="text-xs text-gray-500">{m.sub}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Silo 3: Local Dominance ─── */

export function SemanticSiloDiagram() {
  const hubs = ['Alberton Hub', 'Sandton Hub', 'Midrand Hub'];
  const spokes = ['Google Ads Alrode', 'Local SEO Wadeville', 'Manufacturing Germiston'];
  return (
    <div className="my-8 p-6 bg-gray-50 rounded-xl text-center">
      <div className="flex justify-center gap-4 mb-4 flex-wrap">
        {hubs.map((h) => (
          <span key={h} className="px-4 py-2 bg-teal-600 text-white rounded-lg font-bold text-sm">{h}</span>
        ))}
      </div>
      <div className="text-gray-400 mb-2">↓ spoke pages ↓</div>
      <div className="flex justify-center gap-2 flex-wrap">
        {spokes.map((s) => (
          <span key={s} className="px-3 py-1 bg-white border border-gray-300 rounded text-xs">{s}</span>
        ))}
      </div>
    </div>
  );
}

export function IndustrialBuyerJourney() {
  const phases = [
    { week: 'Week 1–2', action: 'Technical long-tail search (e.g. "Google Ads manufacturing Alrode")' },
    { week: 'Week 3–6', action: 'Case study + pricing page review' },
    { week: 'Week 7–12', action: 'Procurement verification, peer references' },
    { week: 'Week 13+', action: 'Contract negotiation & close' },
  ];
  return (
    <div className="my-8 space-y-3">
      {phases.map((p) => (
        <div key={p.week} className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-teal-600">
          <span className="font-bold text-teal-700 whitespace-nowrap">{p.week}</span>
          <span className="text-gray-700">{p.action}</span>
        </div>
      ))}
    </div>
  );
}

export function DesignTrustMetric() {
  return (
    <div className="my-8 grid sm:grid-cols-2 gap-4">
      <div className="p-6 bg-red-50 rounded-xl border border-red-200">
        <p className="text-4xl font-bold text-red-700">23%</p>
        <p className="text-sm text-red-600">Trust score: cluttered WP template</p>
      </div>
      <div className="p-6 bg-teal-50 rounded-xl border border-teal-200">
        <p className="text-4xl font-bold text-teal-700">78%</p>
        <p className="text-sm text-teal-600">Trust score: minimalist Next.js layout</p>
      </div>
    </div>
  );
}

export function JsonLdMultiLocation() {
  const code = `{
  "@type": "LocalBusiness",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -26.2678,
    "longitude": 28.1225
  },
  "areaServed": ["Alrode", "Wadeville", "Germiston"]
}`;
  return (
    <div className="my-8 rounded-lg overflow-hidden border border-gray-200">
      <div className="bg-gray-800 text-gray-300 text-sm px-4 py-2 font-mono">LocalBusiness + GeoCoordinates</div>
      <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm"><code>{code}</code></pre>
    </div>
  );
}

export function KmlIntegrationMap() {
  return (
    <div className="my-8 p-6 bg-teal-50 rounded-xl border border-teal-200">
      <h4 className="font-bold text-teal-900 mb-2 font-heading">KML + Sitemap Integration</h4>
      <p className="text-sm text-teal-800">
        <code className="bg-white px-2 py-1 rounded">/alberton-service-area.kml</code> declared in robots.ts alongside sitemap.xml.
        Geo polygons reinforce service-area entities for regional map pack dominance.
      </p>
    </div>
  );
}
