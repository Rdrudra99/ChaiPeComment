export const createPrompt = (commentBox: HTMLElement): string => {
  const post = commentBox.closest(".feed-shared-update-v2") ||
               commentBox.closest(".reusable-search__result-container")

  if (!post) return ""

  const author = post.querySelector(".update-components-actor__name .visually-hidden")?.textContent
  const text = post.querySelector(".feed-shared-inline-show-more-text")?.textContent
  let prompt = `${author}" wrote: ${text}`

  const commentElement = commentBox.closest(".comments-comment-item")
  const commentAuthor = commentElement?.querySelector(".comments-post-meta__name-text .visually-hidden")?.textContent
  const commentText = commentElement?.querySelector(".comments-comment-item__main-content")?.textContent

  if (commentElement) {
    prompt += `\n${commentAuthor} replied: ${commentText}\nPlease write a reply to the reply with a maximum of 20 words.`
  } else {
    prompt += `\nPlease write a reply to this post with a maximum of 40 words.`
  }

  return prompt
}