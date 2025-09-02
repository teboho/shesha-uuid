import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Static export configuration for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
