import { Box, Divider, Show, SimpleGrid } from '@chakra-ui/react'
import Banner from '@components/banner/banner.component'
import Carousel from '@components/carousel/carousel.component'
import CustomerReviews from '@components/customer-reviews/customer-reviews.component'
import CartDrawer from '@components/drawer/cart-drawer.component'
import MenuDrawer from '@components/drawer/menu-drawer.component'
import Footer from '@components/footer/footer.component'
import Navbar from '@components/navbar/navbar.component'
import NavLink from '@components/navlInks/navlinks.component'
import ProductDetails from '@components/product-details/product-details.component'
import ProductDetailsMobile from '@components/product-details/product-details.mobile.component'
import ProductTrends from '@components/product-trends/product-trends.component'

const App = () => (
  <Box h="100vh">
    <CartDrawer />
    <MenuDrawer />
    <Navbar />
    <NavLink />
    <Banner />
    <Box
      paddingInline={{
        base: '16px',
        sm: '32px',
        md: '120px',
      }}
    >
      <ProductTrends />
      <Divider borderColor="#909090" orientation="horizontal" />
      <SimpleGrid columns={2} gridGap="16px" marginBlock="16px">
        <Carousel />
        <ProductDetails />
      </SimpleGrid>
      <Show below="sm">
        <Divider borderColor="#909090" orientation="horizontal" />
        <ProductDetailsMobile />
      </Show>
      <CustomerReviews />
    </Box>
    <Footer />
  </Box>
)

export default App
