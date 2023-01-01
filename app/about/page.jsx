import { Suspense } from 'react'
import { BrickLoader } from '../../ui/loaders'

export default function AboutPage() {
  return (
    <Suspense fallback={<BrickLoader />}>
      <h1>About Page</h1>

      <div className="card">
        <h2 className="card-header">Card Example</h2>
        <div className="card-body">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque placeat officiis blanditiis error iste, provident corporis quae repellendus expedita, in laborum necessitatibus accusamus voluptate, doloremque voluptates porro ut.</p>
        </div>
      </div>

      <div className="card">
        <h2 className="card-header">Card Example</h2>
        <div className="card-body">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque placeat officiis blanditiis error iste, provident corporis quae repellendus expedita, in laborum necessitatibus accusamus voluptate, doloremque voluptates porro ut.</p>
        </div>
      </div>
    </Suspense>
  );
}