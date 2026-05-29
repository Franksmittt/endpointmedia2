import { BASE_URL } from '@/lib/seo';

export const INDEXNOW_API = 'https://api.indexnow.org/indexnow';
export const INDEXNOW_MAX_URLS = 10_000;

export function getIndexNowHost(): string {
  return new URL(BASE_URL).host;
}

export function getKeyLocation(key: string): string {
  return `${BASE_URL}/${key}.txt`;
}

interface SitemapEntry {
  loc: string;
  lastmod?: string;
}

export function parseSitemapEntries(xml: string): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const urlBlockRegex = /<url>([\s\S]*?)<\/url>/g;
  let blockMatch: RegExpExecArray | null;

  while ((blockMatch = urlBlockRegex.exec(xml)) !== null) {
    const block = blockMatch[1];
    const locMatch = block.match(/<loc>([^<]+)<\/loc>/);
    if (!locMatch) continue;

    const lastmodMatch = block.match(/<lastmod>([^<]+)<\/lastmod>/);
    entries.push({
      loc: locMatch[1].trim(),
      lastmod: lastmodMatch?.[1]?.trim(),
    });
  }

  return entries;
}

/** Prefer newest lastmod URLs first; cap at IndexNow batch limit. */
export function selectUrlsForIndexNow(entries: SitemapEntry[]): string[] {
  const sorted = [...entries].sort((a, b) => {
    if (!a.lastmod && !b.lastmod) return 0;
    if (!a.lastmod) return 1;
    if (!b.lastmod) return -1;
    return new Date(b.lastmod).getTime() - new Date(a.lastmod).getTime();
  });

  return sorted.slice(0, INDEXNOW_MAX_URLS).map((entry) => entry.loc);
}

export async function fetchSitemapUrls(): Promise<string[]> {
  const response = await fetch(`${BASE_URL}/sitemap.xml`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status}`);
  }

  const xml = await response.text();
  const entries = parseSitemapEntries(xml);

  if (entries.length === 0) {
    throw new Error('No URLs found in sitemap');
  }

  return selectUrlsForIndexNow(entries);
}
