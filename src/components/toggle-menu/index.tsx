import { useToggleMenu } from '@/app/header/header'
import { Sling as Hamburger } from 'hamburger-react'

export function ToggleMenu() {
  const { isMenuOpen, handleToggleMenu } = useToggleMenu()
  return (
    <Hamburger
      toggle={handleToggleMenu}
      toggled={isMenuOpen}
      duration={0.5}
      easing="ease-in"
      color={isMenuOpen ? '#e7000b' : '#fafafa'}
      size={28}
      rounded
    />
  )
}
