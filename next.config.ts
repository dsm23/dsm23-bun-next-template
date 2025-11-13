import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler:
    process.env.NODE_ENV !== "production"
      ? {}
      : {
          removeConsole: {
            exclude: ["error", "warn"],
          },
        },
  typedRoutes: true,
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

export default nextConfig;
