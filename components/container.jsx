"use client"

import { useEffect, useState, useTransition, startTransition } from "react"
import clsx from 'clsx'
import { usePathname } from "next/navigation"
import { motion } from 'framer-motion'
import { useUnmount } from 'react-use'

export function PageTransition({ children, width }) {
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  
  useEffect(() => setIsMounted(true), [])

  return (
    <>
      {isMounted && (
        <motion.div
          key={pathname}
          id="content"
          className={clsx("mx-auto", width === 'content' ? "content-width" : "w-full")}
          initial={{ opacity: 0, y: 50, transition: { delay: 0.5 } }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50, transition: { delay: 0, duration: 0.25 } }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </>
  )
}