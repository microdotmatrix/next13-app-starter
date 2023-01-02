"use client";

import Link from "next/link";
import { useContext } from "react";
import StartRouterChange from "@context/router-events";

export default function Anchor({ href, style, children }) {
  const startChange = useContext(StartRouterChange);
  const useLink = href && href.startsWith("/");
  if (useLink)
    return (
      <Link
        href={href}
        onClick={() => {
          const { pathname, search, hash } = window.location;
          if (href !== pathname + search + hash) startChange();
        }}
        style={style}
      >
        {children}
      </Link>
    );
  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
}