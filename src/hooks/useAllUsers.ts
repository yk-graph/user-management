import axios from 'axios'
import { useCallback, useState } from 'react'

import { UserType } from '../types/api/user'
import { useMessage } from './useMessage'

export const useAllUsers = () => {
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<UserType[]>([])

  const getUsers = useCallback(() => {
    setLoading(true)
    axios
      .get<UserType[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch(() =>
        showMessage({ title: 'ユーザー取得に失敗しました', status: 'error' })
      )
      .finally(() => setLoading(false))
  }, [showMessage])
  return { getUsers, loading, users }
}
