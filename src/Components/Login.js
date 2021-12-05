import React from 'react';
import { Button } from '@material-ui/core'
import '/Login.css';

const Login = () => {
    const signIn = () => {

    }
    return (
        <div classsName="login">
            <div className="login_container">
                <img src="logo512.png" alt="whatsapp" />
                <div  className="login_text">
                    <h1>Sign in to: Is there Anybody Out There?</h1>
                </div>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
            </div>
    )
}

export default Login