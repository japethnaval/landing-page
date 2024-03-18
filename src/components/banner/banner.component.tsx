import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export interface BannerProps {}

export const Banner = () => {
  const size = useBreakpointValue({
    base: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  })

  return (
    <Box
      paddingBlock={{
        base: '12px',
        sm: '12px',
        md: '16px',
      }}
      position="relative"
    >
      <Image
        width="fill-available"
        objectFit="contain"
        src="https://global.peakdesign.com/cdn/shop/collections/Backpack_e22bd7ff-3e90-45a0-a5d3-365d9b4a0e86.jpg?v=1605304445"
      />

      <Flex
        position="absolute"
        top={{
          base: '20px',
          sm: '35px',
          md: '60px',
          lg: '80px',
          xl: '120px',
        }}
        w="fill-available"
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        gap="16px"
      >
        <Text
          fontSize={{
            base: '16px',
            sm: '24px',
            md: '32px',
            lg: '64px',
          }}
          fontWeight="bold"
          color="white"
        >
          BAGS & ORGANIZERS123
        </Text>
        <Text
          fontSize={{
            base: '10px',
            sm: '12px',
            md: '16px',
            lg: '24px',
          }}
          fontWeight={200}
          color="white"
        >
          UNRIVALED ORGANIZATION, PROTECTION, AND ACCESS.
        </Text>
        <Button size={size} colorScheme="red">
          SHOP NOW
        </Button>
      </Flex>
    </Box>
  )
}

export default Banner
