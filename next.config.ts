import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  distDir: 'out',
  reactStrictMode: true,
  // Desactiva SSR para todas las páginas
  experimental: {
    runtime: undefined,
  }
}

export default nextConfig
