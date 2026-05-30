import type { AuditQuote, AuditSummary, RuntimeChecks, TechnicalEvidence } from '@/utils/audit-engine/types';

export function buildSummary(runtime: RuntimeChecks): AuditSummary {
  let criticalIssues = 0;
  let warnings = 0;

  if (!runtime.robotsOk) criticalIssues += 1;
  if (!runtime.sitemapOk) criticalIssues += 1;
  if (runtime.botChecks.some((b) => b.blocked)) criticalIssues += 1;
  if (runtime.h1Count !== 1) warnings += 1;
  if (runtime.emptyAltCount > 0) warnings += 1;
  if (!runtime.canonical) warnings += 1;
  if (runtime.redirectHops > 1) warnings += 1;
  if (runtime.titleLength < 45 || runtime.titleLength > 65) warnings += 1;
  if (runtime.descriptionLength < 100 || runtime.descriptionLength > 170) warnings += 1;
  if (runtime.jsonLdCount === 0) warnings += 1;

  const score = Math.max(0, 100 - criticalIssues * 22 - warnings * 6);
  const estimatedLostLeadValueZar = Math.max(
    3000,
    criticalIssues * 9000 + warnings * 2500
  );
  const advisory =
    criticalIssues > 0
      ? 'Critical crawl and visibility risks detected. Competitors can outrank and out-convert you rapidly.'
      : warnings > 0
        ? 'Structural issues are suppressing trust and conversion efficiency.'
        : 'Your technical baseline is strong. Focus on authority and conversion experiments to compound growth.';
  return { score, criticalIssues, warnings, estimatedLostLeadValueZar, advisory };
}

export function buildQuote(summary: AuditSummary): AuditQuote {
  const riskMultiplier = Math.max(1, summary.criticalIssues + Math.ceil(summary.warnings / 2));
  return {
    tier2UnlockUsd: 49 + (riskMultiplier - 1) * 10,
    tier3RepoDiveUsd: 299 + (riskMultiplier - 1) * 30,
    tier4OverhaulMonthlyUsd: 2500 + (riskMultiplier - 1) * 300,
  };
}

export function blurEvidence(evidence: TechnicalEvidence[], unlocked: boolean): TechnicalEvidence[] {
  if (unlocked) return evidence;
  return evidence.map((item) => ({
    key: item.key,
    value: item.value.replace(/[A-Za-z0-9]/g, '•'),
  }));
}

