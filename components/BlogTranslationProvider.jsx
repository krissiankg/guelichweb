'use client'

import { createContext, useContext } from 'react'

const BlogTranslationContext = createContext({})

export default function BlogTranslationProvider({ translations, children }) {
    return (
        <BlogTranslationContext.Provider value={translations || {}}>
            {children}
        </BlogTranslationContext.Provider>
    )
}

export function useBlogTranslations() {
    return useContext(BlogTranslationContext)
}
