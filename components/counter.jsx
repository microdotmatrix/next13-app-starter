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
    <div className="w-full mx-auto">
      <h3 className="text-center">
        Count: <span className='font-bold'>{count}</span>
      </h3>
      <div className='mx-auto flex flex-row btn-group btn-group-vertical lg:btn-group-horizontal'>
        <button className="btn w-full lg:w-fit" onClick={decrement}>-1</button>
        <button className="btn w-full lg:w-fit bg-border" onClick={reset}>Reset</button>
        <button className="btn w-full lg:w-fit" onClick={increment}>+1</button>
      </div>
    </div>
  )
}

export default Counter