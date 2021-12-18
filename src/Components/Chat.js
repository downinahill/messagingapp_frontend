import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, Send, Edit, EmojiEmotions, ClearAll } from '@material-ui/icons';
import './Chat.css';
import MicIcon from '@material-ui/icons/Mic'
import axios from './axios';
import CommentBox from './CommentBox';





function Chat({ messages, setMessages }) {

    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    const [data, setData] = useState("")
    const [total, setTotal] = useState([])



    let baseUrl = process.env.REACT_APP_BASEURL || "http://localhost:3003";
    axios.defaults.baseURL = baseUrl
    
    
    
    if (process.env.NODE_ENV === 'development') {
      baseUrl = 'https://isthereanybodyoutthere.herokuapp.com/';
    } else {
    
      baseUrl = 'https://isthereanybodyoutthere.herokuapp.com/';
    }
    
    console.log('https://isthereanybodyoutthere.herokuapp.com/', baseUrl)






    const sendMessage = async (e) => {
        e.preventDefault()
        const response = await axios.post( '/messages/new',  {
            message: input,
            name: "Brian",
            timestamp: new Date().toUTCString(),
            received: true
        })
        const copyMessages = [...messages, response.data]
        setMessages(copyMessages)

    }
    const deleteMessage = async (id, e) => {

        e.preventDefault();
        console.log(id)
        const erase = await axios.delete(`/messages/${id}`)
        console.log(erase)

        const copyMessages = [...messages]
        const foundIndex = messages.findIndex((comment) => {
            return comment._id === id

        })
        copyMessages.splice(foundIndex, 1)
        setMessages(copyMessages)
    }



    
    const updateMessage = async (id, editedMessage) => {
        console.log(id)
        console.log(editedMessage)
            const response = axios.put(`/messages/${id}`, {message: editedMessage}, {headers: {
                "Content-Type": "application/json"}
            })
            .then(res => console.log(res.data));
            console.log(response);
        }



    const handleFile = async (data) => {
        console.log(data)
        setData({
            data: setData,
        });
        console.log(data)
    };





    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])


    return (
        <div className="chat">
            <div className="chat_header">

                <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3><strong>Hello, Hello, Now...I hear you're feeling...DOWN...
                    Well I can ease your pain. Get you on your feet again...</strong></h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton onClick={handleFile}>
                        <AttachFile />
                        
                    </IconButton>
                   
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    <IconButton>
                        <ClearAll />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <style>
                </style>
                {messages.map(message => (
                    <CommentBox 
                        message={message}
                        updateMessage={updateMessage}
                        deleteMessage={deleteMessage}
                    />
                ))}



            </div>
            <div className="chat_footer">
                <IconButton onClick={sendMessage}>
                    <Send type="submit" />
                </IconButton>
                <IconButton>
                    <EmojiEmotions type="submit" />
                </IconButton>


                <form onSubmit={sendMessage}>

                    <input
                        placeholder="What's goin on?"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}

                    />

                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>

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