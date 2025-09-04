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
    return [
      {
        source: '/api/:path*',
        destination: 'http://backend:8080/api/:path*',
      }
    ];
  },
};

module.exports = nextConfig;
