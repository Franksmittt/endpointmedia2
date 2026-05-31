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
import { getBlogContentComponent } from '@/lib/blog/content';
import { getRelatedLinks, buildFaqSchema } from '@/lib/blog/seo-helpers';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return buildMetadata({
      title: 'Post Not Found',
      description: 'The article you are looking for could not be found.',
      path: `/blog/${slug}`,
    });
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
  const Content = getBlogContentComponent(slug);

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
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: secureJsonLD(schema as object) }}
        />
      ))}

      <section className="border-b border-zinc-800 bg-black py-20 md:py-24">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          {post.category && (
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              {post.category}
            </p>
          )}
          <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="article-summary mx-auto mb-0 max-w-2xl text-lg text-zinc-400">{post.excerpt}</p>
          <p className="mt-4 text-sm text-zinc-500">
            Published{' '}
            <time dateTime={post.date} itemProp="datePublished">
              {post.date}
            </time>
            {' · '}
            {post.readingTimeMinutes} min read
          </p>
        </div>
      </section>

      <article className="bg-zinc-950 py-16 md:py-20" itemScope itemType="https://schema.org/BlogPosting">
        <div className="container mx-auto max-w-3xl px-6">
          <div className="max-w-none" itemProp="articleBody">
            <Content />
          </div>

          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-12 border-t border-zinc-800 pt-8" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="mb-6 text-2xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {post.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                    <p className="text-zinc-400">{faq.answer}</p>
                  </div>
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

          <footer className="mt-12 border-t border-zinc-800 pt-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-zinc-700 bg-black font-mono text-2xl font-bold text-white">
                FS
              </div>
              <div>
                <p className="mb-1 text-sm text-zinc-500">Written by</p>
                <Link
                  href="/about/author/frank-smit"
                  className="text-lg font-bold text-white transition-colors hover:text-zinc-300"
                  itemProp="author"
                >
                  Frank Smit
                </Link>
                <p className="text-sm text-zinc-500">Web Design Expert &amp; Founder of Endpoint Media</p>
              </div>
            </div>
            <div className="border-t border-zinc-800 pt-4">
              <Link href="/blog" className="font-semibold text-zinc-300 transition-colors hover:text-white">
                &larr; Back to Blog Index
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
