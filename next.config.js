/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.wntr.gdn/:path*',
      },
    ]
  }
}

module.exports = nextConfig