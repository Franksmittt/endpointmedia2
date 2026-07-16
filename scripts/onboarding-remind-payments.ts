/**
 * CLI: send payment reminders for awaiting_payment submissions.
 *
 * Usage:
 *   npm run onboarding:remind-payments
 *   npm run onboarding:remind-payments -- --dry-run
 *
 * Requires DATABASE_URL + RESEND_* (and bank env vars for email copy).
 * Loads .env.local / .env when present (no dotenv dependency).
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

function loadEnvFile(filePath: string) {
  if (!existsSync(filePath)) return;
  const text = readFileSync(filePath, 'utf8');
  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(resolve(process.cwd(), '.env.local'));
loadEnvFile(resolve(process.cwd(), '.env'));

async function main() {
  const dryRun = process.argv.includes('--dry-run') || process.argv.includes('--dryRun');
  const { runPaymentReminders } = await import('../src/lib/onboarding/reminders');
  const result = await runPaymentReminders({ dryRun });

  console.log(
    JSON.stringify(
      {
        ok: result.errors.length === 0,
        dryRun,
        ...result,
      },
      null,
      2,
    ),
  );

  if (result.errors.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
