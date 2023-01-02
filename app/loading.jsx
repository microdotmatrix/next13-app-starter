"use client"

import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion"
import { useEffect, useState, useTransition } from "react"
import { fadeBack } from '@utils/motions'
import { BrickLoader } from '@ui/loaders'
import { useHasMounted } from '@utils/hydration'

export default function Loading() {
  return (
    <m.div
      className="page-wrap"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeBack}
      transition="transition"
    >
      <div className="loading">
        <BrickLoader />
      </div>
    </m.div>
  )
}