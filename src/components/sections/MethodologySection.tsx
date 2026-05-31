const phases = [
  {
    step: '01',
    title: 'Forensic Audit',
    body: 'We map crawler visibility, conversion friction, and technical debt across your acquisition stack.',
  },
  {
    step: '02',
    title: 'Architecture Refactor',
    body: 'We rebuild trust and discoverability layers so your site can rank, convert, and scale predictably.',
  },
  {
    step: '03',
    title: 'Pipeline Velocity',
    body: 'We operationalize SEO + paid traffic + conversion instrumentation into a measurable revenue system.',
  },
];

export default function MethodologySection() {
  return (
    <section className="bg-zinc-950 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
          The Methodology We Use To Outperform Typical Agencies
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {phases.map((phase) => (
            <article key={phase.step} className="rounded-sm border border-zinc-800 bg-black/60 p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-zinc-500">{phase.step}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{phase.title}</h3>
              <p className="mt-3 text-zinc-400">{phase.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

