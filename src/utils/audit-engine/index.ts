import 'server-only';

import { detectPlatform } from '@/utils/audit-engine/fingerprint';
import { getAuditQueue } from '@/utils/audit-engine/queue';
import { buildQuote, buildSummary, blurEvidence } from '@/utils/audit-engine/scoring';
import { runRuntimeChecks } from '@/utils/audit-engine/runtime';
import type { AuditResult, AuditTier, RuntimeChecks, TechnicalEvidence } from '@/utils/audit-engine/types';

function buildEvidence(url: string, runtime: RuntimeChecks): TechnicalEvidence[] {
  const blockedBots = runtime.botChecks.filter((bot: { blocked: boolean }) => bot.blocked);
  const evidence: TechnicalEvidence[] = [
    { key: 'Target URL', value: url },
    { key: 'Canonical', value: runtime.canonical ?? 'Missing canonical tag' },
    { key: 'Redirect Hops', value: String(runtime.redirectHops) },
    { key: 'Title Length', value: String(runtime.titleLength) },
    { key: 'Meta Description Length', value: String(runtime.descriptionLength) },
    { key: 'H1 Count', value: String(runtime.h1Count) },
    { key: 'Empty Image ALT Count', value: String(runtime.emptyAltCount) },
    { key: 'JSON-LD Blocks', value: String(runtime.jsonLdCount) },
    { key: 'Robots/Sitemap/LLMS', value: `${runtime.robotsOk}/${runtime.sitemapOk}/${runtime.llmsOk}` },
  ];
  for (const bot of blockedBots) {
    evidence.push({
      key: `Blocked Bot: ${bot.bot}`,
      value: `HTTP ${bot.status} when spoofing ${bot.bot}`,
    });
  }
  return evidence;
}

export async function runViciousAudit(
  targetUrl: string,
  tier: AuditTier,
  unlocked: boolean
): Promise<AuditResult> {
  const [fingerprint, runtime] = await Promise.all([detectPlatform(targetUrl), runRuntimeChecks(targetUrl)]);
  const summary = buildSummary(runtime);
  const quote = buildQuote(summary);
  const rawTechnicalEvidence = blurEvidence(buildEvidence(targetUrl, runtime), unlocked);

  return {
    auditedUrl: targetUrl,
    fingerprint,
    runtime,
    summary,
    quote,
    rawTechnicalEvidence,
  };
}

export async function enqueueAuditJob(url: string, tier: AuditTier): Promise<string | null> {
  const queue = getAuditQueue();
  if (!queue) return null;
  const job = await queue.add('run-audit', { url, tier }, { removeOnComplete: 100, removeOnFail: 500 });
  return job.id ?? null;
}

