import React from 'react';
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'



const Sidebar = ({ messages }) => {
    return (
        <div className="sidebar">
            <div className="sidebar_header"></div>
            <Avatar src="messaging-frontend/public/Images/JerryGarcia.jpg" />
            <div><strong>Just nod if you can hear me...</strong></div>
            <div className="sidebar_headerRight">
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </div>
            <div className="sidebar_search"></div>
            <div className="sidebar_searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat"
                    type="text" />
            </div>
            <div className="sidebar_chats">
                <SidebarChat messages={messages} />
                
            </div>
        </div>
    )
}

export default Sidebar