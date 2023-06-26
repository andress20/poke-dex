/** @type {import('next').NextConfig} */
// const nextConfig = {
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
}
