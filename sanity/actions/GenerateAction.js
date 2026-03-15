import { useState, useEffect } from 'react'
import { SparkleIcon } from '@sanity/icons'

export function GenerateAction(props) {
  const { published, draft, id, type, onComplete } = props
  const [isGenerating, setIsGenerating] = useState(false)

  // Only show this action on 'post' documents
  if (type !== 'post') {
    return null
  }

  // Use the draft id if available, otherwise the published id
  const documentId = draft?._id || published?._id

  return {
    label: isGenerating ? 'Génération en cours...' : "🪄 Rédiger l'article",
    icon: SparkleIcon,
    // Add color/tone logic to signify it's a special AI action
    tone: 'primary',
    onHandle: async () => {
      setIsGenerating(true)
      
      try {
        const response = await fetch('/api/generate-post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ documentId }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to trigger AI generation')
        }

        // We show an alert so the user knows it's happening in the background
        window.alert(
          "L'Intelligence Artificielle de Sanity a commencé à rédiger votre article ! \nCela peut prendre quelques instants. Le texte apparaîtra tout seul dans ce document."
        )

      } catch (err) {
        console.error(err)
        window.alert("Erreur lors de la génération : " + err.message)
      } finally {
        setIsGenerating(false)
        onComplete()
      }
    },
  }
}
