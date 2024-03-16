import { Box, Divider } from '@chakra-ui/react'
import Banner from '@components/banner/banner.component'
import Navbar from '@components/navbar/navbar.component'
import NavLink from '@components/navlInks/navlinks.component'
import ProductTrends from '@components/product-trends/product-trends.component'
import { CartContext } from '@context/app.context'
import { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'

const App = () => {
  // const [searchParams] = useSearchParams()
  // const { cart, addToCart, onOpen } = useContext(CartContext)

  return (
    <Box h="100vh">
      <Navbar />
      <NavLink />
      <Banner />
      <Box
        paddingInline={{
          base: '16px',
          sm: '32px',
          md: '64px',
        }}
      >
        <ProductTrends />
        <Divider borderColor="#909090" orientation="horizontal" />
      </Box>
    </Box>
  )
}

export default App
