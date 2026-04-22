'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useMemo, useState } from 'react'
import { useSiteContent } from '@/app/context/language'
import type { MenuCategory } from '@/app/content/site-content'

const categoryIcons: Record<MenuCategory, string> = {
  dinners: 'solar:moon-stars-bold',
  entrees: 'solar:hamburger-menu-bold',
  sides: 'solar:plate-bold',
  soups: 'solar:cup-hot-bold',
  vegetarian: 'solar:leaf-bold',
  drinks: 'solar:cup-bold',
  desserts: 'solar:chef-hat-heart-bold',
  catering: 'solar:calendar-bold',
}

const Gallery = () => {
  const { content, language } = useSiteContent()
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('dinners')

  const filteredItems = useMemo(
    () =>
      content.menu.items.filter((item) => item.category === activeCategory),
    [activeCategory, content.menu.items]
  )

  const activeCategoryLabel =
    content.menu.categories.find((category) => category.key === activeCategory)
      ?.label ?? ''

  const categoryCount = filteredItems.length

  const availabilityLabel =
    activeCategory === 'catering'
      ? language === 'es'
        ? 'Disponible para catering y eventos'
        : 'Available for catering and events'
      : content.ui.availableInStore

  return (
    <section id='menu' className='scroll-mt-24'>
      <div className='container'>
        <div className='text-center'>
          <p className='mb-3 text-lg font-normal uppercase tracking-widest text-primary'>
            {content.menu.eyebrow}
          </p>
          <h2 className='mx-auto max-w-5xl'>{content.menu.title}</h2>
          <p className='mx-auto mt-4 max-w-3xl text-lg leading-8 text-black/60'>
            {content.menu.description}
          </p>
        </div>

        <div className='mt-10 rounded-[2rem] border border-primary/10 bg-white p-5 shadow-[0_24px_70px_rgba(17,17,17,0.06)] md:p-6'>
          <div className='flex flex-col gap-6'>
            <div className='max-w-2xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.35em] text-primary'>
                {language === 'es' ? 'Explora por categoría' : 'Browse by category'}
              </p>
              <p className='mt-3 text-lg leading-7 text-black/65'>
                {language === 'es'
                  ? 'Explora el menú diario, bebidas, postres y opciones de catering en una sola sección.'
                  : 'Browse the daily menu, drinks, desserts, and catering trays in one place.'}
              </p>
            </div>
          </div>

          <div className='mt-6 flex flex-nowrap justify-start gap-2 overflow-x-auto pb-1'>
            {content.menu.categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold whitespace-nowrap transition ${
                  activeCategory === category.key
                    ? 'border-primary bg-primary text-white'
                    : 'border-primary/15 bg-white text-black/70 hover:border-primary hover:text-primary'
                }`}>
                <Icon icon={categoryIcons[category.key]} width='18' height='18' />
                {category.label}
              </button>
            ))}
          </div>

          <div className='mt-6 flex flex-col gap-4 rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(27,127,58,0.06),_rgba(240,196,25,0.16))] p-5 md:flex-row md:items-center md:justify-between'>
            <div className='flex items-center gap-3'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm'>
                <Icon icon={categoryIcons[activeCategory]} width='24' height='24' />
              </div>
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.3em] text-primary'>
                  {language === 'es' ? 'Categoría activa' : 'Active category'}
                </p>
                <p className='mt-1 text-xl font-semibold text-black'>
                  {activeCategoryLabel}
                </p>
              </div>
            </div>
            <p className='text-sm leading-6 text-black/60 md:max-w-md md:text-right'>
              {language === 'es'
                ? `${categoryCount} opciones en esta categoría con precios claros.`
                : `${categoryCount} options in this category with clear pricing.`}
            </p>
          </div>
        </div>

        <div className='mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
          {filteredItems.map((item) => (
            <article
              key={`${item.category}-${item.name}`}
              className='group flex h-full flex-col overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_24px_60px_rgba(17,17,17,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_80px_rgba(17,17,17,0.12)]'>
              {item.image ? (
                <div className='relative overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={700}
                    height={500}
                    className='h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]'
                  />
                  <div className='absolute left-5 top-5 rounded-full bg-black/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm'>
                    {activeCategoryLabel}
                  </div>
                </div>
              ) : (
                <div className='relative overflow-hidden bg-[linear-gradient(135deg,_rgba(27,127,58,0.08),_rgba(240,196,25,0.18))] p-6'>
                  <div className='absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl'></div>
                  <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm'>
                    <Icon icon={categoryIcons[activeCategory]} width='26' height='26' />
                  </div>
                  <div className='mt-6 rounded-full bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur-sm inline-flex'>
                    {activeCategoryLabel}
                  </div>
                </div>
              )}

              <div className='flex h-full flex-col p-6'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <p className='text-2xl font-semibold text-black'>{item.name}</p>
                    <p className='mt-3 text-base leading-7 text-black/60'>
                      {item.description}
                    </p>
                  </div>
                  <span className='shrink-0 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-black shadow-sm'>
                    {item.price}
                  </span>
                </div>

                <div className='mt-auto flex items-center justify-between gap-4 border-t border-primary/10 pt-4'>
                  <p className='text-sm font-semibold uppercase tracking-[0.28em] text-primary'>
                    {availabilityLabel}
                  </p>
                  <Icon
                    icon='solar:arrow-right-up-linear'
                    width='20'
                    height='20'
                    className='text-primary/50 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary'
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
