import React, { FC, memo, useEffect } from 'react'
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react'

import { useAllUsers } from '../../hooks/useAllUsers'
import UserCard from '../organisms/user/UserCard'

const UserManagement: FC = () => {
  const { getUsers, users, loading } = useAllUsers()

  useEffect(() => {
    getUsers()
  }, [])

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
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  )
}

export default memo(UserManagement)
