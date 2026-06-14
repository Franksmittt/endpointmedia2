export default function FinalCtaSection() {
  return (
    <section data-chunk-boundary="true" className="bg-black py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center md:p-12">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Ready To Replace Guesswork With A Technical Growth System?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
            Start with the audit. See exactly where you are losing visibility and pipeline velocity,
            then decide whether to unlock the full blueprint or bring us in to execute.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#hero-headline"
              className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Run Deep Audit
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
            >
              Book 15-Min Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

