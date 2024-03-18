/* eslint-disable @typescript-eslint/no-explicit-any */
 

import { Box, Flex, Hide, IconButton, Image, Show } from '@chakra-ui/react'
import { getImageUrl } from '@util/get-image-url'
import { AnimatePresence, motion } from 'framer-motion'
import useIndex from 'hooks/active-index'
import { useRef } from 'react'
import { IoChevronBackOutline, IoChevronForwardSharp } from 'react-icons/io5'

const Carousel = () => {
  const itemsRef = useRef<any>([])
  const images = new Array(6).fill(0)
  const { handleNext, handlePrevious, onClick, currentIndex } = useIndex(
    images,
    itemsRef,
  )

  return (
    <>
      <Show below="sm">
        <Flex gap="8px">
          <Flex direction="column" gap="3px">
            {images.map((u, i) => (
              <Box
                key={`${u}-${i.toString()}`}
                tabIndex={-2}
                // eslint-disable-next-line no-return-assign
                ref={(element) => (itemsRef.current[i + 1] = element)}
              >
                <Image
                  onClick={() => onClick(i)}
                  maxH="20px"
                  maxW="30px"
                  cursor="pointer"
                  objectFit="contain"
                  src={getImageUrl(`image-gallery/bag-${i + 1}.jpg`)}
                />
              </Box>
            ))}
          </Flex>

          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0 }}
              key={currentIndex}
            >
              <Image
                w="fill-available"
                objectFit="contain"
                src={getImageUrl(`image-gallery/bag-${currentIndex}.jpg`)}
              />
            </motion.div>
          </AnimatePresence>
        </Flex>
      </Show>

      <Hide below="sm">
        <Flex gap="8px" flexDir="column">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0 }}
              key={currentIndex}
            >
              <Image
                w="fill-available"
                objectFit="contain"
                src={getImageUrl(`image-gallery/bag-${currentIndex}.jpg`)}
              />
            </motion.div>
          </AnimatePresence>
          <Flex
            alignItems="center"
            justifyContent={{ base: 'flex-start', md: 'center' }}
            gap="16px"
          >
            <IconButton
              onClick={handlePrevious}
              isRound
              variant="solid"
              colorScheme="gray"
              aria-label="Done"
              fontSize="20px"
              icon={<IoChevronBackOutline />}
            />
            <Flex alignItems="center" gap="8px" overflowX="auto">
              {images.map((u, i) => (
                <Box
                  key={u}
                  tabIndex={-1}
                  onClick={() => onClick(i)}
                  // eslint-disable-next-line no-return-assign
                  ref={(element) => (itemsRef.current[i + 1] = element)}
                >
                  <Image
                    aria-selected={currentIndex === i + 1}
                    _selected={{
                      border: '1px solid red',
                    }}
                    cursor="pointer"
                    objectFit="contain"
                    h="80px"
                    w="80px"
                    src={getImageUrl(`image-gallery/bag-${i + 1}.jpg`)}
                  />
                </Box>
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
        </Flex>
      </Hide>
    </>
  )
}

export default Carousel
