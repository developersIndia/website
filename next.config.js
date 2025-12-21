/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "www.reddit.com",
      "external-preview.redd.it",
      "preview.redd.it",
      "i.redd.it",
      "i.imgur.com",
      "imgur.com",
      "a.thumbs.redditmedia.com",
      "b.thumbs.redditmedia.com",
    ],
  },
};

module.exports = nextConfig;
