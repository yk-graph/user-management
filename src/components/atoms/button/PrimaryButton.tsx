import React, { FC, memo, ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

interface Props {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onClick: () => void
}

const PrimaryButton: FC<Props> = (props) => {
  const { children, disabled = false, loading = false, onClick } = props

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: '0.8' }}
      isLoading={loading}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default memo(PrimaryButton)
