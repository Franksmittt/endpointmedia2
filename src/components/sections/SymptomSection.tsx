const symptoms = [
  {
    title: 'Invisible In AI Search',
    body: 'Your services are absent from ChatGPT, Gemini, and Perplexity because your structure fails crawler expectations.',
  },
  {
    title: 'Leaky Acquisition Spend',
    body: 'Paid traffic lands on pages that cannot convert, and your pipeline bleeds because trust architecture is missing.',
  },
  {
    title: 'Technical Debt Hidden As Design',
    body: 'Bloated templates and weak metadata kill discoverability, speed, and buyer confidence before sales even starts.',
  },
];

export default function SymptomSection() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
          Why Serious Businesses Keep Losing Visibility And Revenue
        </h2>
        <p className="mt-5 max-w-3xl text-zinc-400">
          We are not solving a cosmetic website problem. We are fixing an infrastructure problem that blocks ranking, weakens trust, and suppresses lead flow.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {symptoms.map((symptom) => (
            <article key={symptom.title} className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
              <h3 className="text-xl font-semibold text-white">{symptom.title}</h3>
              <p className="mt-3 text-zinc-400">{symptom.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

