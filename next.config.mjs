/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this images block:
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Specify the protocol
        hostname: 'source.unsplash.com', // Add the allowed hostname
        port: '', // Usually empty unless a specific port is needed
        pathname: '/**', // Allow any path on this hostname
      },
      // You can add more patterns here for other domains if needed
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      //   pathname: '/images/**',
      // },
    ],
  },
  // Add any other configurations you might need below
  // For example, if you were using experimental features:
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;