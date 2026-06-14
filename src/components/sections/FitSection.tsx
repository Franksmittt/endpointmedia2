import Link from 'next/link';

const fitCriteria = [
  {
    title: 'Pipeline-first operators',
    body: 'You measure success in qualified leads, booked calls, and revenue. Not page views or vanity redesigns.',
  },
  {
    title: 'Infrastructure over cosmetics',
    body: 'You understand that ranking, conversion, and paid traffic must run as one accountable system.',
  },
  {
    title: 'Execution ownership',
    body: 'You value technical rigor, transparent reporting, and senior-level delivery speed over agency theatre.',
  },
];

const declineCriteria = [
  {
    title: 'Price-shopping mandates',
    body: 'Projects where the cheapest quote wins, regardless of architecture quality or long-term ROI.',
  },
  {
    title: 'Recommendation without implementation',
    body: 'Teams that want a report but refuse to act on the structural fixes required to move the needle.',
  },
  {
    title: 'Guaranteed outcomes, zero accountability',
    body: 'Operators expecting magic results without operational follow-through on their side of the partnership.',
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5 shrink-0 text-white"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5 shrink-0 text-zinc-600"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function FitSection() {
  return (
    <section data-chunk-boundary="true" className="bg-zinc-950 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Selective Partnership
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            We Partner With Operators Who Execute. Not With Browsers.
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Endpoint Media is intentionally selective. We maintain a small roster so every client
            gets architecture-grade attention. Not a rotating junior account team and a recycled
            template.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-sm border border-zinc-800 bg-zinc-900/40 lg:grid lg:grid-cols-2">
          <article className="border-b border-zinc-800 p-8 md:p-10 lg:border-b-0 lg:border-r">
            <div className="mb-8 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-zinc-700 bg-black">
                <CheckIcon />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Partnership Criteria
                </p>
                <h3 className="text-xl font-semibold text-white">Strong Fit</h3>
              </div>
            </div>

            <ul className="space-y-6">
              {fitCriteria.map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span className="font-mono text-xs leading-6 text-zinc-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-semibold text-zinc-100">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-black/40 p-8 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-zinc-800 bg-zinc-950">
                <XIcon />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
                  We Decline
                </p>
                <h3 className="text-xl font-semibold text-zinc-400">Not A Fit</h3>
              </div>
            </div>

            <ul className="space-y-6">
              {declineCriteria.map((item, index) => (
                <li key={item.title} className="flex gap-4 opacity-80">
                  <span className="font-mono text-xs leading-6 text-zinc-700">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-semibold text-zinc-500">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-600">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-sm border border-zinc-800 bg-black/60 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Limited Intake
            </p>
            <p className="mt-2 text-zinc-200">
              We onboard fewer than{' '}
              <span className="font-semibold text-white">4 new partnerships per quarter</span> to
              protect delivery quality.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Apply For Partnership
          </Link>
        </div>
      </div>
    </section>
  );
}
