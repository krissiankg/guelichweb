'use client'

import { createContext, useContext } from 'react'

const DictionaryContext = createContext(null)

export default function DictionaryProvider({ dictionary, children }) {
    return (
        <DictionaryContext.Provider value={dictionary}>
            {children}
        </DictionaryContext.Provider>
    )
}

export function useDictionary() {
    const context = useContext(DictionaryContext)
    if (!context) {
        throw new Error('useDictionary must be used within a DictionaryProvider')
    }
    return context
}
