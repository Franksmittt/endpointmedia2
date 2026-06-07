// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { WebVitals } from "@/components/analytics/web-vitals";
import {
  secureJsonLD,
  ORG_ID,
  FRANK_SMIT_ID,
  BASE_URL,
  GBP_MAPS_URL,
  DEFAULT_OG_IMAGE,
  LOGO_IMAGE,
  FOUNDER_IMAGE,
} from "@/lib/seo";
import { GOOGLE_ADS_ID } from "@/lib/conversion-config";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-SGFD6DFTRV";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Define comprehensive metadata for SEO dominance
export const metadata: Metadata = {
  title: {
    default: "Web Design Johannesburg | Endpoint Media | Websites That Generate Revenue",
    template: "%s | Endpoint Media",
  },
  description: "Stop buying online brochures. Endpoint Media builds high-performance, lead-generating websites for Johannesburg service businesses. We deliver ROI, not excuses. Get your free audit.",
  keywords: [
    "web design johannesburg",
    "local SEO johannesburg",
    "web developer johannesburg",
    "lead generation website",
    "website design sandton",
    "website design randburg",
    "website design bryanston",
    "website design rivonia",
    "website design midrand",
    "website design roodepoort",
    "small business website johannesburg",
    "website design prices johannesburg",
    "website redesign services johannesburg",
    "shopify expert johannesburg",
    "custom web development johannesburg",
    "hyper-local SEO johannesburg",
    "google business profile optimization johannesburg",
    "web design for law firms johannesburg",
    "web design for real estate johannesburg",
    "web design for medical practices johannesburg",
  ],
  authors: [{ name: "Frank Smit", url: "https://www.endpointmedia.co.za" }],
  creator: "Endpoint Media",
  publisher: "Endpoint Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Use environment variable for base URL, fallback to hardcoded value
  // IMPORTANT: Set NEXT_PUBLIC_BASE_URL in production for canonical consistency
  // CRITICAL: Always use www version (www.endpointmedia.co.za) as canonical
  // NOTE: Canonical tags are set per-page via buildMetadata() - do not set here to avoid conflicts
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://www.endpointmedia.co.za"),
  alternates: {
    languages: {
      "en-ZA": "https://www.endpointmedia.co.za",
      en: "https://www.endpointmedia.co.za",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.endpointmedia.co.za",
    siteName: "Endpoint Media",
    title: "Web Design Johannesburg | Endpoint Media | Websites That Generate Revenue",
    description: "Stop buying online brochures. Endpoint Media builds high-performance, lead-generating websites for Johannesburg service businesses. We deliver ROI, not excuses.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Endpoint Media - Web Design Johannesburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Johannesburg | Endpoint Media",
    description: "High-performance, lead-generating websites for Johannesburg service businesses. We deliver ROI, not excuses.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console Verification
    // Set GOOGLE_SITE_VERIFICATION environment variable in production
    // For DNS verification (recommended): Add TXT record: google-site-verification=YOUR_CODE
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const trackingIds = [GA_ID, GOOGLE_ADS_ID].filter(
    (id): id is string => typeof id === "string" && id.length > 0,
  );
  const primaryTagId = GA_ID || GOOGLE_ADS_ID;
  const gtagConfig = trackingIds.map((id) => `gtag('config', '${id}');`).join("\n");
  // JSON-LD Structured Data for Organization & LocalBusiness
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Endpoint Media",
    alternateName: "Endpoint Media Web Design",
    url: BASE_URL,
    logo: LOGO_IMAGE,
    description: "Endpoint Media builds high-performance, lead-generating websites for Johannesburg service businesses.",
    founder: { "@type": "Person", "@id": FRANK_SMIT_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27-76-972-4559",
      contactType: "Sales",
      email: "hello@endpointmedia.co.za",
      areaServed: "ZA",
      availableLanguage: ["en-ZA"],
    },
    sameAs: [
      "https://www.facebook.com/people/Endpoint-Media/61583029051159/",
      "https://www.linkedin.com/in/frank-smittt",
      GBP_MAPS_URL,
    ],
    knowsAbout: [
      {
        "@type": "Thing",
        name: "Next.js",
        sameAs: "https://www.wikidata.org/wiki/Q28957137",
      },
      {
        "@type": "Thing",
        name: "Google Ads",
        sameAs: "https://www.wikidata.org/wiki/Q180864",
      },
      {
        "@type": "Thing",
        name: "Technical SEO",
        sameAs: "https://www.wikidata.org/wiki/Q2902242",
      },
      {
        "@type": "Thing",
        name: "Local SEO",
        sameAs: "https://en.wikipedia.org/wiki/Local_search_engine_optimisation",
      },
      {
        "@type": "Thing",
        name: "Conversion Rate Optimization",
        sameAs: "https://en.wikipedia.org/wiki/Conversion_rate_optimization",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Johannesburg" },
      { "@type": "City", name: "Sandton" },
      { "@type": "City", name: "Randburg" },
      { "@type": "City", name: "Bryanston" },
      { "@type": "City", name: "Rivonia" },
      { "@type": "City", name: "Midrand" },
      { "@type": "City", name: "Roodepoort" },
      { "@type": "City", name: "Rosebank" },
      { "@type": "City", name: "Fourways" },
      { "@type": "City", name: "Waterfall" },
      { "@type": "City", name: "Benoni" },
      { "@type": "City", name: "Meyersdal" },
      { "@type": "City", name: "New Redruth" },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "Endpoint Media",
    image: LOGO_IMAGE,
    description: "Professional web design and local SEO services for Johannesburg businesses",
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.2041,
      longitude: 28.0473,
    },
    url: BASE_URL,
    telephone: "+27-76-972-4559",
    email: "hello@endpointmedia.co.za",
    priceRange: "R5,500 - R15,000",
    hasMap: GBP_MAPS_URL,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
    branchCode: "06180556288562610524",
    areaServed: [
      { "@type": "City", name: "Johannesburg", sameAs: "https://www.wikidata.org/wiki/Q1754" },
      { "@type": "City", name: "Sandton", sameAs: "https://www.wikidata.org/wiki/Q1025682" },
      { "@type": "City", name: "Randburg", sameAs: "https://www.wikidata.org/wiki/Q2719072" },
      { "@type": "City", name: "Bryanston", sameAs: "https://www.wikidata.org/wiki/Q4927445" },
      { "@type": "City", name: "Rivonia", sameAs: "https://www.wikidata.org/wiki/Q7338859" },
      { "@type": "City", name: "Midrand", sameAs: "https://www.wikidata.org/wiki/Q1025681" },
      { "@type": "City", name: "Roodepoort", sameAs: "https://www.wikidata.org/wiki/Q943397" },
      { "@type": "City", name: "Rosebank", sameAs: "https://www.wikidata.org/wiki/Q7371732" },
      { "@type": "City", name: "Fourways", sameAs: "https://www.wikidata.org/wiki/Q5454389" },
      { "@type": "City", name: "Waterfall", sameAs: "https://www.wikidata.org/wiki/Q7969776" },
      { "@type": "City", name: "Benoni", sameAs: "https://www.wikidata.org/wiki/Q816873" },
      { "@type": "City", name: "Meyersdal", sameAs: "https://www.wikidata.org/wiki/Q3593815" },
      { "@type": "City", name: "New Redruth", sameAs: "https://www.wikidata.org/wiki/Q3593815" },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Endpoint Media",
    description: "Web Design Johannesburg | High-Performance Websites That Generate Revenue",
    publisher: {
      "@id": ORG_ID,
    },
  };

  const frankSmitSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FRANK_SMIT_ID,
    name: "Frank Smit",
    jobTitle: "Web Design Expert & Founder",
    url: `${BASE_URL}/about/author/frank-smit`,
    image: FOUNDER_IMAGE,
    sameAs: [
      "https://www.linkedin.com/in/frank-smittt",
    ],
    worksFor: {
      "@id": ORG_ID,
    },
    knowsAbout: [
      {
        "@type": "Thing",
        name: "Web Design",
        sameAs: "https://en.wikipedia.org/wiki/Web_design",
      },
      {
        "@type": "Thing",
        name: "Local SEO",
        sameAs: "https://en.wikipedia.org/wiki/Local_search_engine_optimisation",
      },
      {
        "@type": "Thing",
        name: "Next.js Development",
        sameAs: "https://www.wikidata.org/wiki/Q28957137",
      },
      {
        "@type": "Thing",
        name: "Technical SEO",
        sameAs: "https://www.wikidata.org/wiki/Q2902242",
      },
      {
        "@type": "Thing",
        name: "E-commerce Development",
        sameAs: "https://en.wikipedia.org/wiki/E-commerce",
      },
    ],
  };

  return (
    <html
      lang="en-ZA"
      className={`scroll-smooth font-sans ${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* JSON-LD Structured Data - Secured with XSS protection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: secureJsonLD(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: secureJsonLD(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: secureJsonLD(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: secureJsonLD(frankSmitSchema) }}
        />
      </head>
      <body className="bg-black font-sans text-zinc-300 antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
    
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WebVitals />
        {primaryTagId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${primaryTagId}`}
              strategy="afterInteractive"
            />
            <Script id="google-tags-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.__gtagQueue = window.__gtagQueue || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                ${gtagConfig}
                while (window.__gtagQueue.length) {
                  gtag.apply(null, window.__gtagQueue.shift());
                }
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}