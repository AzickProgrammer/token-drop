/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['gateway.ipfscdn.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'bafybeiaz72d5uoxq6ofxbrgxpsdriha4hxvwlbajpxoaop5wwxkeladxbq.ipfs.thirdwebstorage.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
