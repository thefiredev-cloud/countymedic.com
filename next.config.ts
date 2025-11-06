import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    const reactPath = path.dirname(require.resolve('react/package.json'));
    const reactDomPath = path.dirname(require.resolve('react-dom/package.json'));

    config.resolve.alias = {
      ...config.resolve.alias,
      'react': reactPath,
      'react-dom': reactDomPath,
      'react/jsx-runtime': path.join(reactPath, 'jsx-runtime'),
      'react/jsx-dev-runtime': path.join(reactPath, 'jsx-dev-runtime'),
    };
    return config;
  },
};

export default nextConfig;
