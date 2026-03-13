import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const revalidate = 60

async function getPost(slug, lang) {
  const query = `*[_type == "post" && slug.current == $slug && language == $lang][0]{
    _id, title, mainImage, publishedAt, body, excerpt,
    "authorName": author->name,
    "authorImage": author->image,
    "categories": categories[]->title
  }`
  return client.fetch(query, { slug, lang })
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug, params.lang)
  if (!post) return { title: 'Article Introuvable - Guelichweb' }

  return {
    title: `${post.title} | Blog Guelichweb`,
    description: post.excerpt,
    openGraph: {
      images: post.mainImage ? [urlForImage(post.mainImage)] : [],
    },
  }
}

// Custom components for PortableText to match the theme
const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8 rounded-3xl overflow-hidden border border-white/10">
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlForImage(value)}
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-display font-bold mt-12 mb-6 text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-display font-bold mt-10 mb-5 text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-4 text-white">{children}</h3>,
    normal: ({ children }) => <p className="text-xl leading-relaxed text-gray-300 mb-6">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-2xl text-gray-400">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside text-xl leading-relaxed text-gray-300 mb-6 space-y-2 marker:text-primary">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside text-xl leading-relaxed text-gray-300 mb-6 space-y-2 marker:text-primary">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-primary hover:text-white transition-colors underline underline-offset-4 decoration-primary/50">
          {children}
        </a>
      )
    },
  },
}

export default async function BlogPostPage({ params }) {
  const { lang, slug } = params
  const post = await getPost(slug, lang)

  if (!post) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Article introuvable</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-lg">
          L'article que vous recherchez n'existe pas ou n'est pas disponible dans cette langue ({lang === 'fr' ? 'Français' : 'English'}).
        </p>
        <Link 
          href={`/${lang}/blog`}
          className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft size={20} />
          {lang === 'fr' ? 'Retour au blog' : 'Back to blog'}
        </Link>
      </div>
    )
  }

  const date = new Date(post.publishedAt || new Date()).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <article className="min-h-screen bg-dark pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link href={`/${lang}/blog`} className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium mb-12">
          <ArrowLeft size={20} /> Retour au blog
        </Link>
        
        <header className="mb-12">
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category) => (
                <span key={category} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold tracking-wider uppercase">
                  {category}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 pb-8 border-b border-white/10">
            {post.authorImage && (
              <img src={urlForImage(post.authorImage)} alt={post.authorName} className="w-12 h-12 rounded-full object-cover" />
            )}
            <div>
              <p className="font-medium text-white">{post.authorName || 'Équipe Guelichweb'}</p>
              <p className="text-sm">Publié le {date}</p>
            </div>
          </div>
        </header>

        {post.mainImage && (
          <div className="w-full h-auto md:h-[500px] mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={urlForImage(post.mainImage)} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose-container max-w-3xl mx-auto">
          {post.body ? (
             <PortableText value={post.body} components={components} />
          ) : (
            <p className="text-xl text-gray-400 italic">Le contenu de cet article arrivera bientôt.</p>
          )}
        </div>
      </div>
    </article>
  )
}
