import React, { FC, memo } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../organisms/layout/Header'

Outlet
const HeaderLayout: FC = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
})

export default HeaderLayout
