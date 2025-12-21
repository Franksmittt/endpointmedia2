import { NextRequest, NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo';

export async function POST(req: NextRequest) {
  // 1. Security: Authenticate the request
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.INDEXNOW_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { urls } = await req.json();
  
  // 2. The IndexNow Protocol
  const payload = {
    host: 'www.endpointmedia.co.za', // Use www for consistency with canonical
    key: process.env.INDEXNOW_KEY, // Get from Bing Webmaster Tools
    keyLocation: `${BASE_URL}/${process.env.INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  try {
    // 3. Fire and Forget to Bing
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ success: response.ok });
  } catch {
    return NextResponse.json({ error: 'Failed to sync with IndexNow' }, { status: 500 });
  }
}
