// src/app/layout.tsx
import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";
// Import global styles (including Tailwind directives)
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GOOGLE_ADS_ID = "AW-17744075656";

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
        url: "/images/EPM.jpg", 
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
    images: ["/images/EPM.jpg"], 
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
    // INSTRUCTIONS:
    // 1. Go to Google Search Console: https://search.google.com/search-console
    // 2. Add your property (endpointmedia.co.za)
    // 3. Choose "HTML tag" verification method
    // 4. Copy the content value from the meta tag (e.g., "abc123xyz")
    // 5. Add it here: google: "abc123xyz"
    // 
    // ALTERNATIVE: Use DNS TXT record verification (more reliable, independent of app state)
    // Add TXT record: google-site-verification=YOUR_CODE
    // google: process.env.GOOGLE_SITE_VERIFICATION || "",
    // yandex: process.env.YANDEX_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const trackingIds = [GOOGLE_ADS_ID, GA_ID].filter(
    (id): id is string => typeof id === "string" && id.length > 0,
  );
  const gtagConfig = trackingIds.map((id) => `gtag('config', '${id}');`).join("\n");
  // JSON-LD Structured Data for Organization & LocalBusiness
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.endpointmedia.co.za/#organization",
    name: "Endpoint Media",
    alternateName: "Endpoint Media Web Design",
    url: "https://www.endpointmedia.co.za",
    logo: "https://www.endpointmedia.co.za/images/logo.png",
    description: "Endpoint Media builds high-performance, lead-generating websites for Johannesburg service businesses.",
    founder: {
      "@type": "Person",
      name: "Frank Smit",
    },
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
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.endpointmedia.co.za/#localbusiness",
    name: "Endpoint Media",
    image: "https://www.endpointmedia.co.za/images/logo.png",
    description: "Professional web design and local SEO services for Johannesburg businesses",
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
    url: "https://www.endpointmedia.co.za",
    telephone: "+27-76-972-4559",
    email: "hello@endpointmedia.co.za",
    priceRange: "R5,500 - R15,000",
    hasMap: "https://www.google.com/maps?cid=06180556288562610524",
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
      {
        "@type": "City",
        name: "Johannesburg",
      },
      {
        "@type": "City",
        name: "Sandton",
      },
      {
        "@type": "City",
        name: "Randburg",
      },
      {
        "@type": "City",
        name: "Bryanston",
      },
      {
        "@type": "City",
        name: "Rivonia",
      },
      {
        "@type": "City",
        name: "Midrand",
      },
      {
        "@type": "City",
        name: "Roodepoort",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.endpointmedia.co.za/#website",
    url: "https://www.endpointmedia.co.za",
    name: "Endpoint Media",
    description: "Web Design Johannesburg | High-Performance Websites That Generate Revenue",
    publisher: {
      "@id": "https://www.endpointmedia.co.za/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.endpointmedia.co.za/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Secure JSON-LD sanitization function (prevents XSS)
  function secureJsonLD(data: object) {
    return JSON.stringify(data).replace(/</g, '\\u003c');
  }

  // Person schema for Frank Smit (E-E-A-T signal)
  const frankSmitSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.endpointmedia.co.za/about/author/frank-smit#person",
    name: "Frank Smit",
    jobTitle: "Web Design Expert & Founder",
    url: "https://www.endpointmedia.co.za/about/author/frank-smit",
    image: "https://www.endpointmedia.co.za/images/frank-smit.jpg",
    sameAs: [
      "https://www.linkedin.com/in/frank-smittt",
    ],
    worksFor: {
      "@id": "https://www.endpointmedia.co.za/#organization",
    },
    knowsAbout: [
      "Web Design",
      "Local SEO",
      "Next.js Development",
      "E-commerce Development",
      "Technical SEO",
    ],
  };

  return (
    <html lang="en-ZA" className="scroll-smooth font-sans" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
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
      <body className={`bg-gray-50 text-gray-800 antialiased font-sans`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
    
        <Header /> 
        <main id="main-content">{children}</main> 
        <Footer />
        {trackingIds.length > 0 && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-tags-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                ${gtagConfig}
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}