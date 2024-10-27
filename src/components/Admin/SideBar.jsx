import React from 'react'

import 'react-pro-sidebar/dist/css/styles.css'
import './SideBar.scss' 
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa'
import { DiReact } from "react-icons/di"
import { MdDashboard } from "react-icons/md"

import sidebarBg from '../../assets/bg2.jpg'

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  return (
    <>
      <ProSidebar
        // image={image ? sidebarBg : false}
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <DiReact size={'3em'} color='#00bfff'></DiReact>
            Quynh Anh
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<MdDashboard/>}
              // suffix={<span className="badge red">New</span>}
            >
              Dashboard
            </MenuItem>
            {/* <MenuItem icon={<FaGem/>}>components</MenuItem> */}
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              // suffix={<span className="badge yellow">Sub menu 3</span>}
              title={'Features'}
              icon={<FaGem/>}
            >
              <MenuItem>Quản lí Users</MenuItem>
              <MenuItem>Quản lí bài Quiz</MenuItem>
              <MenuItem>Quản lí câu hỏi</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            <a
              href="https://github.com/quynhanh170504/ReactHookGetStarted"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <div>
                <FaGithub/>
                &nbsp;
              </div>
              {
                collapsed === false &&
                <div style={{ 
                  whiteSpace: 'nowrap', 
                  textOverflow: 'ellipsis', 
                  overflow: 'hidden' }}
                >
                  quynhanh170504
                </div>            
              }
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  )
}

export default SideBar