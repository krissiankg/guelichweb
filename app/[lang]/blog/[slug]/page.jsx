import { notFound } from 'next/navigation'
import { sanityFetch } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/dictionaries'
import { getBlogLanguagePaths } from '@/lib/blogTranslations'
import { translateCategory } from '@/lib/blogCategories'
import { buildMetadata } from '@/lib/seo'
import { blogPostingGraph } from '@/lib/schema'

export const dynamic = 'force-dynamic'

async function getPost(slug, lang) {
  const query = `*[_type == "post" && slug.current == $slug && language == $lang][0]{
    _id, title, slug, mainImage, publishedAt, body, excerpt,
    "authorName": author->name,
    "authorImage": author->image,
    "categories": categories[]->title
  }`
  return sanityFetch(query, { slug, lang })
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug, params.lang)
  if (!post) {
    return { title: 'Not found | Guelichweb', robots: { index: false, follow: false } }
  }

  return buildMetadata({
    lang: params.lang,
    path: `/blog/${params.slug}`,
    title: post.title,
    description: post.excerpt,
    image: post.mainImage ? urlForImage(post.mainImage) : undefined,
    type: 'article',
    languagePaths: getBlogLanguagePaths(params.slug),
  })
}

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }

      const ImgElement = (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlForImage(value)}
          className="w-full h-auto object-cover"
        />
      )

      return (
        <div className="my-8 rounded-3xl overflow-hidden border border-white/10">
          {value.link ? (
            <a href={value.link} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
              {ImgElement}
            </a>
          ) : (
            ImgElement
          )}
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
  const dict = await getDictionary(lang)
  const copy = dict?.blogPage
  const post = await getPost(slug, lang)

  if (!post) {
    notFound()
  }

  const date = new Date(post.publishedAt || new Date()).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const imageUrl = post.mainImage ? urlForImage(post.mainImage) : undefined

  return (
    <main className="min-h-screen bg-dark flex flex-col">
      <JsonLd
        data={blogPostingGraph({
          lang,
          slug,
          title: post.title,
          description: post.excerpt,
          image: imageUrl,
          publishedAt: post.publishedAt,
          authorName: post.authorName,
        })}
      />
      <Navbar dict={dict?.navbar} />
      <article className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href={`/${lang}/blog`} className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium mb-12">
            <ArrowLeft size={20} /> {copy?.back}
          </Link>

          <header className="mb-12">
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category) => (
                  <span key={category} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold tracking-wider uppercase">
                    {translateCategory(category, lang)}
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
                <p className="font-medium text-white">{post.authorName || copy?.authorFallback}</p>
                <p className="text-sm">{copy?.publishedOn} {date}</p>
              </div>
            </div>
          </header>

          {post.mainImage && (
            <div className="w-full h-auto md:h-[500px] mb-16 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose-container max-w-3xl mx-auto">
            {post.body ? (
              <PortableText value={post.body} components={components} />
            ) : (
              <p className="text-xl text-gray-400 italic">{copy?.comingSoon}</p>
            )}
          </div>
        </div>
      </article>
      <Footer dict={dict?.footer} />
    </main>
  )
}
