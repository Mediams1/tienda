import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  distDir: 'out',
  // Desactiva SSR
  reactStrictMode: true,
}

export default nextConfig
