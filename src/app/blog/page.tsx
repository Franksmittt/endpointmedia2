// src/app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog/posts';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'B2B Web Architecture, Google Ads & Local SEO Blog | Endpoint Media',
    description:
      'Technical insights on Next.js web architecture, Core Web Vitals, Google Ads optimization, Answer Engine Optimization, and advanced Local SEO for South African B2B operators.',
    path: '/blog',
    keywords: [
      'B2B web architecture blog',
      'Core Web Vitals optimization',
      'Google Ads optimization South Africa',
      'Answer Engine Optimization',
      'local SEO strategy Gauteng',
      'endpoint media insights',
    ],
    openGraph: { type: 'website' },
  });
}

const SILO_LABELS: Record<string, string> = {
  'web-architecture': 'Web Architecture',
  'google-ads': 'Google Ads',
  'local-dominance': 'Local Dominance',
};

const BlogIndexPage = () => {
  const posts = getAllPosts();

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${BASE_URL}/blog#blog`,
    name: 'Endpoint Media Insights',
    description:
      'Technical B2B content on web architecture, performance marketing, and regional SEO dominance.',
    url: `${BASE_URL}/blog`,
    publisher: { '@id': ORG_ID },
    blogPost: posts.slice(0, 20).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${BASE_URL}/blog/${post.slug}`,
      datePublished: new Date(post.date).toISOString(),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(blogSchema) }}
      />

      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Endpoint Media Insights
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            High-intent technical content for B2B operators: web architecture, Google Ads engineering,
            and regional SEO dominance — zero fluff, deployment-ready intelligence.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
              Cornerstone Articles &amp; Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              15 technical cornerstone posts across three content silos, plus Johannesburg market guides.
            </p>
          </header>

          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="group border-b border-gray-200 pb-8">
                <header className="mb-3">
                  <div className="text-sm text-gray-500 mb-1 flex flex-wrap gap-2 items-center">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>&middot;</span>
                    <span className="font-medium text-teal-700">{post.category}</span>
                    {post.silo && (
                      <>
                        <span>&middot;</span>
                        <span className="text-xs uppercase tracking-wider text-gray-400">
                          {SILO_LABELS[post.silo]}
                        </span>
                      </>
                    )}
                    <span>&middot;</span>
                    <span className="text-gray-400">{post.readingTimeMinutes} min read</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-800 group-hover:text-teal-700 transition duration-300 leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                </header>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-teal-600 hover:text-teal-800 font-semibold text-sm group-hover:underline"
                >
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndexPage;
