<<<<<<< HEAD
import { useCallback, useState } from 'react'
import { UserType } from '../types/api/user'

interface Props {
  id: number
=======
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useCallback } from 'react'

import { UserType } from '../types/api/user'

interface Props {
  userId: number
>>>>>>> restart-branch
  users: UserType[]
  onOpen: () => void
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)

<<<<<<< HEAD
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props

    const targetUser = users.find((user) => user.id === id)
    setSelectedUser(targetUser!)
    onOpen()
  }, [])

=======
  /**
   *選択したユーザーを特定してモーダルを表示させるカスタムフック
   *@param {Props オブジェクト型}
   */
  const onSelectUser = useCallback((props: Props) => {
    const { userId, users, onOpen } = props
    const targetUser = users.find((user) => user.id === userId)
    setSelectedUser(targetUser!)
    onOpen()
  }, [])
>>>>>>> restart-branch
  return { onSelectUser, selectedUser }
}
