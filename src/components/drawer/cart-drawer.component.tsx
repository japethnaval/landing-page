import {
  Box,
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { AppContext } from '@context/app.context'
import { CartContext } from '@context/cart.context'
import getImageUrl from '@util/get-image-url'
import { FC, useContext } from 'react'

export const CartDrawer: FC = () => {
  const { cart, removeToCart } = useContext(CartContext)
  const { activeDrawer, setActiveDrawer } = useContext(AppContext)
  const fontSize = useBreakpointValue({
    base: 'xs',
    md: 'sm',
    lg: 'sm',
  })
  return (
    <ChakraDrawer
      size="md"
      isOpen={activeDrawer === 'cart'}
      placement="right"
      onClose={() => setActiveDrawer(undefined)}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>My Cart</DrawerHeader>
        <DrawerBody
          display="flex"
          flexDir="column"
          gap={{ base: '12px', md: '16px' }}
        >
          {cart.map((i) => (
            <Box id={i.id} borderBottom="1px solid #D9D9D9">
              <Stack direction="row">
                <Box
                  display="flex"
                  alignItems="center"
                  padding={{
                    base: '8px',
                    md: '16px',
                  }}
                  gap={{
                    base: '4px',
                    md: '32px',
                  }}
                >
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={getImageUrl(i.src)}
                    alt="Dan Abramov"
                  />
                  <Stack direction="column">
                    <Text fontSize={fontSize} fontWeight={600}>
                      {i.productTitle} <br />
                    </Text>
                    <Text fontSize={fontSize}>Quantity: {i.qty}</Text>
                    <Text fontSize={fontSize}>Size: {i.size}</Text>
                    <Text fontSize={fontSize}>
                      Price: ${i.price} <br />
                    </Text>
                  </Stack>
                </Box>
                <Box
                  marginLeft="auto"
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Button
                    onClick={() => removeToCart(i)}
                    colorScheme="red"
                    size={{
                      base: 'xs',
                      md: 'md',
                    }}
                  >
                    Remove
                  </Button>
                </Box>
              </Stack>
            </Box>
          ))}
        </DrawerBody>
        <DrawerFooter>
          <Text>
            Total: $
            {cart
              .reduce((a, b) => Number(a) + Number(b.subTotal), 0)
              .toFixed(2)}
          </Text>
        </DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  )
}

export default CartDrawer
