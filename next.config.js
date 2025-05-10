const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  output: "export",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // クライアントサイドのビルド設定
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        process: false,
        buffer: false,
        util: false,
      };
    }
    return config;
  },
  // node-fs-backendの代わりにブラウザ用のバックエンドを使用
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
