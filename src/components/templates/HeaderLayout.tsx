import React, { FC, memo } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../organisms/layout/Header'

Outlet
const HeaderLayout: FC = () => {
  console.log('HeaderLayout.tsx')
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default memo(HeaderLayout)
