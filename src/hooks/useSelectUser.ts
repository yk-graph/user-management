/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useCallback } from 'react'

import { UserType } from '../types/api/user'

interface Props {
  userId: number
  users: UserType[]
  onOpen: () => void
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)

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
  return { onSelectUser, selectedUser }
}
