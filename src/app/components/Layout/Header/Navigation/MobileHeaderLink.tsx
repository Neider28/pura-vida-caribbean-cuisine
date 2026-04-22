import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'

const MobileHeaderLink: React.FC<{
  item: HeaderItem
  onNavigate?: () => void
}> = ({ item, onNavigate }) => {
  return (
    <div className='relative w-full'>
      <Link
        href={item.href}
        onClick={onNavigate}
        className='flex w-full items-center justify-between py-3 text-lg text-black/70 transition hover:text-primary'>
        {item.label}
      </Link>
    </div>
  )
}

export default MobileHeaderLink
