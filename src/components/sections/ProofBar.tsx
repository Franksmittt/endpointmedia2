export default function ProofBar() {
  const brands = [
    'AS Brokers',
    'Alberton Tyre Clinic',
    'Rhino Panel Beaters',
    'Maverick Contractors',
    'QJ Paint World',
  ];

  return (
    <section className="border-y border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-6">
        <p className="mb-4 text-center text-xs font-mono uppercase tracking-[0.18em] text-zinc-500">
          Engineering Revenue Systems For
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-center text-sm text-zinc-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

