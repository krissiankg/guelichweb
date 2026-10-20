import NotFoundFrame from '@/components/NotFoundFrame'

// App Router not-found pages do not reliably receive route params.
// Links are real anchors: client-side navigation from a not-found page
// stays on the 404 in this Next.js version.
export default function LocaleNotFound() {
  return (
    <NotFoundFrame>
      <main className="flex items-center justify-center px-6 pb-24">
        <div className="text-center max-w-lg">
          <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">404</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Page introuvable / Page not found
          </h1>
          <p className="text-gray-400 mb-10">
            La page demandée n&apos;existe pas ou a été déplacée. The page you requested does not exist
            or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/fr"
              className="px-6 py-3 bg-primary hover:bg-secondary rounded-full font-semibold transition-colors"
            >
              Accueil FR
            </a>
            <a
              href="/en"
              className="px-6 py-3 border border-white/15 hover:bg-white/5 rounded-full font-semibold transition-colors"
            >
              Home EN
            </a>
            <a
              href="/fr/blog"
              className="px-6 py-3 border border-white/15 hover:bg-white/5 rounded-full font-semibold transition-colors"
            >
              Blog
            </a>
          </div>
        </div>
      </main>
    </NotFoundFrame>
  )
}
