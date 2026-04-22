'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { useSiteContent } from '@/app/context/language'

const Header: React.FC = () => {
  const { language, setLanguage, content } = useSiteContent()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const headerLink = useMemo(
    () => content.nav.map((item) => ({ ...item })),
    [content.nav]
  )

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 20)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    const originalHtmlOverflow = document.documentElement.style.overflow
    const originalBodyOverflow = document.body.style.overflow
    const originalOverscroll = document.body.style.overscrollBehavior

    if (navbarOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      document.body.style.overscrollBehavior = 'none'
    }

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow
      document.body.style.overflow = originalBodyOverflow
      document.body.style.overscrollBehavior = originalOverscroll
    }
  }, [navbarOpen])

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full border-b transition-all duration-300 ${
          sticky
            ? 'border-primary/10 bg-[#fffdf3]/95 shadow-lg backdrop-blur'
            : 'border-transparent bg-transparent'
        }`}>
        <div className='container flex items-center justify-between py-4'>
          <Logo />

          <nav className='hidden grow items-center justify-center gap-4 lg:flex xl:gap-6'>
            {headerLink.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          <div className='flex items-center gap-2 lg:gap-3'>
            <div className='hidden items-center rounded-full border border-primary/20 bg-white p-1 lg:flex'>
              <button
                onClick={() => setLanguage('es')}
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  language === 'es'
                    ? 'bg-primary text-white'
                    : 'text-black/70 hover:text-primary'
                }`}>
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  language === 'en'
                    ? 'bg-primary text-white'
                    : 'text-black/70 hover:text-primary'
                }`}>
                EN
              </button>
            </div>

            <Link
              href='#menu'
              className='hidden rounded-full border border-primary bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-transparent hover:text-primary lg:block'>
              {content.ui.orderOnline}
            </Link>

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block rounded-lg p-2 lg:hidden'
              aria-label='Toggle mobile menu'>
              <span className='block h-0.5 w-6 bg-black'></span>
              <span className='mt-1.5 block h-0.5 w-6 bg-black'></span>
              <span className='mt-1.5 block h-0.5 w-6 bg-black'></span>
            </button>
          </div>
        </div>
      </header>

      {navbarOpen && (
        <div className='fixed inset-0 z-[100] lg:hidden'>
          <div className='absolute inset-0 bg-black/50' />

          <div
            ref={mobileMenuRef}
            className='absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-2xl'>
            <div className='flex items-center justify-between gap-2 border-b border-primary/10 px-5 py-4'>
              <Logo />
              <button
                onClick={() => setNavbarOpen(false)}
                className='hover:cursor-pointer'
                aria-label='Close mobile menu'>
                <Icon
                  icon='material-symbols:close-rounded'
                  width={28}
                  height={28}
                  className='inline-block text-black hover:text-primary'
                />
              </button>
            </div>

            <div className='border-b border-primary/10 px-5 py-5'>
              <p className='mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary'>
                {content.ui.language}
              </p>
              <div className='flex items-center rounded-full border border-primary/20 bg-[#fffdf3] p-1'>
                <button
                  onClick={() => setLanguage('es')}
                  className={`flex-1 rounded-full px-3 py-3 text-sm font-semibold ${
                    language === 'es'
                      ? 'bg-primary text-white'
                      : 'text-black/70 hover:text-primary'
                  }`}>
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 rounded-full px-3 py-3 text-sm font-semibold ${
                    language === 'en'
                      ? 'bg-primary text-white'
                      : 'text-black/70 hover:text-primary'
                  }`}>
                  EN
                </button>
              </div>
            </div>

            <nav className='flex flex-1 flex-col overflow-y-auto px-5 py-5'>
              {headerLink.map((item, index) => (
                <MobileHeaderLink key={index} item={item} onNavigate={() => setNavbarOpen(false)} />
              ))}

              <div className='mt-auto pt-6'>
                <Link
                  href='#menu'
                  onClick={() => setNavbarOpen(false)}
                  className='block rounded-xl border border-primary bg-primary px-4 py-4 text-center text-lg font-semibold text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-primary'>
                  {content.ui.orderOnline}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
