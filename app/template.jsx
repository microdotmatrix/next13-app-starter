"use client"

import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion"

import { useEffect, useState, Suspense } from "react"
import { usePathname } from "next/navigation"
import { useHasMounted } from "@utils/hydration"

import { fadeBack } from "@utils/motions"

export default function Template({ children }) {
  const [animation, setAnimation] = useState(fadeBack);
  const hasMounted = useHasMounted()
  const pathname = usePathname()
  if (!hasMounted) {
    return null
  }
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <Suspense fallback={null}>
          <m.div
            key={pathname.concat(animation.name)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
          >
            {children}
          </m.div>
        </Suspense>
      </AnimatePresence>
    </LazyMotion>
  )
}