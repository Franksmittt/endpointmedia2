'use client';

import React, { useState } from 'react';

export function RevenueLossCalculator() {
  const [traffic, setTraffic] = useState(5000);
  const [cvr, setCvr] = useState(3);
  const [aov, setAov] = useState(15000);
  const slowPenalty = 0.35;
  const lostRevenue = Math.round(traffic * (cvr / 100) * slowPenalty * aov);
  return (
    <div className="my-8 p-6 bg-gray-900 text-white rounded-sm">
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
      <p className="text-sm text-zinc-500 mt-2">Assumes 35% conversion drop from LCP &gt; 2.5s (Google/CWV data).</p>
    </div>
  );
}

export function ComponentTearDown() {
  const [mode, setMode] = useState<'legacy' | 'modern'>('legacy');
  return (
    <div className="my-8 p-6 bg-zinc-950/70 rounded-sm border border-zinc-800">
      <div className="flex gap-2 mb-4">
        <button type="button" onClick={() => setMode('legacy')} className={`px-4 py-2 rounded-sm text-sm font-semibold ${mode === 'legacy' ? 'bg-red-600 text-white' : 'border border-zinc-700 bg-black/40 text-zinc-300'}`}>Legacy DOM</button>
        <button type="button" onClick={() => setMode('modern')} className={`px-4 py-2 rounded-sm text-sm font-semibold ${mode === 'modern' ? 'bg-teal-600 text-white' : 'border border-zinc-700 bg-black/40 text-zinc-300'}`}>React Server Components</button>
      </div>
      <pre className="text-xs bg-gray-900 text-zinc-400 p-4 rounded-lg overflow-x-auto">
        {mode === 'legacy'
          ? `<div class="wrapper">\n  <div class="row">\n    <div class="col-md-12">\n      <div class="elementor-widget">\n        ... 847 nested divs ...\n      </div>\n    </div>\n  </div>\n</div>\nPayload: 1.2MB CSS + 340KB JS`
          : `<main>\n  <Hero />        {/* Server Component */}\n  <Proof />       {/* Static HTML */}\n  <Audit />       {/* Client island */}\n</main>\nPayload: 42KB CSS + 18KB JS`}
      </pre>
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
    <div className="my-8 p-6 bg-zinc-950/70 rounded-sm border border-zinc-800">
      <h4 className="font-bold mb-4 font-heading">Migration Checklist</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <input type="checkbox" checked={!!checked[i]} onChange={() => setChecked((c) => ({ ...c, [i]: !c[i] }))} className="w-5 h-5 accent-teal-600" />
            <span className={checked[i] ? 'line-through text-zinc-500' : 'text-zinc-300'}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CpcReductionSimulator() {
  const [qs, setQs] = useState(5);
  const baseCpc = 45;
  const adjustedCpc = Math.round(baseCpc * (10 / (qs + 5)));
  return (
    <div className="my-8 p-6 bg-gray-900 text-white rounded-sm">
      <h4 className="font-bold mb-4 text-teal-400 font-heading">CPC Reduction Simulator</h4>
      <label className="text-sm block mb-4">
        Quality Score: {qs}/10
        <input type="range" min={1} max={10} value={qs} onChange={(e) => setQs(+e.target.value)} className="w-full mt-2 accent-teal-500" />
      </label>
      <p className="text-xl">Estimated CPC at QS {qs}: <strong className="text-teal-400">R{adjustedCpc}</strong> (baseline R{baseCpc} at QS 5)</p>
    </div>
  );
}
