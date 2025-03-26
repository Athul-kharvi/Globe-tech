let userConfig;
try {
  userConfig = await import('./v0-user-next.config.js');
} catch (e) {
  userConfig = {};
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Ensures proper routing on Apache servers
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // headers: async () => [
  //   {
  //     source: "/video/:path*",
  //     headers: [
  //       { key: "Content-Type", value: "video/webm" },
  //     ],
  //   },
  // ],
};

/**
 * Merges user-provided config with default config.
 */
const mergeConfig = (baseConfig, customConfig) => {
  if (!customConfig) return baseConfig;

  for (const key in customConfig) {
    if (typeof baseConfig[key] === 'object' && !Array.isArray(baseConfig[key])) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...customConfig[key],
      };
    } else {
      baseConfig[key] = customConfig[key];
    }
  }
  return baseConfig;
};

export default mergeConfig(nextConfig, userConfig);
