/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_URL
}

module.exports = nextConfig