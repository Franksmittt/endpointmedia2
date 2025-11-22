import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Endpoint Media',
    short_name: 'Endpoint',
    description: 'Web Design & SEO for Alberton and Johannesburg South.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827', // Gray 900
    theme_color: '#14b8a6', // Teal-500
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

