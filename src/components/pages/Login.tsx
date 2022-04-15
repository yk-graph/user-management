<<<<<<< HEAD
import React, { ChangeEvent, useState } from 'react'
=======
import React, { FC, memo, useState } from 'react'
>>>>>>> restart-branch
import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import PrimaryButton from '../atoms/button/PrimaryButton'
import { useAuth } from '../../hooks/useAuth'
<<<<<<< HEAD

const Login: React.FC = () => {
  const { login, loading } = useAuth()
  const [userId, setUserId] = useState('')

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value)

  const onClickLogin = () => login(userId)

=======

const Login: FC = () => {
  const { login, loading } = useAuth()
  const [userId, setUserId] = useState('')

  const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const onClickLogin = () => login(userId)

>>>>>>> restart-branch
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
<<<<<<< HEAD
          <Input placeholder="ユーザーID" onChange={onChangeUserId} />
          <PrimaryButton
            onClick={onClickLogin}
            loading={loading}
            disabled={!userId}
=======
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            onClick={onClickLogin}
            disabled={userId === ''}
            loading={loading}
>>>>>>> restart-branch
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
}

export default memo(Login)
