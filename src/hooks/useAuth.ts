import { useState, useCallback } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { UserType } from '../types/api/user'

export const useAuth = () => {
  const navigate = useNavigate()

  // ローディングの制御
  const [loading, setLoading] = useState(false)

  /**
   *引数のidを元にユーザーが存在するかどうかを判定して、存在していたらhomeへ遷移させる
   *@param {String} id ユーザーのID番号
   */
  const login = useCallback(
    (id: string) => {
      // login関数が呼ばれたらローディング開始
      setLoading(true)
      axios
        .get<UserType>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            navigate('/home')
          } else {
            alert('ユーザーがみつかりません')
          }
        })
        .catch((error) => alert('ログインできませんでした'))
        // 正常に処理が終わってもエラーになっても、最終的にローディングは終了させたいためfinalyで処理を記述
        .finally(() => setLoading(false))
    },
    [navigate]
  )
  return { login, loading }
}
