'use client';

import { useState } from 'react';

const formatCurrency = (num: number): string =>
  num.toLocaleString('en-ZA', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

export default function PricingCalculator() {
  const [pages, setPages] = useState(5);
  const [traffic, setTraffic] = useState(1000);
  const [conversion, setConversion] = useState(1);
  const [avgOrderValue, setAvgOrderValue] = useState(500);

  const templateCost = 15000;
  const nextjsCost = 35000;
  const speedGain = 3;
  const conversionImprovement = (speedGain * 7) / 100;
  const improvedConversion = conversion + conversion * conversionImprovement;
  const monthlyRevenueTemplate = traffic * (conversion / 100) * avgOrderValue;
  const monthlyRevenueNextjs = traffic * (improvedConversion / 100) * avgOrderValue;
  const annualRevenueGain = (monthlyRevenueNextjs - monthlyRevenueTemplate) * 12;
  const roi = ((annualRevenueGain - (nextjsCost - templateCost)) / (nextjsCost - templateCost)) * 100;

  return (
    <div className="space-y-8 rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 min-h-[400px]">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          ROI Calculator: Performance vs. Price
        </h3>
        <p className="text-zinc-500">
          Calculate the true cost of a slow website. Every second of load time costs you revenue.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold mb-2 text-white">Monthly Website Traffic</label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={traffic}
            onChange={(e) => setTraffic(Number(e.target.value))}
            className="w-full accent-teal-400 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-zinc-500 mt-1">
            <span>100</span>
            <span className="font-bold text-accent">{traffic.toLocaleString()} visitors/month</span>
            <span>10,000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-white">Current Conversion Rate (%)</label>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={conversion}
            onChange={(e) => setConversion(Number(e.target.value))}
            className="w-full accent-teal-400 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-zinc-500 mt-1">
            <span>0.5%</span>
            <span className="font-bold text-accent">{conversion}%</span>
            <span>5%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-white">Average Order Value (R)</label>
          <input
            type="range"
            min="100"
            max="5000"
            step="50"
            value={avgOrderValue}
            onChange={(e) => setAvgOrderValue(Number(e.target.value))}
            className="w-full accent-teal-400 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-zinc-500 mt-1">
            <span>R100</span>
            <span className="font-bold text-accent">R{avgOrderValue}</span>
            <span>R5,000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-white">Number of Pages</label>
          <input
            type="range"
            min="3"
            max="20"
            step="1"
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="w-full accent-teal-400 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-zinc-500 mt-1">
            <span>3</span>
            <span className="font-bold text-accent">{pages} pages</span>
            <span>20</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-sm border border-zinc-800 bg-zinc-950/70 border-l border-red-500/60">
          <h4 className="font-bold text-white mb-2 text-lg">Template Site (WordPress)</h4>
          <p className="text-4xl font-black text-red-600 mb-2">R{formatCurrency(templateCost)}</p>
          <p className="text-sm text-zinc-400 mb-3">Load Time: 3-5 seconds</p>
          <div className="space-y-1 text-sm">
            <p className="text-zinc-400">
              <strong>Monthly Revenue:</strong> R{formatCurrency(monthlyRevenueTemplate)}
            </p>
            <p className="text-red-600 font-bold">
              <strong>Annual Revenue Lost:</strong> R
              {formatCurrency(monthlyRevenueTemplate * conversionImprovement * 12)}
            </p>
            <p className="text-xs text-zinc-500 mt-2">*Due to slow load times affecting conversion rates</p>
          </div>
        </div>

        <div className="p-6 rounded-sm border border-teal-400/60 bg-zinc-950/90 text-white relative">
          <div className="absolute -top-3 -right-3 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold">
            RECOMMENDED
          </div>
          <h4 className="font-bold text-white mb-2 text-lg">Next.js Performance Asset</h4>
          <p className="text-4xl font-black text-white mb-2">R{formatCurrency(nextjsCost)}</p>
          <p className="text-sm text-white/80 mb-3">Load Time: &lt;1 second</p>
          <div className="space-y-1 text-sm">
            <p className="text-white">
              <strong>Monthly Revenue:</strong> R{formatCurrency(monthlyRevenueNextjs)}
            </p>
            <p className="text-green-300 font-bold">
              <strong>Annual Revenue Gain:</strong> +R{formatCurrency(annualRevenueGain)}
            </p>
            <p className="text-white font-bold mt-2">
              <strong>ROI:</strong> {roi.toFixed(0)}%
            </p>
          </div>
        </div>
      </div>

      <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
        <p className="text-sm text-zinc-400">
          <strong>Research Note:</strong> Google&apos;s Core Web Vitals research shows that a 1-second delay in
          page load time can reduce conversions by up to 7%. Next.js Server Components deliver HTML in under 200ms,
          while WordPress templates often take 3-5 seconds to fully render.
        </p>
      </div>
    </div>
  );
}
