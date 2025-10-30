// src/app/blog/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation'; 

// --- Placeholder Blog Post Data ---
const placeholderPosts = [
  {
    slug: 'why-local-seo-matters-johannesburg',
    title: 'Why Johannesburg Businesses Can’t Ignore Local SEO in 2025',
    excerpt: 'Discover the crucial role local SEO plays in attracting customers in competitive Johannesburg suburbs like Sandton and Randburg.',
    date: 'October 25, 2025',
    category: 'Local SEO',
    content: `
      [cite_start]<p class="mb-4 text-lg">In today's digital landscape, simply having a website isn't enough, especially for service businesses operating in a dense metropolitan area like Johannesburg. [cite: 12309] If potential customers can't find you when they search for services "near me," you're effectively invisible.</p>
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4">The Power of Local Intent</h2>
      [cite_start]<p class="mb-4">Searches like "plumber Sandton," "electrician Randburg," or "best salon near Rosebank" demonstrate high purchase intent. [cite: 12310] [cite_start]These users aren't just browsing; they need a service provider *now*, and they're looking locally. [cite: 12311] Capturing this traffic is non-negotiable for growth.</p>
      <p class="mb-4">Dominating the Google Map Pack and organic local results requires a dedicated strategy focusing on:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li>Optimized Google Business Profile (GBP).</li>
        <li>Consistent Name, Address, Phone Number (NAP) information across the web.</li>
        <li>Targeted on-page content for specific Johannesburg suburbs.</li>
        [cite_start]<li>Acquiring high-quality local citations and reviews. [cite: 12312]</li>
      </ul>
      <p>Ignoring local SEO means letting your competitors answer the phone calls that should be yours.</p>
      ` 
  },
  {
    slug: 'website-cost-vs-investment',
    title: 'Your Website: Cost Center or Revenue Engine?',
    excerpt: 'Shift your mindset from viewing your website as an expense to seeing it as a critical investment in lead generation for your Joburg business.',
    date: 'October 18, 2025',
    category: 'Business Strategy',
    content: `
      [cite_start]<p class="mb-4 text-lg">Too many Johannesburg businesses treat their website like a static brochure – an expense line item. [cite: 12313] This is a critical mistake. [cite_start]A strategically built website isn't a cost; [cite: 12314] [cite_start]it's potentially your hardest-working sales and lead generation tool. [cite: 12315]</p>
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Calculating Website ROI</h2>
      [cite_start]<p class="mb-4">Consider this: How many new clients acquired through your website would it take to recoup the initial investment? [cite: 12316] For most service businesses, the answer is surprisingly few.</p>
      <p class="mb-4">A high-performance website focused on local SEO and conversion optimization works 24/7 to:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li>Attract qualified local leads searching for your services.</li>
        <li>Build trust and credibility with potential customers.</li>
        <li>Convert visitors into phone calls, form submissions, or bookings.</li>
        [cite_start]<li>Provide a measurable return on investment, unlike a passive brochure. [cite: 12317]</li>
      </ul>
      [cite_start]<p>Stop seeing your website as a sunk cost. [cite: 12318] Start treating it as the engine for your Johannesburg business growth.</p>
      `
  },
  {
    slug: 'google-map-pack-dominance',
    title: 'How to Dominate the Google Map Pack in Johannesburg',
    excerpt: 'Practical steps to optimize your Google Business Profile and secure top placement in local search results, driving high-intent leads.',
    date: 'October 11, 2025',
    category: 'Local SEO',
    content: `
      <p class="mb-4 text-lg">The Google Map Pack (the top 3 local listings shown with a map) is prime digital real estate for Johannesburg service businesses. [cite_start]Ranking here puts you directly in front of customers with the highest purchase intent. [cite: 12319]</p>
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Key Optimization Factors</h2>
      <p class="mb-4">Securing a top spot requires ongoing effort focused on several key areas:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Complete & Accurate GBP:</strong> Fill out every section of your Google Business Profile meticulously.</li>
        [cite_start]<li><strong>Primary Category Selection:</strong> Choose the most relevant primary category for your core service. [cite: 12320]</li>
        <li><strong>Consistent NAP:</strong> Ensure your Name, Address, and Phone number are identical across your website and major online directories.</li>
        <li><strong>High-Quality Photos:</strong> Upload professional photos of your work, team, and premises.</li>
        <li><strong>Regular Reviews:</strong> Actively solicit and respond to Google reviews.</li>
        <li><strong>Local On-Page SEO:</strong> Ensure your website service pages mention relevant Johannesburg suburbs.</li>
      </ul>
      [cite_start]<p>Dominating the Map Pack isn't magic; it's a consistent application of local SEO best practices. [cite: 12321]</p>
      `
  },
];
// --- Helper function to get post data ---
async function getPostData(slug: string) {
  const post = placeholderPosts.find((p) => p.slug === slug);
  return post;
}

// --- Dynamic Metadata Generation ---
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} | [cite_start]Endpoint Media Blog [cite: 12327]`,
    description: post.excerpt, 
  };
}

// --- Generate Static Paths (Recommended for SSG) ---
export async function generateStaticParams() {
  return placeholderPosts.map((post) => ({
    slug: post.slug,
  }));
}


// --- The Blog Post Page Component ---
const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostData(params.slug);
  if (!post) {
    notFound(); 
  }

  return (
    <>
      {/* Simple Header for Post */}
      <section className="bg-gray-100 py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          {post.category && (
            <p className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-2">
              [cite_start]{post.category} [cite: 12332]
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 font-heading text-gray-900">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500">
            [cite_start]Published on <time dateTime={new Date(post.date).toISOString()}>{post.date}</time> [cite: 12333]
          </p>
        </div>
      </section>

      {/* Post Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl"> 
          {/* Render the HTML content */}
          {/* WARNING: Only use dangerouslySetInnerHTML if you trust the source. For Markdown, use a dedicated renderer. */}
          <div
            className="prose prose-lg lg:prose-xl max-w-none prose-teal prose-headings:font-heading prose-a:text-teal-600 hover:prose-a:text-teal-800" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to Blog Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="text-teal-600 hover:text-teal-800 font-semibold transition duration-300">
              &larr; [cite_start]Back to Blog Index [cite: 12337]
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;