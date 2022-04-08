import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

interface Props {
  onOpen: () => void
}

const MenuIconButton: React.FC<Props> = (props) => {
  const onOpen = props.onOpen
  return (
    <IconButton
      // aria-labelを指定しないと忠告されるので設定が必要
      aria-label={'メニューボタン'}
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      // ベース(SP)は表示させて、ブレークポイントがmd以上になったら非表示にする
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  )
}

export default MenuIconButton
