import { useCallback, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { UserType } from '../types/api/user'
import { useMessage } from './useMessage'

export const useAuth = () => {
  const navigate = useNavigate()
  const { showMessage } = useMessage()

  // ローディングの実装
  const [loading, setLoading] = useState(false)

  const login = useCallback(
    (id: string) => {
      // login関数が呼ばれたらローディング開始
      setLoading(true)
      axios
        .get<UserType>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: 'ログインしました', status: 'success' })
            navigate('/home')
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' })
          }
        })
        .catch(() =>
          showMessage({ title: 'ログインできません', status: 'error' })
        )
        // 正常に処理が終わってもエラーになっても、最終的にローディングは終了させたいためfinalyで処理を記述
        .finally(() => setLoading(false))
    },
    [navigate, showMessage]
  )
  return { login, loading }
}
