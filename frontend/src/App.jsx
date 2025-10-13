import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import AllUsers from './components/AllUsers'
import AddNewUsers from './components/AddNewUsers'

const App = () => {
  return (
<>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/allusers' element={<AllUsers />} />
      <Route path='/addnewuser' element={<AddNewUsers />} />
    </Routes>

</>

  )
}

export default App
