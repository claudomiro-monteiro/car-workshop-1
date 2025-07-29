'use client'

import { MapPin } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="mt-16 flex h-40 w-full flex-col items-center justify-center gap-8 bg-zinc-950 px-4 text-zinc-50">
      {/* <div className="flex gap-3">
        <MapPin className="size-6" />
        <p className="text-center">
          Rua Tocantins 27, Pedregulho - Guaratinguetá - SP
        </p>
      </div> */}
      <p className="text-center">
        Copyright - 2M Mecânica - todos direitos Reservados -
        {new Date().getFullYear()}
      </p>
      <Link
        href="https://portfolio-next-tailwind-omega.vercel.app/"
        className="flex items-center justify-center pb-2 font-semibold text-xs text-zinc-50"
      >
        Desenvolvido com 🖤 por CM web developer
      </Link>
    </div>
  )
}
