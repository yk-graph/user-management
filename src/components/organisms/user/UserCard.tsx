<<<<<<< HEAD
import React from 'react'
import { Box, Stack, Image, Text } from '@chakra-ui/react'

interface Props {
  id: number
  imageUrl: string
  userName: string
  fullName: string
  onClick: (id: number) => void
}

const UserCard: React.FC<Props> = (props) => {
  const { id, imageUrl, userName, fullName, onClick } = props
=======
import React, { FC, memo } from 'react'
import { Box, Image, Stack, Text } from '@chakra-ui/react'

interface Props {
  userId: number
  imageUrl: string
  userName: string
  fullName: string
  onClick: (uesrId: number) => void
}

const UserCard: FC<Props> = (props) => {
  const { userId, imageUrl, userName, fullName, onClick } = props
>>>>>>> restart-branch
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
<<<<<<< HEAD
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
          alt="プロフィール画像"
          m="auto"
        />
=======
      onClick={() => onClick(userId)}
    >
      <Stack textAlign="center">
        <Image borderRadius="full" boxSize="160px" src={imageUrl} m="auto" />
>>>>>>> restart-branch
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  )
}

<<<<<<< HEAD
export default UserCard
=======
export default memo(UserCard)
>>>>>>> restart-branch
