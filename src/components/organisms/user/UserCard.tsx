import React, { FC, memo } from 'react'
import { Box, Image, Stack, Text } from '@chakra-ui/react'

interface Props {
  imageUrl: string
  userName: string
  fullName: string
  onClick: () => void
}

const UserCard: FC<Props> = (props) => {
  const { imageUrl, userName, fullName, onClick } = props
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Image borderRadius="full" boxSize="160px" src={imageUrl} m="auto" />
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

export default memo(UserCard)
