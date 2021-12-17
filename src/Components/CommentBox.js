import { useState } from 'react';
import { Edit, DeleteRounded, Save } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function CommentBox (props) {
    const { message, updateMessage, deleteMessage } = props;
    const [isUpdating, setIsUpdating] = useState(false);
    const [editedMessage, setEditedMessage] = useState('');
    
return (
    <>
    {isUpdating && 
            <div className='chat_message'>
                <input onChange={(e) => {setEditedMessage(e.target.value)}} type='text' />
                <IconButton onClick={(e) => {updateMessage(message._id, editedMessage); setIsUpdating(false)}}>
                    <Save />
                </IconButton>
                
                <button onClick={() => {setIsUpdating(false)}}>Cancel</button>
            </div>
        }
        {
            !isUpdating &&

            <p className={`chat_message ${message.received &&
                'chat_receiver'}`}>
        
                <span className="chat_name">{message.name}</span>
        
                {editedMessage || message.message}
                <span className="chat_timestamp">
                    {message.timestamp}
                    <IconButton onClick={(e) => deleteMessage(message._id, e)}>
                        <DeleteRounded type="submit" value="Delete" />
                    </IconButton>
                    <IconButton onClick={() => setIsUpdating(true)}>
                        <Edit type="submit" value="Delete" />
                    </IconButton>
                </span>
            </p>
        }
    </>
);

}

export default CommentBox;