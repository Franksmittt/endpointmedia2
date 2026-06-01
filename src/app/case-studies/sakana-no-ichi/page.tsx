// src/app/case-studies/sakana-no-ichi/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CaseStudyArticleSchema from '@/components/seo/CaseStudyArticleSchema';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Sakana no Ichi Case Study | Luxury Brand Development & Premium Koi Food",
    description: "Discover how Endpoint Media transformed Sakana no Ichi from a simple product concept into a premium, luxury lifestyle brand through complete brand development, Japanese aesthetic principles, and mindful ritual positioning.",
    path: "/case-studies/sakana-no-ichi",
    keywords: [
      "luxury brand case study",
      "koi food premium branding",
      "sakana no ichi web design",
      "endpoint media luxury project",
    ],
    openGraph: {
      type: "article",
    },
  });
}

const SakanaNoIchiCaseStudy = () => {
  return (
    <>
      <CaseStudyArticleSchema slug="sakana-no-ichi" />
      <article itemScope itemType="https://schema.org/Article">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-zinc-400 hover:text-white transition mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
          
          <figure className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400/90 bg-teal-400/10 px-4 py-2 rounded-sm border border-teal-400/30">Luxury Brand Development</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 bg-zinc-900 px-4 py-2 rounded-sm border border-zinc-700">Premium Lifestyle</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-heading">
              Sakana no Ichi (魚の市): Complete Brand Development & Luxury Positioning
            </h1>
            <figcaption className="text-lg md:text-xl text-zinc-400 max-w-3xl">A showcase of complete <strong className="text-teal-400/90 font-semibold">Brand Development</strong>, transforming a simple product concept (Koi fish food) into a premium, luxury lifestyle and philosophical experience. The focus shifts from product sales to <strong className="text-teal-400/90 font-semibold">mindful ritual and aesthetic excellence</strong>.</figcaption>
          </figure>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-heading">
                🎨 Project Overview
              </h2>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                This project for <strong className="font-semibold text-white">Sakana no Ichi (魚の市)</strong> is a showcase of complete <strong className="text-teal-400/90 font-semibold">Brand Development</strong>, transforming a simple product concept (Koi fish food) into a premium, luxury lifestyle and philosophical experience.
              </p>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                The focus shifts from <strong className="font-semibold">product sales</strong> to <strong className="text-teal-400/90 font-semibold">mindful ritual and aesthetic excellence</strong>, elevating the customer from hobbyist to <strong className="font-semibold">Mindful Keeper</strong> and <strong className="font-semibold">artist</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Philosophical Foundation */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              🎨 Brand Identity & Philosophical Foundation
            </h2>
            <p className="text-lg text-zinc-400 mb-12">
              The brand is built on a sophisticated blend of Japanese aesthetic principles, creating a unique, high-end market position that elevates the product above commodity:
            </p>

            {/* Core Philosophy */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-l border-teal-400/60">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-400/20 border border-teal-400/40 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Core Philosophy: Living Art
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 ml-16">
                The entire narrative pivots on the idea that keeping Koi is not a hobby, but an artistic pursuit (<strong className="font-semibold">Nishikigoi, a swimming jewel</strong>). This elevates the customer to a <strong className="text-teal-400/90 font-semibold">Mindful Keeper</strong> and <strong className="text-teal-400/90 font-semibold">artist</strong>, transforming the purchase from a transactional product to a philosophical experience.
              </p>
            </div>

            {/* Aesthetic Principle */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-l border-zinc-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-sm border border-zinc-700 flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Aesthetic Principle (Wabi Sabi)
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 ml-16">
                The design incorporates the concept of <strong className="font-semibold">quiet elegance and serene tradition</strong>, using monochrome backgrounds and subtle accents to convey sophistication. This aesthetic reinforces the premium positioning and creates a meditative, discovery-focused experience.
              </p>
            </div>

            {/* Brand Naming */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-l border-teal-400/60">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-400/20 border border-teal-400/40 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Brand Naming
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 ml-16">
                The name <strong className="font-semibold">Sakana no Ichi (魚の市)</strong>, translated as <strong className="font-semibold">&quot;Fish Market&quot;</strong> or <strong className="font-semibold">&quot;Ichiba (market/fair) of the Fish,&quot;</strong> ironically juxtaposes a mundane concept with luxury product, hinting at <strong className="text-teal-400/90 font-semibold">authenticity and the highest quality available</strong>.
              </p>
            </div>

            {/* Typography */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-zinc-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-sm border border-zinc-700 flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Typography Strategy
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 ml-16 mb-4">
                The design uses a dual font strategy to support the philosophical claim:
              </p>
              <div className="ml-16 space-y-3">
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4">
                  <p className="font-semibold text-white mb-1"><code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">Cormorant Garamond</code> (Serif)</p>
                  <p className="text-zinc-400 text-sm">Used for <strong className="font-semibold">Headlines (H1/H2)</strong> and <strong className="font-semibold">Logo Subtitle</strong> to convey <em>Legacy, Artistry, and Tradition</em>.</p>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4">
                  <p className="font-semibold text-white mb-1"><code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">Inter</code> (Sans-Serif)</p>
                  <p className="text-zinc-400 text-sm">Used for <strong className="font-semibold">Body Copy</strong> to convey <em>Modern Science, Precision, and Clarity</em>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System & Visual Language */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              🟤 Design System & Visual Language
            </h2>
            <p className="text-lg text-zinc-400 mb-12">
              The color palette is deliberately limited, focusing on high-contrast luxury to reinforce the brand&apos;s premium standing:
            </p>

            {/* Color Palette Table */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold font-heading">Color Code</th>
                      <th className="px-6 py-4 text-left font-bold font-heading">Name</th>
                      <th className="px-6 py-4 text-left font-bold font-heading">Role & Psychological Effect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr className="hover:bg-zinc-900/50 transition">
                      <td className="px-6 py-4 align-top">
                        <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300 font-mono">#1A1A1A</code>
                      </td>
                      <td className="px-6 py-4 font-semibold text-white align-top">Sumi Black</td>
                      <td className="px-6 py-4 text-zinc-400">
                        <strong className="font-semibold">Foundation & Depth.</strong> Used for the background, creating a canvas for the &quot;Living Art.&quot;
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/50 transition bg-zinc-900/30">
                      <td className="px-6 py-4 align-top">
                        <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300 font-mono">#FDFDFD</code>
                      </td>
                      <td className="px-6 py-4 font-semibold text-white align-top">Washi White</td>
                      <td className="px-6 py-4 text-zinc-400">
                        <strong className="font-semibold">Clarity & Serenity.</strong> Used for primary text, ensuring high contrast and legibility.
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/50 transition">
                      <td className="px-6 py-4 align-top">
                        <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300 font-mono">#B3A76B</code>
                      </td>
                      <td className="px-6 py-4 font-semibold text-white align-top">Kintsugi Gold</td>
                      <td className="px-6 py-4 text-zinc-400">
                        <strong className="font-semibold">Accent & Excellence.</strong> Used for primary CTAs, hover effects, and accents. Symbolizes &quot;repairing with gold&quot; – honoring imperfections and valuing longevity.
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/50 transition bg-zinc-900/30">
                      <td className="px-6 py-4 align-top">
                        <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300 font-mono">#D2C4A2</code>
                      </td>
                      <td className="px-6 py-4 font-semibold text-white align-top">Bamboo Beige</td>
                      <td className="px-6 py-4 text-zinc-400">
                        <strong className="font-semibold">Subtle Warmth.</strong> Used sparingly for hover effects in the header navigation.
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/50 transition">
                      <td className="px-6 py-4 align-top">
                        <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300 font-mono">#B91C1C</code>
                      </td>
                      <td className="px-6 py-4 font-semibold text-white align-top">Vitality Red</td>
                      <td className="px-6 py-4 text-zinc-400">
                        <strong className="font-semibold">Contrast & Action.</strong> Used for links and journal CTAs to signal life and passion.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Color Swatches Visual */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-[#1A1A1A] rounded-lg h-24 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">Sumi Black</span>
              </div>
              <div className="bg-[#FDFDFD] border-2 border-zinc-800 rounded-lg h-24 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">Washi White</span>
              </div>
              <div className="bg-[#B3A76B] rounded-lg h-24 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">Kintsugi Gold</span>
              </div>
              <div className="bg-[#D2C4A2] rounded-lg h-24 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">Bamboo Beige</span>
              </div>
              <div className="bg-[#B91C1C] rounded-lg h-24 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">Vitality Red</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Experience & Conversion Strategy */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              🌐 User Experience (UX) & Conversion Strategy
            </h2>
            <p className="text-lg text-zinc-400 mb-12">
              The website is designed as a meditative, discovery-focused journey (long-scrolling homepage) rather than a transactional storefront:
            </p>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              {/* Custom Cursor */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-400/20 border border-teal-400/40 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    🖱️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                      Custom Cursor (Micro-Interaction)
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-400 ml-16">
                  A custom, animated <strong className="font-semibold">Kintsugi Gold</strong> cursor expands on hover over interactive elements (links, buttons). This sophisticated detail reinforces the <strong className="text-teal-400/90 font-semibold">premium feel</strong> and intuitively guides users to clickable areas, creating a tactile sense of luxury interaction.
                </p>
              </div>

              {/* Parallax & Scroll Reveal */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-zinc-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-sm border border-zinc-700 flex items-center justify-center text-white font-bold text-xl">
                    📜
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                      Parallax & Scroll Reveal
                    </h3>
                  </div>
                </div>
                <div className="ml-16 space-y-4">
                  <div>
                    <p className="font-semibold text-white mb-2">Parallax Effect:</p>
                    <p className="text-zinc-400">
                      The background image moves slowly on scroll, adding a <strong className="font-semibold">sense of depth and immersion</strong>, creating a meditative, discovery-focused experience rather than a fast transactional interface.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Scroll Reveal:</p>
                    <p className="text-zinc-400">
                      The entire page is modularized with the <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">.scroll-reveal</code> class, ensuring content sections fade into view as the user scrolls, maintaining engagement and pace throughout the discovery journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* Elevated Product Imagery */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-400/20 border border-teal-400/40 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    🖼️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                      Elevated Product Imagery
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-400 ml-16">
                  Product images and visual elements use the <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">.product-image</code> class, applying subtle hover effects (lift/translate Y and gold shadow) to make the <strong className="text-teal-400/90 font-semibold">visual art feel tactile and valuable</strong>, reinforcing the premium positioning.
                </p>
              </div>

              {/* Dynamic Header */}
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-zinc-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-sm border border-zinc-700 flex items-center justify-center text-white font-bold text-xl">
                    📍
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                      Dynamic Header
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-400 ml-16">
                  The sticky header transitions from <strong className="font-semibold">transparent</strong> (White/Clear text on the Hero) to a <strong className="font-semibold">blurred Sumi Black background with Kintsugi Gold text</strong> (<code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">.header-scrolled-text</code> class) on scroll. This ensures the header is always readable while <strong className="text-zinc-400 font-semibold">reinforcing the brand&apos;s luxurious color palette</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy & Storytelling */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading">
              📝 Content Strategy & Storytelling
            </h2>
            <p className="text-lg text-zinc-400 mb-12">
              The content is structured to engage the target audience through emotional resonance, not just nutritional facts:
            </p>

            {/* Storytelling Flow */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-t border-teal-400/60">
              <h3 className="text-2xl font-bold mb-6 font-heading text-white">
                Storytelling Flow
              </h3>
              <p className="text-zinc-400 mb-6">
                The homepage sections map out the brand narrative logically, creating a meditative journey:
              </p>
              <div className="space-y-4">
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4">
                  <p className="font-semibold text-white mb-2"><code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">#story</code> (Living Art)</p>
                  <p className="text-zinc-400 text-sm">Establishes the philosophy and the Mindful Keeper identity, transforming the customer perception from hobbyist to artist.</p>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4">
                  <p className="font-semibold text-white mb-2"><code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">#gallery</code> (Colors)</p>
                  <p className="text-zinc-400 text-sm">Focuses on the core aesthetic benefit. Vibrant color expression in Koi, demonstrating the visual impact of the product.</p>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4">
                  <p className="font-semibold text-white mb-2"><code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">#offering</code> (The Package)</p>
                  <p className="text-zinc-400 text-sm">Detail on the design and UV-protective packaging, emphasizing quality and thoughtful design.</p>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4">
                  <p className="font-semibold text-white mb-2"><code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">#essence</code> (The Science)</p>
                  <p className="text-zinc-400 text-sm">Detail on the high-quality, peer-reviewed ingredients (Spirulina, Kelp), balancing emotional appeal with scientific credibility.</p>
                </div>
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4">
                  <p className="font-semibold text-white mb-2"><code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">#ritual</code> (Mindful Nourishment)</p>
                  <p className="text-zinc-400 text-sm">Connects the product usage to the meditative, mindful act of feeding, reinforcing the philosophical positioning.</p>
                </div>
              </div>
            </div>

            {/* The Journal */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-l border-teal-400/60">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-400/20 border border-teal-400/40 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  📖
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    The Journal
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 ml-16 mb-4">
                The blog (<code className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-300">#journal</code>) reinforces the philosophical core with topics like <strong className="font-semibold">&quot;Ma: The Active Silence&quot;</strong> and <strong className="font-semibold">&quot;Patience and The Koi,&quot;</strong> building a community of <strong className="text-teal-400/90 font-semibold">mindful keepers</strong>.
              </p>
              <ul className="space-y-2 text-zinc-400 ml-16">
                <li className="flex items-start">
                  <span className="text-teal-400/90 mr-3 mt-1 font-bold">•</span>
                  <span>Creates emotional connection beyond product features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400/90 mr-3 mt-1 font-bold">•</span>
                  <span>Builds long-term brand loyalty through philosophical alignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400/90 mr-3 mt-1 font-bold">•</span>
                  <span>Establishes Sakana no Ichi as the thought leader in mindful Koi keeping</span>
                </li>
              </ul>
            </div>

            {/* Final CTAs */}
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-zinc-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-sm border border-zinc-700 flex items-center justify-center text-white font-bold text-xl">
                  🎯
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Final Call-to-Action
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 ml-16 mb-4">
                The journey culminates in two simple, conversion-focused points:
              </p>
              <ul className="space-y-3 text-zinc-400 ml-16">
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-3 mt-1 font-bold">1.</span>
                  <span>The large <strong className="font-semibold">&quot;Begin the Ritual&quot;</strong> button in the hero section, framing the purchase as a philosophical act rather than a transaction.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-3 mt-1 font-bold">2.</span>
                  <span>The clear <strong className="font-semibold">&quot;Get In Touch&quot;</strong> CTA and submission form at the bottom, concluding the discovery process with a pathway to connection.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 md:py-28 bg-black text-white border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Results & Impact
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              A complete brand transformation that elevates Sakana no Ichi from product to premium lifestyle philosophy.
            </p>
            
            <figure><figcaption className="sr-only">Key project outcomes</figcaption><div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">Complete</div><p className="text-zinc-400 text-sm">Brand Development</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">Premium</div>
                <p className="text-zinc-400 text-sm">Luxury Positioning</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">Meditative</div>
                <p className="text-zinc-400 text-sm">Discovery Journey</p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="text-3xl font-bold mb-2">Mindful</div>
                <p className="text-zinc-400 text-sm">Ritual Focus</p>
              </div>
            </div></figure>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Let&apos;s discuss how we can elevate your product from commodity to premium lifestyle experience through complete brand development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-10 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-teal-300"
              >
                Get Your Free Growth Audit
              </Link>
              <Link
                href="/case-studies"
                className="inline-block bg-transparent border border-zinc-700 text-zinc-100 font-semibold py-4 px-10 rounded-sm hover:bg-zinc-200 hover:text-black transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-white"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
      <HubSpokeLinks variant="case-study" slug="sakana-no-ichi" />
      </article>
    </>
  );
};

export default SakanaNoIchiCaseStudy;

