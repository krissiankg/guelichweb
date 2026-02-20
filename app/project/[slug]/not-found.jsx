import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-display font-bold mb-4">404</h1>
        <h2 className="text-3xl font-display font-bold mb-4">Project Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/#work"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Works
        </Link>
      </div>
    </div>
  )
}
