import Link from "next/link";
import dynamic from "next/dynamic";
import InternalLinks from "@/components/seo/InternalLinks";

const PricingCalculator = dynamic(() => import("./PricingCalculator"), {
  loading: () => (
    <div className="space-y-8 rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 min-h-[400px] animate-pulse">
      <div className="h-8 bg-zinc-800 rounded w-2/3 mx-auto" />
      <div className="h-4 bg-zinc-900 rounded w-1/2 mx-auto" />
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="h-24 bg-zinc-900 rounded-xl" />
        <div className="h-24 bg-zinc-900 rounded-xl" />
        <div className="h-24 bg-zinc-900 rounded-xl" />
        <div className="h-24 bg-zinc-900 rounded-xl" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-48 bg-zinc-900 rounded-xl" />
        <div className="h-48 bg-zinc-900 rounded-xl" />
      </div>
    </div>
  ),
});

export default function WebsiteDesignPricesPage() {
  // Related internal links for topical authority
  const relatedLinks = [
    {
      href: "/services/website-development",
      title: "Website Development Services",
      description: "Modern Next.js 15 development with entity-based SEO and architectural supremacy",
    },
    {
      href: "/services/web-design-firms",
      title: "Web Design Firm Services",
      description: "Professional digital architecture firm engineering Next.js enterprise solutions",
    },
    {
      href: "/services/custom-development",
      title: "Custom Web Development",
      description: "Enterprise solutions with transparent pricing and full code ownership",
    },
    {
      href: "/blog/the-true-cost-of-a-website-in-johannesburg",
      title: "The True Cost of a Website in Johannesburg",
      description: "Comprehensive guide to website pricing, including hidden costs and total cost of ownership",
    },
  ];

  return (
    <>
      {/* Hero Section - Disrupts "Per Page" Pricing Model */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400 bg-yellow-900/40 px-4 py-2 rounded-full border border-yellow-400">
                Transparent Pricing 2025
              </span>
            </div>
            
            <h1
              id="pricing-hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-heading"
            >
              Why &ldquo;Per Page&rdquo; Pricing is <span className="text-red-400">Dead.</span>
            </h1>
            
            <p id="pricing-hero-summary" className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
              In 2025, you aren&apos;t paying for pages of HTML. You&apos;re investing in a 
              <strong className="text-white"> Semantic Knowledge Graph Asset</strong>. 
              Stop comparing generic packages. Start calculating ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all transform hover:scale-105"
              >
                Calculate Your ROI
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-100 font-semibold py-4 px-8 rounded-sm hover:bg-zinc-900 transition-all"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section id="calculator" className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <PricingCalculator />
          </div>
        </div>
      </section>

      {/* Position Zero: Definition - "What is the average website cost?" */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              What is the Average Cost of a Website in South Africa?
            </h2>
            <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 border-l border-teal-400/60 p-6 mb-8">
              <p className="text-lg leading-relaxed text-zinc-300">
                Website costs in South Africa range from <strong>R2,500 for basic template sites</strong> to <strong>R150,000+ for enterprise Next.js solutions</strong>. The average small business website costs R15,000-R45,000. However, the true cost includes ongoing maintenance (R500-R2,000/month for WordPress), hosting fees, and lost revenue from poor performance. A Next.js site at R35,000 with zero maintenance often delivers superior 3-year ROI compared to a R15,000 WordPress template that requires monthly plugin subscriptions and loses conversions due to slow load times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Position Zero: Comparison Table - "Average website cost South Africa" */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-heading">
              Real Market Rates: Architecture vs. Templates (2025 Analysis)
            </h2>
            <p className="text-center text-zinc-500 mb-12 max-w-3xl mx-auto">
              Stop comparing page counts. Start comparing technical architecture and long-term value.
            </p>

            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 overflow-hidden">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="p-4 text-left font-bold font-heading">Asset Tier</th>
                    <th className="p-4 text-left font-bold font-heading">Typical Cost (ZAR)</th>
                    <th className="p-4 text-left font-bold font-heading">The Hidden Cost</th>
                    <th className="p-4 text-left font-bold font-heading">3-Year TCO</th>
                    <th className="p-4 text-left font-bold font-heading">Suitability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-semibold text-white">Freelancer Template</td>
                    <td className="p-4 text-white">R 2,500 - R 8,000</td>
                    <td className="p-4 text-red-600 font-medium">Slow LCP (3-5s), No SEO Authority</td>
                    <td className="p-4 text-zinc-400">R 14,500+</td>
                    <td className="p-4 text-zinc-400">Hobbyists / Test Projects</td>
                  </tr>
                  <tr className="border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-semibold text-white">DIY Builder (Wix/Squarespace)</td>
                    <td className="p-4 text-white">R 1,500 - R 5,000</td>
                    <td className="p-4 text-red-600 font-medium">Platform Lock-In, Limited SEO</td>
                    <td className="p-4 text-zinc-400">R 18,000+</td>
                    <td className="p-4 text-zinc-400">Personal Projects</td>
                  </tr>
                  <tr className="border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-semibold text-white">Standard Agency (WordPress)</td>
                    <td className="p-4 text-white">R 15,000 - R 45,000</td>
                    <td className="p-4 text-orange-600 font-medium">Plugin Bloat, R500-R2,000/month Maintenance</td>
                    <td className="p-4 text-zinc-400">R 33,000 - R 117,000</td>
                    <td className="p-4 text-zinc-400">Small Business (Budget-Conscious)</td>
                  </tr>
                  <tr className="border-b-2 border-accent bg-accent/10 hover:bg-accent/20 transition-colors">
                    <td className="p-4 font-bold text-white">Next.js Entity Asset</td>
                    <td className="p-4 font-bold text-charcoal">R 25,000 - R 75,000</td>
                    <td className="p-4 text-green-600 font-bold">None (Zero Maintenance)</td>
                    <td className="p-4 font-bold text-charcoal">R 27,000 - R 79,000</td>
                    <td className="p-4 font-bold text-charcoal">Market Leaders / Growth-Focused</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-semibold text-white">Enterprise Custom</td>
                    <td className="p-4 text-white">R 75,000 - R 150,000+</td>
                    <td className="p-4 text-zinc-400">Custom Integrations, Scalability</td>
                    <td className="p-4 text-zinc-400">R 81,000 - R 156,000+</td>
                    <td className="p-4 text-zinc-400">Large Corporations</td>
                  </tr>
                </tbody>
              </table>
              <div className="p-4 bg-zinc-900 text-sm text-zinc-500">
                <strong>Note:</strong> 3-Year TCO includes initial build cost + hosting (R200/month) + maintenance fees. Next.js sites require minimal maintenance due to static architecture and built-in optimization.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Position Zero: List - "What affects website price?" */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-heading">
              The 3 Factors That Actually Dictate Website Pricing
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Competitors quote by &ldquo;number of pages.&rdquo; We price by <strong>technical architecture</strong> that drives search rankings and conversions.
            </p>
            
            <div className="space-y-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-accent text-2xl mr-3">1.</span>
                  Rendering Engine & Performance Architecture
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Are you buying a slow PHP database query system (WordPress) or a pre-computed static edge delivery system (Next.js)? WordPress sites load in 3-5 seconds, requiring expensive caching plugins and monthly optimization. Next.js Server Components deliver HTML in under 200ms, eliminating the need for plugins and ongoing performance work.
                </p>
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4 mt-4">
                  <p className="text-sm text-zinc-400">
                    <strong>Cost Impact:</strong> WordPress requires R500-R2,000/month for maintenance and optimization. Next.js requires zero maintenance due to built-in optimization. The 3-year savings offset the higher initial investment.
                  </p>
                </div>
              </div>

              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-accent text-2xl mr-3">2.</span>
                  Entity Density & Knowledge Graph Integration
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Cheap sites use keyword stuffing (repeating &ldquo;Johannesburg&rdquo; 50+ times). Premium assets use Knowledge Graph ID (KGMID) linking to connect your brand to authoritative entities in Google&apos;s database. This establishes topical authority beyond keyword optimization.
                </p>
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4 mt-4">
                  <p className="text-sm text-zinc-400">
                    <strong>Cost Impact:</strong> Entity-based SEO requires upfront engineering investment but delivers long-term ranking advantages that competitors cannot replicate. This is a one-time cost that compounds in value over time.
                  </p>
                </div>
              </div>

              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-green-600 text-2xl mr-3">3.</span>
                  Self-Healing Architecture & Automation
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Does your site automatically redirect broken links, manage its own sitemap, and enforce canonical URLs? Or do you need monthly manual updates? Self-healing architecture requires upfront engineering investment but eliminates ongoing maintenance costs and prevents SEO disasters from broken links.
                </p>
                <div className="rounded-sm border border-zinc-800 bg-black/40 p-4 mt-4">
                  <p className="text-sm text-zinc-400">
                    <strong>Cost Impact:</strong> Automation saves R6,000-R24,000 over 3 years in maintenance fees. It also prevents revenue loss from broken links and SEO penalties that cheap sites frequently experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pricing by Pages is Outdated */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-heading">
              Why &ldquo;Per Page&rdquo; Pricing Doesn&apos;t Work in 2025
            </h2>
            
            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 mb-8 border-l border-red-500/60">
              <h3 className="text-2xl font-bold text-white mb-4">The Flawed Logic</h3>
              <p className="text-zinc-400 mb-4">
                Competitors quote &ldquo;R2,500 for 5 pages&rdquo; or &ldquo;R6,500 for 10 pages.&rdquo; This assumes every page costs the same amount of time and expertise to build. But that&apos;s false.
              </p>
              <ul className="space-y-3 text-zinc-400 ml-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>A homepage with hero sections, CTAs, and conversion optimization takes 8-12 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>A simple contact page takes 1-2 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>An e-commerce product page with variants and integrations takes 4-6 hours</span>
                </li>
              </ul>
              <p className="text-zinc-400 mt-4 font-semibold">
                Pricing by page count incentivizes quick, low-quality work. It doesn&apos;t reflect the technical complexity or business value of each page.
              </p>
            </div>

            <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
              <h3 className="text-2xl font-bold text-white mb-4">Our Approach: Value-Based Pricing</h3>
              <p className="text-zinc-400 mb-4">
                We price by <strong>technical architecture</strong> and <strong>business outcomes</strong>, not page count:
              </p>
              <ul className="space-y-3 text-zinc-400 ml-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span><strong>Core Web Vitals Performance:</strong> Every site targets 100/100 scores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span><strong>Semantic SEO Architecture:</strong> Built-in Knowledge Graph integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span><strong>Conversion Optimization:</strong> Every page designed for lead generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span><strong>Zero Maintenance:</strong> Self-healing architecture eliminates ongoing costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Breakdown by Service Type */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-heading">
              Transparent Pricing: What You Actually Get
            </h2>
            
            <div className="space-y-8">
              <div className="border-2 border-zinc-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">Business Landing Page</h3>
                  <span className="bg-accent/10 text-accent-600 px-4 py-2 rounded-full font-bold text-lg">R 15,000 - R 25,000</span>
                </div>
                <p className="text-zinc-400 mb-4">
                  Single-page, conversion-focused site for service businesses. Includes Next.js architecture, semantic SEO, Core Web Vitals optimization, and self-healing URL structure.
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Next.js 15 Server Components</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Knowledge Graph ID linking</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> LCP &lt;1s optimization</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Mobile-first responsive design</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Contact forms with conversion tracking</li>
                </ul>
              </div>

              <div className="border-2 border-accent/30 bg-accent/5 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Small Business Website</h3>
                    <span className="inline-block mt-2 text-sm text-zinc-500">5-10 pages, full service showcase</span>
                  </div>
                  <span className="bg-accent text-white px-4 py-2 rounded-full font-bold text-lg">R 25,000 - R 45,000</span>
                </div>
                <p className="text-zinc-400 mb-4">
                  Multi-page site with service pages, about page, blog functionality, and lead generation forms. Includes everything in Business Landing Page plus internal linking optimization and topic cluster architecture.
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> Everything in Business Landing Page</li>
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> Dynamic blog with SEO optimization</li>
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> Service page cluster architecture</li>
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> Internal linking with TF-IDF optimization</li>
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> Google Analytics & conversion tracking</li>
                </ul>
              </div>

              <div className="border-2 border-zinc-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">E-Commerce Store</h3>
                    <span className="inline-block mt-2 text-sm text-zinc-500">Product catalog, cart, checkout, payment integration</span>
                  </div>
                  <span className="bg-accent/10 text-accent-600 px-4 py-2 rounded-full font-bold text-lg">R 45,000 - R 75,000</span>
                </div>
                <p className="text-zinc-400 mb-4">
                  Full online store with product management, shopping cart, payment gateway integration, inventory management, and order tracking. Built on Next.js for superior performance and SEO.
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Everything in Small Business Website</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Product catalog with variants</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Payment gateway (PayFast, Stripe, etc.)</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Order management dashboard</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Shipping calculator integration</li>
                </ul>
              </div>

              <div className="border-2 border-zinc-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Enterprise Solution</h3>
                    <span className="inline-block mt-2 text-sm text-zinc-500">Custom features, CRM/ERP integration, multi-tenant</span>
                  </div>
                  <span className="bg-gray-900 text-white px-4 py-2 rounded-full font-bold text-lg">R 75,000 - R 150,000+</span>
                </div>
                <p className="text-zinc-400 mb-4">
                  Custom-built solution with CRM/ERP integrations, advanced user management, custom dashboards, API development, and enterprise-grade security. Tailored to specific business requirements.
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Everything in E-Commerce Store</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> CRM/ERP system integration</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom API development</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced user roles & permissions</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's NOT Included (Transparency) */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-heading">
              What&apos;s Included (And What&apos;s Not)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l border-teal-400/60">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-green-500 text-2xl mr-2">✓</span>
                  Included in All Packages
                </h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Next.js 15 architecture & deployment</li>
                  <li>• Semantic SEO with Knowledge Graph IDs</li>
                  <li>• Core Web Vitals optimization (100/100 target)</li>
                  <li>• Mobile-responsive design</li>
                  <li>• Self-healing URL architecture</li>
                  <li>• Google Analytics setup</li>
                  <li>• SSL certificate (free with hosting)</li>
                  <li>• 30 days of post-launch support</li>
                </ul>
              </div>

              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l border-red-500/60">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-red-500 text-2xl mr-2">✗</span>
                  Not Included (Quoted Separately)
                </h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Domain registration (R200/year)</li>
                  <li>• Hosting (R200-R500/month depending on traffic)</li>
                  <li>• Content writing (R500-R2,000/page)</li>
                  <li>• Stock photography (R50-R200/image)</li>
                  <li>• Logo design (R2,000-R5,000)</li>
                  <li>• Custom illustrations</li>
                  <li>• Maintenance SEO (R2,000-R5,000/month) or Market Domination SEO (R8,500-R15,000/month)</li>
                  <li>• Monthly maintenance (typically not needed for Next.js)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Position Zero Formatting */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-heading">
              Frequently Asked Questions About Website Pricing
            </h2>

            <div className="space-y-6">
              <details className="rounded-sm border border-zinc-800 bg-black/40 p-6">
                <summary className="font-bold text-lg text-white cursor-pointer hover:text-teal-400/90 transition-colors">
                  Why do Next.js websites cost more than WordPress sites?
                </summary>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Next.js websites require custom engineering, server-side rendering optimization, and semantic SEO architecture. Specialized skills that command higher rates. WordPress sites use templates and plugins, reducing initial build time. However, the total cost of ownership over 3 years often favors Next.js: WordPress requires R500-R2,000/month maintenance, while Next.js requires minimal ongoing costs. Additionally, Next.js sites convert better due to faster load times, offsetting the initial investment through increased revenue.
                </p>
              </details>

              <details className="rounded-sm border border-zinc-800 bg-black/40 p-6">
                <summary className="font-bold text-lg text-white cursor-pointer hover:text-teal-400/90 transition-colors">
                  Can I get a website for under R10,000?
                </summary>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Yes, but with significant trade-offs. Template-based sites from freelancers start at R2,500-R8,000 but typically have slow load times (3-5 seconds), limited SEO capabilities, and require ongoing maintenance. DIY builders (Wix, Squarespace) cost R1,500-R5,000 but lock you into their platform with limited customization. If you need a professional Next.js site with proper SEO, expect R15,000-R25,000 minimum. We recommend budgeting based on 3-year ROI, not just initial cost.
                </p>
              </details>

              <details className="rounded-sm border border-zinc-800 bg-black/40 p-6">
                <summary className="font-bold text-lg text-white cursor-pointer hover:text-teal-400/90 transition-colors">
                  What payment options do you offer?
                </summary>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  We offer flexible payment terms: 50% deposit to start, 50% on completion. For larger projects (R50,000+), we can arrange milestone-based payments. Unlike monthly subscription models that lock you into ongoing fees, our one-time pricing gives you full code ownership with no recurring charges beyond hosting (R200-R500/month depending on traffic).
                </p>
              </details>

              <details className="rounded-sm border border-zinc-800 bg-black/40 p-6">
                <summary className="font-bold text-lg text-white cursor-pointer hover:text-teal-400/90 transition-colors">
                  How long does it take to build a website?
                </summary>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Business Landing Pages: 2-4 weeks. Small Business Websites: 4-8 weeks. E-Commerce Stores: 8-12 weeks. Enterprise Solutions: 12-20 weeks. Timeline depends on content delivery, revisions, and integration complexity. Rush projects can be accommodated at a 20-30% premium. We provide detailed timelines with milestones during consultation.
                </p>
              </details>

              <details className="rounded-sm border border-zinc-800 bg-black/40 p-6">
                <summary className="font-bold text-lg text-white cursor-pointer hover:text-teal-400/90 transition-colors">
                  Do you offer maintenance packages?
                </summary>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Next.js sites require minimal maintenance due to static architecture and built-in optimization. We offer optional maintenance packages starting at R500/month for security updates, content changes, and performance monitoring. However, most Next.js clients don&apos;t need ongoing maintenance. The architecture is designed to be self-sustaining. This is a key differentiator from WordPress sites that require constant plugin updates and security patches.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-black text-white border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Ready to Invest in a Digital Asset, Not Just a Website?
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Get a custom quote based on your business goals, not arbitrary page counts. Let&apos;s discuss your requirements and calculate the true ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27769724559?text=Hi%20Frank,%20I%20want%20a%20custom%20website%20design%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Get Custom Quote
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-100 font-semibold py-4 px-8 rounded-sm hover:bg-zinc-900 transition-all"
              >
                View ROI Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking for Topical Authority */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <InternalLinks links={relatedLinks} />
          </div>
        </div>
      </section>
    </>
  );
};
