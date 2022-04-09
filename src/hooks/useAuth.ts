import { useCallback, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { UserType } from '../types/api/user'

export const useAuth = () => {
  const navigate = useNavigate()

  // ローディングの実装
  const [loading, setLoading] = useState(false)

  const login = useCallback(
    (id: string) => {
      // login関数が呼ばれたらローディング開始
      setLoading(true)
      axios
        .get<UserType>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) =>
          res.data ? navigate('/home') : alert('ユーザーが見つかりません')
        )
        .catch(() => alert('ログインできません'))
        // 正常に処理が終わってもエラーになっても、最終的にローディングは終了させたいためfinalyで処理を記述
        .finally(() => setLoading(false))
    },
    [navigate]
  )
  return { login, loading }
}
