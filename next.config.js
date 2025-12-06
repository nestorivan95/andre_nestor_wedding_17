/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Sin basePath para que funcione en la raíz de GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig

