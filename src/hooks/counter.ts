import { useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) setCount(count - 1)
  }

  return {
    count,
    increment,
    decrement,
    setCount,
  }
}

export default useCounter
