import React from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Header: React.FC = () => {
  // ChakraUIからドロワーメニューを実装する時に便利な関数をimportしておく
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
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
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
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
      </Flex>
      {/* ドロワーがクローズした時の挙動と、どの状態の時にドロワーを開くかの制御をかける※関数は予めuseDisclosureからimportする */}
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">TOP</Button>
              <Button w="100%">ユーザー一覧</Button>
              <Button w="100%">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Header
