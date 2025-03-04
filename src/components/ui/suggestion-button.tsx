import * as React from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export interface SuggestionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  icon: React.ReactNode
}

const SuggestionButton = React.forwardRef<HTMLButtonElement, SuggestionButtonProps>(
  ({ className, isLoading, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          backdropFilter: "blur(8px)",
          borderRadius: "8px",
          padding: "8px",
          margin: "8px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
          height: "32px",
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
          opacity: isLoading ? 0.5 : 1,
          pointerEvents: isLoading ? "none" : "auto",
        }}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
      </button>
    )
  }
)
SuggestionButton.displayName = "SuggestionButton"

export { SuggestionButton }