import { useState } from 'react'

export const useSize = () => {
  const [size, setSize] = useState('20L')

  return {
    size,
    setSize,
  }
}

export default useSize
