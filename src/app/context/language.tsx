'use client'

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { siteContent, type SiteLanguage } from '@/app/content/site-content'

type LanguageContextValue = {
  language: SiteLanguage
  setLanguage: (language: SiteLanguage) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<SiteLanguage>('en')

  const value = useMemo(() => ({ language, setLanguage }), [language])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}

export const useSiteContent = () => {
  const { language, setLanguage } = useLanguage()

  return {
    language,
    setLanguage,
    content: siteContent[language],
  }
}
