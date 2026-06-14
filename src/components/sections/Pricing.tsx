import Link from 'next/link';

const packages = [
  {
    name: 'Strategic Foundation',
    description: 'For businesses ready to outrank local competitors and establish market authority.',
    price: 'R25,000',
    tag: 'Entry Tier',
    highlight: false,
    features: [
      'Deep competitor & market analysis',
      'Custom 5-7 page architecture with Next.js 15',
      'Entity-based SEO with Knowledge Graph integration',
      'Comprehensive suburb targeting strategy',
      'Performance engineered (LCP <1s, 100/100 Core Web Vitals)',
      '60-day intensive research & build process',
    ],
    cta: 'Start Strategic Foundation',
  },
  {
    name: 'Market Dominance',
    description: 'For serious operators who want to completely outrank every competitor in their market.',
    price: 'R45,000',
    tag: 'Most Popular',
    highlight: true,
    features: [
      'Everything in Strategic Foundation, plus:',
      'Complete competitor teardown & positioning strategy',
      '10-15 page architecture with service clusters',
      'Advanced semantic SEO & entity injection',
      'Custom conversion funnels & lead generation systems',
      '90-day intensive research, build & optimization',
      'Post-launch growth acceleration program',
    ],
    cta: 'Start Market Dominance',
  },
  {
    name: 'Category Authority',
    description: 'For businesses determined to become the undisputed leader in their category.',
    price: 'R75,000+',
    tag: 'Enterprise',
    highlight: false,
    features: [
      'Everything in Market Dominance, plus:',
      'Full market mapping & competitive intelligence',
      'Custom integrations & automation systems',
      'Multi-location/suburb expansion architecture',
      'Advanced analytics & conversion optimization',
      '120-day comprehensive strategy, build & scale',
      'Ongoing strategic partnership & optimization',
    ],
    cta: 'Start Category Authority',
  },
];

const includedItems = [
  'Premium hosting, domain & SSL',
  'Competitor and market research',
  'Strategic consultation included',
  'No monthly maintenance fees',
  'Self-sustaining Next.js architecture',
  'Technical SEO baseline and schema setup',
  'Core Web Vitals performance hardening',
  'Conversion-focused page architecture',
  'Analytics and event tracking foundation',
  'Post-launch QA and handover documentation',
];

const Pricing = () => {
  return (
    <section id="pricing" data-chunk-boundary="true" className="bg-zinc-950 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Transparent Pricing
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-1px] text-white md:text-5xl">
              Premium Investment.
              <span className="mt-1 block text-zinc-500">Maximum Return.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-zinc-800 lg:pl-12">
            <p className="text-lg leading-relaxed text-zinc-400">
              We don&apos;t compete on price. We compete on results. Every package is an intensive,
              research-driven investment engineered to put you above your competitors and generate
              measurable growth.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-zinc-600">
              Fewer clients · Senior-led delivery · Once-off architecture
            </p>
          </div>
        </div>

        <div className="mt-16 grid items-stretch gap-6 md:mt-20 md:gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`flex flex-col rounded-sm border p-8 ${
                pkg.highlight
                  ? 'border-zinc-500 bg-black'
                  : 'border-zinc-800 bg-zinc-950/60'
              }`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                {pkg.tag}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{pkg.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{pkg.description}</p>

              <p className="mt-6 flex flex-wrap items-baseline gap-x-2 text-4xl font-bold tracking-tight text-white">
                <span>{pkg.price}</span>
                <span className="text-base font-normal text-zinc-500">once-off</span>
              </p>

              <ul className="mt-8 flex-grow space-y-3 border-t border-zinc-800 pt-8 text-sm text-zinc-300">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-zinc-500" aria-hidden="true">
                      •
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 block w-full rounded-sm px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  pkg.highlight
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'border border-zinc-700 text-zinc-100 hover:bg-zinc-900'
                }`}
              >
                {pkg.cta}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 md:gap-8 lg:grid-cols-3">
          <div className="rounded-sm border border-zinc-800 bg-black/50 p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Not Sure Yet?
            </p>
            <p className="mt-3 text-zinc-300">
              Our Free Architecture Audit maps your market, competitors, and growth gaps, then
              recommends the right investment tier.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Book Free Architecture Audit
            </Link>
          </div>

          <div className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-6 md:p-8 lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              What&apos;s Included In Every Package
            </p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 md:grid-cols-2">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                  <span className="mt-2 h-px w-4 shrink-0 bg-zinc-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 font-mono text-xs uppercase tracking-[0.14em] leading-relaxed text-zinc-600 md:mt-16">
          Pricing reflects intensive research, custom engineering, and strategic consultation. We
          work exclusively with businesses committed to market leadership.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
