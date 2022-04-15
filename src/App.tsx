import React, { FC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import theme from './theme'
import Router from './router'
import { LoginUserProvider } from './providers/LoginUserProvider'

const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <LoginUserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </LoginUserProvider>
    </ChakraProvider>
  )
}

export default App
