import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react'

import MenuIconButton from '../../atoms/button/MenuIconButton'
import MenuDrawer from '../../molecules/MenuDrawer'

useNavigate

const Header: React.FC = () => {
  // ChakraUIからドロワーメニューを実装する時に便利な関数をimportしておく
  const { isOpen, onOpen, onClose } = useDisclosure()
  // v6からはuseHistory廃止
  const navigate = useNavigate()

  const onClickHome = useCallback(() => navigate('/'), [navigate])
  const onClickUserManagement = useCallback(
    () => navigate('/home/user-management'),
    [navigate]
  )
  const onClickSetting = useCallback(
    () => navigate('/home/setting'),
    [navigate]
  )

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justifyContent="space-between"
        // ベースとなるpaddingは上下左右3で、ブレークポイントがmd以上になったら5を適用させる
        padding={{ base: 3, md: 5 }}
      >
        {/* hoverの挙動指定は_hover={{ }}で可能 */}
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={onClickHome}
        >
          {/* ベースとなるフォントサイズはmdで、ブレークポイントがmd以上になったらフォントサイズlgを適用させる */}
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          // ベース(SP)はdisplay noneで、ブレークポイントがmd以上になったらdisplay flexを適用させる
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>

      {/* ドロワーがクローズした時の挙動と、どの状態の時にドロワーを開くかの制御をかける※関数は予めuseDisclosureからimportする */}
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  )
}

export default Header
