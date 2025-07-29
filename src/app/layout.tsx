import type { Metadata } from 'next'
import './globals.css'
import { Montserrat, Oxanium } from 'next/font/google'
import Footer from './footer'
import { Header } from './header/header'

export const metadata: Metadata = {
  title: '2M Mecânica',
}

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${oxanium.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpg" sizes="32x32" />
      </head>
      <body className="flex min-h-dvh w-full flex-col justify-center bg-zinc-950">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
