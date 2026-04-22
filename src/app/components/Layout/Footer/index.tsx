'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import Logo from '../Header/Logo'
import { useSiteContent } from '@/app/context/language'

const Footer: FC = () => {
  const { content } = useSiteContent()

  return (
    <footer className='border-t border-primary/10 bg-[#111111] text-white'>
      <div className='container py-8 md:py-10'>
        <div className='overflow-hidden rounded-[2.25rem] border border-white/8 bg-[radial-gradient(circle_at_top_right,_rgba(240,196,25,0.12),_transparent_18%),linear-gradient(135deg,_#111111_0%,_#14301d_45%,_#111111_100%)] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.18)] md:p-8'>
          <div className='flex flex-col items-center text-center'>
            <div className='inline-flex rounded-[1.35rem] bg-[#fffdf3] p-3 shadow-sm'>
              <Logo />
            </div>

            <p className='mt-6 max-w-2xl text-lg leading-8 text-white/74'>
              {content.slogan}
            </p>

            <nav className='mt-8 flex flex-wrap justify-center gap-3'>
              {content.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/78 transition hover:border-primary/30 hover:text-primary'>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className='mt-8 border-t border-white/8 pt-6 text-center'>
            <p className='text-sm text-white/58'>{content.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
