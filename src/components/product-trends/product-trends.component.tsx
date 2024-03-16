import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

import { getImageUrl } from '../../util/get-image-url'

export interface ProductTrendsProps {}

export const ProductTrends: React.FC<ProductTrendsProps> = () => {
  const productsPlaceholder = new Array(12).fill(0)
  const productFitPlaceholder = new Array(4).fill(0)

  return (
    <Box
      paddingBlock={{
        base: '8px',
        md: '16px',
      }}
    >
      <Flex
        paddingBlock={{
          sm: '8px',
          md: '16px',
        }}
        gap="16px"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Text
          fontSize={{
            base: '16px',
            sm: '24px',
            md: '32px',
            lg: '48px',
          }}
          fontWeight={500}
        >
          Explore our Products
        </Text>
      </Flex>
      <SimpleGrid
        paddingBlock={{
          base: '8px',
          md: '16px',
        }}
        minChildWidth={{
          base: '14px',
          sm: '24px',
          md: '32px',
          lg: '48px',
        }}
        spacing={{
          base: '4px',
          sm: '8px',
        }}
      >
        {productsPlaceholder.map((_, index) => (
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image
              objectFit="contain"
              src={getImageUrl(`product-trend-icons/pt-${index + 1}.svg`)}
              alt="Peak"
            />
          </motion.div>
        ))}
      </SimpleGrid>

      <SimpleGrid
        paddingBlock={{
          base: '8px',
          md: '16px',
        }}
        minChildWidth={{
          base: '14px',
          sm: '24px',
          md: '32px',
          lg: '48px',
        }}
        spacing={{
          base: '8px',
          sm: '24px',
          md: '32px',
          lg: '48px',
        }}
      >
        {productFitPlaceholder.map((_, index) => (
          <Image
            objectFit="contain"
            src={getImageUrl(`product-fit-images/pfi-${index + 1}.jpg`)}
            alt="Peak"
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ProductTrends
