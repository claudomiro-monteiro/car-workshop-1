'use client'

import Image from 'next/image'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import logo from '../../assets/car-workshop-01.jpg'
import Cards from './cards'
import Nav from './nav'

gsap.registerPlugin(useGSAP)

export default function Home() {
  const conatainer = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.box',
        {
          x: -900,
        },
        { x: 0, opacity: 1, duration: 2 }
      )
    },
    { scope: conatainer }
  )

  return (
    <main>
      <div ref={conatainer} className="relative z-0">
        <Image
          src={logo}
          alt="home"
          className="mask-l-from-0% h-[600px] w-full bg-center object-cover"
        />
        <div className="box absolute top-16 ml-4 space-y-5 pr-[30%] text-left text-zinc-50 opacity-0 sm:ml-12">
          <p className="font-extrabold font-heading text-4xl sm:text-7xl">
            Cuide do seu carro <br /> com quem entende <br /> de verdade!!!
          </p>
          <span className="font-semibold">Mais de 15 anos no mercado...</span>
          <br />
          <span className="font-semibold">
            Profissionalismo e dedicação com seu veiculo.
          </span>
        </div>

        <Cards />
      </div>

      <Nav />
    </main>
  )
}
