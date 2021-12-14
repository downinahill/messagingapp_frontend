import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, Send, Edit, EmojiEmotions, DeleteRounded, ClearAll } from '@material-ui/icons';
import './Chat.css';
import MicIcon from '@material-ui/icons/Mic'
import axios from './axios';





function Chat({ messages, setMessages }) {

    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    const [data, setData] = useState("")
    const [total, setTotal] = useState([])

    const sendMessage = async (e) => {
        e.preventDefault()
        const response = await axios.post('/messages/new', {
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



    
    const updateMessage = async (id, e) => {
            e.preventDefault();
            const response =
            axios.put(`/messages/${id}`)
            .then(res => console.log(res.data));
            console.log(response);

        }



    const handleEdit = async (data) => {
        setData({
            data: setData,
        });
        console.log(data)
    };

    // const deleteMessage = props => {
    //     const removeData = () => {
    //       axios
    //         .delete("/messages/" + props.obj.id)
    //         .then(() => {
    //           props.setRequestData(new Date());
    //         })
    //         .catch(err => console.log(err));
    //     };


    // const deleteMessage = async (idOfSessionToDelete) => {
    //     const url = process.env.REACT_APP_API_URL + "/messages/new" + idOfSessionToDelete

    //     try {
    //         const deleteSessionResponse = await fetch(url, {
    //             credentials: 'include',
    //             method: 'DELETE'
    //         })
    //         console.log("deleteSessionResponse", deleteSessionResponse)
    //         const deleteSessionJson = await deleteSessionResponse.json()
    //         console.log("deleteSessionJson", deleteSessionJson)

    //         if(deleteSessionResponse.status === 200) {
    //             this.setState({
    //                 sessions: this.state.sessions.filter(session => session.id !== idOfSessionToDelete)
    //             })
    //         }
    //     } catch(error) {
    //         console.error("There was a problem deleting the session:")
    //         console.error(error)
    //     }
    // }



    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])


    return (
        <div className="chat">
            <div className="chat_header">

                <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3><strong>Is There Anyone Home?</strong></h3>
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
                    <IconButton>
                        <ClearAll />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <style>
                </style>
                {messages.map(message => (
                    <p className={`chat_message ${message.received &&
                        'chat_receiver'}`}>

                        <span className="chat_name">{message.name}</span>

                        {message.message}
                        <span className="chat_timestamp">
                            {message.timestamp}



                            <IconButton onClick={(e) => deleteMessage(message._id, e)}>
                                <DeleteRounded type="submit" value="Delete" />
                            </IconButton>
                            <IconButton onClick={(e) => updateMessage(message._id, e)}>
                                <Edit type="submit" value="Delete" />
                            </IconButton>


                        </span>

                    </p>

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
                        value={useState.input}
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