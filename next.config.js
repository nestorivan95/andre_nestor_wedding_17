/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si tu repositorio tiene un nombre diferente, ajusta el basePath
  // basePath: '/andre_nestor_wedding',
  // trailingSlash: true,
}

module.exports = nextConfig

