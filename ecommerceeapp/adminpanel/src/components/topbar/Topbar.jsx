import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@mui/icons-material'


const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
              <div className="topLeft">
                  <span className='logo'>AllinShop - admin</span>
                </div>
              <div className="topRight">
                  <div className="topbarIconContainer">
                      <NotificationsNone />
                      <span className='topIconBadge'>2</span>
                  </div>
                  <div className="topbarIconContainer">
                      <Language />
                      <span className='topIconBadge'>2</span>
                  </div>
                <div className="topbarIconContainer" >
                    <Settings />
                  </div>
                  <img src="https://cdn.pixabay.com/photo/2016/08/11/00/46/business-lady-1584655_960_720.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar
