import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import getImageUrl from '@util/get-image-url'
import startCase from 'lodash/startCase'
import { FC } from 'react'
import { FiMapPin } from 'react-icons/fi'

export const Footer: FC = () => {
  const size = useBreakpointValue({
    base: '8px',
    md: 'xl',
    lg: '2xl',
  })

  const fontSize = useBreakpointValue({
    base: 'xs',
    md: 'xl',
    lg: '2xl',
  })

  const footerIcons = [
    'shipping',
    'customer support',
    'secure checkout',
    'sustainable',
    'satisfaction guaranteed',
  ]
  return (
    <Box background="#EBEBEB">
      <Flex
        background="black"
        justifyContent="space-between"
        paddingInline={{
          base: '16px',
          sm: '32px',
          md: '120px',
        }}
        paddingBlock={{ base: '8px', md: '24px' }}
      >
        {footerIcons.map((text, i) => (
          <Flex
            alignItems="center"
            gap={{
              base: '4px',
              md: '32px',
            }}
            justifyContent="center"
            direction="column"
          >
            <Image
              w={{
                base: '16px',
                md: '45px',
              }}
              h={{
                base: '16px',
                md: '35px',
              }}
              objectFit="contain"
              src={getImageUrl(`footer-icons/icon-${i + 1}.svg`)}
              alt="Peak"
            />
            <Text
              fontSize={size}
              textAlign="center"
              w={{
                base: '60px',
                md: 'auto',
              }}
              fontWeight={400}
              color="white"
            >
              {startCase(text)}
            </Text>
          </Flex>
        ))}
      </Flex>
      <SimpleGrid
        columns={{ base: 2, md: 5 }}
        gridGap={{
          base: '16px',
          md: '48px',
        }}
        spacing="16px"
        paddingBlock={{
          base: '16px',
          sm: '32px',
          md: '120px',
        }}
        paddingInline={{
          base: '24px',
          sm: '32px',
          md: '120px',
        }}
      >
        <Flex direction="column" gap={{ base: '4px', md: '32px' }}>
          <Text
            fontWeight={600}
            fontSize={{ base: '12px', md: '16px', lg: 'xl' }}
          >
            SUPPORT
          </Text>
          <Text fontSize={fontSize}>Support Center</Text>
          <Text fontSize={fontSize}>Shipping</Text>
          <Text fontSize={fontSize}>Contact Us</Text>
          <Text fontSize={fontSize}>Lifetime Warranty</Text>
          <Text fontSize={fontSize}>Product Registration</Text>
          <Text fontSize={fontSize}>Corporate Sales</Text>
          <Text fontSize={fontSize}>Collaboration</Text>
          <Text fontSize={fontSize}>MiIlitary/Students</Text>
        </Flex>
        <Flex direction="column" gap={{ base: '4px', md: '32px' }}>
          <Text
            fontWeight={600}
            fontSize={{ base: '12px', md: '16px', lg: 'xl' }}
          >
            ABOUT
          </Text>
          <Text fontSize={fontSize}>Our Mission</Text>
          <Text fontSize={fontSize}>Our Story</Text>
          <Text fontSize={fontSize}>Taking Action</Text>
          <Text fontSize={fontSize}>Find a Retailer</Text>
          <Text fontSize={fontSize}>Field Notes</Text>
          <Text fontSize={fontSize}>Careers</Text>
          <Text fontSize={fontSize}>#FindYourPeak</Text>
          <Text fontSize={fontSize}>Become a Dealer</Text>
        </Flex>
        <Flex direction="column" gap={{ base: '4px', md: '32px' }}>
          <Text
            fontWeight={600}
            fontSize={{ base: '12px', md: '16px', lg: 'xl' }}
          >
            SHOP
          </Text>
          <Text fontSize={fontSize}>Everyday and Travel</Text>
          <Text fontSize={fontSize}>Bag Accessories</Text>
          <Text fontSize={fontSize}>Camera Gear</Text>
          <Text fontSize={fontSize}>Tripods</Text>
          <Text fontSize={fontSize}>Mobile</Text>
          <Text fontSize={fontSize}>Pre-Owned</Text>
          <Text fontSize={fontSize}>Gift Cards</Text>
        </Flex>
        <Flex direction="column" gap={{ base: '4px', md: '32px' }}>
          <Text
            fontWeight={600}
            fontSize={{ base: '12px', md: '16px', lg: 'xl' }}
          >
            VISIT A PD STORE
          </Text>
          <Flex alignItems="center" gap="8px">
            <FiMapPin />
            <Text fontSize={fontSize}>San Francisco</Text>
          </Flex>
          <Flex alignItems="center" gap="8px">
            <FiMapPin />
            <Text fontSize={fontSize}>New York</Text>
          </Flex>
          <Flex alignItems="center" gap="8px">
            <FiMapPin />
            <Text fontSize={fontSize}>Tokyo</Text>
          </Flex>
          <br />
          <Text
            fontWeight={600}
            w="300px"
            fontSize={{ base: '12px', md: '16px', lg: 'xl' }}
          >
            SUBSCRIBE TO NEWSLETTER
          </Text>
          <Text fontSize={fontSize}>
            Be the first to know about new products, events, and sales.
          </Text>
        </Flex>
      </SimpleGrid>
      <Flex
        background="black"
        justifyContent="center"
        paddingInline={{
          base: '16px',
          sm: '32px',
          md: '120px',
        }}
        paddingBlock={{ base: '8px', md: '24px' }}
      >
        <Text fontSize={fontSize} color="white">
          © 2024 Peak Design | All Rights Reserved
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
