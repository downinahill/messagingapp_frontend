import React from 'react';
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat'



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header"></div>
            <Avatar src="messaging-frontend/public/Images/JerryGarcia.jpg" />

            <div className="sidebar_headerRight">
            
            </div>
            <div className="sidebar_search"></div>
            <div className="sidebar_searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat"
                    type="text" />
            </div>
            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar