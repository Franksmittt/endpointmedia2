import { NextRequest, NextResponse } from 'next/server';
import {
  fetchSitemapUrls,
  getIndexNowHost,
  getKeyLocation,
  INDEXNOW_API,
  INDEXNOW_MAX_URLS,
} from '@/lib/indexnow';

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const secret = process.env.INDEXNOW_SECRET;
  const cronSecret = process.env.CRON_SECRET;

  if (!authHeader?.startsWith('Bearer ')) {
    return false;
  }

  const token = authHeader.slice('Bearer '.length);
  return token === secret || (cronSecret !== undefined && token === cronSecret);
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const indexNowKey = process.env.INDEXNOW_KEY;
  if (!indexNowKey) {
    return NextResponse.json({ error: 'INDEXNOW_KEY is not configured' }, { status: 500 });
  }

  let urlList: string[];

  try {
    const body = await request.json().catch(() => ({}));
    const overrideUrls = Array.isArray(body?.urls)
      ? body.urls.filter((url: unknown): url is string => typeof url === 'string')
      : [];

    urlList =
      overrideUrls.length > 0
        ? overrideUrls.slice(0, INDEXNOW_MAX_URLS)
        : await fetchSitemapUrls();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to resolve URLs';
    return NextResponse.json({ error: message }, { status: 500 });
  }

  if (urlList.length === 0) {
    return NextResponse.json({ error: 'No URLs to submit' }, { status: 400 });
  }

  const payload = {
    host: getIndexNowHost(),
    key: indexNowKey,
    keyLocation: getKeyLocation(indexNowKey),
    urlList,
  };

  try {
    const response = await fetch(INDEXNOW_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      urlCount: urlList.length,
      keyLocation: payload.keyLocation,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to sync with IndexNow' }, { status: 500 });
  }
}
