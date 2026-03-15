import { useState, useEffect } from 'react'
import { useDocumentOperation } from 'sanity'

export function TranslateAction(props) {
  const { id, type, draft, published } = props
  const [isTranslating, setIsTranslating] = useState(false)
  
  // Only show this button for posts
  if (type !== 'post') {
    return null
  }

  // Use the published version or the draft as source
  const doc = published || draft
  
  // Specifically, only show this for French posts
  if (doc?.language === 'en') {
    return null
  }

  const handleTranslate = async () => {
    setIsTranslating(true)
    try {
      // Call our Next.js backend to keep the token secure
      const response = await fetch('/api/translate-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ documentId: id }),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to translate')
      }

      alert('Traduction générée avec succès ! Un nouveau brouillon en anglais a été créé.')
    } catch (err) {
      console.error(err)
      alert(`Erreur de traduction: ${err.message}`)
    } finally {
      setIsTranslating(false)
    }
  }

  return {
    label: isTranslating ? 'Traduction en cours...' : '🪄 Traduire en Anglais',
    onHandle: handleTranslate,
  }
}
