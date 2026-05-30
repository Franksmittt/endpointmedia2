import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { enqueueAuditJob, runViciousAudit } from '@/utils/audit-engine';
import type { AuditTier } from '@/utils/audit-engine/types';

export const runtime = 'nodejs';

type AuditRequestBody = {
  url: string;
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

  const tier = normalizeTier(body.tier);
  const unlocked = isUnlockVerified(tier, body.unlockToken);

  // BullMQ is optional. When REDIS_URL is configured we expose a queue job id
  // while still returning inline results for immediate UX.
  const queuedJobId = await enqueueAuditJob(url.toString(), tier);
  const audit = await runViciousAudit(url.toString(), tier, unlocked);
  const persistedReport = await prisma.auditReport.create({
    data: {
      targetUrl: url.toString(),
      rawAuditData: audit,
      blurState: !unlocked,
    },
    select: {
      id: true,
    },
  });

  return NextResponse.json(
    {
      tier,
      unlocked,
      queuedJobId,
      reportId: persistedReport.id,
      report: audit,
    },
    { status: 200 }
  );
}

