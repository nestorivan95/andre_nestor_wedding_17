/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configurar basePath si el repositorio no es usuario.github.io
  // Si tu repositorio se llama 'andre_nestor_wedding_17', descomenta la siguiente línea:
  basePath: '/andre_nestor_wedding_17',
  trailingSlash: true,
}

module.exports = nextConfig

