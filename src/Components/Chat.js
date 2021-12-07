import React, { useEffect, useState, Component } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, Send } from '@material-ui/icons';
import './Chat.css';
import axios from 'axios'
import { Modal, Button } from "react-bootstrap";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: [],
            commentText: ""
        }
    }
    addComment = (event) => {
        event.preventDefault();

    }

    handleChange = (event) => {
        this.setState({ commentText: event.target.value })


    }


    render() {
        console.log(this.state)
        return (
            <div className="chat">
                <div className="chat_header">
                    <Avatar />
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

                </div>
                <div className="chat_footer">
                    <Send />

                    <form onSubmit={this.addComment}>

                        <input
                            placeholder="What's goin on?"
                            type="text"
                            value={this.state.commentText}
                            onChange={this.handleChange}
                        />

                        <button type="submit" >Send</button>
                    </form>

                </div>
            </div>
        )
    }
}


export default Chat