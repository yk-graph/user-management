import React, { useState, useCallback } from 'react'
import axios from 'axios'

import { useMessage } from './useMessage'
import { UserType } from '../types/api/user'

export const useAllUsers = () => {
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<UserType[]>([])

  /**
   *user一覧を取得するAPIを叩いて結果を返却する関数
   *@return {UserType} *成功時はユーザー一覧の値が返却値
   */
  const getUsers = useCallback(() => {
    setLoading(true)
    axios
      .get<UserType[]>('https://jsonplaceholder.typicode.com/users/')
      .then((res) => setUsers(res.data))
      .catch(() =>
        showMessage({
          title: 'ユーザーの取得ができませんでした',
          status: 'error',
        })
      )
      .finally(() => setLoading(false))
  }, [])
  return {
    getUsers,
    users,
    loading,
  }
}
