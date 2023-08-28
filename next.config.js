/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        hostname: 'twitter.com'
      },
    ],
  },
}

module.exports = nextConfig
