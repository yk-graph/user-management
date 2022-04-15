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
import UserCard from '../organisms/user/UserCard'
import UserDetailModal from '../organisms/user/UserDetailModal'

const UserManagement: FC = () => {
  const { getUsers, users, loading } = useAllUsers()
  const { selectedUser, onSelectUser } = useSelectUser()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    getUsers()
  }, [getUsers])

  const onClickUser = useCallback(
    (userId: number) => {
      onSelectUser({ userId, users, onOpen })
    },
    [onOpen, onSelectUser, users]
  )

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner color="teal.200" />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userId={user.id}
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
      />
    </>
  )
}

export default memo(UserManagement)
