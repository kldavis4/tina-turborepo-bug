/** @type {import('next').NextConfig} */


const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  i18n: {
    locales: ['sv'],
    defaultLocale: 'sv',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: process.env.NODE_ENV === 'development',
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
}

export default nextConfig

