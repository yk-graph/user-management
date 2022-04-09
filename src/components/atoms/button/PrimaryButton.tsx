import React, { ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

// Childrenのようにタグで囲った要素を型指定して受け取るときはReactNode
interface Props {
  children: ReactNode
}

const PrimaryButton: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  )
}

export default PrimaryButton
