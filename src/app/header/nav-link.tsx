import Link, { type LinkProps } from 'next/link'

interface NavlinkProps extends LinkProps {
  children: string
}

export function NavLink(props: NavlinkProps) {
  return (
    <Link
      {...props}
      className='relative inline-block h-24 leading-[96px] transition duration-200 hover:text-red-600 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-1 hover:after:w-full hover:after:rounded-t hover:after:bg-red-600 hover:after:content-[""]'
    >
      {props.children}
    </Link>
  )
}
