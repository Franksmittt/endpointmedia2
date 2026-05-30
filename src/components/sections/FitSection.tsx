const fit = [
  'Service businesses committed to measurable pipeline growth.',
  'Operators willing to prioritize infrastructure over cosmetic redesign.',
  'Teams that value technical rigor, transparency, and execution speed.',
];

const notFit = [
  'Price-shopping projects seeking the cheapest website option.',
  'Businesses avoiding implementation ownership after recommendations.',
  'Teams expecting guaranteed outcomes without operational follow-through.',
];

export default function FitSection() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
          Who We Partner With (And Who We Don&apos;t)
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-emerald-700/30 bg-emerald-950/10 p-6">
            <h3 className="text-xl font-semibold text-emerald-300">Strong Fit</h3>
            <ul className="mt-4 space-y-3 text-zinc-300">
              {fit.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm border border-red-700/30 bg-red-950/10 p-6">
            <h3 className="text-xl font-semibold text-red-300">Not A Fit</h3>
            <ul className="mt-4 space-y-3 text-zinc-300">
              {notFit.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

