/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configuración para GitHub Pages
  basePath: '/andre_nestor_wedding',
  assetPrefix: '/andre_nestor_wedding',
  trailingSlash: true,
}

module.exports = nextConfig

