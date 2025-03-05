import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Fixes routing issues
  images: {
    unoptimized: true, // Prevents image optimization errors
  },
};

export default nextConfig;
