'use client'

import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  return (
    <Link
      href={item.href}
      className='text-lg font-medium text-black/70 transition duration-300 hover:text-primary'>
      {item.label}
    </Link>
  )
}

export default HeaderLink
