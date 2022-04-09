import { useCallback, useState } from 'react'
import { UserType } from '../types/api/user'

interface Props {
  id: number
  users: UserType[]
  onOpen: () => void
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props

    const targetUser = users.find((user) => user.id === id)
    setSelectedUser(targetUser!)
    onOpen()
  }, [])

  return { onSelectUser, selectedUser }
}
