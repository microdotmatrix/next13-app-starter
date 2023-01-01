"use client"

import clsx from 'clsx'
import NavLink from '../ui/nav-link'
import NavToggle, { useMobileNav } from './mobile-nav'

export default function Navigation() {
  return (
    <>
      <div className='flex lg:hidden' role="mobile-navigation">
        <NavToggle>
          <NavItems align="column" />
        </NavToggle>
      </div>
      <div className='hidden lg:flex flex-1' role="desktop-navigation">
        <NavItems align="row" />
      </div>
    </>
  )
}

export function NavItems({ align }) {
  const { navClose } = useMobileNav()
  return (
    <nav className="nav-links">
      <ul className={clsx("flex", align === 'row' ? "flex-row" : "flex-col")}>
        <li>
          <NavLink href="/" onClick={navClose}>Home</NavLink>
        </li>
        <li>
          <NavLink href="/blog" onClick={navClose}>Blog</NavLink>
        </li>
        <li>
          <NavLink href="/about" onClick={navClose}>About</NavLink>
        </li>
        <li>
          <NavLink href="/contact" onClick={navClose}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}