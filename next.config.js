const defaultTheme = require('tailwindcss/defaultTheme');
const { screens } = defaultTheme;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    breakpoints: screens,
  },
};

module.exports = nextConfig;
