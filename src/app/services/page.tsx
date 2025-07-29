'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'
import sunpension from '../../assets/car-workshop-01.jpg'
import breaks from '../../assets/car-workshop-02.jpg'
import inject from '../../assets/car-workshop-03.jpg'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Services() {
  const container = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        gsap.from('.box1', {
          x: 400,
          opacity: 0,
          duration: 1.5,
          scale: 0.2,
          scrollTrigger: {
            trigger: '.box1',
            start: 'top 700px',
            end: 'bottom center',
          },
        })
        gsap.from('.box2', {
          x: -400,
          opacity: 0,
          duration: 1.5,
          scale: 0.2,
          scrollTrigger: {
            trigger: '.box2',
            start: 'top 700px',
            end: 'bottom center',
          },
        })
        gsap.from('.box3', {
          x: 400,
          opacity: 0,
          duration: 1.5,
          scale: 0.2,
          scrollTrigger: {
            trigger: '.box3',
            start: 'top 700px',
            end: 'bottom center',
          },
        })
      })

      mm.add('(max-width: 767px)', () => {
        gsap.from('.box1', {
          x: 400,
          opacity: 0,
          duration: 1.5,
          scale: 0.2,
          scrollTrigger: {
            trigger: '.box1',
            start: 'top 1061px',
            end: 'bottom center',
          },
        })
        gsap.from('.box2', {
          x: -400,
          opacity: 0,
          duration: 1.5,
          scale: 0.2,
          scrollTrigger: {
            trigger: '.box2',
            start: 'top 1061px',
            end: 'bottom center',
          },
        })
        gsap.from('.box3', {
          x: 400,
          opacity: 0,
          duration: 1.5,
          scale: 0.2,
          scrollTrigger: {
            trigger: '.box3',
            start: 'top 1061px',
            end: 'bottom center',
          },
        })
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      id="services"
      className="mt-[20px] scroll-mt-2 rounded-md bg-zinc-50 p-4 sm:p-8"
    >
      <div className="overflow-x-hidden">
        <h1 className="font-heading font-semibold text-3xl">Serviços</h1>

        <div
          id="inject"
          className="mt-10 flex w-full scroll-mt-2 flex-col gap-8 sm:flex-row"
        >
          <Image
            src={inject}
            alt="inject"
            width={450}
            className="box1 rounded-md opacity-100"
          />

          <div className="flex flex-col gap-10 p-4">
            <h2 className="font-semibold text-xl">Injeção Eletronica</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium consequatur hic minima ratione, perspiciatis quae
              ipsam! Nisi doloremque, ea ab aperiam hic pariatur repellat iure
              perspiciatis laborum culpa debitis rerum.
            </p>
          </div>
        </div>
        <hr className="my-10" />
        <div
          id="suspension"
          className="flex w-full scroll-mt-2 flex-col gap-8 sm:flex-row "
        >
          <div className="flex flex-col gap-10 p-4">
            <h2 className="font-semibold text-xl">Suspensão</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium consequatur hic minima ratione, perspiciatis quae
              ipsam! Nisi doloremque, ea ab aperiam hic pariatur repellat iure
              perspiciatis laborum culpa debitis rerum.
            </p>
          </div>

          <Image
            src={sunpension}
            alt="inject"
            width={450}
            className="box2 rounded-md opacity-100"
          />
        </div>
        <hr className="my-10" />
        <div
          id="breaks"
          className="mt-10 flex w-full scroll-mt-2 flex-col gap-8 sm:flex-row"
        >
          <Image
            src={breaks}
            alt="inject"
            width={450}
            className="box3 rounded-md opacity-100"
          />

          <div className="flex flex-col gap-10 p-4">
            <h2 className="font-semibold text-xl">Freios</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium consequatur hic minima ratione, perspiciatis quae
              ipsam! Nisi doloremque, ea ab aperiam hic pariatur repellat iure
              perspiciatis laborum culpa debitis rerum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
