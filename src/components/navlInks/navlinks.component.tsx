/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Flex, Hide, Link } from '@chakra-ui/react'
import React from 'react'

export interface NavLinkProps {}

export const NavLink: React.FC<NavLinkProps> = () => (
  <Box paddingTop="150px">
    <Hide below="sm">
      <Flex
        justifyContent="center"
        alignItems="center"
        height={{
          sm: '30px',
          md: '60px',
          lg: '90px',
        }}
        gap={{
          sm: '12px',
          md: '14px',
          lg: '16px',
        }}
      >
        <Link
          fontSize={{
            sm: '10px',
            md: '12px',
            lg: '14px',
          }}
          href="#"
        >
          Bags
        </Link>
        <Link
          fontSize={{
            sm: '10px',
            md: '12px',
            lg: '14px',
          }}
          href="#"
        >
          Bags Accessories
        </Link>
        <Link
          fontSize={{
            sm: '10px',
            md: '12px',
            lg: '14px',
          }}
          href="#"
        >
          Mobile
        </Link>
        <Link
          fontSize={{
            sm: '10px',
            md: '12px',
            lg: '14px',
          }}
          href="#"
        >
          Camera Gear
        </Link>
        <Link
          fontSize={{
            sm: '10px',
            md: '12px',
            lg: '14px',
          }}
          href="#"
        >
          Tripods
        </Link>
        <Link
          fontSize={{
            sm: '10px',
            md: '12px',
            lg: '14px',
          }}
          href="#"
        >
          Gift Cards
        </Link>
        <Link
          fontSize={{
            sm: '10px',
            md: '12px',
            lg: '14px',
          }}
          href="#"
        >
          Last Call
        </Link>
      </Flex>
    </Hide>
  </Box>
)

export default NavLink
