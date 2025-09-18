import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ❗ This will ignore type errors during build
    ignoreBuildErrors: true,
  },
  
};

export default nextConfig;
