import 'server-only';

import { Worker } from 'bullmq';
import { runViciousAudit } from '@/utils/audit-engine';
import type { AuditTier } from '@/utils/audit-engine/types';

let workerInstance: Worker | null = null;

export function startAuditWorker() {
  if (workerInstance) return workerInstance;
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) return null;

  workerInstance = new Worker(
    'vicious-audit',
    async (job) => {
      const payload = job.data as { url: string; tier: AuditTier };
      const unlocked = payload.tier !== 'free';
      return runViciousAudit(payload.url, payload.tier, unlocked);
    },
    {
      connection: { url: redisUrl },
    }
  );

  workerInstance.on('failed', (job, error) => {
    console.error(`Audit worker failed for job ${job?.id}:`, error);
  });

  return workerInstance;
}

