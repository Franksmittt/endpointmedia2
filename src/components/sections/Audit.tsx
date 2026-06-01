import React from 'react';
import { AuditForm } from '@/components/sections/AuditForm';

const deliverables = [
  'Live visibility and AEO infrastructure review',
  'Conversion friction and lead-leak diagnosis',
  'Priority roadmap with actionable next steps',
];

const Audit = () => {
  return (
    <section id="audit" className="bg-zinc-950 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex h-full flex-col rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Growth Audit
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-1px] text-white md:text-5xl">
              See Exactly Where Your Pipeline Is Leaking.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
              Request a free, no-obligation audit. We map your discoverability gaps, conversion
              bottlenecks, and technical debt. Then show you what to fix first for measurable
              growth in Johannesburg.
            </p>

            <ul className="mt-8 space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-2 h-px w-5 shrink-0 bg-zinc-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-auto pt-8 font-mono text-xs uppercase tracking-[0.16em] text-zinc-600">
              Limited audit capacity each month · Senior review on every submission
            </p>
          </div>

          <AuditForm />
        </div>
      </div>
    </section>
  );
};

export default Audit;
