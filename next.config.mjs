/** @type {import('next').NextConfig} */
const assetPrefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix,
  basePath: assetPrefix,
  publicRuntimeConfig: {
    assetPrefix,
  },
};

export default nextConfig;
