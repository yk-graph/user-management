import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from '../components/pages/Login'
import Home from '../components/pages/Home'
import UserManagement from '../components/pages/UserManagement'
import Setting from '../components/pages/Setting'
import Page404 from '../components/pages/Page404'

const Router: React.VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home">
        <Route path="" element={<Home />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="setting" element={<Setting />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default Router
