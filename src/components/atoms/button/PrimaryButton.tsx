import React, { FC, memo, ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

interface Props {
  children: ReactNode
<<<<<<< HEAD
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

const PrimaryButton: React.FC<Props> = (props) => {
  // 渡ってくるpropsにオプショナルチェイニングを指定している場合、デフォルトの値を指定しておく
  const { children, onClick, disabled = false, loading = false } = props
=======
  disabled?: boolean
  loading?: boolean
  onClick: () => void
}

const PrimaryButton: FC<Props> = (props) => {
  const { children, disabled = false, loading = false, onClick } = props

>>>>>>> restart-branch
  return (
    <Button
      bg="teal.400"
      color="white"
<<<<<<< HEAD
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
=======
      _hover={{ opacity: '0.8' }}
      isLoading={loading}
      disabled={disabled || loading}
>>>>>>> restart-branch
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default memo(PrimaryButton)
