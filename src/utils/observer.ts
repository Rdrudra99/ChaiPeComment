import { addSuggestionButton } from "@/utils/commentButtons"

export const setupObserver = () => {
  const observer = new MutationObserver(() => {
    Array.from(document.getElementsByClassName("comments-comment-texteditor"))
      .filter(commentBox => !commentBox.hasAttribute("data-mutated"))
      .forEach(commentBox => {
        commentBox.setAttribute("data-mutated", "true")
        addSuggestionButton(commentBox as HTMLElement)
      })
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}