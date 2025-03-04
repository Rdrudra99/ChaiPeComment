import { GROQ_API_KEY } from "@/constants"


export const fetchSuggestion = async (prompt: string): Promise<string> => {
  if (!GROQ_API_KEY) {
    return ""
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      body: JSON.stringify({
        model: "qwen-2.5-32b",
        messages: [
          {
            role: "system",
            content:
              "You are an assistant, that writes replies to LinkedIn posts to other persons. Use the same language as of the text of the post you are recieving in the user's prompt. Please sound like a human being. Don't use hashtags, use emojis occasionally, don't repeat too many of the exact words, but simply create a brief and positive reply. Maybe add something to the discussion. Be creative! You may mention the name of the author, if it's the name of a natural person. Don't mention the name if it's the name of a company or a LinkedIn group.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.6,
        max_tokens: 150,
        top_p: 1,
        stream: false,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
    })

    const data = await response.json()
    return data.choices[0].message.content.trim()
  } catch (error) {
    console.error("Error fetching suggestion:", error)
    return "Failed to generate suggestion. Please try again."
  }
}