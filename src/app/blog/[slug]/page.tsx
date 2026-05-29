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

      <section className="bg-gray-100 py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          {post.category && (
            <p className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-2">
              {post.category}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 font-heading text-gray-900">
            {post.title}
          </h1>
          <p className="article-summary text-lg text-gray-600 text-center max-w-2xl mx-auto mb-0">{post.excerpt}</p>
          <p className="text-sm text-gray-500 mt-4">
            Published{' '}
            <time dateTime={post.date} itemProp="datePublished">
              {post.date}
            </time>
            {' · '}
            {post.readingTimeMinutes} min read
          </p>
        </div>
      </section>

      <article
        className="py-16 md:py-20 bg-white"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <div
            className="prose prose-lg lg:prose-xl max-w-none prose-teal prose-headings:font-heading prose-a:text-teal-600 hover:prose-a:text-teal-800"
            itemProp="articleBody"
          >
            <Content />
          </div>

          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-200" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl font-bold font-heading mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {post.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-bold text-teal-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16">
            <InternalLinks
              title="Related Articles & Resources"
              variant="default"
              links={getRelatedLinks(post.slug)}
            />
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-2xl font-bold text-white">
                FS
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Written by</p>
                <Link
                  href="/about/author/frank-smit"
                  className="text-lg font-bold font-heading text-gray-900 hover:text-teal-700 transition"
                  itemProp="author"
                >
                  Frank Smit
                </Link>
                <p className="text-sm text-gray-600">Web Design Expert &amp; Founder of Endpoint Media</p>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/blog"
                className="text-teal-600 hover:text-teal-800 font-semibold transition duration-300"
              >
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
