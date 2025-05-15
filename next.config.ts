import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // SSG için gerekli ayarlar
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },

  // Build zamanında tüm sayfaları statik olarak oluştur
  distDir: 'out'
};

export default nextConfig;