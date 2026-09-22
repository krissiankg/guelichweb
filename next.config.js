/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.guelichweb.online' }],
        destination: 'https://guelichweb.online/:path*',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/sitemap_index.xml', destination: '/api/sitemap-index' },
      ],
    }
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/sitemap_index.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      // Visuels des réalisations, encore hébergés hors du dépôt.
      { protocol: 'https', hostname: 'offre.guelichweb.online' },
      { protocol: 'https', hostname: 'thnowfeqcbormjmlfunx.supabase.co' },
      { protocol: 'https', hostname: 'produitdigitaux.site' },
      { protocol: 'https', hostname: 'prompthub.produitdigitaux.site' },
      { protocol: 'https', hostname: 'psychologie.produitdigitaux.site' },
    ],
  },
}

module.exports = nextConfig
