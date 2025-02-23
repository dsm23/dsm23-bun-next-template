import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import { env } from "./env";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  async rewrites() {
    return await [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
    ];
  },
};

const fn = () => {
  const plugins = [withBundleAnalyzer({ enabled: env.ANALYZE })];

  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  });

  return config;
};

export default fn;
