import type { ComponentType } from 'react';
import { LegacyHtmlContent } from './legacy';

const LEGACY_SLUGS = [
  'the-true-cost-of-a-website-in-johannesburg',
  'freelancer-vs-agency-the-low-risk-choice-for-johannesburg',
  'the-schema-vacuum-technical-seo-advantage',
  'wix-vs-wordpress-guide-johannesburg-small-businesses',
  'how-much-does-website-cost-south-africa-2025',
] as const;

export const LEGACY_CONTENT_MAP: Record<string, ComponentType> = Object.fromEntries(
  LEGACY_SLUGS.map((slug) => [
    slug,
    function LegacyPost() {
      return <LegacyHtmlContent slug={slug} />;
    },
  ]),
);
