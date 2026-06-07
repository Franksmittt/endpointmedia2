// src/app/blog/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InternalLinks from '@/components/seo/InternalLinks';
import {
  buildMetadata,
  buildSpeakableWebPageSchema,
  secureJsonLD,
  BASE_URL,
  FRANK_SMIT_ID,
  ORG_ID,
} from '@/lib/seo';
import { getPostBySlug, getAllSlugs } from '@/lib/blog/posts';
import { BLOG_CONTENT_MAP } from '@/lib/blog/content';
import { getRelatedLinks, buildFaqSchema } from '@/lib/blog/seo-helpers';

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The article you are looking for could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    openGraph: {
      type: 'article',
      images: [
        {
          url: `${BASE_URL}/blog/${post.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      images: [`${BASE_URL}/blog/${post.slug}/opengraph-image`],
    },
  });
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const Content = BLOG_CONTENT_MAP[slug];

  if (!post || !Content) {
    notFound();
  }

  const postUrl = `${BASE_URL}/blog/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    image: `${BASE_URL}/blog/${post.slug}/opengraph-image`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    author: { '@type': 'Person', '@id': FRANK_SMIT_ID, name: 'Frank Smit' },
    publisher: { '@id': ORG_ID },
    articleSection: post.category,
    keywords: post.keywords.join(', '),
    wordCount: post.readingTimeMinutes * 200,
    inLanguage: 'en-ZA',
  };

  const speakableSchema = buildSpeakableWebPageSchema({
    url: postUrl,
    name: post.title,
    description: post.excerpt,
    cssSelectors: ['h1', '.article-summary'],
  });

  const faqSchema = buildFaqSchema(post, postUrl);
  const schemas = [articleSchema, speakableSchema, faqSchema].filter(Boolean);

  return (
    <div className="bg-black text-zinc-300">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: secureJsonLD(schema as object) }}
        />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <Link
            href="/blog"
            className="mb-6 text-sm font-semibold text-zinc-400 transition-colors hover:text-white"
          >
            ← Back to Blog
          </Link>
          {post.category && (
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              {post.category}
            </p>
          )}
          <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            {post.title}
          </h1>
          <p className="article-summary mx-auto max-w-2xl text-lg leading-relaxed text-[#A1A1AA] md:text-xl">
            {post.excerpt}
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
            Published{' '}
            <time dateTime={post.date} itemProp="datePublished">
              {post.date}
            </time>
            {' · '}
            {post.readingTimeMinutes} min read
          </p>
        </div>
      </section>

      {/* Article body */}
      <article
        className="bg-zinc-950 py-20 md:py-28"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <div className="container mx-auto px-6">
          <div className="mx-auto w-full max-w-none" itemProp="articleBody">
            <Content />
          </div>

          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-16 border-t border-zinc-800 pt-12" aria-labelledby="faq-heading">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">FAQ</p>
              <h2 id="faq-heading" className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {post.faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-sm border border-zinc-800 bg-black/40 p-6"
                  >
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16">
            <InternalLinks
              theme="dark"
              title="Related Articles & Resources"
              variant="default"
              links={getRelatedLinks(post.slug)}
            />
          </div>

          <footer className="mt-16 border-t border-zinc-800 pt-10">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm border border-zinc-700 bg-black font-mono text-base text-white">
                FS
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">
                  Written by
                </p>
                <Link
                  href="/about/author/frank-smit"
                  className="mt-1 block text-lg font-semibold text-white transition-colors hover:text-zinc-300"
                  itemProp="author"
                >
                  Frank Smit
                </Link>
                <p className="text-sm text-zinc-500">
                  Web Design Expert & Founder of Endpoint Media
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/blog"
                className="text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
              >
                ← Back to Blog Index
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                Discuss This With Frank
              </Link>
            </div>
          </footer>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Want This Engineered For Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Every article maps to a service we deploy. Book a free architecture audit and we will
              show you what implementation looks like for your market.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Get Free Growth Audit
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
