import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Stack,
  Image,
} from '@chakra-ui/react'
import { FC, useContext } from 'react'
import { CartContext } from '../../context/app.context'

export interface DrawerProps {}

export const Drawer: FC<DrawerProps> = () => {
  const { isOpen, cart, onClose, removeToCart } = useContext(CartContext)
  return (
    <>
      <ChakraDrawer
        size={'md'}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>
          <DrawerBody>
            {cart.map((i) => (
              <Box id={i.id}>
                <Stack direction="row">
                  <Box display={'flex'} alignItems={'center'} gap={'32px'}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      src={i.src}
                      alt="Dan Abramov"
                    />
                    <Stack direction={'column'}>
                      <Box>
                        <span className="poppins-semibold text-sm">
                          {i.productTitle} <br />
                        </span>
                      </Box>
                      <Box>
                        <span className="poppins-semibold text-sm">
                          Quantity: {i.qty}
                        </span>
                      </Box>
                      <Box>
                        <span className="poppins-semibold text-sm">
                          Price: {i.price} <br />
                        </span>
                      </Box>
                    </Stack>
                  </Box>
                  <Box
                    marginLeft={'auto'}
                    display={'flex'}
                    justifyContent={'flex-end'}
                    alignItems={'center'}
                  >
                    <Button
                      onClick={() => removeToCart(i)}
                      colorScheme="red"
                      size={'sm'}
                    >
                      Remove
                    </Button>
                  </Box>
                </Stack>
              </Box>
            ))}
          </DrawerBody>
          <DrawerFooter>
            Total: {cart.reduce((a, b) => Number(a) + Number(b.subTotal), 0)}
          </DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </>
  )
}

export default Drawer
