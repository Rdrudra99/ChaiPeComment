import { REACTIONS } from "@/constants"
import { createPrompt } from "./prompt"
import { fetchSuggestion } from "./api"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from 'lucide-react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

export const addSuggestionButton = (commentBox: HTMLElement) => {
  const container = commentBox.querySelector(".display-flex.justify-space-between .display-flex")
  if (!container) {
    console.error("Could not find button container element")
    return
  }

  REACTIONS.forEach(reaction => {
    const button = document.createElement("button")
    button.classList.add(
      "inline-flex",
      "items-center",
      "justify-center",
      "rounded-md",
      "text-sm",
      "font-medium",
      "ring-offset-background",
      "transition-colors",
      "focus-visible:outline-none",
      "focus-visible:ring-2",
      "focus-visible:ring-ring",
      "focus-visible:ring-offset-2",
      "disabled:pointer-events-none",
      "disabled:opacity-50",
      "h-10",
      "w-10",
      "hover:bg-accent",
      "hover:text-accent-foreground"
    )
    button.type = "button"
    button.title = reaction.name
    button.style.marginRight = "4px"

    const IconComponent = reaction.icon
    const root = createRoot(button)
    root.render(createElement(IconComponent))

    button.addEventListener("click", async () => {
      const basePrompt = createPrompt(commentBox)
      const enhancedPrompt = `${basePrompt}\n\nPlease make the response ${reaction.prompt.toLowerCase()}.`
      const suggestion = await fetchSuggestion(enhancedPrompt)
      const editor = commentBox.querySelector(".ql-editor")
      if (editor) {
        editor.innerHTML = `<p>${suggestion}</p>`
      }
    })

    container.prepend(button)
  })
}