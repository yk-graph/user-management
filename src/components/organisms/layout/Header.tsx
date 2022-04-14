import React, { FC, memo, useCallback } from 'react'
import { Flex, Heading, Link, Box, useDisclosure } from '@chakra-ui/react'
import MenuIconButton from '../../atoms/button/MenuIconButton'
import MenuDrawer from '../../molecules/MenuDrawer'
import { useNavigate } from 'react-router-dom'

const Header: FC = memo(() => {
  console.log('Header.tsx')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const linkToHome = useCallback(() => navigate('/home'), [])
  const linkToUserManagement = useCallback(
    () => navigate('/home/user-management'),
    []
  )
  const linkToSetting = useCallback(() => navigate('/home/setting'), [])

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={linkToHome}
        >
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr={4}>
            <Link onClick={linkToUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={linkToSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        linkToHome={linkToHome}
        linkToUserManagement={linkToUserManagement}
        linkToSetting={linkToSetting}
      />
    </>
  )
})

export default Header
