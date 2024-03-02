/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'twitter.com',
      },
      {
        protocol: 'https',
        hostname: '**.freepik.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'acortar.link'
      },
      {
        protocol: 'https',
        hostname: "n9.cl" 
      }
    ],
  },
}

module.exports = nextConfig
