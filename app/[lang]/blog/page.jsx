import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getDictionary } from '@/dictionaries'

export const revalidate = 60 // Revalidate every 60 seconds

async function getPosts(lang) {
  const query = `*[_type == "post" && language == $lang] | order(publishedAt desc) {
    _id, title, slug, mainImage, publishedAt, excerpt,
    "authorName": author->name,
    "categories": categories[]->title
  }`
  return client.fetch(query, { lang })
}

export default async function BlogIndexPage({ params }) {
  const lang = params?.lang || 'fr'
  const dict = await getDictionary(lang)
  const posts = await getPosts(lang)

  return (
    <main className="min-h-screen bg-dark flex flex-col">
      <Navbar dict={dict?.navbar} />
      <div className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white tracking-tight">
            Notre <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Découvrez nos derniers articles, actualités et réflexions sur la transformation digitale et l'intelligence artificielle.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <h2 className="text-2xl text-white font-semibold">Aucun article publié pour le moment.</h2>
            <p className="text-gray-400 mt-2">Revenez bientôt pour lire nos publications.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post._id} href={`/${lang}/blog/${post.slug?.current}`} className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors">
                {post.mainImage && (
                  <div className="relative h-64 w-full overflow-hidden">
                    <img 
                      src={urlForImage(post.mainImage)} 
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-8">
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.map((category) => (
                        <span key={category} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold tracking-wider uppercase">
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 border-t border-white/10 pt-6">
                    <span>{post.authorName || 'Équipe Guelichweb'}</span>
                    <span>{new Date(post.publishedAt || new Date()).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        </div>
      </div>
      <Footer dict={dict?.footer} />
    </main>
  )
}
