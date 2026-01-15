import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'avatars.githubusercontent.com'
      }
    ]
  },
  serverExternalPackages: ["@lancedb/lancedb"],
};

export default nextConfig;
