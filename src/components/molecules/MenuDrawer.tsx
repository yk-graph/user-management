import React, { FC, memo } from 'react'

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
} from '@chakra-ui/react'

interface Props {
  onClose: () => void
  isOpen: boolean
  linkToHome: () => void
  linkToUserManagement: () => void
  linkToSetting: () => void
}

const MenuDrawer: FC<Props> = (props) => {
  const { onClose, isOpen, linkToHome, linkToUserManagement, linkToSetting } =
    props

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={linkToHome}>
              TOP
            </Button>
            <Button w="100%" onClick={linkToUserManagement}>
              ユーザー一覧
            </Button>
            <Button w="100%" onClick={linkToSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default memo(MenuDrawer)
