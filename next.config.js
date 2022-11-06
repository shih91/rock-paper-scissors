/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'goodday451999.github.io',
        port: '443',
        pathname: '/Rock-Paper-Scissors-Neo/images/**',
      },
    ],
  },
}

module.exports = nextConfig
