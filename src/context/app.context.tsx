import { useDisclosure } from '@chakra-ui/react'
import { createContext, ReactNode, useState } from 'react'

interface ProductProps {
  id: string
  qty?: number
  size: string
  price: string
  src: string
  productTitle: string
  subTotal?: number
}

export interface CartContextProps {
  cart: ProductProps[]
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
  addToCart: (product: ProductProps) => void
  removeToCart: (product: ProductProps) => void
}

const useCartActions = () => {
  const [cart, setCart] = useState<ProductProps[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const addToCart = (product: ProductProps) => {
    if (cart.length >= 1) {
      console.log('asdsa')
      const updatedCart = cart.map((p) => {
        if (p.id === product.id && p.size === product.size) {
          console.log({
            qty: Number(p.qty || 1) + 1,
            subTotal: (Number(p.qty) + 1) * Number(p.price),
          })
          return {
            ...p,
            qty: Number(p.qty || 1) + 1,
            subTotal: (Number(p.qty || 1) + 1) * Number(p.price),
          }
        }
        return p
      })
      return setCart(updatedCart)
    }

    setCart([
      ...cart,
      { ...product, subTotal: Number(product.qty) * Number(product.price) },
    ])
  }

  const removeToCart = (product: ProductProps) => {
    setCart(cart.filter((t) => t.id !== product.id))
  }

  return {
    cart,
    isOpen,
    onClose,
    onOpen,
    addToCart,
    removeToCart,
  }
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
)

// todolist interface
/**
 *
 * @typedef {Object} Todo
 * @property {string} id
 * @property {string} title
 * @property {boolean} completed
 *
 */

export function CartContextProvider({ children }: { children: ReactNode }) {
  const value = useCartActions()
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
