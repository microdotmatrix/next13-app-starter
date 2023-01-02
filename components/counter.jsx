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
    <div className="mx-auto w-fit">
      <h5 className="text-center">
        Count: <span className='font-bold'>{count}</span>
      </h5>
      <div className='mx-auto btn-group'>
        <button className="btn" onClick={decrement}>-1</button>
        <button className="btn bg-gray-300 dark:bg-gray-700" onClick={reset}>Reset</button>
        <button className="btn" onClick={increment}>+1</button>
      </div>
    </div>
  )
}

export default Counter