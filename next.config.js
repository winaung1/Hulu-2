/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{

    domains: ["download.logo.wine","image.tmdb.org"],
  },
}

module.exports = nextConfig
