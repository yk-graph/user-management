<<<<<<< HEAD
import React, { useCallback, useEffect } from 'react'
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import { useAllUsers } from '../../hooks/useAllUsers'
import { useSelectUser } from '../../hooks/useSelectUser'
import UserCard from '../organisms/user/UserCard'
import UserDetailModal from '../organisms/user/UserDetailModal'

const UserManagement: React.FC = () => {
  const { getUsers, loading, users } = useAllUsers()
  const { onSelectUser, selectedUser } = useSelectUser()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen })
=======
import React, { FC, memo, useEffect, useCallback } from 'react'
import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react'

import { useAllUsers } from '../../hooks/useAllUsers'
import { useSelectUser } from '../../hooks/useSelectUser'
import { useLoginUser } from '../../hooks/useLoginUser'
import UserCard from '../organisms/user/UserCard'
import UserDetailModal from '../organisms/user/UserDetailModal'

const UserManagement: FC = () => {
  const { getUsers, users, loading } = useAllUsers()
  const { selectedUser, onSelectUser } = useSelectUser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { loginUser } = useLoginUser()

  useEffect(() => {
    getUsers()
  }, [getUsers])

  const onClickUser = useCallback(
    (userId: number) => {
      onSelectUser({ userId, users, onOpen })
>>>>>>> restart-branch
    },
    [onOpen, onSelectUser, users]
  )

  return (
    <>
      {loading ? (
        <Center h="100vh">
<<<<<<< HEAD
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem mx="auto" key={user.id}>
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
=======
          <Spinner color="teal.200" />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userId={user.id}
>>>>>>> restart-branch
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        selectedUser={selectedUser}
<<<<<<< HEAD
=======
        isAdmin={loginUser?.isAdmin}
>>>>>>> restart-branch
      />
    </>
  )
}

export default memo(UserManagement)
