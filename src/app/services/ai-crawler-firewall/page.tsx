import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL, ORG_ID, buildMetadata, secureJsonLD } from '@/lib/seo';

const PAGE_PATH = '/services/ai-crawler-firewall';

const botPolicyRows = [
  {
    className: 'Training scrapers',
    examples: 'GPTBot, CCBot, FacebookBot',
    action: '403 block at the edge before origin compute is spent.',
  },
  {
    className: 'Spoofed search bots',
    examples: 'Fake Googlebot or bingbot user agents',
    action: 'CIDR manifest check plus rDNS and forward DNS verification.',
  },
  {
    className: 'Headless automation',
    examples: 'Playwright, undetected-chromedriver, scripted Chromium',
    action: 'JA4 TLS fingerprint blocklist and anomaly headers.',
  },
  {
    className: 'Live retrieval agents',
    examples: 'PerplexityBot, ChatGPT-User, OAI-SearchBot, Claude-Web',
    action: 'Explicit allow rules so AI search visibility remains intact.',
  },
];

const firewallLayers = [
  {
    title: 'JA4 TLS fingerprinting',
    body:
      'We inspect edge-injected JA4 fingerprints to identify automation stacks that hide behind normal browser user agents.',
  },
  {
    title: 'Cryptographic bot verification',
    body:
      'Search bots are verified against IP manifests first, then reverse DNS plus forward DNS confirmation when needed.',
  },
  {
    title: 'Crawler allow and deny policy',
    body:
      'We separate revenue-positive live retrieval agents from resource-draining model-training scrapers.',
  },
  {
    title: 'Asset rate limiting',
    body:
      'Unverified bot-like traffic hitting static assets is rate limited while verified search bots receive immutable cache headers.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Enterprise AI Crawler Firewalls & Bot Management',
    description:
      'Protect server costs and data assets with JA4 TLS fingerprinting, search bot verification, scraper blocking, and AI live-retrieval allowlisting at the edge.',
    path: PAGE_PATH,
    keywords: [
      'AI crawler firewall',
      'JA4 TLS fingerprinting',
      'GPTBot blocking',
      'Playwright bot detection',
      'enterprise bot management',
      'AI scraper firewall',
    ],
  });
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Enterprise AI Crawler Firewalls & Bot Management',
  serviceType: 'Cybersecurity and Technical SEO',
  description:
    'Edge middleware that blocks training scrapers and spoofed bots while allowing verified search and live-retrieval agents.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  url: `${BASE_URL}${PAGE_PATH}`,
};

export default function AiCrawlerFirewallPage() {
  return (
    <article className="bg-black text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }}
      />

      <section data-chunk-boundary="true" className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            AI Firewall - Bot Verification - JA4
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Enterprise AI Crawler Firewalls & Bot Management
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Enterprises are bleeding server costs because model-training scrapers steal data at
            scale, while malicious bots use headless browsers like Playwright to impersonate real
            users. We deploy JA4 TLS fingerprinting and cryptographic bot verification at the edge:
            block data thieves, allow live retrieval, and protect AI search visibility.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-zinc-200">
              Request Firewall Audit
            </Link>
            <Link href="/services/technical-seo-edge-compute" className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-7 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900">
              View Edge SEO Systems
            </Link>
          </div>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Crawler Policy Matrix
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Not every bot deserves the same response.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Blocking every AI user agent destroys answer-engine visibility. Allowing every bot
              burns compute and exposes data. We classify intent at the edge and return the correct
              response before requests touch expensive application paths.
            </p>
          </div>

          <table className="w-full border border-zinc-800 text-left text-sm">
            <thead className="bg-black">
              <tr>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Crawler Class</th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Examples</th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Edge Action</th>
              </tr>
            </thead>
            <tbody>
              {botPolicyRows.map((row) => (
                <tr key={row.className} data-chunk-boundary="true" className="border-t border-zinc-800">
                  <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                    {row.className}
                  </th>
                  <td className="px-4 py-4 align-top text-zinc-400">{row.examples}</td>
                  <td className="px-4 py-4 align-top text-zinc-400">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {firewallLayers.map((item) => (
              <article key={item.title} data-chunk-boundary="true" className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-chunk-boundary="true" className="border-t border-zinc-800 bg-zinc-950 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Stop paying for hostile crawlers.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            We protect serverless compute, static assets, and private business logic while keeping
            verified search and live-retrieval agents open for discovery.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-sm bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-zinc-200">
            Build My AI Firewall
          </Link>
        </div>
      </section>
    </article>
  );
}
