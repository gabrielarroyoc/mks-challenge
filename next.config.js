/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["mks-sistemas.nyc3.digitaloceanspaces.com"],
  },
};

module.exports = nextConfig;
