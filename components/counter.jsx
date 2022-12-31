"use client"

import { useStore } from '../lib/store'
import { useHasMounted } from '../utils/hydration'

const useCounter = () => {
  const { count, increment, decrement, reset } = useStore(
    (store) => ({
      count: store.count,
      increment: store.increment,
      decrement: store.decrement,
      reset: store.reset,
    })
  )

  return { count, increment, decrement, reset }
}

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter()
  const hasMounted = useHasMounted()
  if (!hasMounted) return null
  return (
    <div className="w-fit mx-auto">
      <h3 className="text-center">
        Count: <span>{count}</span>
      </h3>
      <div className='grid grid-cols-3 counter-inc btn-group btn-group-scrollable'>
        <button className="btn" onClick={increment}>+1</button>
        <button className="btn" onClick={decrement}>-1</button>
        <button className="btn" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter