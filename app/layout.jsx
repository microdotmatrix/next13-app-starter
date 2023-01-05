// Load global stylesheet
import '../styles/app.css'

import { Suspense } from 'react'
// Load Next.js components
import Link from 'next/link'
import { Space_Grotesk, Lato, Abel } from '@next/font/google'

// Load context providers into master server component
import Providers from './providers'

// Load functional components
import Navigation from '../components/nav'
import ThemeSwitch from '../components/dark-mode'
import SocialMedia from '../components/social-media'
import Counter from '../components/counter'

// Load UI components
import Icon from '../ui/icons'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['variable'],
  variable: '--space-grotesk'
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--lato'
})

const abel = Abel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--abel'
})

// Render global layout component
export default function RootLayout({ children }, pageProps) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${lato.variable} ${abel.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <Suspense fallback={"Loading..."}>
            <header className="site-header">
              <div className="container mx-auto flex flex-row justify-between items-center px-4">
                <section style={{ flex: '2 0 0' }}>
                  <Link href="/">
                    <Icon icon="cib:next-js" size="4rem" />
                  </Link>
                </section>
                <section className="relative flex justify-center" style={{ flex: '3 0 0' }}>
                  <Navigation />
                </section>
                <section className="flex justify-end" style={{ flex: '2 0 0' }}>
                  <ThemeSwitch />
                </section>
              </div>
            </header>
            <main>
              <Suspense fallback={"Loading content..."}>
                {children}
              </Suspense>
            </main>
            <footer className="site-footer">
              <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center divide-y lg:divide-y-0">
                <section className='flex-none'>
                  <Counter />
                </section>
                <section className="flex-1 text-center py-4 lg:py-0">
                  <span className="flex flex-row items-center justify-center gap-2 w-full">
                    <Icon icon="mdi:copyright" size="1.25rem" inline={true} /> <span className='font-bold'>2022</span> <span>John Polinski</span>
                  </span>
                </section>
                <section className="flex-none flex flex-row justify-end">
                  <SocialMedia />
                </section>
              </div>
            </footer>
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}
