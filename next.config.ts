import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Disable Turbopack due to known issues in Next.js 16
  // Remove this when Turbopack becomes stable
  bundlePagesRouterDependencies: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        pathname: '/product-images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        pathname: '/public/**',
      },
    ],
  },
};

export default nextConfig;
