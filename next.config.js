/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vj-media.s3.eu-north-1.amazonaws.com',
      },
    ],
  }
};

module.exports = nextConfig;
