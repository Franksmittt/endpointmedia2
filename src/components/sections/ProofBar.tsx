import Link from 'next/link';

const caseStudies = [
  { name: 'Rhino Panel Beaters', href: '/case-studies/rhino-panel-beaters' },
  { name: 'Alberton Battery Mart', href: '/case-studies/alberton-battery-mart' },
  { name: 'Alberton Tyre Clinic', href: '/case-studies/alberton-tyre-clinic' },
  { name: 'Maverick Painting Contractors', href: '/case-studies/maverick-painting-contractors' },
  { name: 'QJ Paint World', href: '/case-studies/qj-paint-world' },
  { name: 'Sakana no Ichi', href: '/case-studies/sakana-no-ichi' },
  { name: 'AS Brokers', href: '/case-studies/as-brokers' },
];

export default function ProofBar() {
  const marqueeItems = [...caseStudies, ...caseStudies];

  return (
    <section className="bg-zinc-950/85 py-8 md:py-10">
      <div className="container mx-auto px-6">
        <p className="mb-4 text-center text-xs font-mono uppercase tracking-[0.18em] text-zinc-500">
          Engineering Revenue Systems For
        </p>
        <div className="proof-marquee relative overflow-hidden">
          <div className="proof-marquee-track flex w-max items-center gap-3">
            {marqueeItems.map((study, index) => (
              <Link
                key={`${study.name}-${index}`}
                href={study.href}
                className="whitespace-nowrap rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
              >
                {study.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

