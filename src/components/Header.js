import React from 'react'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './Header.css'

function Header() {
  return (
    <div className="header">
        <div className="header_lef">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
            <div className="header_search">
                <SearchIcon />
                <input type="text" placeholder='Search' />
            </div>
        </div>

        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar='https://avatars.githubusercontent.com/u/78417225?v=4' title="me" />
        </div>
    </div>
  )
}

export default Header
