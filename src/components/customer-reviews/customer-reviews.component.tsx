import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import Gallery from '@components/gallery/gallery.component'
import getImageUrl from '@util/get-image-url'
import React from 'react'

export const CustomerReviews: React.FC = () => {
  const images = [
    'review-1.jpg',
    'review-2.jpg',
    'review-3.jpg',
    'review-4.jpg',
    'review-3.jpg',
    'review-4.jpg',
    'review-3.jpg',
    'review-4.jpg',
  ]

  const size = useBreakpointValue({
    base: 'xs',
    md: 'md',
    lg: 'lg',
  })

  return (
    <Box paddingBlock={{ base: '16px', md: '32px' }}>
      <Box paddingBlock={{ base: '16px', md: '32px' }}>
        <Text fontSize={{ base: 'md', md: '4xl' }} fontWeight={600}>
          Customer Reviews
        </Text>
      </Box>
      <Box h="220px">
        <Gallery images={images} />
      </Box>
      <SimpleGrid
        paddingBlock="32px"
        gridGap={{ base: '16px', md: '32px' }}
        columns={{ base: 1, sm: 2 }}
      >
        <Box padding={{ base: '8px', md: '32px' }} border="1px solid #D9D9D9">
          <Flex justifyContent="space-between">
            <Text fontSize={{ base: 'sm', md: 'xl' }} fontWeight={600}>
              InJustWeTrust
            </Text>
            <Image
              objectFit="contain"
              src={getImageUrl(`rating.svg`)}
              alt="Peak"
            />
          </Flex>
          <Text fontSize={{ base: 'xs', md: 'xl' }}>2 years ago</Text>
          <Text
            fontSize={{ base: 'xs', md: 'xl' }}
            paddingBlock={{ base: '8px', md: '32px' }}
          >
            I bought this bag last week just before traveling to Moab to shoot.
            For the price, I was expecting it to be comfortable, functional and
            able to accommodate all of my gear - and it satisfied all those
            expectations 100%. What blew my mind was its durability and
            toughness. Part of our trip included some mud. The red mud in Moab
            stains everything. It ruined everything I was wearing and it is even
            hard to get off your skin. Needless to say, my bag was covered in
            it. To make things worse, I let it dry on the bag and waited 4 days
            before washing it. When I got home, I threw it in the bathtub,
            sprayed it down and scrubbed it with a soft brush. I was amazed.
            Completely spotless and still dry inside! Way to go Peak Design,
            amazing product.
          </Text>
        </Box>
        <Box padding={{ base: '8px', md: '32px' }} border="1px solid #D9D9D9">
          <Flex justifyContent="space-between">
            <Text fontSize={{ base: 'sm', md: 'xl' }} fontWeight={600}>
              InJustWeTrust
            </Text>
            <Image
              objectFit="contain"
              src={getImageUrl(`rating.svg`)}
              alt="Peak"
            />
          </Flex>
          <Text fontSize={{ base: 'xs', md: 'xl' }}>2 years ago</Text>
          <Text
            fontSize={{ base: 'xs', md: 'xl' }}
            paddingBlock={{ base: '8px', md: '32px' }}
          >
            I bought this bag last week just before traveling to Moab to shoot.
            For the price, I was expecting it to be comfortable, functional and
            able to accommodate all of my gear - and it satisfied all those
            expectations 100%. What blew my mind was its durability and
            toughness. Part of our trip included some mud. The red mud in Moab
            stains everything. It ruined everything I was wearing and it is even
            hard to get off your skin. Needless to say, my bag was covered in
            it. To make things worse, I let it dry on the bag and waited 4 days
            before washing it. When I got home, I threw it in the bathtub,
            sprayed it down and scrubbed it with a soft brush. I was amazed.
            Completely spotless and still dry inside! Way to go Peak Design,
            amazing product.
          </Text>
        </Box>
      </SimpleGrid>
      <Flex justifyContent="center" gap={{ base: '8px', md: '16px' }}>
        <Button size={size} background="black" color="white">
          1
        </Button>
        <Button size={size}>2</Button>
        <Button size={size}>3</Button>
      </Flex>
    </Box>
  )
}

export default CustomerReviews
