// src/app/blog/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import InternalLinks from '@/components/seo/InternalLinks';
import { buildMetadata, secureJsonLD, BASE_URL, FRANK_SMIT_ID, ORG_ID } from '@/lib/seo';
// --- Placeholder Blog Post Data (UPDATED FOR FINAL OUTPUT) ---
const placeholderPosts = [
  {
    // POST 1: PILLAR - CAPTURE COMMERCIAL/INFORMATIONAL INTENT
    slug: 'the-true-cost-of-a-website-in-johannesburg',
    title: 'The True Cost of a Website in Johannesburg: 2025 Price Guide',
    excerpt: 'Your comprehensive guide to JHB web design prices. We break down costs by page, e-commerce, and maintenance fees. Get full price transparency.',
    date: 'October 30, 2025',
    category: 'Pricing & ROI',
    // Final Content String (Citations Removed for Clean Rendering)
    content: `
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">What Influences Johannesburg Website Prices?</h2>
      <p class="mb-4 text-lg">The price of a professional website in South Africa can range from R3,000 to over R500,000. For a Small to Medium Enterprise (SME) in the Johannesburg market, you should budget between R10,000 and R60,000 for a professionally developed site.</p>
      <p class="mb-4">The cost is driven by three factors: the provider (DIY vs. agency), design complexity (custom vs. template), and required functionality (e-commerce, booking systems).</p>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Cost Breakdown: Standard Packages (Once-Off Fee)</h2>
      <p class="mb-4">Most reputable Johannesburg providers charge a once-off fee for the build. Here are the expected ranges:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li><strong>Basic Informational Site (3-6 Pages):</strong> R3,000 - R15,000. Ideal for establishing foundational credibility.</li>
        <li><strong>SME Corporate Site (6-20 Pages):</strong> R15,000 - R60,000. Includes custom elements, blogging, and lead generation setup.</li>
        <li><strong>Basic E-commerce:</strong> R13,000 - R35,000 (WooCommerce/Shopify setup for <100 products).</li>
      </ul>
      
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Deconstructing the Hidden Costs (TCO)</h2>
      <p class="mb-4 text-lg font-semibold">Avoid the false economy of a low-cost quote. The true investment is the Total Cost of Ownership (TCO):</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li><strong>Hosting:</strong> R100 - R1,000+ per month, essential for keeping your site online and fast.</li>
        <li><strong>Maintenance:</strong> R500 - R2,000 per month, vital for security, backups, and updates.</li>
        <li><strong>Content:</strong> Copywriting and photography are often excluded from the build price but are crucial for conversion.</li>
      </ul>
      
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Winning on Value: The Endpoint Media Difference</h2>
      <p class="mb-4">The core message in the competitive Johannesburg market has shifted from "we build websites" to "we deliver measurable ROI". Your investment must be an asset that delivers leads, not an expense that delivers excuses.</p>
      <p>Ready to see clear, upfront pricing that guarantees performance? <a href="/pricing" class="text-teal-600 font-bold hover:underline">View our transparent packages here</a>.</p>
      `, 
  },
  {
    // POST 2: COMMERCIAL INVESTIGATION - POSITION FREELANCER MODEL
    slug: 'freelancer-vs-agency-the-low-risk-choice-for-johannesburg',
    title: 'Freelancer vs. Agency: The Low-Risk Choice for Johannesburg Web Design',
    excerpt: 'Agencies are expensive. Freelancers are risky. We break down the true cost, risk, and capacity for Joburg businesses to choose the right web design partner.',
    date: 'October 23, 2025',
    category: 'Business Strategy',
    content: `
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">The Problem: High Cost vs. High Risk</h2>
      <p class="mb-4 text-lg">As a Johannesburg SME, you face a critical dilemma: pay the high premium for a large agency, or risk the single point of failure that comes with an unknown freelancer.</p>
      <p class="mb-4">Both options have risks. Agencies start from R15,000+, often charging a premium to cover their overhead. Freelancer rates range from R300 to R1,800 per hour, but carry the risk of unreliability and limited capacity.</p>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">The Agency Model: Trading Cost for Structure</h2>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li><strong>Cost:</strong> High (R15,000 - R100,000+).</li>
        <li><strong>Pros:</strong> Access to a full team (designer, copywriter, developer) and low project risk.</li>
        <li><strong>Cons:</strong> Slow process, high overhead fees, and risk of being "upsold" on unnecessary features.</li>
      </ul>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">The Freelancer Model: Trading Time for Value</h2>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li><strong>Cost:</strong> Medium (R5,000 - R20,000+).</li>
        <li><strong>Pros:</strong> Personal, direct communication with the expert. Highly cost-effective for focused projects.</li>
        <li><strong>Cons:</strong> Key-Person Risk (single point of failure) and limited capacity to handle complex issues.</li>
      </ul>
      
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">The Low-Risk Solution for Johannesburg SMEs</h2>
      <p class="mb-4 text-lg font-semibold">Endpoint Media operates on an agile, expert-led model. You bypass the agency overhead while getting a single point of accountability (Frank Smit) who is deeply invested in your performance.</p>
      <p>By choosing a dedicated local expert with a proven process, you significantly de-risk your investment and maximize your chance of dominating the local search results. <a href="/case-studies" class="text-teal-600 font-bold hover:underline">See how our local clients dominate their suburbs</a>.</p>
      `,
  },
  {
    // POST 3: TECHNICAL AUTHORITY - EXPLOIT SCHEMA VACUUM
    slug: 'the-schema-vacuum-technical-seo-advantage',
    title: 'The Schema Vacuum: The Technical SEO Advantage All Your Johannesburg Competitors Are Missing',
    excerpt: 'We reveal the one technical advantage local competitors ignore. Learn what Schema Markup is, why 100% of Joburg agencies fail to use it, and how it earns you Rich Snippets.',
    date: 'October 15, 2025',
    category: 'Technical SEO',
    content: `
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">What is Schema Markup, and Why Does it Matter?</h2>
      <p class="mb-4 text-lg">Schema Markup (or structured data) is code added to your website that explicitly tells Google what your content means. It helps Google display visually enhanced Rich Results in the search engine results page (SERP), such as star ratings, FAQ accordions, and prices.</p>
      <p class="mb-4">While competitors may have aesthetically pleasing websites, our audit confirms a stark reality: <strong>100% of the top-ranking local competitors are failing to implement Schema Markup correctly</strong>. They are effectively invisible to this entire layer of advanced SEO.</p>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Your Technical Blueprint: Closing the Gap</h2>
      <p class="mb-4">The opportunity is to enter a competition your rivals haven't shown up for. This is achieved by implementing the three essential schema types for local market dominance:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li><strong>LocalBusiness Schema:</strong> The most critical type for 'near me' queries. It cements your local identity by providing Google with your verifiable Johannesburg address and contact information (NAP).</li>
        <li><strong>FAQPage Schema:</strong> Renders an interactive FAQ accordion directly on the SERP. This helps you capture People Also Ask (PAA) box questions and dominate vertical space.</li>
        <li><strong>Service Schema:</strong> Explicitly marks up your offerings (e.g., "Web Design," "Local SEO") and price ranges, making your page eligible for enhanced listings.</li>
      </ul>
      
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Beyond Visibility: The Conversion Impact</h2>
      <p class="mb-4 text-lg font-semibold">Implementing this advanced schema is the single fastest path to a defensible competitive advantage. Rich Results are more prominent, more informative, and have been proven to significantly increase click-through rates (CTR) compared to standard listings.</p>
      <p>Ready to out-execute the competition with technical superiority? <a href="/contact" class="text-teal-600 font-bold hover:underline">Secure your technical advantage now</a>.</p>
      `,
  },
  {
    // POST 4: DIY-INTERCEPTION - CAPTURE FRUSTRATED DIY-ERS
    slug: 'wix-vs-wordpress-guide-johannesburg-small-businesses',
    title: 'Wix vs WordPress: A Guide for Johannesburg Small Businesses (2025)',
    excerpt: 'DIY website builders vs custom WordPress development. We break down the true costs, limitations, and when DIY solutions fail Johannesburg businesses. Learn when to hire a professional.',
    date: 'November 5, 2025',
    category: 'Business Strategy',
    content: `
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">The DIY Dilemma: When Website Builders Fail</h2>
      <p class="mb-4 text-lg">Many Johannesburg small businesses start with Wix, Squarespace, or other DIY website builders. They seem affordable, easy to use, and promise professional results without the cost of a developer.</p>
      <p class="mb-4">But here&apos;s the reality: DIY website builders work great for personal blogs and simple portfolios, but they fall short for businesses that need to generate leads, rank in local search, and scale their online presence.</p>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Wix: The False Economy for Johannesburg Businesses</h2>
      <p class="mb-4 font-semibold">Wix is popular because it&apos;s easy, but ease comes at a cost:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li><strong>Limited SEO Control:</strong> Wix&apos;s SEO capabilities are limited. You can&apos;t customize meta tags, schema markup, or technical SEO elements that matter for local search dominance.</li>
        <li><strong>Template Lock-In:</strong> You&apos;re stuck with Wix templates. Customization is limited, and you can&apos;t migrate to another platform without rebuilding from scratch.</li>
        <li><strong>Performance Issues:</strong> Wix sites are slower than custom-built sites, hurting your Core Web Vitals and search rankings.</li>
        <li><strong>Hidden Costs:</strong> The "free" plan has Wix branding and limited features. Premium plans range from R149 to R599/month, plus apps and add-ons.</li>
        <li><strong>No Ownership:</strong> You don&apos;t own your website. If Wix shuts down or changes policies, you lose everything.</li>
      </ul>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">WordPress: The Professional Solution</h2>
      <p class="mb-4 font-semibold">WordPress powers over 40% of all websites for good reason:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li><strong>Complete Control:</strong> Full access to code, SEO optimization, schema markup, and technical elements.</li>
        <li><strong>Unlimited Customization:</strong> Build exactly what you need. No template limitations or design restrictions.</li>
        <li><strong>Performance Optimized:</strong> Next.js-powered WordPress sites load in under 2 seconds, crushing Wix performance.</li>
        <li><strong>Own Your Website:</strong> You own your code, your data, and your website. Migrate anywhere, anytime.</li>
        <li><strong>Scalability:</strong> WordPress grows with your business. Add e-commerce, memberships, booking systems, and more.</li>
      </ul>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">The True Cost Comparison</h2>
      <div class="bg-gray-50 rounded-xl p-8 mb-6 border-l-4 border-teal-600">
        <h3 class="text-xl font-bold mb-4 font-heading text-gray-900">Wix Premium (3 Years)</h3>
        <ul class="list-disc list-inside mb-4 space-y-2 text-gray-700">
          <li>Business Basic: R149/month × 36 months = <strong>R5,364</strong></li>
          <li>Domain name: R200/year × 3 = <strong>R600</strong></li>
          <li>Apps & add-ons: ~R500/month × 36 = <strong>R18,000</strong></li>
          <li>Design limitations and SEO handicaps: <strong>Priceless (in the wrong way)</strong></li>
          <li><strong>Total: R24,000+ over 3 years</strong></li>
        </ul>
        <p class="text-gray-700 font-semibold">Result: A slow, limited website with Wix branding and poor local SEO performance.</p>
      </div>

      <div class="bg-teal-50 rounded-xl p-8 mb-6 border-l-4 border-teal-600">
        <h3 class="text-xl font-bold mb-4 font-heading text-gray-900">Custom WordPress/Next.js (3 Years)</h3>
        <ul class="list-disc list-inside mb-4 space-y-2 text-gray-700">
          <li>Initial build: <strong>R10,000 - R15,000</strong> (once-off)</li>
          <li>Hosting: R200/month × 36 = <strong>R7,200</strong></li>
          <li>Domain name: R200/year × 3 = <strong>R600</strong></li>
          <li>Maintenance: R500/month × 36 = <strong>R18,000</strong></li>
          <li>Complete ownership, full SEO control, unlimited scalability: <strong>Priceless</strong></li>
          <li><strong>Total: R35,800 - R40,800 over 3 years</strong></li>
        </ul>
        <p class="text-gray-700 font-semibold">Result: A high-performance, lead-generating website that dominates local search and scales with your business.</p>
      </div>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">When DIY Makes Sense (Rarely)</h2>
      <p class="mb-4">DIY website builders work for:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li>Personal portfolios and blogs</li>
        <li>Testing business ideas before committing to a professional site</li>
        <li>Simple landing pages with no SEO requirements</li>
      </ul>
      <p class="mb-4 font-semibold">DIY fails for Johannesburg businesses that need:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li>Local SEO dominance and Google Maps rankings</li>
        <li>Lead generation and conversion optimization</li>
        <li>Professional credibility and trust signals</li>
        <li>Scalability and growth potential</li>
        <li>Complete ownership and control</li>
      </ul>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">The Johannesburg Salon Case Study: ROI That Matters</h2>
      <p class="mb-4 text-lg">A Sandton salon invested R15,000 in a custom Next.js website with hyper-local SEO. Within 3 months:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li><strong>Tripled online bookings</strong> through optimized conversion funnels</li>
        <li><strong>Ranked #1 in Google Maps</strong> for "hair salon Sandton"</li>
        <li><strong>Generated R45,000 in new revenue</strong> directly from the website</li>
        <li><strong>ROI: 200% in 3 months</strong></li>
      </ul>
      <p class="mb-4">This is what happens when you invest in a professional website instead of settling for DIY limitations.</p>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">The Decision Framework</h2>
      <p class="mb-4">Choose DIY if:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li>You&apos;re testing a business idea and need a quick prototype</li>
        <li>You have zero budget and are willing to accept severe limitations</li>
        <li>SEO and lead generation aren&apos;t priorities</li>
      </ul>
      <p class="mb-4 font-semibold">Choose Professional Development if:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li>You&apos;re serious about growing your Johannesburg business</li>
        <li>You need to rank in local search and dominate Google Maps</li>
        <li>Lead generation and ROI are non-negotiable</li>
        <li>You want to own your website and scale without limitations</li>
      </ul>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Ready to Upgrade from DIY?</h2>
      <p class="mb-4 text-lg font-semibold">If you&apos;re frustrated with Wix limitations, slow performance, or poor local SEO results, it&apos;s time to invest in a professional website.</p>
      <p class="mb-4">We specialize in migrating Johannesburg businesses from DIY builders to high-performance, lead-generating websites. <a href="/case-studies" class="text-teal-600 font-bold hover:underline">See how we&apos;ve helped local businesses dominate</a>.</p>
      <p>Ready to make the switch? <a href="/contact" class="text-teal-600 font-bold hover:underline">Get your free website audit and migration plan</a>.</p>
      `,
  },
  {
    // POST 5: EXPANSION - COMPREHENSIVE PRICING GUIDE
    slug: 'how-much-does-website-cost-south-africa-2025',
    title: 'How Much Does a Website Cost in South Africa? Complete 2025 Pricing Guide',
    excerpt: 'Your definitive guide to website costs in South Africa. We break down pricing by provider, complexity, and functionality. Includes hidden costs, maintenance fees, and ROI analysis.',
    date: 'November 12, 2025',
    category: 'Pricing & ROI',
    content: `
      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">The Reality: Website Costs Vary Widely</h2>
      <p class="mb-4 text-lg">The price of a professional website in South Africa ranges from R3,000 to over R500,000. For Small to Medium Enterprises (SMEs) in the Johannesburg market, you should budget between R10,000 and R60,000 for a professionally developed site.</p>
      <p class="mb-4">Understanding the true cost requires breaking down the provider, design complexity, required functionality, and hidden expenses that most businesses overlook.</p>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Cost Breakdown by Provider Type</h2>
      
      <div class="bg-gray-50 rounded-xl p-8 mb-6 border-l-4 border-red-500">
        <h3 class="text-xl font-bold mb-4 font-heading text-gray-900">DIY Website Builders (Wix, Squarespace)</h3>
        <ul class="list-disc list-inside mb-4 space-y-2 text-gray-700">
          <li><strong>Monthly Fee:</strong> R149 - R599/month (R5,364 - R21,564 over 3 years)</li>
          <li><strong>Domain:</strong> R200/year</li>
          <li><strong>Apps & Add-ons:</strong> R300 - R1,000/month</li>
          <li><strong>True Cost (3 years):</strong> R24,000 - R60,000+</li>
        </ul>
        <p class="text-gray-700 font-semibold">Limitations: Poor SEO, limited customization, slow performance, template lock-in, no ownership.</p>
      </div>

      <div class="bg-gray-50 rounded-xl p-8 mb-6 border-l-4 border-yellow-500">
        <h3 class="text-xl font-bold mb-4 font-heading text-gray-900">Freelancer Web Developer</h3>
        <ul class="list-disc list-inside mb-4 space-y-2 text-gray-700">
          <li><strong>Basic Site (3-6 pages):</strong> R5,000 - R15,000</li>
          <li><strong>SME Corporate Site (6-20 pages):</strong> R15,000 - R40,000</li>
          <li><strong>E-commerce:</strong> R20,000 - R50,000</li>
          <li><strong>Hourly Rate:</strong> R300 - R1,800/hour</li>
        </ul>
        <p class="text-gray-700 font-semibold">Risk: Single point of failure, limited capacity, variable quality.</p>
      </div>

      <div class="bg-teal-50 rounded-xl p-8 mb-6 border-l-4 border-teal-600">
        <h3 class="text-xl font-bold mb-4 font-heading text-gray-900">Professional Web Design Agency</h3>
        <ul class="list-disc list-inside mb-4 space-y-2 text-gray-700">
          <li><strong>Basic Site (3-6 pages):</strong> R15,000 - R30,000</li>
          <li><strong>SME Corporate Site (6-20 pages):</strong> R30,000 - R80,000</li>
          <li><strong>E-commerce:</strong> R40,000 - R150,000+</li>
          <li><strong>Enterprise Solutions:</strong> R100,000 - R500,000+</li>
        </ul>
        <p class="text-gray-700 font-semibold">Benefits: Full team, structured process, comprehensive solutions, but higher cost.</p>
      </div>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Standard Package Pricing (Once-Off Fee)</h2>
      <div class="overflow-x-auto mb-6">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">Package</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">Pages</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">Price Range</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">Best For</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm text-gray-900 font-semibold">Basic Informational</td>
              <td class="px-6 py-4 text-sm text-gray-700">3-6 pages</td>
              <td class="px-6 py-4 text-sm text-gray-900 font-bold">R3,000 - R15,000</td>
              <td class="px-6 py-4 text-sm text-gray-700">Startups, basic credibility</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-6 py-4 text-sm text-gray-900 font-semibold">SME Corporate</td>
              <td class="px-6 py-4 text-sm text-gray-700">6-20 pages</td>
              <td class="px-6 py-4 text-sm text-gray-900 font-bold">R15,000 - R60,000</td>
              <td class="px-6 py-4 text-sm text-gray-700">Growing businesses, lead generation</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm text-gray-900 font-semibold">E-commerce Basic</td>
              <td class="px-6 py-4 text-sm text-gray-700">Up to 100 products</td>
              <td class="px-6 py-4 text-sm text-gray-900 font-bold">R13,000 - R35,000</td>
              <td class="px-6 py-4 text-sm text-gray-700">Online stores starting out</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-6 py-4 text-sm text-gray-900 font-semibold">E-commerce Advanced</td>
              <td class="px-6 py-4 text-sm text-gray-700">100+ products</td>
              <td class="px-6 py-4 text-sm text-gray-900 font-bold">R35,000 - R100,000+</td>
              <td class="px-6 py-4 text-sm text-gray-700">Established online businesses</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm text-gray-900 font-semibold">Custom Enterprise</td>
              <td class="px-6 py-4 text-sm text-gray-700">Unlimited</td>
              <td class="px-6 py-4 text-sm text-gray-900 font-bold">R100,000 - R500,000+</td>
              <td class="px-6 py-4 text-sm text-gray-700">Large corporations, complex needs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Hidden Costs: The Total Cost of Ownership (TCO)</h2>
      <p class="mb-4 text-lg font-semibold">The initial build price is only part of the story. Here&apos;s what most businesses overlook:</p>
      
      <div class="bg-red-50 rounded-xl p-8 mb-6 border-l-4 border-red-600">
        <h3 class="text-xl font-bold mb-4 font-heading text-gray-900">⚠️ Monthly Recurring Costs</h3>
        <ul class="list-disc list-inside mb-4 space-y-2 text-gray-700">
          <li><strong>Hosting:</strong> R100 - R1,000+/month (essential for speed and uptime)</li>
          <li><strong>Domain:</strong> R100 - R300/year</li>
          <li><strong>SSL Certificate:</strong> Free with most hosts, or R500 - R2,000/year</li>
          <li><strong>Email Hosting:</strong> R50 - R200/month per mailbox</li>
          <li><strong>Maintenance:</strong> R500 - R2,000/month (security, updates, backups)</li>
        </ul>
        <p class="text-gray-700"><strong>Total Monthly: R750 - R3,500+</strong></p>
      </div>

      <div class="bg-yellow-50 rounded-xl p-8 mb-6 border-l-4 border-yellow-600">
        <h3 class="text-xl font-bold mb-4 font-heading text-gray-900">📝 Content Creation Costs</h3>
        <ul class="list-disc list-inside mb-4 space-y-2 text-gray-700">
          <li><strong>Copywriting:</strong> R500 - R2,000 per page</li>
          <li><strong>Photography:</strong> R2,000 - R10,000+ for professional shoots</li>
          <li><strong>Graphic Design:</strong> R500 - R2,000 per asset</li>
          <li><strong>Video Production:</strong> R5,000 - R50,000+</li>
        </ul>
        <p class="text-gray-700"><strong>One-time: R5,000 - R50,000+</strong></p>
      </div>

      <div class="bg-blue-50 rounded-xl p-8 mb-6 border-l-4 border-blue-600">
        <h3 class="text-xl font-bold mb-4 font-heading text-gray-900">🔧 Ongoing Development</h3>
        <ul class="list-disc list-inside mb-4 space-y-2 text-gray-700">
          <li><strong>Feature Additions:</strong> R1,000 - R5,000+ per feature</li>
          <li><strong>Bug Fixes:</strong> R500 - R2,000 per issue</li>
          <li><strong>Redesigns:</strong> R10,000 - R50,000+ every 3-5 years</li>
          <li><strong>SEO Optimization:</strong> R2,000 - R10,000/month</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">The ROI Perspective: Cost vs. Value</h2>
      <p class="mb-4 text-lg">A Johannesburg salon invested R15,000 in a professional website with local SEO. Results:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li>Tripled online bookings in 3 months</li>
        <li>Ranked #1 in Google Maps for target keywords</li>
        <li>Generated R45,000 in new revenue directly from the website</li>
        <li><strong>ROI: 200% in 3 months</strong></li>
      </ul>
      <p class="mb-4 font-semibold">The question isn&apos;t "How much does a website cost?" It&apos;s "How much revenue will a professional website generate?"</p>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Endpoint Media Pricing: Transparent & Value-Focused</h2>
      <p class="mb-4">We offer clear, upfront pricing with no hidden fees:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li><strong>Foundation:</strong> R5,500 - Essential professional website</li>
        <li><strong>Growth Engine:</strong> R10,000 - Complete lead generation toolkit</li>
        <li><strong>Market Leader:</strong> R15,000 - Enterprise-level solution</li>
      </ul>
      <p class="mb-4">All packages include 1 year of free hosting and domain registration. See our <a href="/pricing" class="text-teal-600 font-bold hover:underline">complete pricing guide</a>.</p>

      <h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-teal-700">Making the Right Investment Decision</h2>
      <p class="mb-4 font-semibold">Don&apos;t fall for the false economy of cheap websites. The true cost is measured in lost opportunities, poor performance, and missed leads.</p>
      <p class="mb-4">Invest in a website that:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li>Dominates local search results</li>
        <li>Generates qualified leads consistently</li>
        <li>Builds trust and credibility</li>
        <li>Scales with your business growth</li>
        <li>Delivers measurable ROI</li>
      </ul>
      <p class="mb-4 text-lg">Ready to invest in a website that generates revenue, not excuses? <a href="/contact" class="text-teal-600 font-bold hover:underline">Get your free website audit and pricing quote</a>.</p>
      `,
  },
];
// --- Helper function to get post data ---
async function getPostData(slug: string) {
  const post = placeholderPosts.find((p) => p.slug === slug);
  return post;
}

