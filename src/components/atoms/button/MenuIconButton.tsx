import React, { FC, memo } from 'react'

import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

interface Props {
  onOpen: () => void
}

const MenuIconButton: FC<Props> = (props) => {
  const { onOpen } = props
  return (
    <IconButton
      icon={<HamburgerIcon />}
      aria-label="menu-btn"
      size="sm"
      variant="unstyled"
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  )
}

export default memo(MenuIconButton)
