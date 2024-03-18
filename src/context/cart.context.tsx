import { createContext, ReactNode, useState } from 'react'

interface ProductProps {
  id: string
  qty: number
  size: string
  price: string
  src: string
  productTitle: string
  subTotal?: number
}

export interface CartContextProps {
  cart: ProductProps[]
  addToCart: (product: ProductProps) => void
  removeToCart: (product: ProductProps) => void
}

const useCartActions = () => {
  const [cart, setCart] = useState<ProductProps[]>([])

  const addToCart = (product: ProductProps) => {
    let isProductExist = false
    if (cart.length >= 1) {
      const updatedCart = cart.map((p) => {
        if (p.id === product.id && p.size === product.size) {
          isProductExist = true
          return {
            ...p,
            qty: Number(p.qty || 1) + product.qty,
            subTotal: (Number(p.qty || 1) + product.qty) * Number(p.price),
          }
        }
        return p
      })

      return setCart(
        isProductExist
          ? updatedCart
          : [
              ...updatedCart,
              {
                ...product,
                subTotal: Number(product.qty) * Number(product.price),
              },
            ],
      )
    }

    return setCart([
      ...cart,
      { ...product, subTotal: Number(product.qty) * Number(product.price) },
    ])
  }

  const removeToCart = (product: ProductProps) => {
    setCart(cart.filter((t) => t.id !== product.id))
  }

  return {
    cart,
    addToCart,
    removeToCart,
  }
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
)

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const value = useCartActions()
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
