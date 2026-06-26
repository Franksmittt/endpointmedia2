// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { WebVitals } from "@/components/analytics/web-vitals";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
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

  return (
    <html
      lang="en-ZA"
      className={`scroll-smooth font-sans ${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="bg-black font-sans text-zinc-300 antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <SiteChrome>{children}</SiteChrome>
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