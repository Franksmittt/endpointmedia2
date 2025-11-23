import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Placeholder data fetcher - In a real DB app, you'd fetch the post title here.
// For now, we extract the slug to make a decent title.
function getTitleFromSlug(slug: string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function Image({ params }: { params: { slug: string } }) {
  const title = getTitleFromSlug(params.slug);

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
          backgroundColor: '#111827', // Gray-900
          padding: '80px',
        }}
      >
        {/* Brand Accent Line */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '16px', background: '#14b8a6' }} />

        {/* Logo / Brand */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: 30, color: '#14b8a6', fontWeight: 800 }}>Endpoint.Media</div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 70,
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '30px',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 30, color: '#9ca3af', fontWeight: 500 }}>
          Expert Insights for Johannesburg Businesses
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
