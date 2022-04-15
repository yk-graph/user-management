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

import { UserType } from '../../../types/api/user'

interface Props {
  isOpen: boolean
  onClose: () => void
  selectedUser: UserType | null
}

const UserDetailModal: FC<Props> = (props) => {
  const { isOpen, onClose, selectedUser } = props
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
                <Input value={selectedUser?.username} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={selectedUser?.name} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>メール</FormLabel>
                <Input value={selectedUser?.email} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>電話番号</FormLabel>
                <Input value={selectedUser?.phone} isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default memo(UserDetailModal)
