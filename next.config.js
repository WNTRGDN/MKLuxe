/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  formData() { return typeof self == 'object' ? self.FormData : window.FormData }
}

module.exports = nextConfig