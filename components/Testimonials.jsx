'use client'

import { Quote } from 'lucide-react'
import { useDictionary } from '@/components/DictionaryProvider'

// Client testimonials. The section stays hidden until real quotes,
// approved by each client, are added to home.testimonials.items
// ({ quote, name, role, company }) in the dictionaries.
export default function Testimonials() {
  const testimonials = useDictionary()?.home?.testimonials
  if (!testimonials?.items?.length) return null

  return (
    <section className="py-24 px-6 bg-card border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">{testimonials.title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{testimonials.desc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((item) => (
            <figure key={item.company} className="p-8 rounded-3xl bg-dark border border-white/10 flex flex-col">
              <Quote size={28} className="text-primary mb-5" />
              <blockquote className="text-gray-300 leading-relaxed flex-grow">{item.quote}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/10">
                <div className="font-bold">{item.name}</div>
                <div className="text-sm text-gray-400">
                  {[item.role, item.company].filter(Boolean).join(', ')}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
