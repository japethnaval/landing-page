import './index.css'

import { ChakraProvider } from '@chakra-ui/react'
import { AppContextProvider } from '@context/app.context.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import { CartContextProvider } from './context/cart.context.tsx'
import theme from './theme/theme.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AppContextProvider>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
