import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'
import { AppContext } from '@context/app.context'
import { FC, useContext } from 'react'

export const MenuDrawer: FC = () => {
  const { activeDrawer, setActiveDrawer } = useContext(AppContext)
  const fontSize = useBreakpointValue({
    base: 'sm',
    md: 'xl',
    lg: '2xl',
  })
  return (
    <ChakraDrawer
      size="md"
      isOpen={activeDrawer === 'menu'}
      placement="right"
      onClose={() => setActiveDrawer(undefined)}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Flex flexDirection="column" alignItems="flex-start" gap="8px">
            <Button variant="link">Account</Button>
            <Button variant="link" onClick={() => setActiveDrawer('cart')}>
              Cart
            </Button>
            <Accordion allowMultiple w="fill-available">
              <AccordionItem border="none">
                <AccordionButton
                  padding={0}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Button variant="link" disabled>
                    Products
                  </Button>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel
                  display="flex"
                  flexDir="column"
                  alignItems="flex-start"
                >
                  <Button variant="link" fontSize={fontSize} fontWeight={400}>
                    Everyday and Travel
                  </Button>
                  <Button variant="link" fontSize={fontSize} fontWeight={400}>
                    Bag Accessories
                  </Button>
                  <Button variant="link" fontSize={fontSize} fontWeight={400}>
                    Camera Gear
                  </Button>
                  <Button variant="link" fontSize={fontSize} fontWeight={400}>
                    Tripods
                  </Button>
                  <Button variant="link" fontSize={fontSize} fontWeight={400}>
                    Mobile
                  </Button>
                  <Button variant="link" fontSize={fontSize} fontWeight={400}>
                    Pre-Owned
                  </Button>
                  <Button variant="link" fontSize={fontSize} fontWeight={400}>
                    Gift Cards
                  </Button>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Button marginTop="32px" variant="link">
              Logout
            </Button>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  )
}

export default MenuDrawer
