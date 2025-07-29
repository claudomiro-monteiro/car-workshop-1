'use client'

import { Sidebar } from '@/components/sidebar'
import { ToggleMenu } from '@/components/toggle-menu'
import Image from 'next/image'
import Link from 'next/link'
import { createContext, useContext, useState } from 'react'
import logo from '../../../public/logo.jpg'
import { NavLink } from './nav-link'

interface ToggleContextProps {
  isMenuOpen: boolean
  handleToggleMenu: () => void
}

export const ToggleContext = createContext({} as ToggleContextProps)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen)

    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  }

  return (
    <ToggleContext value={{ handleToggleMenu, isMenuOpen }}>
      <header className="flex h-20 items-center justify-between bg-black px-4 text-white sm:h-24">
        <Link href="/">
          <Image src={logo} alt="logotipo" className="h-auto w-20 sm:w-24" />
        </Link>
        <nav className="hidden items-center space-x-8 pr-4 font-heading text-xl sm:flex">
          <NavLink href="#services">Serviços</NavLink>
          <NavLink href="#aboutus">Sobre nós</NavLink>
          <NavLink href="#location">Localização</NavLink>
          <NavLink href="#contactus">Contato</NavLink>
        </nav>
        <div className="ml-auto flex md:hidden">
          <ToggleMenu />
          <Sidebar />
        </div>
      </header>
    </ToggleContext>
  )
}

export const useToggleMenu = () => useContext(ToggleContext)
