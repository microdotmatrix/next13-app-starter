// Load global stylesheet
import '../styles/app.css'

// Load Next.js components
import Link from 'next/link'

// Load context providers into master server component
import Providers from './providers'

// Load functional components
import Navigation from '../components/nav'
import ThemeSwitch from '../components/dark-mode'
import SocialMedia from '../components/social-media'
import Counter from '../components/counter'

// Load UI components
import Icon from '../ui/icons'

// Render global layout component
export default function RootLayout({ children }, pageProps) {
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
            <div className="container mx-auto flex flex-row justify-between items-center px-4">
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
            <div className="mx-auto">
              {children}
            </div>
          </main>
          <footer className="py-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              <section className='flex-auto'>
                <Counter />
              </section>
              <section className="flex-1">
                <span className="flex flex-row items-center justify-center gap-2 w-full">
                  <Icon icon="mdi:copyright" size="1.25rem" inline={true} /> <span className='font-bold'>2022</span> <span>John Polinski</span>
                </span>
              </section>
              <section className="flex-auto flex flex-row justify-end">
                <SocialMedia />
              </section>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
