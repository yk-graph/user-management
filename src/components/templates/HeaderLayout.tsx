import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../organisms/layout/Header'

const HeaderLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default HeaderLayout
