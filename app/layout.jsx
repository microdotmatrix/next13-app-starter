import '../styles/app.css'

import Link from 'next/link'
// Load context providers pre-loaded in server component
import Providers from './providers'

import Navigation from '../components/nav'
import ThemeSwitch from '../components/dark-mode'
import SocialMedia from '../components/social-media'
import Counter from '../components/counter'
// Load UI components
import Icon from '../ui/icons'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <header className="py-8">
            <div className="container mx-auto flex flex-row justify-between items-center">
              <section className="flex-auto">
                <Link href="/">
                  <Icon icon="cib:next-js" size="4rem" />
                </Link>
              </section>
              <section className="flex-1">
                <Navigation />
              </section>
              <section className="flex-auto flex justify-end">
                <ThemeSwitch />
              </section>
            </div>
          </header>
          <main>
            <div className="container mx-auto">
              {children}
            </div>
          </main>
          <footer className="py-12">
            <div className="container mx-auto flex flex-row justify-between items-center">
              <section className="flex-auto">
                <span className="flex flex-row items-center gap-2">
                  <Icon icon="mdi:copyright" size="1.25rem" inline={true} /> <span className='font-bold'>2022</span> <span>John Polinski</span>
                </span>
              </section>
              <section className='flex-auto'>
                <Counter />
              </section>
              <section className="flex-1 flex flex-row justify-end">
                <SocialMedia />
              </section>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
