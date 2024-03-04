/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["a-h-y.com"], // Allow images from your domain
    // Adjust other optimization options as needed
  },
};

module.exports = nextConfig;
