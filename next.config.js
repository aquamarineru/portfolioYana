/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 128, 256, 384, 512, 768],
  },
}

module.exports = nextConfig
