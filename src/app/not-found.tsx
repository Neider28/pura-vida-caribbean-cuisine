'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useSiteContent } from '@/app/context/language'

export default function NotFoundPage() {
  const { language } = useSiteContent()

  const title =
    language === 'es'
      ? 'La página que buscas no está disponible.'
      : 'The page you are looking for is not available.'

  const description =
    language === 'es'
      ? 'Es posible que el enlace sea incorrecto o que la página haya sido movida. Puedes volver al inicio y seguir explorando Pura Vida Caribbean Cuisine.'
      : 'The link may be incorrect or the page may have been moved. You can return home and keep exploring Pura Vida Caribbean Cuisine.'

  const cta = language === 'es' ? 'Volver al inicio' : 'Back to home'

  return (
    <main className='bg-[radial-gradient(circle_at_top_left,_rgba(240,196,25,0.16),_transparent_25%),linear-gradient(180deg,_rgba(27,127,58,0.05)_0%,_rgba(255,253,243,1)_100%)] pt-32 pb-20'>
      <section>
        <div className='container'>
          <div className='mx-auto max-w-4xl rounded-[2.5rem] border border-primary/10 bg-white p-8 text-center shadow-[0_30px_80px_rgba(17,17,17,0.08)] md:p-12'>
            <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-[0_18px_40px_rgba(27,127,58,0.2)]'>
              <Icon icon='solar:danger-circle-bold' width='34' height='34' />
            </div>

            <p className='mt-8 text-sm font-semibold uppercase tracking-[0.45em] text-primary'>
              404 Error
            </p>

            <h1 className='mt-4 text-balance text-5xl font-semibold leading-tight text-black md:text-6xl'>
              {title}
            </h1>

            <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/62'>
              {description}
            </p>

            <div className='mt-8 flex justify-center'>
              <Link
                href='/'
                className='rounded-full border border-primary bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-transparent hover:text-primary'>
                {cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
