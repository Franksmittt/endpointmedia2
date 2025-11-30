// src/app/december-special/layout.tsx
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "December Flash Special: Professional Websites for R1,500 | Endpoint Media",
    description: "Get a professional, Google-optimized Landing Page built on Next.js technology for R1,500. Valid December 1-15, 2025. Limited availability - Service businesses only.",
    keywords: [
      "cheap website design johannesburg",
      "startup website package",
      "affordable website johannesburg",
      "landing page design johannesburg",
      "R1500 website",
      "budget website design south africa",
      "professional landing page",
      "Next.js website johannesburg",
    ],
    path: "/december-special",
  });
}

export default function DecemberSpecialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema Markup for Offer
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "December Flash Special - Professional Landing Page",
    description: "Get a professional, Google-optimized Landing Page built on Next.js technology for R1,500. Valid December 1-15, 2025.",
    price: "1500",
    priceCurrency: "ZAR",
    availability: "https://schema.org/LimitedAvailability",
    validFrom: "2025-12-01",
    validThrough: "2025-12-15",
    url: `${BASE_URL}/december-special`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: secureJsonLD(offerSchema),
        }}
      />
      {children}
    </>
  );
}

