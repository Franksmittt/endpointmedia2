import 'server-only';

import { Queue } from 'bullmq';

let queueInstance: Queue | null = null;

export function getAuditQueue(): Queue | null {
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) return null;
  if (queueInstance) return queueInstance;

  queueInstance = new Queue('vicious-audit', {
    connection: { url: redisUrl },
  });
  return queueInstance;
}

