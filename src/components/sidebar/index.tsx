import { useToggleMenu } from '@/app/header/header'
import { useGSAP } from '@gsap/react'
import {
  InstagramLogoIcon,
  PhoneCallIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export function Sidebar() {

  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(SplitText)

  const tl = useRef<gsap.core.Timeline | null>(null)

  const { isMenuOpen, handleToggleMenu } = useToggleMenu()

  useGSAP(
    () => {
      const split = SplitText.create('.texto', { type: 'chars', mask: 'chars' })

      gsap.set('#sidebar', { clipPath: 'circle(0% at 99% -10%' })

      tl.current = gsap
        .timeline({ paused: true })
        .to('#sidebar', { clipPath: 'circle(100% at 50% 50%' })
        .from(split.chars, {
          opacity: 0,
          // duration: 0.6,
          yPercent: 'random([-150, 150])',
          xPercent: 'random([-150, 150])',
          stagger: {
            from: 'random',
            amount: 0.6,
          },
          ease: 'power3.out',
        })
    }
  )

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play()
    } else {
      tl.current?.reverse()
    }
  }, [isMenuOpen])

  return (
      <div
        id="sidebar"
        className="fixed right-0 bottom-0 left-0 z-10 flex h-[calc(100%-5rem)] w-full flex-col items-center justify-between bg-zinc-950"
      >
        <nav className="font-heading] flex h-full flex-col items-center justify-center space-y-16">
          <Link className='texto' href="#services" onClick={handleToggleMenu}>
            Serviços
          </Link>
          <Link className='texto' href="#aboutus" onClick={handleToggleMenu}>
            Sobre nós
          </Link>
          <Link className='texto' href="/#location" onClick={handleToggleMenu}>
            Localização
          </Link>
          <Link className='texto' href="#contactus" onClick={handleToggleMenu}>
            Contato
          </Link>
        </nav>
        <div className="mb-10 flex w-full justify-around">
          <Link
            href="tel:1231279001"
            className="flex items-center gap-2 duration-200 hover:text-zinc-950"
          >
            <PhoneCallIcon className="size-6 sm:size-8" />
          </Link>
          <Link
            href="https://wa.me/5512991948949"
            className="flex items-center gap-2 duration-200 hover:text-zinc-950"
          >
            <WhatsappLogoIcon className="size-6 sm:size-8" />
          </Link>
          <Link
            href="https://instagram.com/automecanica2m"
            className="flex items-center gap-2 duration-200 hover:text-zinc-950"
          >
            <InstagramLogoIcon className="size-6 sm:size-8" />
          </Link>
        </div>
      </div>
  )
}
