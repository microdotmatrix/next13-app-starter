"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const activePath = usePathname();
  return (
    <Link href={href} className={activePath == href ? "active" : null}>
      {children}
    </Link>
  );
}