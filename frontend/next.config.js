/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add allowed image domains here
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,           // Poll every 1s for file changes (needed on Windows/macOS + Docker)
      aggregateTimeout: 300 // Delay rebuild slightly to avoid excessive recompiles
    };
    return config;
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
