/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [], // Add allowed image domains here
  },
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    // For local development, we proxy to the backend.
    // In production, we usually call the API directly via NEXT_PUBLIC_API_URL in api.ts
    const backendUrl = process.env.BACKEND_URL || 'http://backend:8080';
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      }
    ];
  },
};

module.exports = nextConfig;
