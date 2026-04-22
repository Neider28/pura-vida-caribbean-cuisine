'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useSiteContent } from '@/app/context/language'

const storyIcons = [
  'solar:heart-bold',
  'solar:chef-hat-bold',
  'solar:star-bold',
  'solar:bookmark-square-bold',
]

const Cook = () => {
  const { content, language } = useSiteContent()

  return (
    <section className='relative' id='sobre-nosotros'>
      <div className='container'>
        <div className='grid items-start gap-10 lg:grid-cols-12 lg:gap-14'>
          <div className='lg:col-span-5'>
            <div className='sticky top-28 space-y-5'>
              <div className='relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white p-4 shadow-[0_25px_70px_rgba(17,17,17,0.08)]'>
                <div className='absolute right-0 top-0 h-36 w-36 rounded-full bg-secondary/20 blur-2xl'></div>
                <Image
                  src='/images/Cook/sobre-nosotros.png'
                  alt={content.about.title}
                  width={636}
                  height={808}
                  className='w-full rounded-[1.5rem] object-cover'
                />
              </div>

              <div className='rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-sm'>
                <p className='text-sm font-semibold uppercase tracking-[0.35em] text-primary'>
                  {language === 'es' ? 'Nuestra esencia' : 'Our essence'}
                </p>
                <p className='mt-3 text-lg leading-8 text-black/70'>
                  {content.about.difference}
                </p>
              </div>
            </div>
          </div>

          <div className='lg:col-span-7'>
            <p className='mb-3 text-center text-lg font-normal uppercase tracking-widest text-primary lg:text-start'>
              {content.about.eyebrow}
            </p>
            <h2 className='max-w-4xl text-center lg:text-start'>{content.about.title}</h2>

            <p className='mt-5 max-w-3xl text-lg leading-8 text-black/65'>
              {language === 'es'
                ? 'Una historia construida con amor, memoria y el deseo de servir sabores que conectan con casa.'
                : 'A story built with love, memory, and the desire to serve flavors that feel like home.'}
            </p>

            <div className='mt-8 grid gap-4'>
              {content.about.story.map((paragraph, index) => (
                <article
                  key={paragraph}
                  className='rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-sm transition duration-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.08)]'>
                  <div className='flex items-start gap-4'>
                    <div className='mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_rgba(27,127,58,0.1),_rgba(240,196,25,0.24))] text-primary'>
                      <Icon icon={storyIcons[index] ?? storyIcons[0]} width='24' height='24' />
                    </div>
                    <p className='text-lg leading-8 text-black/68'>{paragraph}</p>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>

        <div className='mt-8 grid gap-5 lg:grid-cols-12'>
          <div className='lg:col-span-5'>
            <div className='rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(135deg,_rgba(27,127,58,0.06),_rgba(255,255,255,0.96))] p-6 shadow-sm'>
              <p className='text-sm font-semibold uppercase tracking-[0.35em] text-primary'>
                {language === 'es' ? 'Sabores que nos representan' : 'Flavors that define us'}
              </p>
              <p className='mt-4 text-lg leading-8 text-black/70'>
                {language === 'es'
                  ? 'Nuestra cocina nace del encuentro entre Costa Rica y Jamaica, con recetas que abrazan la memoria, la familia y el sabor de casa.'
                  : 'Our kitchen is born from the meeting of Costa Rica and Jamaica, with recipes shaped by memory, family, and the comfort of home.'}
              </p>
            </div>
          </div>

          <div className='lg:col-span-7'>
            <div className='grid gap-5 md:grid-cols-2'>
              <div className='group relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_24px_60px_rgba(17,17,17,0.1)]'>
                <div className='absolute left-0 top-0 h-full w-1.5 bg-[linear-gradient(180deg,_#1b7f3a,_#f0c419)] opacity-90'></div>
                <div className='flex items-start justify-between gap-4 pl-2'>
                  <div>
                    <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white'>
                      <Icon icon='solar:plate-bold' width='26' height='26' />
                    </div>
                    <p className='text-sm font-semibold uppercase tracking-[0.35em] text-primary'>
                      {content.about.cuisinesTitle}
                    </p>
                  </div>
                  <Icon
                    icon='solar:arrow-right-up-linear'
                    width='22'
                    height='22'
                    className='mt-1 text-primary/45 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary'
                  />
                </div>
                <p className='mt-5 pl-2 text-left text-[1.75rem] font-semibold leading-tight text-black'>
                  {content.about.cuisines}
                </p>
              </div>

              <div className='group relative overflow-hidden rounded-[1.75rem] border border-secondary/35 bg-[linear-gradient(135deg,_rgba(240,196,25,0.18),_rgba(255,255,255,0.96))] p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-secondary/55 hover:shadow-[0_24px_60px_rgba(240,196,25,0.18)]'>
                <div className='absolute left-0 top-0 h-full w-1.5 bg-[linear-gradient(180deg,_#f0c419,_#1b7f3a)] opacity-90'></div>
                <div className='flex items-start justify-between gap-4 pl-2'>
                  <div>
                    <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-black transition duration-300 group-hover:bg-black group-hover:text-secondary'>
                      <Icon icon='solar:heart-angle-bold' width='26' height='26' />
                    </div>
                    <p className='text-sm font-semibold uppercase tracking-[0.35em] text-black'>
                      {content.about.differenceTitle}
                    </p>
                  </div>
                  <Icon
                    icon='solar:arrow-right-up-linear'
                    width='22'
                    height='22'
                    className='mt-1 text-black/40 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black'
                  />
                </div>
                <p className='mt-5 pl-2 text-left text-[1.75rem] font-semibold leading-tight text-black'>
                  {content.about.difference}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cook
