import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ key: string }> },
) {
  const { key } = await context.params;
  const indexNowKey = process.env.INDEXNOW_KEY;

  if (!indexNowKey || key !== indexNowKey) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return new NextResponse(indexNowKey, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, immutable',
    },
  });
}
