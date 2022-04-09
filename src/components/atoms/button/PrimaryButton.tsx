import React, { ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

// Childrenのようにタグで囲った要素を型指定して受け取るときはReactNode
interface Props {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

const PrimaryButton: React.FC<Props> = (props) => {
  // 渡ってくるpropsにオプショナルチェイニングを指定している場合、デフォルトの値を指定しておく
  const { children, onClick, disabled = false, loading = false } = props
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
