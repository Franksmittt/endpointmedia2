import type { ComponentType } from 'react';
import {
  BrutalTruthWordPress,
  CoreWebVitalsFinancial,
  AnswerEngineOptimization,
  AnatomyEliteLandingPage,
  WebsiteMigrationBlueprint,
} from './silo-1';
import {
  GoogleAdsTrackingErrors,
  LandingPageSpeedQualityScore,
  SmartBiddingVsManual,
  PerformanceEngineHighTicket,
  PerformanceOverVanity,
} from './silo-2';
import {
  LocalSeoBlueprint,
  B2bDigitalMarketingIndustries,
  MinimalistDesignB2b,
  StructuredDataLocalSchema,
  MaximizingRegionalMapVisibility,
} from './silo-3';
import { LEGACY_CONTENT_MAP } from './legacy-map';
export { isLegacySlug } from './legacy';

export const BLOG_CONTENT_MAP: Record<string, ComponentType> = {
  'the-brutal-truth-about-wordpress': BrutalTruthWordPress,
  'core-web-vitals-financial-metric': CoreWebVitalsFinancial,
  'answer-engine-optimization-aeo': AnswerEngineOptimization,
  'anatomy-elite-landing-page': AnatomyEliteLandingPage,
  'website-migration-blueprint': WebsiteMigrationBlueprint,
  'google-ads-tracking-errors-budget': GoogleAdsTrackingErrors,
  'landing-page-speed-quality-score': LandingPageSpeedQualityScore,
  'smart-bidding-vs-manual-waste': SmartBiddingVsManual,
  'performance-engine-high-ticket-lead-gen': PerformanceEngineHighTicket,
  'performance-over-vanity-metrics': PerformanceOverVanity,
  'local-seo-blueprint': LocalSeoBlueprint,
  'b2b-digital-marketing-specialized-industries': B2bDigitalMarketingIndustries,
  'minimalist-design-b2b-value': MinimalistDesignB2b,
  'structured-data-local-schema': StructuredDataLocalSchema,
  'maximizing-regional-map-visibility': MaximizingRegionalMapVisibility,
  ...LEGACY_CONTENT_MAP,
};

export function getBlogContentComponent(slug: string): ComponentType | null {
  return BLOG_CONTENT_MAP[slug] ?? null;
}
