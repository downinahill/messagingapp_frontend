import React, { useEffect, useState } from "react";
import { Avatar } from '@material-ui/core'
import './SidebarChat.css';


const SidebarChat = () => {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>Hello, Hello, Now...I hear you're feeling...DOWN...
                    Well I can ease your pain. Get you on your feet again...</h2>
                {/* <p>{messages[messages.length -1]?.message}</p> */}
            </div>
        </div>
    )
}
export default SidebarChat