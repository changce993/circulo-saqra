import { useState, useEffect } from 'react'

function useIntersectionObserver(ref) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line
  }, [])

  return isIntersecting
}

export default useIntersectionObserver
