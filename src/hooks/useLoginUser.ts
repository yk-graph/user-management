import { useContext } from 'react'

import { LoginUserType } from '../types/user/LoginUser'
import { LoginUserContext } from '../providers/LoginUserProvider'

export const useLoginUser = (): LoginUserType => useContext(LoginUserContext)
