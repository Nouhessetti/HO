import { useState, useEffect } from 'react';

export function useWindowDimensions() {
  // Default to common desktop dimensions for SSR (Server-Side Rendering) safety
  const [windowDimensions, setWindowDimensions] = useState({
    width: 1200,
    height: 800,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    // Only runs on the client side
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Typical Breakpoints:
      // Mobile: < 768px
      // Tablet: 768px - 1023px
      // Desktop: >= 1024px
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      
      setWindowDimensions({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
      });
    }

    // Set initial dimensions immediately on mount
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener to prevent memory leaks
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}