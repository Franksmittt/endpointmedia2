// src/app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero, PageSection } from '@/components/layout/page-ui';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog/posts';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'B2B Web Architecture, Google Ads & Local SEO Blog',
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
  'meta-ads': 'Meta Ads Engineering',
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
    blogPost: posts.slice(0, 25).map((post) => ({
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

      <PageHero
        kicker="Insights"
        title="Endpoint Media Insights"
        description="High-intent technical content for B2B operators: web architecture, Google Ads engineering, and regional SEO dominance. Zero fluff, deployment-ready intelligence."
        primaryCta={{ href: '/contact', label: 'Work with us' }}
        secondaryCta={{ href: '/services/google-ads', label: 'Google Ads services' }}
      />

      <PageSection tone="zinc">
        <div className="mx-auto max-w-4xl">
          <header className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Cornerstone Articles &amp; Insights</h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              25 technical cornerstone posts across four content silos, plus Johannesburg market guides.
            </p>
          </header>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="group border-b border-zinc-800 pb-8">
                <header className="mb-3">
                  <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>&middot;</span>
                    <span className="font-medium text-zinc-300">{post.category}</span>
                    {post.silo && (
                      <>
                        <span>&middot;</span>
                        <span className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                          {SILO_LABELS[post.silo]}
                        </span>
                      </>
                    )}
                    <span>&middot;</span>
                    <span>{post.readingTimeMinutes} min read</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="text-2xl font-bold leading-tight text-white transition-colors group-hover:text-zinc-300 md:text-3xl">
                      {post.title}
                    </h3>
                  </Link>
                </header>
                <p className="mb-4 text-base leading-relaxed text-zinc-400">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-zinc-300 transition-colors group-hover:text-white"
                >
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default BlogIndexPage;
