"use client"

import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'

export default function Template({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </LazyMotion>
  )
}
