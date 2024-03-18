/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, IconButton, Image } from '@chakra-ui/react'
import { getImageUrl } from '@util/get-image-url'
import useIndex from 'hooks/active-index'
import React, { useRef } from 'react'
import { IoChevronBackOutline, IoChevronForwardSharp } from 'react-icons/io5'

export interface GalleryProps {
  images: string[]
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const itemsRef = useRef<any>([])
  const { handleNext, handlePrevious, onClick, currentIndex } = useIndex(
    images,
    itemsRef,
  )

  return (
    <Flex h="fill-available" alignItems="center" gap="16px">
      <IconButton
        onClick={handlePrevious}
        isRound
        variant="solid"
        colorScheme="gray"
        aria-label="Done"
        fontSize="20px"
        icon={<IoChevronBackOutline />}
      />
      <Flex gap="8px" overflowX="auto" h="fill-available">
        {images.map((src, i) => (
          <Image
            ref={(element) => (itemsRef.current[i + 1] = element)}
            tabIndex={-1}
            aria-selected={currentIndex === i + 1}
            _selected={{
              border: {
                base: 'unset',
                md: '1px solid red',
              },
            }}
            onClick={() => onClick(i)}
            key={`${src}-${i.toString()}`}
            objectFit="contain"
            src={getImageUrl(`image-reviews/${src}`)}
            alt="Peak"
          />
        ))}
      </Flex>

      <IconButton
        onClick={handleNext}
        isRound
        variant="solid"
        colorScheme="gray"
        aria-label="Done"
        fontSize="20px"
        icon={<IoChevronForwardSharp />}
      />
    </Flex>
  )
}

export default Gallery
