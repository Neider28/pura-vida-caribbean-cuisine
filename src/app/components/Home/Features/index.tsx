'use client'

import { Icon } from '@iconify/react'
import { useSiteContent } from '@/app/context/language'

const featureIcons = [
  'solar:chef-hat-bold',
  'solar:leaf-bold',
  'solar:translation-bold',
]

const categoryIcons = [
  'solar:plate-bold',
  'solar:moon-fog-bold',
  'solar:cup-bold',
  'solar:chef-hat-heart-bold',
]

const Features = () => {
  const { content, language } = useSiteContent()

  return (
    <section>
      <div className='container'>
        <div className='mb-14 text-center'>
          <p className='text-lg font-normal uppercase tracking-widest text-primary'>
            {content.highlights.eyebrow}
          </p>
          <h2 className='mx-auto mt-3 max-w-4xl font-semibold'>
            {content.highlights.title}
          </h2>
        </div>

        <div className='grid gap-6 lg:grid-cols-3'>
          {content.highlights.cards.map((card, index) => (
            <div
              key={card.title}
              className='rounded-[2rem] border border-primary/10 bg-white p-8 shadow-[0_20px_60px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(17,17,17,0.1)]'>
              <div className='mb-6 flex items-center gap-4'>
                <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_rgba(27,127,58,0.12),_rgba(240,196,25,0.28))] text-primary'>
                  <Icon icon={featureIcons[index] ?? featureIcons[0]} width='28' height='28' />
                </div>
                <div className='h-3 w-20 rounded-full bg-[linear-gradient(90deg,_#1b7f3a,_#f0c419)]'></div>
              </div>
              <p className='min-h-[5.5rem] text-2xl font-semibold text-black'>
                {card.title}
              </p>
              <p className='mt-3 text-base leading-7 text-black/60'>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className='mt-10 rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,_#111111_0%,_#16321f_100%)] p-8 text-white shadow-[0_24px_70px_rgba(17,17,17,0.12)]'>
          <div className='mb-8 flex items-center justify-between gap-6'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>
                {content.ui.categoriesLabel}
              </p>
              <p className='mt-2 max-w-2xl text-2xl font-semibold leading-tight'>
                {language === 'es'
                  ? 'Almuerzo, cena, bebidas y postres'
                  : 'Lunch, dinner, drinks, and desserts'}
              </p>
              <p className='mt-3 max-w-2xl text-sm leading-6 text-white/70'>
                {language === 'es'
                  ? 'Opciones pensadas para cada momento del día, con sabores caseros y una presentación más clara.'
                  : 'Options for every moment of the day, with homemade flavors and a clearer presentation.'}
              </p>
            </div>
          </div>
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
            {content.highlights.categories.map((category, index) => (
              <div
                key={category.name}
                className='rounded-[1.5rem] border border-white/10 bg-white/7 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_rgba(240,196,25,0.18),_rgba(255,255,255,0.08))] text-secondary'>
                  <Icon icon={categoryIcons[index] ?? categoryIcons[0]} width='24' height='24' />
                </div>
                <p className='text-xl font-semibold text-white'>{category.name}</p>
                <p className='mt-2 text-sm leading-6 text-white/78'>
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
