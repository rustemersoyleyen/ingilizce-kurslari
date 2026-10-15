import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  agentRules: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/blog/ingilizce-kurslari" : "",
  },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/blog/ingilizce-kurslari",
        assetPrefix: "/blog/ingilizce-kurslari/",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
