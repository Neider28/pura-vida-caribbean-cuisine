'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import { Icon } from '@iconify/react'
import { useEffect, useRef, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useSiteContent } from '@/app/context/language'

const galleryIcons = [
  'solar:camera-bold',
  'solar:chef-hat-bold',
  'solar:leaf-bold',
]

const Expert = () => {
  const { content, language } = useSiteContent()
  const sliderRef = useRef<Slider | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progressKey, setProgressKey] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      sliderRef.current?.slickNext()
    }, 5000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    adaptiveHeight: false,
    beforeChange: (_current: number, next: number) => {
      setCurrentSlide(next)
      setProgressKey((value) => value + 1)
    },
  }

  return (
    <section
      id='galeria'
      className='overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(240,196,25,0.18),_transparent_30%),linear-gradient(180deg,_rgba(27,127,58,0.06)_0%,_rgba(255,253,243,1)_100%)]'>
      <div className='container'>
        <div className='text-center'>
          <p className='mb-3 text-lg font-normal uppercase tracking-widest text-primary'>
            {content.gallery.eyebrow}
          </p>
          <h2 className='mx-auto max-w-5xl'>{content.gallery.title}</h2>
          <p className='mx-auto mt-4 max-w-3xl text-lg leading-8 text-black/60'>
            {content.gallery.description}
          </p>
        </div>

        <div className='mt-12 rounded-[2.25rem] border border-primary/10 bg-white p-4 shadow-[0_30px_80px_rgba(17,17,17,0.1)] md:p-6'>
          <Slider ref={sliderRef} {...settings}>
            {content.gallery.items.map((item, index) => (
              <div key={item.title} className='px-1'>
                <article className='grid overflow-hidden rounded-[2rem] bg-[#111111] lg:grid-cols-[1.2fr_0.8fr]'>
                  <div className='relative min-h-[24rem] lg:min-h-[36rem]'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.05)_0%,_rgba(0,0,0,0.58)_100%)]'></div>
                    <div className='absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/92 px-4 py-2 text-sm font-semibold text-black shadow-lg backdrop-blur-sm'>
                      <Icon
                        icon={galleryIcons[index] ?? galleryIcons[0]}
                        width='18'
                        height='18'
                        className='text-primary'
                      />
                      {language === 'es' ? 'Galería Pura Vida' : 'Pura Vida Gallery'}
                    </div>
                  </div>

                  <div className='flex flex-col justify-between bg-[linear-gradient(135deg,_#16321f_0%,_#111111_100%)] p-6 text-white md:p-8'>
                    <div>
                      <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-secondary'>
                        <Icon
                          icon={galleryIcons[index] ?? galleryIcons[0]}
                          width='26'
                          height='26'
                        />
                      </div>
                      <p className='mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>
                        {language === 'es' ? 'Lo que transmite' : 'What it conveys'}
                      </p>
                      <p className='mt-4 text-3xl font-semibold leading-tight'>
                        {item.title}
                      </p>
                      <p className='mt-4 text-lg leading-8 text-white/75'>
                        {item.description}
                      </p>
                    </div>

                    <div className='mt-8 rounded-[1.5rem] border border-white/10 bg-white/6 p-5'>
                      <p className='text-sm font-semibold uppercase tracking-[0.3em] text-secondary'>
                        {language === 'es' ? 'Estilo visual' : 'Visual style'}
                      </p>
                      <p className='mt-3 text-base leading-7 text-white/75'>
                        {index === 0
                          ? language === 'es'
                            ? 'Platos protagonistas, texturas cercanas y una presentación que abre el apetito.'
                            : 'Hero dishes, inviting textures, and a presentation that sparks appetite.'
                          : index === 1
                            ? language === 'es'
                              ? 'Una atmósfera cálida, cercana y llena de color para sentir el espíritu del lugar.'
                              : 'A warm, welcoming atmosphere full of color and local character.'
                            : language === 'es'
                              ? 'Naturaleza, identidad y detalles tropicales que conectan con Costa Rica.'
                              : 'Nature, identity, and tropical details connected to Costa Rica.'}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>

          <div className='mt-6 flex items-center justify-center gap-3'>
            {content.gallery.items.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className='relative h-1.5 w-16 overflow-hidden rounded-full bg-primary/12'>
                {currentSlide === index && (
                  <div
                    key={`${progressKey}-${index}`}
                    className='absolute inset-y-0 left-0 rounded-full bg-primary animate-[galleryProgress_5s_linear_forwards]'
                    style={{ width: '0%' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes galleryProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}

export default Expert
