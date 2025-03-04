import { setupObserver } from "@/utils/observer"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"],
  all_frames: true
}

// Initialize when the content script loads
const init = () => {
  setupObserver()
}

// Run initialization
init()