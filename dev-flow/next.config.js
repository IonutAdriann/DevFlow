/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  typescript: { ignoreBuildErrors: true },
  webpack: (config) => {
    // allow .js file extension in imports for moduleResolution: node16
    // https://github.com/vercel/next.js/discussions/41189#discussioncomment-3806170
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts", ".tsx"],
    };
    config.resolve.fallback = { fs: false }; // for using 'fs' import
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
