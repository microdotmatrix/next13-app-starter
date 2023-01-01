/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sourcecodesavage.me',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.it',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
