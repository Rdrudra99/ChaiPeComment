import * as React from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

export interface SuggestionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  icon: React.ReactNode
}

const SuggestionButton = React.forwardRef<HTMLButtonElement, SuggestionButtonProps>(
  ({ className, isLoading, icon, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn(
          "h-8 w-8",
          isLoading && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {icon}
      </Button>
    )
  }
)
SuggestionButton.displayName = "SuggestionButton"

export { SuggestionButton }