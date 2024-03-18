import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useIndex = (array: string[], refs: any) => {
  const [currentIndex, setCurrentIndex] = useState(1)

  const handleNext = () => {
    refs.current[currentIndex].focus()
    setCurrentIndex((prevIndex) => {
      const value = prevIndex === array.length ? 1 : prevIndex + 1
      refs.current[value].focus()
      return value
    })
  }
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const value = prevIndex < 1 ? array.length - 1 : prevIndex - 1
      refs.current[value].focus()

      return value
    })
  }

  const onClick = (index: number) => {
    setCurrentIndex(index + 1)
  }

  return {
    currentIndex,
    handleNext,
    handlePrevious,
    onClick,
    setCurrentIndex,
  }
}

export default useIndex
