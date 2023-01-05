"use client"

import clsx from 'clsx'
import { usePathname } from "next/navigation"
import NavLink from '../ui/nav-link'
import NavToggle, { useMobileNav } from './mobile-nav'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

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
  const path = usePathname()
  return (
    <nav className="nav-links">
      <ul className={clsx("flex", align === 'row' ? "flex-row" : "flex-col")}>
        {navLinks.map(({ href, label }) => (
          <li key={href} className={clsx("nav-btn", href === path ? "active-effect" : "inactive")}>
            <NavLink href={href} onClick={navClose}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}