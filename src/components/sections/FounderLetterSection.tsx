import Link from 'next/link';

export default function FounderLetterSection() {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Founder Note
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
            Johannesburg · Senior-Led Delivery
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-4xl font-bold leading-[1.06] tracking-[-1.5px] text-white md:text-5xl xl:text-6xl">
              You Don&apos;t Need Another Agency.
            </h2>
            <div
              aria-hidden="true"
              className="mt-5 h-px w-28 bg-gradient-to-r from-teal-400/90 to-transparent"
            />
            <p className="mt-5 text-3xl font-bold leading-[1.1] tracking-[-1px] text-zinc-500 md:text-4xl">
              You Need A Revenue System.
            </p>
          </div>

          <div className="relative">
            <span
              className="pointer-events-none absolute -left-2 -top-10 select-none font-serif text-[7rem] leading-none text-zinc-900 md:-left-6 md:text-[9rem]"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <div className="relative space-y-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              <p className="text-zinc-300">
                Most service businesses are not losing because they lack effort. They are losing
                because their digital infrastructure is fragmented — ranking, paid traffic, and
                conversion treated as separate projects instead of one accountable growth system.
              </p>

              <blockquote className="border-l border-teal-400/60 bg-zinc-900/35 py-3 pl-6 pr-4 text-xl leading-snug text-white md:text-2xl">
                Endpoint Media exists to unify discoverability, acquisition, and conversion into a
                single technical stack you can actually measure.
              </blockquote>

              <p>
                We do not sell cosmetic refreshes or monthly reports nobody reads. We engineer
                architecture-first systems, optimize with evidence, and keep senior ownership on
                delivery from audit through execution. If that standard matches how you operate, we
                should talk.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-8 border-t border-zinc-800 pt-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm border border-zinc-700 bg-black font-mono text-base text-white">
                  FS
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Frank Smit</p>
                  <p className="text-sm text-zinc-500">Founder, Endpoint Media</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:items-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
                >
                  Start The Conversation
                </Link>
                <Link
                  href="/about/author/frank-smit"
                  className="text-sm text-zinc-500 underline-offset-4 hover:text-zinc-300 hover:underline"
                >
                  Read full profile →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
