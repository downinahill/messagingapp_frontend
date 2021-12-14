import React from 'react';
import { Button } from '@material-ui/core'
import './Login.css';
import { auth, provider } from '../firebase'


const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => console.log(result))
            .catch(error => alert(error.message))

    }
    return (
        <div className="login">
            <div className="login_container">
                
                <div className="login_text">
                    <h1>Sign in to: Is There Anybody Out There?</h1>
                    </div>
                    <Button onClick={signIn}>Sign in with Google</Button>
                </div>
                
            </div>
    )
}

export default Login