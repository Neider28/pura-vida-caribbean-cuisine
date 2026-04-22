'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useSiteContent } from '@/app/context/language'

const reviewAccent = [
  'from-[#f0c419]/30 to-white/8',
  'from-[#1b7f3a]/22 to-white/8',
  'from-[#f0c419]/18 to-[#1b7f3a]/12',
]

const Newsletter = () => {
  const { content, language } = useSiteContent()

  return (
    <section id='resenas'>
      <div className='container'>
        <div className='overflow-hidden rounded-[2.75rem] bg-[radial-gradient(circle_at_top_right,_rgba(240,196,25,0.18),_transparent_20%),linear-gradient(135deg,_#0f2015_0%,_#102f1c_45%,_#0d2316_100%)] p-8 text-white shadow-[0_35px_90px_rgba(17,17,17,0.16)] md:p-12'>
          <div>
            <div className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 backdrop-blur-sm'>
              <span className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-black'>
                <Icon icon='solar:chat-round-like-bold' width='18' height='18' />
              </span>
              <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>
                {content.reviews.eyebrow}
              </p>
            </div>

            <h2 className='mt-6 max-w-5xl text-white'>{content.reviews.title}</h2>
            <p className='mt-5 max-w-3xl text-lg leading-8 text-white/72'>
              {content.reviews.description}
            </p>
          </div>

          <div className='mt-12 grid gap-5 xl:grid-cols-3'>
            {content.reviews.items.map((review, index) => (
              <article
                key={`${review.source}-${review.author}`}
                className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${reviewAccent[index] ?? reviewAccent[0]} p-[1px] shadow-[0_18px_50px_rgba(0,0,0,0.15)]`}>
                <div className='h-full rounded-[calc(2rem-1px)] bg-[#183522]/95 p-6 backdrop-blur-sm'>
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <p className='text-sm font-semibold uppercase tracking-[0.32em] text-secondary'>
                        {review.source}
                      </p>
                      <p className='mt-3 text-2xl font-semibold text-white'>{review.author}</p>
                    </div>
                  </div>

                  <div className='mt-5 flex items-center gap-1 text-secondary'>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Icon
                        key={starIndex}
                        icon='solar:star-bold'
                        width='18'
                        height='18'
                      />
                    ))}
                  </div>

                  <p className='mt-5 text-lg leading-8 text-white/78'>{review.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className='mt-10 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-black/18 p-6 lg:flex-row lg:items-center lg:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>
                {content.ui.socialTitle}
              </p>
            </div>

            <div className='flex items-center gap-4'>
              <Link
                href='https://www.facebook.com/share/18NS9yLEnD/?mibextid=wwXIfr'
                target='_blank'
                className='flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition hover:bg-primary hover:text-white'>
                <Icon icon='fa6-brands:facebook-f' width='20' height='20' />
              </Link>
              <Link
                href='#'
                className='flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition hover:bg-primary hover:text-white'>
                <Icon icon='fa6-brands:instagram' width='20' height='20' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
