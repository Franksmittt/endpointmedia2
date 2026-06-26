import 'server-only';

import { randomUUID } from 'node:crypto';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { enqueueAuditJob, runViciousAudit } from '@/utils/audit-engine';
import type { AuditResult, AuditTier } from '@/utils/audit-engine/types';

export const runtime = 'nodejs';
export const maxDuration = 60;

type AuditRequestBody = {
  url: string;
  competitorUrl?: string;
  tier?: AuditTier;
  unlockToken?: string;
};

function normalizeTier(tier: string | undefined): AuditTier {
  if (tier === 'unlock' || tier === 'repository') return tier;
  return 'free';
}

function isUnlockVerified(tier: AuditTier, unlockToken: string | undefined): boolean {
  if (tier === 'free') return false;
  const expected = process.env.AUDITOR_UNLOCK_TOKEN;
  if (!expected) return false;
  return unlockToken === expected;
}

async function persistAuditReport(
  targetUrl: string,
  audit: AuditResult,
  unlocked: boolean
): Promise<{ reportId: string; persisted: boolean }> {
  try {
    const persistedReport = await prisma.auditReport.create({
      data: {
        targetUrl,
        rawAuditData: audit,
        blurState: !unlocked,
      },
      select: { id: true },
    });
    return { reportId: persistedReport.id, persisted: true };
  } catch (error) {
    console.error('[vicious-audit] Failed to persist audit report:', error);
    return { reportId: randomUUID(), persisted: false };
  }
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
  }

  let body: AuditRequestBody;
  try {
    body = (await request.json()) as AuditRequestBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  if (!body.url) {
    return NextResponse.json({ error: 'URL is required.' }, { status: 400 });
  }

  let url: URL;
  try {
    url = new URL(body.url);
  } catch {
    return NextResponse.json({ error: 'Please provide a valid URL.' }, { status: 400 });
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return NextResponse.json({ error: 'Only http/https URLs are allowed.' }, { status: 400 });
  }

  let competitorUrl: string | undefined;
  if (body.competitorUrl) {
    try {
      const parsed = new URL(body.competitorUrl);
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        competitorUrl = parsed.toString();
      }
    } catch {
      return NextResponse.json({ error: 'Competitor URL is invalid.' }, { status: 400 });
    }
  }

  const tier = normalizeTier(body.tier);
  const unlocked = isUnlockVerified(tier, body.unlockToken);

  try {
    let queuedJobId: string | null = null;
    try {
      queuedJobId = await enqueueAuditJob(url.toString(), tier);
    } catch (error) {
      console.error('[vicious-audit] Queue enqueue failed:', error);
    }

    const audit = await runViciousAudit(url.toString(), tier, unlocked, competitorUrl);
    const { reportId, persisted } = await persistAuditReport(url.toString(), audit, unlocked);

    return NextResponse.json(
      {
        tier,
        unlocked,
        queuedJobId,
        reportId,
        persisted,
        report: audit,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[vicious-audit] Audit run failed:', error);
    const message =
      error instanceof Error && error.message
        ? error.message
        : 'The audit could not complete. Please try again in a moment.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
