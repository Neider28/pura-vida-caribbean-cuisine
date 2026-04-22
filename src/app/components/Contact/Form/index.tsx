'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useSiteContent } from '@/app/context/language'

const deliveryPlatforms = [
  { label: 'DoorDash', icon: 'tabler:motorbike' },
  { label: 'Uber Eats', icon: 'tabler:device-mobile' },
  { label: 'Grubhub', icon: 'tabler:tools-kitchen-2' },
]

const ContactForm = () => {
  const { content, language } = useSiteContent()

  const paymentOptions = [
    { label: 'Apple Pay', icon: 'simple-icons:applepay' },
    { label: 'Samsung Pay', icon: 'tabler:device-mobile-bolt' },
    {
      label: language === 'es' ? 'Tarjeta de Débito' : 'Debit Card',
      icon: 'solar:card-bold',
    },
    {
      label: language === 'es' ? 'Tarjeta de Crédito' : 'Credit Card',
      icon: 'solar:wallet-money-bold',
    },
  ]

  return (
    <section id='ubicacion' className='scroll-mt-24'>
      <div className='container'>
        <div className='mb-10 text-center'>
          <p className='mb-3 text-lg font-normal uppercase tracking-widest text-primary'>
            {content.location.eyebrow}
          </p>
          <h2 className='mx-auto max-w-5xl'>{content.location.title}</h2>
          <p className='mx-auto mt-4 max-w-3xl text-lg leading-8 text-black/60'>
            {language === 'es'
              ? 'Encuentra rápido cómo visitarnos, a qué hora estamos abiertos y desde dónde puedes hacer tu pedido.'
              : 'Quickly find how to visit us, when we are open, and where you can place your order.'}
          </p>
        </div>

        <div className='grid items-stretch gap-8 lg:grid-cols-12'>
          <div className='lg:col-span-4'>
            <div className='flex h-full flex-col rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,_#111111_0%,_#16321f_100%)] p-5 text-white shadow-[0_28px_80px_rgba(17,17,17,0.14)]'>
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>
                    {content.ui.contactTitle}
                  </p>
                  <p className='mt-3 text-2xl font-semibold leading-tight'>
                    {language === 'es'
                      ? 'Todo lo que necesitas para visitarnos'
                      : 'Everything you need to visit us'}
                  </p>
                </div>
              </div>

              <div className='mt-8 space-y-4'>
                <Link
                  href='tel:2486224490'
                  className='block rounded-[1.5rem] border border-white/10 bg-white/6 p-4 transition hover:bg-white/10'>
                  <div>
                    <p className='text-sm font-semibold uppercase tracking-[0.28em] text-secondary'>
                      {language === 'es' ? 'Teléfono' : 'Phone'}
                    </p>
                    <p className='mt-2 text-xl text-white'>{content.location.phone}</p>
                  </div>
                </Link>

                <Link
                  href='mailto:ronniepinnock@yahoo.com'
                  className='block rounded-[1.5rem] border border-white/10 bg-white/6 p-4 transition hover:bg-white/10'>
                  <div>
                    <p className='text-sm font-semibold uppercase tracking-[0.28em] text-secondary'>
                      Email
                    </p>
                    <p className='mt-2 break-all text-lg text-white'>
                      {content.location.email}
                    </p>
                  </div>
                </Link>

                <div className='rounded-[1.5rem] border border-white/10 bg-white/6 p-4'>
                  <div>
                    <p className='text-sm font-semibold uppercase tracking-[0.28em] text-secondary'>
                      {language === 'es' ? 'Dirección' : 'Address'}
                    </p>
                    <p className='mt-2 text-lg leading-8 text-white/85'>{content.location.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-8'>
            <div className='flex h-full flex-col overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_28px_80px_rgba(17,17,17,0.08)]'>
              <div className='border-b border-primary/10 bg-[linear-gradient(135deg,_rgba(27,127,58,0.05),_rgba(240,196,25,0.12))] px-6 py-6'>
                <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
                  <div>
                    <p className='text-sm font-semibold uppercase tracking-[0.35em] text-primary'>
                      {content.ui.mapTitle}
                    </p>
                    <p className='mt-2 text-2xl font-semibold leading-tight text-black'>
                      {content.location.address}
                    </p>
                    <p className='mt-3 text-base leading-7 text-black/60'>
                      {language === 'es'
                        ? 'Ubicación central para pasar a recoger o visitarnos directamente.'
                        : 'Central location for pickup or visiting us in person.'}
                    </p>
                  </div>

                  <div className='flex flex-col gap-3 sm:min-w-[220px]'>
                    <Link
                      href='https://www.google.com/maps/search/?api=1&query=44768+Woodward+Ave,+Pontiac,+MI+48341'
                      target='_blank'
                      className='w-full rounded-full border border-primary bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-transparent hover:text-primary'>
                      {content.ui.getDirections}
                    </Link>
                    <Link
                      href='tel:2486224490'
                      className='w-full rounded-full border border-primary/20 bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:border-primary hover:text-primary'>
                      {language === 'es' ? 'Llamar ahora' : 'Call now'}
                    </Link>
                  </div>
                </div>
              </div>

              <iframe
                title='Pura Vida Caribbean Cuisine map'
                src={content.location.mapEmbedUrl}
                width='100%'
                height='360'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </div>

        <div className='mt-8 space-y-5'>
          <div className='grid gap-5 lg:grid-cols-2'>
            <div>
            <div className='relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(255,248,214,0.95))] p-5 shadow-[0_20px_60px_rgba(17,17,17,0.08)]'>
              <div className='absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary/20 blur-3xl'></div>
              <div className='mb-4 flex items-center justify-between gap-4'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-primary text-white shadow-[0_14px_30px_rgba(27,127,58,0.2)]'>
                    <Icon icon='solar:clock-circle-bold' width='28' height='28' />
                  </div>
                  <div>
                    <p className='text-sm font-semibold uppercase tracking-[0.35em] text-primary'>
                      {content.ui.hoursTitle}
                    </p>
                    <p className='mt-1 text-base text-black/55'>
                      {language === 'es' ? 'Planea tu visita' : 'Plan your visit'}
                    </p>
                  </div>
                </div>
                <div className='hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm md:block'>
                  {language === 'es' ? 'Abierto' : 'Open'}
                </div>
              </div>

              <div className='space-y-3'>
                <div className='rounded-[1.5rem] bg-white p-4 shadow-sm'>
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <p className='text-sm font-semibold uppercase tracking-[0.28em] text-primary'>
                        {language === 'es' ? 'Horario principal' : 'Main schedule'}
                      </p>
                    </div>
                    <div className='rounded-full bg-primary/8 px-3 py-1 text-sm font-semibold text-primary'>
                      {language === 'es' ? 'Semana actual' : 'This week'}
                    </div>
                  </div>

                  <div className='mt-4 grid gap-2'>
                    <div className='flex items-start justify-between gap-4 rounded-[1.1rem] border border-primary/10 bg-[#fffdf3] px-4 py-3'>
                      <span className='text-base font-semibold text-black'>Lunes a Sábado</span>
                      <span className='text-base font-medium text-black/70'>10:00 a. m. a 8:00 p. m.</span>
                    </div>
                    <div className='flex items-start justify-between gap-4 rounded-[1.1rem] border border-primary/10 bg-[#fffdf3] px-4 py-3'>
                      <span className='text-base font-semibold text-black'>Domingo</span>
                      <span className='text-base font-medium text-black/70'>Cerrado</span>
                    </div>
                  </div>
                </div>

                <div className='rounded-[1.5rem] border border-secondary/30 bg-[linear-gradient(135deg,_rgba(240,196,25,0.18),_rgba(255,255,255,0.98))] p-4'>
                  <div>
                    <p className='text-sm font-semibold uppercase tracking-[0.28em] text-black'>
                      Lunch Specials
                    </p>
                  </div>

                  <div className='mt-2 rounded-[1.1rem] bg-white/75 px-4 py-3'>
                    <p className='text-xl font-semibold leading-tight text-black'>11:30 a. m. a 1:30 p. m.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className='group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-primary/10 bg-white p-5 shadow-[0_20px_60px_rgba(17,17,17,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(17,17,17,0.12)]'>
              <div className='absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/8 blur-2xl'></div>
              <div className='mb-5 flex items-center gap-4'>
                <div className='flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[linear-gradient(135deg,_rgba(27,127,58,0.12),_rgba(240,196,25,0.22))] text-primary'>
                  <Icon icon='solar:delivery-bold' width='28' height='28' />
                </div>
                <div>
                  <p className='text-sm font-semibold uppercase tracking-[0.35em] text-primary'>
                    {language === 'es' ? 'Pedidos en línea' : 'Online ordering'}
                  </p>
                  <p className='mt-1 text-base text-black/55'>
                    {language === 'es' ? 'Tus apps favoritas' : 'Your favorite apps'}
                  </p>
                </div>
              </div>

              <div className='grid gap-3 sm:grid-cols-3'>
                {deliveryPlatforms.map((platform) => (
                  <div
                    key={platform.label}
                    className='flex min-h-[116px] flex-col items-center justify-center rounded-[1.2rem] border border-primary/10 bg-[#fffdf3] p-4 text-center shadow-sm'>
                    <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary'>
                      <Icon icon={platform.icon} width='20' height='20' />
                    </div>
                    <p className='mt-3 text-base font-semibold text-black/80'>{platform.label}</p>
                  </div>
                ))}
              </div>

              <div className='mt-3 grid flex-1 gap-3 sm:grid-cols-3'>
                <div className='flex min-h-[116px] flex-col justify-center rounded-[1.1rem] border border-primary/10 bg-[#fffdf3] p-3 text-center'>
                  <div className='mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-primary/8 text-primary'>
                    <Icon icon='solar:shop-bold' width='18' height='18' />
                  </div>
                  <p className='mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary'>
                    {language === 'es' ? 'Recogida' : 'Pickup'}
                  </p>
                  <p className='mt-1 text-sm leading-6 text-black/62'>
                    {language === 'es'
                      ? 'Recoge tu orden en el restaurante.'
                      : 'Pick up your order at the restaurant.'}
                  </p>
                </div>

                <div className='flex min-h-[116px] flex-col justify-center rounded-[1.1rem] border border-primary/10 bg-[#fffdf3] p-3 text-center'>
                  <div className='mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-primary/8 text-primary'>
                    <Icon icon='solar:smartphone-2-bold' width='18' height='18' />
                  </div>
                  <p className='mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary'>
                    Apps
                  </p>
                  <p className='mt-1 text-sm leading-6 text-black/62'>
                    {language === 'es'
                      ? 'Pide desde DoorDash, Uber Eats o Grubhub.'
                      : 'Order through DoorDash, Uber Eats, or Grubhub.'}
                  </p>
                </div>

                <div className='flex min-h-[116px] flex-col justify-center rounded-[1.1rem] border border-primary/10 bg-[#fffdf3] p-3 text-center'>
                  <div className='mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-primary/8 text-primary'>
                    <Icon icon='solar:card-bold' width='18' height='18' />
                  </div>
                  <p className='mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary'>
                    {language === 'es' ? 'Pago fácil' : 'Easy pay'}
                  </p>
                  <p className='mt-1 text-sm leading-6 text-black/62'>
                    {language === 'es'
                      ? 'Paga con tarjeta o billeteras digitales.'
                      : 'Pay with cards or digital wallets.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='group relative overflow-hidden rounded-[2rem] border border-secondary/30 bg-[linear-gradient(135deg,_rgba(240,196,25,0.18),_rgba(255,255,255,0.98))] p-5 shadow-[0_20px_60px_rgba(240,196,25,0.1)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(240,196,25,0.18)]'>
            <div className='absolute -left-6 top-10 h-20 w-20 rounded-full bg-secondary/20 blur-2xl'></div>
            <div className='mb-5 flex items-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white text-black shadow-sm'>
                <Icon icon='solar:card-bold' width='28' height='28' />
              </div>
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.35em] text-black'>
                  {content.ui.paymentsTitle}
                </p>
                <p className='mt-1 text-base text-black/55'>
                  {language === 'es' ? 'Paga como prefieras' : 'Pay your way'}
                </p>
              </div>
            </div>

            <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
              {paymentOptions.map((option) => (
                <div key={option.label} className='rounded-[1.2rem] bg-white/85 px-4 py-3 shadow-sm'>
                  <div className='flex items-center gap-3'>
                    <Icon icon={option.icon} width='22' height='22' className='text-black' />
                    <span className='text-sm font-semibold text-black/85'>{option.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
