import { useState, useCallback } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useMessage } from './useMessage'
import { UserType } from '../types/api/user'
import { useLoginUser } from './useLoginUser'

export const useAuth = () => {
  const navigate = useNavigate()
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()

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
            const isAdmin = res.data.id === 10 ? true : false
            setLoginUser({ ...res.data, isAdmin })
            showMessage({ title: 'ログインしました', status: 'success' })
            navigate('/home')
          } else {
            showMessage({ title: 'ユーザーがみつかりません', status: 'error' })
          }
        })
        .catch(() =>
          showMessage({ title: 'ログインできませんでした', status: 'error' })
        )
        // 正常に処理が終わってもエラーになっても、最終的にローディングは終了させたいためfinalyで処理を記述
        .finally(() => setLoading(false))
    },
    [navigate, showMessage, setLoginUser]
  )
  return { login, loading }
}
