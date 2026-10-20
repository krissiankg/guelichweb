import { ArrowLeft } from 'lucide-react'
import NotFoundFrame from '@/components/NotFoundFrame'

export default function NotFound() {
  return (
    <NotFoundFrame>
      <main className="flex items-center justify-center px-6 pb-24">
        <div className="text-center">
          <h1 className="text-8xl font-display font-bold mb-4">404</h1>
          <h2 className="text-3xl font-display font-bold mb-4">Projet introuvable / Project not found</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Ce projet n&apos;existe pas ou a été déplacé. This project does not exist or has been moved.
          </p>
          <a
            href="/fr/portfolio"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={20} />
            Réalisations
          </a>
        </div>
      </main>
    </NotFoundFrame>
  )
}
