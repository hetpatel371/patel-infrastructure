import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/patel-infrastructure',
  assetPrefix: '/patel-infrastructure',
};

export default nextConfig;
