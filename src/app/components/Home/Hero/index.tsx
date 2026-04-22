'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSiteContent } from '@/app/context/language'

const Hero = () => {
  const { content, language } = useSiteContent()

  const heroNote =
    language === 'es'
      ? 'Costa Rica, Jamaica y sabor casero reunidos en un mismo lugar.'
      : 'Costa Rica, Jamaica, and comforting homemade flavor in one place.'

  return (
    <section
      id='inicio'
      className='overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(240,196,25,0.28),_transparent_28%),linear-gradient(135deg,_#fffdf3_0%,_#f7fbe9_42%,_#eef7ed_100%)] pb-10 pt-32 md:pb-14'>
      <div className='container'>
        <div className='grid items-center gap-10 lg:grid-cols-12 lg:gap-14'>
          <div className='lg:col-span-6'>
            <div className='max-w-2xl'>
              <div className='mb-5 inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-2 shadow-sm'>
                <span className='mr-2 h-2.5 w-2.5 rounded-full bg-secondary'></span>
                <p className='text-xs font-semibold uppercase tracking-[0.4em] text-primary sm:text-sm'>
                  {content.hero.eyebrow}
                </p>
              </div>

              <h1 className='mb-5 max-w-xl font-semibold leading-[0.98] text-black lg:text-start'>
                {content.hero.title}
              </h1>

              <p className='mb-8 max-w-xl text-lg leading-8 text-black/65 lg:text-start'>
                {content.hero.description}
              </p>

              <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
                <Link
                  href='#menu'
                  className='rounded-full border border-primary bg-primary px-8 py-3 text-center text-lg font-medium text-white shadow-[0_14px_30px_rgba(27,127,58,0.22)] transition duration-300 hover:bg-transparent hover:text-primary'>
                  {content.hero.primaryCta}
                </Link>
                <Link
                  href='#ubicacion'
                  className='rounded-full border border-black/20 bg-white px-8 py-3 text-center text-lg font-medium text-black transition duration-300 hover:border-primary hover:bg-primary hover:text-white'>
                  {content.hero.secondaryCta}
                </Link>
              </div>

              <div className='mt-8 flex flex-wrap gap-3'>
                {content.hero.badges.map((badge) => (
                  <span
                    key={badge}
                    className='rounded-full border border-primary/12 bg-white px-4 py-2 text-sm font-semibold text-black/75 shadow-sm'>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='relative lg:col-span-6'>
            <div className='absolute -top-8 right-4 h-40 w-40 rounded-full bg-secondary/25 blur-3xl'></div>
            <div className='relative rounded-[2.25rem] border border-primary/10 bg-white p-4 shadow-[0_30px_80px_rgba(17,17,17,0.12)]'>
              <Image
                src='/images/hero/pura-vida-hero.png'
                alt={content.restaurantName}
                width={1000}
                height={805}
                className='h-full w-full rounded-[1.75rem] object-cover'
                priority
              />
              <div className='absolute left-5 top-5 max-w-[18rem] rounded-[1.5rem] border border-primary/10 bg-white/92 p-5 text-black shadow-lg backdrop-blur-sm sm:left-7 sm:top-7'>
                <p className='text-xs font-semibold uppercase tracking-[0.35em] text-primary'>
                  Pura Vida
                </p>
                <p className='mt-3 text-2xl font-semibold leading-tight text-black'>
                  {content.slogan}
                </p>
                <p className='mt-3 text-sm leading-6 text-black/65'>{heroNote}</p>
              </div>
              <div className='absolute bottom-5 left-5 rounded-[1.5rem] border border-primary/10 bg-[#fffdf3] px-5 py-4 shadow-lg sm:bottom-7 sm:left-7'>
                <p className='text-xs font-semibold uppercase tracking-[0.3em] text-primary'>
                  Lunch Specials
                </p>
                <p className='mt-2 text-lg font-semibold text-black'>11:30 am - 1:30 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
