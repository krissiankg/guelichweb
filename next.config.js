/** @type {import('next').NextConfig} */
const nextConfig = {
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
