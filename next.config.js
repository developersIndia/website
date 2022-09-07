/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
      "i.picsum.photos",
      "picsum.photos",
    ],
  },
};

module.exports = nextConfig;