// --- Dynamic Metadata Generation ---
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostData(params.slug);
  if (!post) {
    return buildMetadata({
      title: "Post Not Found | Endpoint Media Blog",
      description: "The article you are looking for could not be found.",
      path: `/blog/${params.slug}`,
    });
  }

  const keywords = [
    "web design johannesburg",
    "website design prices",
    "local seo joburg",
    "web design packages south africa",
    "schema markup tutorial",
    post.category,
  ];

  return buildMetadata({
    title: `${post.title} | Endpoint Media Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords,
    openGraph: {
      type: "article",
      images: [
        {
          url: `${BASE_URL}/images/blog/${post.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      images: [`${BASE_URL}/images/blog/${post.slug}.jpg`],
    },
  });
}

// --- Generate Static Paths (Recommended for SSG) ---
export async function generateStaticParams() {
  // Generates all possible slugs at build time
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

  // Article Schema for Blog Posts - Enhanced with E-E-A-T linking
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    image: `${BASE_URL}/images/blog/${post.slug}.jpg`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      "@id": FRANK_SMIT_ID, // Reference to global Person entity
      name: "Frank Smit",
    },
    publisher: {
      "@id": ORG_ID, // Reference to global Organization entity
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: [
      "web design johannesburg",
      "website design prices",
      "local SEO joburg",
      post.category.toLowerCase(),
    ],
  };

  return (
    <>
      {/* Article Schema Markup - Secured with XSS protection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(articleSchema) }}
      />
      {/* Simple Header for Post */}
      <section className="bg-gray-100 py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          {post.category && (
            <p className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-2">
              {post.category}
            </p>
          )}
          {/* H1: Primary keyword target, ensures high relevance signal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 font-heading text-gray-900">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500">
            Published on <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
          </p>
        </div>
      </section>

      {/* Post Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl"> 
          {/* Render the HTML content */}
          {/* NOTE: We are using dangerouslySetInnerHTML here because the source data is controlled. 
              In a real application, content should be parsed securely (e.g., using MDX or a library). */}
          <div
            className="prose prose-lg lg:prose-xl max-w-none prose-teal prose-headings:font-heading prose-a:text-teal-600 hover:prose-a:text-teal-800" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Internal Links - Contextual Related Content */}
          <div className="mt-16">
            <InternalLinks
              title="Related Articles & Resources"
              variant="default"
              links={getRelatedLinks(post.slug)}
            />
          </div>

          {/* Author Attribution - E-E-A-T Signal */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-2xl font-bold text-white">
                FS
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Written by</p>
                <Link
                  href="/about/author/frank-smit"
                  className="text-lg font-bold font-heading text-gray-900 hover:text-teal-700 transition"
                >
                  Frank Smit
                </Link>
                <p className="text-sm text-gray-600">
                  Web Design Expert & Founder of Endpoint Media
                </p>
              </div>
            </div>
          </div>

          {/* Back to Blog Link */}
          <div className="pt-4 border-t border-gray-200">
            <Link href="/blog" className="text-teal-600 hover:text-teal-800 font-semibold transition duration-300">
              &larr; Back to Blog Index
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// Helper function to get related links based on post slug
function getRelatedLinks(slug: string) {
  const allLinks = [
    {
      href: "/pricing",
      title: "Website Design Pricing Johannesburg",
      description: "Transparent pricing for professional websites. See our packages and pricing structure.",
    },
    {
      href: "/services/website-redesign",
      title: "Website Redesign Services",
      description: "Transform your outdated website into a high-converting, modern asset.",
    },
    {
      href: "/services/shopify-expert",
      title: "Shopify Expert Services",
      description: "Speed-to-market e-commerce solutions for Johannesburg businesses.",
    },
    {
      href: "/locations/sandton",
      title: "Web Design Sandton",
      description: "Professional web design services for Sandton businesses.",
    },
    {
      href: "/industries/law-firms",
      title: "Web Design for Law Firms",
      description: "Specialized web design for Johannesburg law firms.",
    },
    {
      href: "/blog/the-true-cost-of-a-website-in-johannesburg",
      title: "Website Cost Guide",
      description: "Complete guide to website costs in Johannesburg.",
    },
    {
      href: "/blog/wix-vs-wordpress-guide-johannesburg-small-businesses",
      title: "Wix vs WordPress Guide",
      description: "DIY builders vs professional development - make the right choice.",
    },
    {
      href: "/case-studies",
      title: "Case Studies",
      description: "See how we've helped Johannesburg businesses dominate their markets.",
    },
  ];

  // Return different links based on the post slug for contextual relevance
  if (slug.includes('cost') || slug.includes('pricing')) {
    return [
      allLinks[0], // pricing
      allLinks[5], // cost guide
      allLinks[1], // redesign
      allLinks[4], // law firms
    ];
  }
  
  if (slug.includes('wix') || slug.includes('wordpress') || slug.includes('diy')) {
    return [
      allLinks[1], // redesign
      allLinks[0], // pricing
      allLinks[7], // case studies
      allLinks[2], // shopify
    ];
  }

  if (slug.includes('schema') || slug.includes('seo') || slug.includes('technical')) {
    return [
      allLinks[1], // redesign
      allLinks[3], // sandton
      allLinks[6], // wix vs wp
      allLinks[7], // case studies
    ];
  }

  // Default related links
  return [
    allLinks[0], // pricing
    allLinks[1], // redesign
    allLinks[7], // case studies
    allLinks[3], // sandton
  ];
}

export default BlogPostPage;