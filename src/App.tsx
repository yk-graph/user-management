import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme/theme'

const App: React.FC = () => {
  return <ChakraProvider theme={theme} />
}

export default App
