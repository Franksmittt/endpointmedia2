import Link from 'next/link';

const metrics = [
  { stat: '38%', label: 'Average CPA reduction within 45 days' },
  { stat: '4.3x', label: 'Return on ad spend across service verticals' },
  { stat: '28', label: 'Leads captured per week after tracking fixes' },
  { stat: '12 hrs', label: 'Response time for campaign change requests' },
];

const capabilities = [
  {
    title: 'Intent-first campaign architecture',
    body: 'Campaigns structured by service, suburb, and urgency so high-value keywords get priority bids and dedicated landing pages.',
  },
  {
    title: 'Full tracking and attribution',
    body: 'GA4, server-side events, call tracking, and CRM hand-offs so every lead is tied to keyword, ad, and suburb.',
  },
  {
    title: 'Creative and CRO built in',
    body: 'Ad copy, responsive assets, and landing pages evolve together. Not as disconnected agency deliverables.',
  },
  {
    title: 'Operator-level reporting',
    body: 'Dashboards focused on cost per booked job and pipeline value. Not impressions, clicks, or vanity metrics.',
  },
];

const serviceLinks = [
  { href: '/services/google-ads', label: 'Google Ads Management' },
  { href: '/services/google-ads-landing-pages', label: 'Ads Landing Pages' },
  { href: '/services/performance-max-google-ads', label: 'Performance Max' },
  { href: '/services/google-ads-pricing', label: 'Ads Pricing' },
];

export default function GoogleAdsSection() {
  return (
    <section id="google-ads" data-chunk-boundary="true" className="bg-black py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Paid Search · Google Ads
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-1px] text-white md:text-5xl">
              Turn Wasted Ad Spend Into Predictable Pipeline.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              We rebuild Google Ads for Johannesburg service businesses in focused sprints: campaign
              architecture, landing pages, GA4 + call tracking, and relentless optimization tied to
              booked jobs and revenue.
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Built for emergency services, legal, medical, home improvement, and B2B operators
              across Sandton, Midrand, Alberton, and greater Johannesburg.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services/google-ads"
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                Explore Google Ads Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:bg-zinc-900"
              >
                Request Paid Search Audit
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-5 md:p-6"
              >
                <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {metric.stat}
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <article
              key={item.title}
              className="rounded-sm border border-zinc-800 bg-zinc-950/50 p-6"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-zinc-600">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-t border-zinc-800 pt-8">
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
