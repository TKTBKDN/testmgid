/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'https://moluy.com',
      },
      {
        source: '/:slug*',
        destination: 'https://moluy.com/:slug*',
      },
      {
        source: '/doc-bao/:slug*',
        destination: 'https://moluy.com/doc-bao/:slug*',
      },
    ]
  }
}

module.exports = nextConfig
