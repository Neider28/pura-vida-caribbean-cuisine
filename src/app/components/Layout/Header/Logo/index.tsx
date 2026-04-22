import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center'>
      <Image
        src='/images/Logo/logo.png'
        alt='Pura Vida Caribbean Cuisine'
        width={96}
        height={96}
        className='h-20 w-20 rounded-full object-cover'
      />
    </Link>
  )
}

export default Logo
