import NavLink from '../ui/nav-link'

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-row justify-around items-center">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}