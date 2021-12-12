import React, {useEffect, useState} from 'react';
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'



const Sidebar = ({ messages }) => {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])


    return (
        <div className="sidebar">
            <div className="sidebar_header"></div>
            <Avatar  src={`https://avatars.dicebear.com/api/human/b${seed}.svg`}/>
            <div><strong>Just nod if you can hear me...</strong></div>
            <div className="sidebar_headerRight">
            <IconButton>
                
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </div>
            
            <div className="sidebar_searchContainer">
                <SearchOutlined />
                <input placeholder="Start new discussion"
                    type="text" />
            </div>
            <div className="sidebar_chats">
                <SidebarChat messages={messages} />
                
            </div>
        </div>
    )
}

export default Sidebar