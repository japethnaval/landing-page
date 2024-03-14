import peak_logo from './assets/peak-logo.svg'
import account_icon from './assets/account-icon.svg'
import rating from './assets/rating.svg'
import cart_icon from './assets/cart-icon.svg'
import logout_icon from './assets/logout-icon.svg'
import fit_1 from './assets/fit_1.jpg'
import review from './assets/review.jpg'
import fit_2 from './assets/fit_2.jpg'
import bag from './assets/bag.png'
import bag3 from './assets/bag3.jpg'
import bag2 from './assets/bag2.jpg'
import product_logo from './assets/product-placeholder.jpg'
import { useSearchParams } from 'react-router-dom'
import { CiDeliveryTruck } from 'react-icons/ci'
import { CiLock } from 'react-icons/ci'
import { PiRecycleLight } from 'react-icons/pi'
import { CiStar } from 'react-icons/ci'
import { CiChat1 } from 'react-icons/ci'
import Carousel from './components/carousel/carousel.component'
import db from '../db.json'
import { get } from 'lodash'
import { useContext, useState } from 'react'
import clsx from 'clsx'
import Drawer from './components/drawer/drawer.component'
import { CartContext } from './context/app.context'
import { Button } from '@chakra-ui/react'

function App() {
  const [searchParams] = useSearchParams()
  const [size, setSize] = useState('30L')
  const { cart, addToCart, onOpen } = useContext(CartContext)

  const variant = searchParams.get('variant')
  const productId = searchParams.get('productId')

  const productsPlaceholder = new Array(14).fill(0)

  const colors = {
    black: '#000',
    gray: '#55565A',
    navy: '#3E4E6F',
    white: '#3E4E6F',
  }

  const images = [bag, bag2, bag3, bag, bag2, bag3]

  const activeProduct = get(db, `${productId}.${variant}`)

  return (
    <div>
      <Drawer />
      {/* BANNER */}
      <div className="h-14 w-auto bg-black text-white text-center p-4">
        1% OF EVERY SALE GOES TO ENVIRONMENTAL NONPROFITS
      </div>
      {/* BANNER END */}
      {/* SEARCH */}
      <div className="flex gap-12 items-center py-3 px-16">
        <div>
          <img src={peak_logo} />
        </div>
        <div className="relative grow">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="search-input"
            placeholder="Search for product"
            required
          />
        </div>
        <div className="flex gap-3">
          <img className="h-8" src={account_icon} />
          <img className="h-8" src={logout_icon} />
          <img className="h-8 my-cart" src={cart_icon} onClick={onOpen} />
        </div>
      </div>
      {/* SEARCH END */}
      <hr className="h-px mx-8 border-0 hr-custom" />
      {/* LINKS */}
      <div className="flex gap-8 p-8 justify-center">
        <a href="#" className="text-black text-sm hover-underline-animation ">
          Bags
        </a>
        <a href="#" className="text-black text-sm hover-underline-animation">
          Bags Accessories
        </a>
        <a href="#" className="text-black text-sm hover-underline-animation">
          Mobile
        </a>
        <a href="#" className="text-black text-sm hover-underline-animation">
          Camera Gear
        </a>
        <a href="#" className="text-black text-sm hover-underline-animation">
          Tripods
        </a>
        <a href="#" className="text-black text-sm hover-underline-animation">
          Gift Cards
        </a>
        <a href="#" className="text-black text-sm hover-underline-animation">
          Last Call
        </a>
      </div>
      {/* LINKS END */}
      {/* BANNER */}
      <div className="relative">
        <div className="banner-text">
          <span className="poppins-semibold text-8xl">BAGS & ORGANIZERS</span>
          <span className="poppins-light text-3xl">
            UNRIVALED ORGANIZATION, PROTECTION, AND ACCESS.
          </span>
          <Button colorScheme="red" size={'lg'}>
            SHOP NOW
          </Button>
        </div>
        <img
          width={'100%'}
          src="https://global.peakdesign.com/cdn/shop/collections/Backpack_e22bd7ff-3e90-45a0-a5d3-365d9b4a0e86.jpg?v=1605304445"
        />
      </div>
      {/* BANNER END*/}
      {/* EXPLORE */}
      <div className="mx-48">
        <div className="flex justify-center p-8">
          <span className="poppins-semibold text-5xl">
            Explore our Products
          </span>
        </div>
        {/* EXPLORE END */}
        {/* PRODUCT LIST */}
        <div className="flex justify-center gap-3 py-8">
          {productsPlaceholder.map(() => (
            <img
              className="product-logo transition-all duration-200"
              src={product_logo}
            />
          ))}
        </div>
        {/* PRODUCT LIST END */}
        {/* PRODUCT FIT */}
        <div className="flex justify-center gap-12 p-8 pb-64">
          <img
            className="product-fit transition-all duration-200"
            src={fit_1}
          />
          <img
            className="product-fit transition-all duration-200"
            src={fit_2}
          />
          <img
            className="product-fit transition-all duration-200"
            src={fit_1}
          />
          <img
            className="product-fit transition-all duration-200"
            src={fit_2}
          />
        </div>
        {/* PRODUCT FIT END*/}
        <hr className="h-px border-0 hr-custom" />

        {activeProduct ? (
          <>
            {/* PRODUCT DETAILS */}
            <div className="flex gap-12 py-8 pt-64">
              <div className="flex ">
                <Carousel images={images} />
              </div>
              <div className="mt-24 flex flex-col gap-3 grow">
                <span className="poppins-semibold text-4xl">
                  {`${get(activeProduct, 'title')} ${size}`}
                </span>
                <span className="poppins-semibold text-3xl">
                  ${get(activeProduct, `price.${size}`)}
                </span>
                <div className="flex gap-1">
                  <span className="poppins-regular text-sm">Rating</span>
                  <img src={rating} />
                </div>
                <hr className="h-px border-0 hr-custom" />
                <div>
                  <span>Size:</span>
                  <div className="flex gap-1">
                    <span
                      onClick={() => setSize('20L')}
                      className={clsx(
                        'product-size',
                        size === '20L' && 'selected',
                      )}
                    >
                      20L
                    </span>
                    <span
                      onClick={() => setSize('30L')}
                      className={clsx(
                        'product-size',
                        size === '30L' && 'selected',
                      )}
                    >
                      30L
                    </span>
                  </div>
                </div>
                <div>
                  <span>Color:</span>
                  <div className="flex gap-1">
                    {Object.keys(colors).map((color) => (
                      <span
                        className="product-size"
                        style={{
                          width: 41,
                          height: 41,
                          backgroundColor: get(colors, color),
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <Button
                    onClick={() =>
                      addToCart({
                        size,
                        src: bag,
                        productTitle: get(activeProduct, 'title'),
                        id: get(activeProduct, 'id'),
                        price: get(activeProduct, `price.${size}`),
                      })
                    }
                    colorScheme="red"
                    size={'md'}
                  >
                    Add to cart
                  </Button>
                </div>
                <div>
                  <div className="accordion">
                    <span className="poppins-semibold text-sm">
                      Specification
                    </span>
                    <span>{'>'}</span>
                  </div>
                  <div className="accordion">
                    <span className="poppins-semibold text-sm">
                      More Information
                    </span>
                    <span>{'>'}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* PRODUCT DETAILS END */}
            {/* PRODUCT REVIEW */}
            <div className="flex justify-center gap-12 relative py-8">
              <div className="carousel-btn left" onClick={() => {}}>
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                >
                  <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                </svg>
              </div>
              <div className="carousel-btn right" onClick={() => {}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                >
                  <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                </svg>
              </div>
              <img
                className="product-fit transition-all duration-200"
                src={review}
              />
              <img
                className="product-fit transition-all duration-200"
                src={review}
              />
              <img
                className="product-fit transition-all duration-200"
                src={review}
              />
              <img
                className="product-fit transition-all duration-200"
                src={review}
              />
            </div>
            {/* PRODUCT REVIEW END*/}
            {/* CUSTOMER REVIEW*/}
            <div className="poppins-semibold text-5xl py-8">
              Explore our Products
            </div>
            <div className="flex gap-8">
              <div className="comments p-8">
                <div className="flex justify-between py-4">
                  <span className="poppins-semibold text-md">
                    InJustWeTrust
                  </span>
                  <img src={rating} />
                </div>
                <div className="pb-4">2 years ago</div>
                <span>
                  I bought this bag last week just before traveling to Moab to
                  shoot. For the price, I was expecting it to be comfortable,
                  functional and able to accommodate all of my gear - and it
                  satisfied all those expectations 100%. What blew my mind was
                  its durability and toughness. Part of our trip included some
                  mud. The red mud in Moab stains everything. It ruined
                  everything I was wearing and it's even hard to get off your
                  skin. Needless to say, my bag was covered in it. To make
                  things worse, I let it dry on the bag and waited 4 days before
                  washing it. When I got home, I threw it in the bathtub,
                  sprayed it down and scrubbed it with a soft brush. I was
                  amazed. Completely spotless and still dry inside! Way to go
                  Peak Design, amazing product.
                </span>
              </div>
              <div className="comments p-8">
                <div className="flex justify-between py-4">
                  <span className="poppins-semibold text-md">
                    InJustWeTrust
                  </span>
                  <img src={rating} />
                </div>
                <div className="pb-4">2 years ago</div>
                <span>
                  I bought this bag last week just before traveling to Moab to
                  shoot. For the price, I was expecting it to be comfortable,
                  functional and able to accommodate all of my gear - and it
                  satisfied all those expectations 100%. What blew my mind was
                  its durability and toughness. Part of our trip included some
                  mud. The red mud in Moab stains everything. It ruined
                  everything I was wearing and it's even hard to get off your
                  skin. Needless to say, my bag was covered in it. To make
                  things worse, I let it dry on the bag and waited 4 days before
                  washing it. When I got home, I threw it in the bathtub,
                  sprayed it down and scrubbed it with a soft brush. I was
                  amazed. Completely spotless and still dry inside! Way to go
                  Peak Design, amazing product.
                </span>
              </div>
            </div>
            {/* CUSTOMER REVIEW END*/}
            {/* PAGINATION */}
            <div className="flex gap-4 pagination py-12">
              <Button colorScheme="gray" variant="outline">
                1
              </Button>
              <Button colorScheme="gray" variant="outline">
                2
              </Button>
              <Button colorScheme="gray" variant="outline">
                3{' '}
              </Button>
            </div>
            {/* PAGINATION END */}
          </>
        ) : (
          <div className="p-8">
            <span className="poppins-semibold text-1xl color-red">
              Sorry, the product seems to be invalid
            </span>
            <br />
            <br />
            <span className="poppins-light text-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </span>
          </div>
        )}
      </div>
      {/* PRODUCT DETAILS END*/}
      {/* FOOTER */}
      <div className="footer">
        <div className="flex">
          <CiDeliveryTruck fill="white" />
          <span>Shipping</span>
        </div>
        <div className="flex">
          <CiChat1 fill="white" />
          <span>Customer Support</span>
        </div>
        <div className="flex">
          <CiLock fill="white" />
          <span>Secure Checkout</span>
        </div>
        <div className="flex">
          <PiRecycleLight fill="white" />
          <span>Sustainable</span>
        </div>
        <div className="flex">
          <CiStar fill="white" />
          <span>Satisfaction Guaranteed</span>
        </div>
      </div>
      {/* FOOTER END */}
    </div>
  )
}

export default App
