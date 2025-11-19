import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import React from "react";

export const metadata: Metadata = buildMetadata({
  title: "Contact Endpoint Media | Talk to Frank Smit",
  description:
    "Request your free growth audit. Speak directly with Frank Smit about web design, local SEO, and lead generation for Johannesburg service businesses.",
  path: "/contact",
  keywords: [
    "contact endpoint media",
    "speak to frank smit",
    "web design consultation johannesburg",
    "local seo audit johannesburg",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

