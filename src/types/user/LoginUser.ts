import { Dispatch, SetStateAction } from 'react'
import { UserType } from '../api/user'

export type LoginUserType = {
  loginUser: UserType | null
  setLoginUser: Dispatch<SetStateAction<UserType | null>>
}
