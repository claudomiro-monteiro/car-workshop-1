'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import { useRef } from 'react'

import 'keen-slider/keen-slider.min.css'
import { CaretRight, CaretRightIcon } from '@phosphor-icons/react'
import { useKeenSlider } from 'keen-slider/react'

gsap.registerPlugin(useGSAP)

export default function Cards() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.card',
        { y: 0, opacity: 0, scale: 0 },
        {
          // y: -100,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.5,
          stagger: 0.2,
          ease: 'sine.out',
          force3D: true,
        }
      )
    },
    { scope: container }
  )

  const [sliderRef] = useKeenSlider(
    {
      breakpoints: {
        '(min-width: 400px)': {
          slides: { perView: 1, origin: 'center', spacing: 12 },
        },
        '(min-width: 760px)': {
          slides: { perView: 2, origin: 'center', spacing: 12 },
        },
        '(min-width: 1020px)': {
          slides: { perView: 3, origin: 'center', spacing: 24 },
        },
      },
    },
    [
      // add plugins here
    ]
  )

  return (
    <div ref={container} className="-mt-16 flex w-full px-2 sm:px-10">
      <div ref={sliderRef} className="keen-slider flex justify-between">
        <div className="card keen-slider__slide space-y-2 rounded-xl bg-zinc-50 p-3 text-base text-zinc-950 sm:space-y-4 sm:p-6 sm:text-xl">
          <h1 className="font-heading font-semibold text-xl sm:text-2xl">
            Injeção eletrônica
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link
            href="#inject"
            className="flex items-center gap-3 font-semibold text-red-600 text-sm transition duration-200 hover:text-red-500"
          >
            Leia mais
            <CaretRightIcon className="size-4" />
          </Link>
        </div>
        <div className="card keen-slider__slide space-y-2 rounded-xl bg-zinc-50 p-3 text-base text-zinc-950 sm:space-y-4 sm:p-6 sm:text-xl">
          <h1 className="font-heading font-semibold text-xl sm:text-2xl">
            Suspensão
          </h1>
          <p className="">
            Sunt suscipit sed, voluptatibus officia incidunt a!
          </p>
          <Link
            href="#suspension"
            className="flex items-center gap-3 font-semibold text-red-600 text-sm transition duration-200 hover:text-red-500"
          >
            Leia mais
            <CaretRightIcon className="size-4" />
          </Link>
        </div>
        <div className="card keen-slider__slide space-y-2 rounded-xl bg-zinc-50 p-3 text-base text-zinc-950 sm:space-y-4 sm:p-6 sm:text-xl">
          <h1 className="font-heading font-semibold text-xl sm:text-2xl">
            Freios
          </h1>
          <p className="">
            Fugit labore sint eius dignissimos iure expedita aperiam ducimus.
          </p>
          <Link
            href="#breaks"
            className="flex items-center gap-3 font-semibold text-red-600 text-sm transition duration-200 hover:text-red-500"
          >
            Leia mais
            <CaretRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
