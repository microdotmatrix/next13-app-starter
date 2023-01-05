"use client"

import { BrickLoader } from '@ui/loaders'
import { useHasMounted } from '@utils/hydration'
import clsx from 'clsx'

export default function Loading() {
  const hasMounted = useHasMounted()
  
  return (
    <>
      <div className={clsx("loading", hasMounted ? "opacity-100 transition-opacity" : "opacity-0 transition-opacity")}>
        <BrickLoader />
      </div>
    </>
  )
}