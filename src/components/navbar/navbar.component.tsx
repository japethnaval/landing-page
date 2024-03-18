/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Box,
  Button,
  Flex,
  Hide,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Show,
  Text,
} from '@chakra-ui/react'
import { AppContext } from '@context/app.context'
import { useContext } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

import AccountIcon from '../../assets/nav-icons/account.svg'
import CartIcon from '../../assets/nav-icons/cart.svg'
import LogoutIcon from '../../assets/nav-icons/logout.svg'
import PeakLogo from '../../assets/peak-logo.svg'

export interface NavbarProps {}

export const Navbar = () => {
  const { setActiveDrawer } = useContext(AppContext)
  return (
    <Box
      borderBottom="1px solid #909090"
      w="fill-available"
      position="fixed"
      zIndex={1}
    >
      <Box
        position="fixed"
        zIndex={100}
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        background="black"
        h="55px"
        w="fill-available"
      >
        <Text
          fontWeight={500}
          fontSize={{ base: '10px', md: '14px', lg: '16px' }}
        >
          1% OF EVERY SALE GOES TO ENVIRONMENTAL NONPROFITS
        </Text>
      </Box>
      <Box
        backgroundColor="white"
        paddingTop="55px"
        paddingInline={{
          base: '20px',
          md: '40px',
          lg: '60px',
        }}
      >
        <Flex
          paddingBlock="24px"
          gap={{
            base: '16px',
            md: '24px',
            xl: '32px',
          }}
        >
          <Flex w="fill-available" gap="24px">
            <Image
              width={{
                base: '40px',
                md: '80px',
                lg: '100px',
              }}
              height={{
                base: '40px',
              }}
              objectFit="contain"
              src={PeakLogo}
              alt="Peak"
            />
            <InputGroup>
              <InputLeftElement
                top="15px"
                height="fit-content"
                pointerEvents="none"
              >
                <IoSearchSharp />
              </InputLeftElement>
              <Input
                height="48px"
                type="text"
                placeholder="Search for product"
                borderColor="#BABFC0"
                _focus={{
                  borderColor: '#BABFC0',
                  boxShadow: 'none',
                }}
              />
            </InputGroup>
          </Flex>
          <Hide below="sm">
            <Flex
              marginLeft="auto"
              gap={{
                sm: '8px',
                md: '16px',
                lg: '24px',
              }}
              width={{
                sm: '260px',
                md: '300px',
                lg: '300px',
              }}
              alignItems="center"
            >
              <Flex gap="4px">
                <Image
                  objectFit="contain"
                  width={{
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                  }}
                  src={AccountIcon}
                />
                <Link
                  href="#"
                  fontSize={{
                    sm: '10px',
                    md: '12px',
                    lg: '14px',
                  }}
                >
                  Account
                </Link>
              </Flex>
              <Flex gap="4px">
                <Image
                  objectFit="contain"
                  width={{
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                  }}
                  src={LogoutIcon}
                />
                <Link
                  href="#"
                  fontSize={{
                    sm: '10px',
                    md: '12px',
                    lg: '14px',
                  }}
                >
                  Logout
                </Link>
              </Flex>
              <Flex gap="4px">
                <Image
                  width={{
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                  }}
                  objectFit="contain"
                  src={CartIcon}
                />
                <Button
                  onClick={() => setActiveDrawer('cart')}
                  variant="link"
                  fontSize={{
                    sm: '10px',
                    md: '12px',
                    lg: '14px',
                  }}
                >
                  Cart
                </Button>
              </Flex>
            </Flex>
          </Hide>
          <Show below="sm">
            <Flex marginLeft="auto" alignItems="center">
              <IconButton
                onClick={() => setActiveDrawer('menu')}
                background="white"
                aria-label="Search database"
                icon={<RxHamburgerMenu />}
              />
            </Flex>
          </Show>
        </Flex>
      </Box>
    </Box>
  )
}
export default Navbar
