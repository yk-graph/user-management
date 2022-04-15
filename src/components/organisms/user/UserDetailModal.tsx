import React, { FC, memo } from 'react'
import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const UserDetailModal: FC<Props> = (props) => {
  const { isOpen, onClose } = props
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="aa" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="aa" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="aa" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="aa" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default memo(UserDetailModal)
