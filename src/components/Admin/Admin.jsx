import React, { useState } from 'react'
import { FaHeart, FaBars } from 'react-icons/fa'

import SideBar from './SideBar.jsx'

import './Admin.scss'

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='admin-container'>
      <div className='admin-sidebar'>
        <SideBar collapsed={collapsed}/>
      </div>
      <div className='admin-content'>
        <FaBars onClick={() => {setCollapsed(!collapsed)}}/>
        Admin
      </div>
    </div>
  )
}

export default Admin