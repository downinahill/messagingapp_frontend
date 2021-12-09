import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, Send } from '@material-ui/icons';
import './Chat.css';
import MicIcon from '@material-ui/icons/Mic'
import axios from './axios';




function Chat ({ messages }) {
    // eslint-disable-next-line
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    // eslint-disable-next-line
    const [text, setText] = useState("")
    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('/messages/new', { 
            message: input,
            name: "Brian",
            timestamp: new Date().toUTCString(),
            received: true
        })
        // setInput(sendMessage)
    }
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])


    return (
        <div className="chat">
            <div className="chat_header">
                
                <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`}/>
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
            {messages.map(message => (
                    <p className={`chat_message ${message.received &&
                        'chat_receiver'}`}>
                            <span className="chat_name">{message.name}</span>
                                {message.message}
                            <span className="chat_timestamp">
                                {message.timestamp}
                            </span>
                    </p>
                    
                ))}

                

</div>
            <div className="chat_footer">
                <Send />

                <form>

                    <input
                        placeholder="What's goin on?"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    
                    />
                    <button onClick={sendMessage} type="submit">Send</button>
                    
                </form>
                <MicIcon />

            </div>
        </div>
    )
}



export default Chat




// class Chat extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             comment: [],
//             commentText: ""
//         }
//     }
//     addComment = (event) => {
//         event.preventDefault();

//     }

//     handleChange = (event) => {
//         this.setState({ commentText: event.target.value })


//     }


//     render() {
//         console.log(this.state)
//         return (
//             <div className="chat">
//                 <div className="chat_header">
//                     <Avatar />
//                     <div className="chat_headerInfo">
//                         <h3>Room Name</h3>
//                         <p>Last seen at...</p>
//                     </div>
//                     <div className="chat_headerRight">
//                         <IconButton>
//                             <SearchOutlined />
//                         </IconButton>
//                         <IconButton>
//                             <AttachFile />
//                         </IconButton>
//                         <IconButton>
//                             <MoreVert />
//                         </IconButton>
//                     </div>
//                 </div>
//                 <div className="chat_body">
//                     <p className="chat_message chat_receiver">
//                         <span className="chat_name">Bob</span>
//                         This is a message
//                         <span className="chat_timestamp">
//                             {new Date().toUTCString()}
//                         </span>
                        
//                     </p>
//                     <p className="chat_message">
//                         <span className="chat_name">Brian</span>
//                         This is a message back
//                         <span className="chat_timestamp">
//                             {new Date().toUTCString()}
//                         </span>
//                     </p>
                    
                    




//                 </div>
//                 <div className="chat_footer">
//                     <Send />

//                     <form onSubmit={this.addComment}>

//                         <input
//                             placeholder="What's goin on?"
//                             type="text"
//                             value={this.state.value}
//                             onChange={this.handleChange}
//                         />

//                         <button type="submit" value="{this.state.commentText}" >Send</button>
//                     </form>
//                     <MicIcon />

//                 </div>
//             </div>
//         )
//     }
// }


// export default Chat