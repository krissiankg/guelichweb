import { useState } from 'react'
import { SparkleIcon } from '@sanity/icons'
import { Dialog, Box, Text, TextArea, Stack, Button, Flex } from '@sanity/ui'

export function GenerateAction(props) {
  const { published, draft, type, onComplete } = props
  const [isGenerating, setIsGenerating] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [userInstruction, setUserInstruction] = useState('')

  // Only show this action on 'post' documents
  if (type !== 'post') {
    return null
  }

  const documentId = draft?._id || published?._id

  const handleGenerateClick = async () => {
    setIsDialogOpen(false)
    setIsGenerating(true)
    
    try {
      const response = await fetch('/api/generate-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          documentId,
          instruction: userInstruction 
        }),
      })

      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to trigger AI generation');
        } else {
          const errorText = await response.text();
          throw new Error(`Erreur Serveur (HTML): ${errorText.substring(0, 200)}...`);
        }
      }

      window.alert(
        "L'Intelligence Artificielle de Sanity (ChatGPT Pro) a commencé à rédiger votre article ! \nCela peut prendre de 15 à 30 secondes (2000+ mots). Le texte apparaîtra tout seul dans le corps du document."
      )

    } catch (err) {
      console.error(err)
      window.alert("Erreur lors de la génération : " + err.message)
    } finally {
      setIsGenerating(false)
      setUserInstruction('')
      onComplete()
    }
  }

  return {
    label: isGenerating ? 'Génération en cours...' : "🪄 Rédiger l'article",
    icon: SparkleIcon,
    tone: 'primary',
    onHandle: () => {
      setIsDialogOpen(true)
    },
    dialog: isDialogOpen && {
      type: 'dialog',
      onClose: () => {
        setIsDialogOpen(false)
        onComplete()
      },
      header: 'Intelligence Artificielle (Google Gemini)',
      content: (
        <Box padding={4}>
          <Stack space={4}>
            <Text>
              Notre IA (Gemini 1.5 Pro) est programmée pour rédiger un article de <strong>plus de 2000 mots</strong>, optimisé SEO pour le site <em>guelichweb.online</em>, en se basant sur le Titre de ce document.
            </Text>
            <Text>
              Souhaitez-vous donner des consignes spécifiques supplémentaires ?
            </Text>
            <TextArea
              fontSize={2}
              padding={3}
              placeholder="(Optionnel) Ex: Utilise un ton humoristique, adresse-toi aux développeurs, parle de l'importance du design..."
              value={userInstruction}
              onChange={(event) => setUserInstruction(event.currentTarget.value)}
              rows={4}
            />
            <Flex justify="flex-end" gap={3} marginTop={2}>
              <Button 
                mode="ghost" 
                text="Annuler" 
                onClick={() => {
                  setIsDialogOpen(false)
                  onComplete()
                }} 
              />
              <Button 
                tone="primary" 
                text="🚀 Lancer la Génération" 
                onClick={handleGenerateClick} 
                disabled={isGenerating}
              />
            </Flex>
          </Stack>
        </Box>
      )
    }
  }
}
