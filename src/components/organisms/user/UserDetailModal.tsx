import React, { FC, memo, useState, useEffect, ChangeEvent } from 'react'
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
  ModalFooter,
} from '@chakra-ui/react'

import { UserType } from '../../../types/api/user'
import PrimaryButton from '../../atoms/button/PrimaryButton'

interface Props {
  isOpen: boolean
  onClose: () => void
  selectedUser: UserType | null
  isAdmin?: boolean
}

const UserDetailModal: FC<Props> = (props) => {
  const { isOpen, onClose, selectedUser, isAdmin } = props
  const [userName, setUserName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setUserName(selectedUser?.username ?? '')
    setName(selectedUser?.name ?? '')
    setEmail(selectedUser?.email ?? '')
    setPhone(selectedUser?.phone ?? '')
  }, [selectedUser])

  const onClickUpdate = () => alert('更新！')
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value)
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={userName}
                  isReadOnly={!isAdmin}
                  onClick={() => onChangeUserName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={name}
                  isReadOnly={!isAdmin}
                  onClick={() => onChangeName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>メール</FormLabel>
                <Input
                  value={email}
                  isReadOnly={!isAdmin}
                  onClick={() => onChangeEmail}
                />
              </FormControl>
              <FormControl>
                <FormLabel>電話番号</FormLabel>
                <Input
                  value={phone}
                  isReadOnly={!isAdmin}
                  onClick={() => onChangePhone}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default memo(UserDetailModal)
