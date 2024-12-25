/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

module.exports = {
  images: {
    loader: "akamai",
    path: "",
  },
  nextConfig,
};