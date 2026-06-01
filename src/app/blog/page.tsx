// src/app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog/posts';
import type { BlogPostMeta, BlogSilo } from '@/lib/blog/types';

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

const SILO_CONFIG: Record<
  BlogSilo,
  { label: string; description: string }
> = {
  'web-architecture': {
    label: 'Web Architecture',
    description: 'Next.js performance, Core Web Vitals, AEO, and migration engineering.',
  },
  'google-ads': {
    label: 'Google Ads',
    description: 'Tracking, Quality Score, smart bidding, and high-ticket lead gen.',
  },
  'local-dominance': {
    label: 'Local Dominance',
    description: 'Semantic silos, schema, map pack, and regional SEO for Gauteng.',
  },
  'meta-ads': {
    label: 'Meta Ads Engineering',
    description: 'Andromeda, Entity IDs, creative factories, and CAPI pipelines.',
  },
};

const marqueeItems = [
  'Next.js Architecture',
  'Core Web Vitals',
  'Google Ads',
  'Meta Andromeda',
  'Local SEO',
  'Answer Engine Optimization',
  'Schema Markup',
  'Conversion Architecture',
  'Johannesburg B2B',
  'Technical SEO',
];

function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group flex flex-col rounded-sm border border-zinc-800 bg-zinc-950/70 transition-colors hover:border-teal-400/70">
      <div className="border-b border-zinc-800 bg-black/50 px-6 py-5">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">
          <time dateTime={post.date}>{post.date}</time>
          <span>·</span>
          <span className="text-zinc-400">{post.category}</span>
          <span>·</span>
          <span>{post.readingTimeMinutes} min read</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="mt-3 block">
          <h3 className="text-xl font-semibold leading-snug text-white transition-colors group-hover:text-zinc-100 md:text-2xl">
            {post.title}
          </h3>
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 text-sm font-semibold text-white transition-colors hover:text-teal-400/90"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}

const BlogIndexPage = () => {
  const posts = getAllPosts();
  const siloPosts = (Object.keys(SILO_CONFIG) as BlogSilo[]).map((silo) => ({
    silo,
    ...SILO_CONFIG[silo],
    posts: posts.filter((p) => p.silo === silo),
  }));
  const legacyPosts = posts.filter((p) => !p.silo);

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
    <div className="bg-black text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(blogSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Technical Insights · B2B Operators
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Endpoint Media Insights
          </h1>
          <p className="mb-4 max-w-3xl text-lg tracking-[-0.3px] text-[#A1A1AA] md:text-xl">
            High-intent technical content for B2B operators: web architecture, Google Ads engineering,
            Meta systems, and regional SEO dominance. Zero fluff, deployment-ready intelligence.
          </p>
          <p className="mb-8 max-w-2xl text-base text-zinc-500">
            {posts.length} cornerstone articles across four content silos, plus Johannesburg market
            guides.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Work With Us
            </Link>
            <Link
              href="/services/google-ads"
              className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-100 transition-colors hover:bg-zinc-900"
            >
              Google Ads Services
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-zinc-800 bg-zinc-950/85 py-8 md:py-10">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            Topics We Publish On
          </p>
          <div className="proof-marquee relative overflow-hidden">
            <div className="proof-marquee-track flex w-max items-center gap-3">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="whitespace-nowrap rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: String(posts.length), label: 'Technical articles published' },
              { stat: '4', label: 'Content silos: web, ads, local, Meta' },
              { stat: '8–12', label: 'Average reading time per cornerstone post' },
              { stat: 'Zero', label: 'Fluff. Deployment-ready intelligence only' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-5 md:p-6"
              >
                <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">{item.stat}</p>
                <p className="mt-2 text-sm leading-snug text-zinc-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silo sections */}
      {siloPosts.map(({ silo, label, description, posts: sectionPosts }, index) =>
        sectionPosts.length > 0 ? (
          <section
            key={silo}
            className={index % 2 === 0 ? 'bg-zinc-950 py-20 md:py-28' : 'bg-black py-20 md:py-28'}
          >
            <div className="container mx-auto px-6">
              <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Content Silo
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
                  {sectionPosts.length} Articles
                </p>
              </div>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                {label}
              </h2>
              <p className="mt-5 max-w-3xl text-zinc-400">{description}</p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {sectionPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        ) : null,
      )}

      {/* Legacy / Johannesburg guides */}
      {legacyPosts.length > 0 ? (
        <section className="bg-zinc-950 py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Market Guides
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
                Johannesburg & South Africa
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Local Market Intelligence
            </h2>
            <p className="mt-5 max-w-3xl text-zinc-400">
              Pricing guides, platform comparisons, and technical SEO advantages specific to
              Johannesburg and South African service businesses.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {legacyPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center md:p-12">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready To Deploy This Intelligence?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
              Reading is step one. Engineering the system is step two. Book a free architecture audit
              and we will map how these principles apply to your market, competitors, and pipeline.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Get Free Growth Audit
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                See Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogIndexPage;
