import React, { FC, memo, ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

const PrimaryButton: FC<Props> = (props) => {
  const { children } = props

  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: '0.8' }}>
      {children}
    </Button>
  )
}

export default memo(PrimaryButton)
