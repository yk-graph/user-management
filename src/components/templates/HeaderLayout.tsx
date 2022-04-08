import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../organisms/layout/Header'

// Childrenのようにタグで囲った要素を型指定して受け取るときはReactNode
// interface Props {
//   children: ReactNode
// }

const HeaderLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default HeaderLayout
