import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/blog/posts';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? 'Endpoint Media Blog';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#222222',
          padding: '80px',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '16px', background: '#14b8a6' }} />

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: 30, color: '#14b8a6', fontWeight: 800 }}>Endpoint.Media</div>
        </div>

        <div
          style={{
            fontSize: title.length > 60 ? 52 : 70,
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '30px',
          }}
        >
          {title}
        </div>

        <div style={{ fontSize: 30, color: '#9ca3af', fontWeight: 500 }}>
          Expert Insights for Johannesburg Businesses
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
