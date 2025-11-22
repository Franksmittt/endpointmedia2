import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#111827', // Gray 900
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          Endpoint<span style={{ color: '#14b8a6' }}>.</span>Media
        </div>
        <div style={{ fontSize: 48, marginTop: 40, color: '#9ca3af' }}>
          Web Design Johannesburg
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}

