import * as cheerio from 'cheerio';
import { fetchWithTimeout } from '@/utils/audit-engine/fetch-with-timeout';
import type { BotCheck, RuntimeChecks } from '@/utils/audit-engine/types';

const BOTS = [
  { name: 'Googlebot', ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' },
  { name: 'Bingbot', ua: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)' },
  { name: 'GPTBot', ua: 'Mozilla/5.0 (compatible; GPTBot/1.0; +https://openai.com/gptbot)' },
  { name: 'ClaudeBot', ua: 'Mozilla/5.0 (compatible; ClaudeBot/1.0; +https://anthropic.com/claudebot)' },
  { name: 'PerplexityBot', ua: 'Mozilla/5.0 (compatible; PerplexityBot/1.0; +https://perplexity.ai/bot)' },
] as const;

async function getStatus(url: string): Promise<number> {
  try {
    const res = await fetchWithTimeout(url, { cache: 'no-store', redirect: 'follow' }, 5_000);
    return res.status;
  } catch {
    return 0;
  }
}

export async function getRedirectHops(inputUrl: string): Promise<number> {
  let hops = 0;
  let current = inputUrl;
  for (let i = 0; i < 8; i += 1) {
    const res = await fetchWithTimeout(current, { cache: 'no-store', redirect: 'manual' }, 5_000);
    if (res.status >= 300 && res.status < 400) {
      const next = res.headers.get('location');
      if (!next) break;
      current = new URL(next, current).toString();
      hops += 1;
      continue;
    }
    break;
  }
  return hops;
}

async function runBotChecks(url: string): Promise<BotCheck[]> {
  const checks = await Promise.all(
    BOTS.map(async (bot): Promise<BotCheck> => {
      try {
        const response = await fetchWithTimeout(
          url,
          {
            cache: 'no-store',
            headers: { 'User-Agent': bot.ua },
            redirect: 'follow',
          },
          5_000
        );
        const blocked = response.status === 401 || response.status === 403 || response.status === 429;
        return { bot: bot.name, status: response.status, blocked };
      } catch {
        return { bot: bot.name, status: 0, blocked: true };
      }
    })
  );
  return checks;
}

export async function runRuntimeChecks(url: string): Promise<RuntimeChecks> {
  const [robotsOk, sitemapOk, llmsOk, botChecks, redirectHops] = await Promise.all([
    getStatus(`${new URL('/robots.txt', url)}`),
    getStatus(`${new URL('/sitemap.xml', url)}`),
    getStatus(`${new URL('/llms.txt', url)}`),
    runBotChecks(url),
    getRedirectHops(url),
  ]);

  const htmlRes = await fetchWithTimeout(url, { cache: 'no-store', redirect: 'follow' }, 10_000);
  const html = await htmlRes.text();
  const $ = cheerio.load(html);

  const canonical = $('link[rel="canonical"]').attr('href') ?? null;
  const titleLength = $('title').first().text().trim().length;
  const descriptionLength = ($('meta[name="description"]').attr('content') ?? '').trim().length;
  const h1Count = $('h1').length;
  const emptyAltCount = $('img')
    .toArray()
    .filter((img) => {
      const alt = ($(img).attr('alt') ?? '').trim();
      return alt.length === 0;
    }).length;
  const jsonLdCount = $('script[type="application/ld+json"]').length;

  return {
    robotsOk: robotsOk === 200,
    sitemapOk: sitemapOk === 200,
    llmsOk: llmsOk === 200,
    canonical,
    titleLength,
    descriptionLength,
    h1Count,
    emptyAltCount,
    jsonLdCount,
    redirectHops,
    botChecks,
  };
}

