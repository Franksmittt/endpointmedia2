// src/app/layout.tsx
import type { Metadata } from "next";
import { Roboto, Poppins } from 'next/font/google'; // Import next/font functions
import "./globals.css";
// Import global styles (including Tailwind directives)
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// Configure Roboto font (for body/sans-serif)
const roboto = Roboto({
  weight: ['400', '500'], // Specify only the weights you use
  subsets: ['latin'],
  display: 'swap', // Recommended for performance
  variable: '--font-roboto', // Define CSS variable name
});
// Configure Poppins font (for headings)
const poppins = Poppins({
  weight: ['600', '700', '800'], // Specify only the weights you use
  subsets: ['latin'],
  display: 'swap', // Recommended for performance
  variable: '--font-poppins', // Define CSS variable name
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
  authors: [{ name: "Frank Smit", url: "https://endpointmedia.co.za" }],
  creator: "Endpoint Media",
  publisher: "Endpoint Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://endpointmedia.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://endpointmedia.co.za",
    siteName: "Endpoint Media",
    title: "Web Design Johannesburg | Endpoint Media | Websites That Generate Revenue",
    description: "Stop buying online brochures. Endpoint Media builds high-performance, lead-generating websites for Johannesburg service businesses. We deliver ROI, not excuses.",
    images: [
      {
        url: "/images/og-image.jpg",
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
    images: ["/images/twitter-image.jpg"],
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
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Organization & LocalBusiness
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://endpointmedia.co.za/#organization",
    name: "Endpoint Media",
    alternateName: "Endpoint Media Web Design",
    url: "https://endpointmedia.co.za",
    logo: "https://endpointmedia.co.za/images/logo.png",
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
      // Add social media profiles when available
      // "https://www.facebook.com/endpointmedia",
      // "https://www.linkedin.com/company/endpoint-media",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://endpointmedia.co.za/#localbusiness",
    name: "Endpoint Media",
    image: "https://endpointmedia.co.za/images/logo.png",
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
    url: "https://endpointmedia.co.za",
    telephone: "+27-76-972-4559",
    email: "hello@endpointmedia.co.za",
    priceRange: "R5,500 - R15,000",
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
    "@id": "https://endpointmedia.co.za/#website",
    url: "https://endpointmedia.co.za",
    name: "Endpoint Media",
    description: "Web Design Johannesburg | High-Performance Websites That Generate Revenue",
    publisher: {
      "@id": "https://endpointmedia.co.za/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://endpointmedia.co.za/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    // CRITICAL FIX 1: Apply both font variable classes to the <html> tag.
    <html lang="en-ZA" className={`${roboto.variable} ${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Font links are handled automatically by next/font */}
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      {/* CRITICAL FIX 2: Apply the base font class directly to the <body> tag. 
          This should link the CSS variables to the font files and force the content to display. */}
      <body className={`bg-gray-50 text-gray-800 antialiased font-sans`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
    
        <Header /> {/* Header component */}
        <main id="main-content">{children}</main> {/* Wrap children in main for semantics */}
        <Footer /> {/* Footer component */}
      </body>
    </html>
  );
}