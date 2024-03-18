 
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Hide,
  Image,
  Input,
  Show,
  Text,
} from '@chakra-ui/react'
import { CartContext } from '@context/cart.context'
import { getImageUrl } from '@util/get-image-url'
import colors from 'constants/colors'
import useCounter from 'hooks/counter'
import useColor from 'hooks/useColor'
import useSize from 'hooks/useSize'
import get from 'lodash/get'
import { FC, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'

import db from '../../../db.json'

export const ProductDetails: FC = () => {
  const { count, increment, setCount, decrement } = useCounter()
  const { addToCart } = useContext(CartContext)
  const { size, setSize } = useSize()
  const { color, setColor } = useColor()

  const [searchParams] = useSearchParams()

  const variant = searchParams.get('variant') || '39599894724685'
  const productId = searchParams.get('productId') || 'travel-backpack'

  const activeProduct = get(db, `${productId}.${variant}`)

  return (
    <>
      <Hide below="sm">
        <Flex direction="column">
          <Box paddingTop="64px" paddingBottom="32px">
            <Text fontSize="4xl" fontWeight={600}>
              {get(activeProduct, 'title')}
            </Text>
            <Text fontSize="24px" fontWeight={600}>
              ${get(activeProduct, `price.${size}`)}
            </Text>
            <Flex gap="16px">
              <Text fontSize="12px">Reviews</Text>
              <Image
                objectFit="contain"
                src={getImageUrl(`rating.svg`)}
                alt="Peak"
              />
            </Flex>
          </Box>
          <Divider borderColor="#909090" orientation="horizontal" />
          <Flex paddingBlock="32px" flexDirection="column" gap="16px">
            <Flex flexDirection="column" gap="8px">
              <Text fontSize="16px" fontWeight={600}>
                Size
              </Text>
              <Flex gap="16px">
                <Button
                  aria-selected={size === '20L'}
                  _selected={{
                    borderColor: 'red',
                  }}
                  onClick={() => setSize('20L')}
                  variant="outline"
                  border="1px solid #B1B1B1"
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
                >
                  30L
                </Button>
              </Flex>
            </Flex>
            <Flex flexDirection="column" gap="8px">
              <Text fontSize="16px" fontWeight={600}>
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
                    w="40px"
                    h="40px"
                  />
                ))}
              </Flex>
            </Flex>
            <Flex flexDirection="column" gap="8px" paddingBlock="16px">
              <Flex gap="8px">
                <Button variant="outline" onClick={decrement}>
                  -
                </Button>
                <Input
                  w="60px"
                  value={count}
                  textAlign="center"
                  type="number"
                  borderColor="#BABFC0"
                  _focus={{
                    borderColor: '#BABFC0',
                    boxShadow: 'none',
                  }}
                />

                <Button variant="outline" onClick={increment}>
                  +
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    addToCart({
                      id: String(get(activeProduct, 'id')),
                      qty: count,
                      price: get(
                        activeProduct,
                        `price.${size}`,
                      ) as unknown as string,
                      size,
                      src: String(get(activeProduct, 'thumbnail')),
                      productTitle: String(get(activeProduct, 'title')),
                    })
                    setCount(1)
                  }}
                >
                  Add to cart
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Box>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <AccordionButton display="flex" justifyContent="space-between">
                  <Text fontSize="14px" fontWeight={600}>
                    Specification
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton display="flex" justifyContent="space-between">
                  <Text fontSize="14px" fontWeight={600}>
                    More Information
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Hide>
      <Show below="sm">
        <Flex direction="column" justify="center">
          <Box paddingTop="8px" paddingBottom="8px">
            <Text fontSize="12px" fontWeight={600}>
              {get(activeProduct, 'title')}
            </Text>
            <Text fontSize="12px" fontWeight={600}>
              ${get(activeProduct, `price.${size}`)}
            </Text>
            <Flex gap="8px">
              <Text fontSize="12px">Reviews</Text>
              <Image
                objectFit="contain"
                src={getImageUrl(`rating.svg`)}
                alt="Peak"
              />
            </Flex>
          </Box>
        </Flex>
      </Show>
    </>
  )
}

export default ProductDetails
