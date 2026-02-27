import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize with undefined to avoid SSR (Server-Side Rendering) mismatch
  const [isMobile, setIsMobile] = React.useState(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = () => {
      // Check if current width is less than the breakpoint
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Listen for the breakpoint cross
    mql.addEventListener("change", onChange)
    
    // Set the initial state on mount
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Force a boolean return (false if undefined during first render)
  return !!isMobile
}