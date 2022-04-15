import React, { useState, createContext, ReactNode } from 'react'
import { UserType } from '../types/api/user'
import { LoginUserType } from '../types/user/LoginUser'

type Props = {
  children: ReactNode
}

export const LoginUserContext = createContext<LoginUserType>(
  {} as LoginUserType
)

export const LoginUserProvider = (props: Props) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<UserType | null>(null)
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
