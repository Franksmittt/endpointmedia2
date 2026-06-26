import * as cheerio from 'cheerio';
import { fetchWithTimeout } from '@/utils/audit-engine/fetch-with-timeout';
import type { Fingerprint } from '@/utils/audit-engine/types';

const PLAYWRIGHT_ENABLED = process.env.AUDIT_ENABLE_PLAYWRIGHT === 'true';

export async function detectPlatform(targetUrl: string): Promise<Fingerprint> {
  const response = await fetchWithTimeout(targetUrl, { cache: 'no-store', redirect: 'follow' });
  const html = await response.text();
  const $ = cheerio.load(html);
  const signals: string[] = [];

  const htmlLower = html.toLowerCase();
  if (htmlLower.includes('__next_data__') || htmlLower.includes('_next/static')) {
    signals.push('Detected __NEXT_DATA__ / _next/static markers.');
  }
  if (htmlLower.includes('cdn.shopify.com') || htmlLower.includes('shopify') || htmlLower.includes('shopify-section')) {
    signals.push('Detected Shopify DOM/runtime signatures.');
  }
  if (htmlLower.includes('wp-content') || htmlLower.includes('wp-includes') || htmlLower.includes('wordpress')) {
    signals.push('Detected WordPress path signatures.');
  }

  const scripts = $('script')
    .toArray()
    .map((s) => ($(s).attr('src') ?? '').toLowerCase())
    .filter(Boolean);

  if (scripts.some((src) => src.includes('/_next/'))) {
    signals.push('Script sources include Next.js bundle paths.');
  }

  // Optional deep fingerprinting — disabled by default because Playwright + chromium
  // adds ~25s latency and routinely exceeds serverless execution budgets.
  if (PLAYWRIGHT_ENABLED) {
    try {
      const [{ chromium }, chromiumPkg] = await Promise.all([
        import('playwright-core'),
        import('@sparticuz/chromium-min'),
      ]);
      const executablePath = await chromiumPkg.default.executablePath();
      const browser = await chromium.launch({
        args: chromiumPkg.default.args,
        executablePath,
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 12_000 });
      const hasNext = await page.evaluate(
        () => Boolean((window as unknown as { __NEXT_DATA__?: unknown }).__NEXT_DATA__)
      );
      if (hasNext) signals.push('Playwright confirmed window.__NEXT_DATA__.');
      await browser.close();
    } catch {
      signals.push('Playwright deep fingerprinting skipped (runtime chromium unavailable).');
    }
  }

  let platform: Fingerprint['platform'] = 'unknown';
  if (signals.some((s) => s.toLowerCase().includes('next'))) platform = 'nextjs';
  else if (signals.some((s) => s.toLowerCase().includes('shopify'))) platform = 'shopify';
  else if (signals.some((s) => s.toLowerCase().includes('wordpress'))) platform = 'wordpress';

  return { platform, signals };
}

