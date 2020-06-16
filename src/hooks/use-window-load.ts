import { useState, useEffect } from 'react'

export function useWindowLoad() {
  const isClient = typeof window === 'object'

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleLoad() {
      setLoaded(true)
    }

    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('resize', handleLoad)
  }, [])
  return loaded
}
