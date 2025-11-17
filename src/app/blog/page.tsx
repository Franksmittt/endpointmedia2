// src/app/blog/page.tsx
import React from 'react';
import Link from 'next/link';

// METADATA: Highly optimized for informational intent and local relevance
export const metadata = {
  title: "Johannesburg Web Design & Local SEO Blog | Endpoint Media Insights",
  description: "Expert insights on web design, local SEO, and lead generation strategies specifically for Johannesburg service businesses. Grow your business with Endpoint Media.",
};

// --- Placeholder Blog Post Data (UPDATED FOR STRATEGY) ---
const placeholderPosts = [
  {
    // POST 1 (PILLAR)
    slug: 'the-true-cost-of-a-website-in-johannesburg',
    title: 'The True Cost of a Website in Johannesburg: 2025 Price Guide',
    excerpt: 'Your comprehensive guide to JHB web design prices. We break down costs by page, e-commerce, and maintenance fees. Get full price transparency.',
    date: 'October 30, 2025',
    category: 'Pricing & ROI',
  },
  {
    // POST 2 (COMMERCIAL)
    slug: 'freelancer-vs-agency-the-low-risk-choice-for-johannesburg',
    title: 'Freelancer vs. Agency: The Low-Risk Choice for Johannesburg Web Design',
    excerpt: 'Agencies are expensive. Freelancers are risky. We break down the true cost, risk, and capacity for Joburg businesses to choose the right web design partner.',
    date: 'October 23, 2025',
    category: 'Business Strategy',
  },
  {
    // POST 3 (TECHNICAL AUTHORITY)
    slug: 'the-schema-vacuum-technical-seo-advantage',
    title: 'The Schema Vacuum: The Technical SEO Advantage All Your Johannesburg Competitors Are Missing',
    excerpt: 'We reveal the one technical advantage local competitors ignore. Learn what Schema Markup is, why 100% of Joburg agencies fail to use it, and how it earns you Rich Snippets.',
    date: 'October 15, 2025',
    category: 'Technical SEO',
  },
  {
    // POST 4 (DIY-INTERCEPTION)
    slug: 'wix-vs-wordpress-guide-johannesburg-small-businesses',
    title: 'Wix vs WordPress: A Guide for Johannesburg Small Businesses (2025)',
    excerpt: 'DIY website builders vs custom WordPress development. We break down the true costs, limitations, and when DIY solutions fail Johannesburg businesses. Learn when to hire a professional.',
    date: 'November 5, 2025',
    category: 'Business Strategy',
  },
  {
    // POST 5 (EXPANSION)
    slug: 'how-much-does-website-cost-south-africa-2025',
    title: 'How Much Does a Website Cost in South Africa? Complete 2025 Pricing Guide',
    excerpt: 'Your definitive guide to website costs in South Africa. We break down pricing by provider, complexity, and functionality. Includes hidden costs, maintenance fees, and ROI analysis.',
    date: 'November 12, 2025',
    category: 'Pricing & ROI',
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
            {placeholderPosts.length > 0 ?
            (
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