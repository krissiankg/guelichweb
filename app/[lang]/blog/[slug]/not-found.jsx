import { ArrowLeft } from 'lucide-react'
import NotFoundFrame from '@/components/NotFoundFrame'

export default function BlogNotFound() {
  return (
    <NotFoundFrame>
      <main className="flex flex-col items-center justify-center px-6 pb-24 text-center">
        <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">404</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Article introuvable / Post not found
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-lg">
          Cet article n&apos;existe pas dans cette langue. This post does not exist in this language.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/fr/blog"
            className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Blog FR
          </a>
          <a
            href="/en/blog"
            className="border border-white/15 hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            Blog EN
          </a>
        </div>
      </main>
    </NotFoundFrame>
  )
}
