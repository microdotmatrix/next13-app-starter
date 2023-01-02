import { Suspense } from 'react'
import { BrickLoader } from '@ui/loaders'

export default function AboutPage() {
  return (
    <Suspense fallback={<BrickLoader />}>
      <h1 className="title">About Page</h1>
      <h4 className="sub-title">My Next.js Starter Kit</h4>

      
    </Suspense>
  );
}