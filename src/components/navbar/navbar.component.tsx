import {
  Box,
  Flex,
  Hide,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Show,
  Text,
} from '@chakra-ui/react'
import { IoSearchSharp } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

import account_icon from '../../assets/nav-icons/account.svg'
import cart_icon from '../../assets/nav-icons/cart.svg'
import logout_icon from '../../assets/nav-icons/logout.svg'
import peak_logo from '../../assets/peak-logo.svg'

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => (
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
            objectFit="contain"
            src={peak_logo}
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
                src={account_icon}
              />
              <Link
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
                src={logout_icon}
              />
              <Link
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
                src={cart_icon}
              />
              <Link
                fontSize={{
                  sm: '10px',
                  md: '12px',
                  lg: '14px',
                }}
              >
                Cart
              </Link>
            </Flex>
          </Flex>
        </Hide>
        <Show below="sm">
          <Flex marginLeft="auto" alignItems="center">
            <RxHamburgerMenu />
          </Flex>
        </Show>
      </Flex>
    </Box>
  </Box>
)

export default Navbar
