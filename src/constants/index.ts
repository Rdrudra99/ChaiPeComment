import { PartyPopper, Heart, ThumbsUp, Lightbulb, SmilePlus, HandMetal, type LucideIcon } from 'lucide-react'

export const GROQ_API_KEY = "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"

export const REACTIONS = [
  { name: 'Celebrate', icon: PartyPopper as LucideIcon, prompt: 'Write a celebratory and enthusiastic response' },
  { name: 'Support', icon: HandMetal as LucideIcon, prompt: 'Write a supportive and encouraging response' },
  { name: 'Love', icon: Heart as LucideIcon, prompt: 'Write a warm and appreciative response' },
  { name: 'Insightful', icon: Lightbulb as LucideIcon, prompt: 'Write an intellectual and thoughtful response' },
  { name: 'Funny', icon: SmilePlus as LucideIcon, prompt: 'Write a humorous and light-hearted response' },
  { name: 'Agree', icon: ThumbsUp as LucideIcon, prompt: 'Write an agreeing and affirming response' }
] as const

export type Reaction = (typeof REACTIONS)[number]