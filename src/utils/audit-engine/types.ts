export type AuditTier = 'free' | 'unlock' | 'repository';

export type BotCheck = {
  bot: string;
  status: number;
  blocked: boolean;
};

export type RuntimeChecks = {
  robotsOk: boolean;
  sitemapOk: boolean;
  llmsOk: boolean;
  canonical: string | null;
  titleLength: number;
  descriptionLength: number;
  h1Count: number;
  emptyAltCount: number;
  jsonLdCount: number;
  redirectHops: number;
  botChecks: BotCheck[];
};

export type Fingerprint = {
  platform: 'nextjs' | 'shopify' | 'wordpress' | 'unknown';
  signals: string[];
};

export type TechnicalEvidence = {
  key: string;
  value: string;
};

export type AuditQuote = {
  tier2UnlockUsd: number;
  tier3RepoDiveUsd: number;
  tier4OverhaulMonthlyUsd: number;
};

export type AuditSummary = {
  score: number;
  criticalIssues: number;
  warnings: number;
  estimatedLostLeadValueZar: number;
  advisory: string;
};

export type AuditResult = {
  auditedUrl: string;
  competitorUrl?: string | null;
  competitorSummary?: AuditSummary;
  fingerprint: Fingerprint;
  runtime: RuntimeChecks;
  summary: AuditSummary;
  quote: AuditQuote;
  rawTechnicalEvidence: TechnicalEvidence[];
};

