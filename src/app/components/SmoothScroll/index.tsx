'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null

      if (!anchor) {
        return
      }

      const hash = anchor.getAttribute('href')

      if (!hash || hash === '#') {
        return
      }

      const id = decodeURIComponent(hash.slice(1))
      const element = document.getElementById(id)

      if (!element) {
        return
      }

      event.preventDefault()
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', hash)
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
