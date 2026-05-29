export default function BlogPostLoading() {
  return (
    <>
      <section className="bg-gray-100 py-16 md:py-24 border-b border-gray-200 animate-pulse">
        <div className="container mx-auto px-6 max-w-3xl text-center space-y-4">
          <div className="h-4 w-32 bg-gray-300 rounded mx-auto" />
          <div className="h-12 bg-charcoal/10 rounded-lg max-w-2xl mx-auto" />
          <div className="h-6 bg-gray-300 rounded max-w-xl mx-auto" />
          <div className="h-4 w-48 bg-gray-200 rounded mx-auto" />
        </div>
      </section>

      <article className="py-16 md:py-20 bg-white animate-pulse">
        <div className="container mx-auto px-6 max-w-3xl space-y-6">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-11/12" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-10/12" />
          <div className="h-32 bg-gray-100 rounded-xl border border-gray-200 mt-8" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-9/12" />
        </div>
      </article>
    </>
  );
}
