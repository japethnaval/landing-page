import { useState } from 'react'

export const useColor = () => {
  const [color, setColor] = useState('#241F21')
  return {
    color,
    setColor,
  }
}

export default useColor
