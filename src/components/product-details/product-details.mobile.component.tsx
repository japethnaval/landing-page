 
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react'
import { CartContext } from '@context/cart.context'
import colors from 'constants/colors'
import useCounter from 'hooks/counter'
import useColor from 'hooks/useColor'
import useSize from 'hooks/useSize'
import get from 'lodash/get'
import { FC, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'

import db from '../../../db.json'

export const ProductDetailsMobile: FC = () => {
  const { count, increment, setCount, decrement } = useCounter()
  const { addToCart } = useContext(CartContext)
  const { size, setSize } = useSize()
  const { color, setColor } = useColor()

  const [searchParams] = useSearchParams()

  const variant = searchParams.get('variant') || '39599894724685'
  const productId = searchParams.get('productId') || 'travel-backpack'

  const activeProduct = get(db, `${productId}.${variant}`)

  return (
    <Box paddingBlock="16px">
      <Flex direction="column" gap="16px" padding="8px 16px">
        <Flex gap="8px" alignItems="center">
          <Text fontSize="xs" fontWeight={600}>
            Size
          </Text>
          <Flex gap="8px">
            <Button
              aria-selected={size === '20L'}
              _selected={{
                borderColor: 'red',
              }}
              onClick={() => setSize('20L')}
              variant="outline"
              border="1px solid #B1B1B1"
              size="xs"
            >
              20L
            </Button>
            <Button
              aria-selected={size === '30L'}
              _selected={{
                borderColor: 'red',
              }}
              onClick={() => setSize('30L')}
              variant="outline"
              border="1px solid #B1B1B1"
              size="xs"
            >
              30L
            </Button>
          </Flex>
        </Flex>
        <Flex gap="8px" alignItems="center">
          <Text fontSize="xs" fontWeight={600}>
            Color
          </Text>
          <Flex gap="8px">
            {colors.map((c) => (
              <Button
                onClick={() => setColor(c)}
                aria-selected={color === c}
                _selected={{
                  border: '1px solid red',
                }}
                key={c}
                background={c}
                w="24px"
                h="24px"
              />
            ))}
          </Flex>
        </Flex>
        <Flex gap="8px" alignItems="center">
          <Text fontSize="xs" fontWeight={600}>
            Quantity
          </Text>

          <Button
            onClick={decrement}
            variant="outline"
            border="1px solid #B1B1B1"
            size="xs"
          >
            -
          </Button>
          <Input
            w="40px"
            value={count}
            textAlign="center"
            type="number"
            borderColor="#BABFC0"
            _focus={{
              borderColor: '#BABFC0',
              boxShadow: 'none',
            }}
            size="xs"
          />
          <Button
            onClick={increment}
            variant="outline"
            border="1px solid #B1B1B1"
            size="xs"
          >
            +
          </Button>
        </Flex>
      </Flex>
      <Box paddingBlock="8px">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton display="flex" justifyContent="space-between">
              <Text fontSize="xs" fontWeight={600}>
                Specification
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton display="flex" justifyContent="space-between">
              <Text fontSize="xs" fontWeight={600}>
                More Information
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Button
        colorScheme="red"
        onClick={() => {
          addToCart({
            id: String(get(activeProduct, 'id')),
            qty: count,
            price: get(activeProduct, `price.${size}`) as unknown as string,
            size,
            src: String(get(activeProduct, 'thumbnail')),
            productTitle: String(get(activeProduct, 'title')),
          })
          setCount(1)
        }}
        size="sm"
        w="fill-available"
      >
        Add to cart
      </Button>
    </Box>
  )
}
export default ProductDetailsMobile
