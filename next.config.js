/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optimize dev server memory usage
  experimental: {
    // Reduce memory footprint in development
    optimizePackageImports: ['react', 'react-dom'],
  },

  // Webpack optimizations for dev server
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Reduce memory usage in development
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
          },
        },
      };

      // Clear cache more aggressively
      config.cache = {
        type: 'memory',
        maxGenerations: 1,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
