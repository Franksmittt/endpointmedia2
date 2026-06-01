export default function BlogPostLoading() {
  return (
    <div className="bg-black text-zinc-300">
      <section className="relative overflow-hidden border-b border-zinc-800 bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 animate-pulse">
        <div className="mx-auto max-w-5xl space-y-4 text-center">
          <div className="mx-auto h-4 w-32 rounded bg-zinc-800" />
          <div className="mx-auto h-12 max-w-2xl rounded bg-zinc-800" />
          <div className="mx-auto h-6 max-w-xl rounded bg-zinc-800/80" />
          <div className="mx-auto h-4 w-48 rounded bg-zinc-900" />
        </div>
      </section>

      <article className="bg-zinc-950 py-20 md:py-28 animate-pulse">
        <div className="container mx-auto space-y-4 px-6">
          <div className="h-4 w-full rounded bg-zinc-800/80" />
          <div className="h-4 w-11/12 rounded bg-zinc-800/80" />
          <div className="h-4 w-full rounded bg-zinc-800/80" />
          <div className="h-4 w-10/12 rounded bg-zinc-800/80" />
          <div className="mt-8 h-32 rounded-sm border border-zinc-800 bg-zinc-900/50" />
          <div className="h-4 w-full rounded bg-zinc-800/80" />
          <div className="h-4 w-9/12 rounded bg-zinc-800/80" />
        </div>
      </article>
    </div>
  );
}
