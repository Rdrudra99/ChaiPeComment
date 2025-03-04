import { REACTIONS } from "@/constants"
import { createPrompt } from "./prompt"
import { fetchSuggestion } from "./api"
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { SuggestionButton } from "@/components/ui/suggestion-button"
import { useState } from 'react'

export const addSuggestionButton = (commentBox: HTMLElement) => {
  const container = commentBox.querySelector(".display-flex.justify-space-between .display-flex")
  if (!container) {
    console.error("Could not find button container element")
    return
  }

  const buttonContainer = document.createElement("div")
  const root = createRoot(buttonContainer)

  const SuggestionButtons = () => {
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})
    const [error, setError] = useState<string | null>(null)

    const handleClick = async (reaction: typeof REACTIONS[number]) => {
      try {
        setLoadingStates(prev => ({ ...prev, [reaction.name]: true }))
        setError(null)

        const basePrompt = createPrompt(commentBox)
        const enhancedPrompt = `${basePrompt}\n\nPlease make the response ${reaction.prompt.toLowerCase()}.`
        const suggestion = await fetchSuggestion(enhancedPrompt)

        const editor = commentBox.querySelector(".ql-editor")
        if (editor) {
          editor.innerHTML = `<p>${suggestion}</p>`
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to generate suggestion')
      } finally {
        setLoadingStates(prev => ({ ...prev, [reaction.name]: false }))
      }
    }

    return createElement(
      'div',
      { className: 'text-white' },
      [
        REACTIONS.map((reaction) =>
          createElement(SuggestionButton, {
            key: reaction.name,
            icon: createElement(reaction.icon),
            title: reaction.name,
            isLoading: loadingStates[reaction.name],
            disabled: Object.values(loadingStates).some(Boolean),
            onClick: () => handleClick(reaction)
          })
        ),
        error && createElement(
          'div',
          {
            className: 'absolute -top-8 left-0 text-sm text-red-500 bg-white/90 px-2 py-1 rounded shadow',
            key: 'error'
          },
          error
        )
      ]
    )
  }

  root.render(createElement(SuggestionButtons))
  container.prepend(buttonContainer)
}