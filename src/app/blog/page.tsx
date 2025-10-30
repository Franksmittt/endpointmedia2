// src/app/blog/page.tsx
import React from 'react';
import Link from 'next/link';

// METADATA: Highly optimized for informational intent and local relevance
export const metadata = {
  title: "Johannesburg Web Design & Local SEO Blog | Endpoint Media Insights",
  description: "Expert insights on web design, local SEO, and lead generation strategies specifically for Johannesburg service businesses. Grow your business with Endpoint Media.",
};

// --- Placeholder Blog Post Data ---
const placeholderPosts = [
  {
    slug: 'why-local-seo-matters-johannesburg',
    title: 'Why Johannesburg Businesses Can’t Ignore Local SEO in 2025',
    excerpt: 'Discover the crucial role local SEO plays in attracting customers in competitive Johannesburg suburbs like Sandton and Randburg.',
    date: 'October 25, 2025',
    category: 'Local SEO',
  },
  {
    slug: 'website-cost-vs-investment',
    title: 'Your Website: Cost Center or Revenue Engine?',
    excerpt: 'Shift your mindset from viewing your website as an expense to seeing it as a critical investment in lead generation for your Joburg business.',
    date: 'October 18, 2025',
    category: 'Business Strategy',
  },
  {
    slug: 'google-map-pack-dominance',
    title: 'How to Dominate the Google Map Pack in Johannesburg',
    excerpt: 'Practical steps to optimize your Google Business Profile and secure top placement in local search results, driving high-intent leads.',
    date: 'October 11, 2025',
    category: 'Local SEO',
  },
];
// --- End Placeholder Data ---

const BlogIndexPage = () => {
  return (
    <>
      {/* Hero Section for Blog Page */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Endpoint Media Insights
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Actionable strategies and expert advice on web design, local SEO, and digital growth, tailored for service businesses aiming to dominate the Johannesburg market.
          </p>
        </div>
      </section>

      {/* Blog Post Listing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl"> 
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
              Latest Articles & Insights
            </h2>
          </header>

          {/* List of Blog Posts */}
          <div className="space-y-12">
            {placeholderPosts.length > 0 ? (
              placeholderPosts.map((post) => (
                <article key={post.slug} className="group border-b border-gray-200 pb-8">
                  <header className="mb-3">
                    <div className="text-sm text-gray-500 mb-1">
                      <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                      {post.category && <span className="mx-2">&middot;</span>}
                      {post.category && <span className="font-medium text-teal-700">{post.category}</span>}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-800 group-hover:text-teal-700 transition duration-300 leading-tight">
                        {post.title}
                      </h3>
                    </Link>
                  </header>
                  <p className="text-gray-600 mb-4 text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-teal-600 hover:text-teal-800 font-semibold text-sm group-hover:underline"
                  >
                    Read More &rarr;
                  </Link>
                </article>
              ))
            ) : (
              <p className="text-center text-gray-600">No blog posts published yet. Check back soon!</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndexPage;