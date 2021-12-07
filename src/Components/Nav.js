import React from 'react';

const Nav = () => {
    return (
        <nav className="nav">
            <div>
                <h1>Is There Anybody Out There?</h1>
                <ul>
                  
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href=''>Logout</a>
                    </li>
                    <li>
                        <a href="https://suicidepreventionlifeline.org/">In case of an emergency plesase call 800-273-8255 or text 988</a>
                    </li>
                <div>
                    <style><img alt="Mind Devour" src='/Users/brianhill/Projects/messagingapp_frontend/messaging-frontend/public/Images/Mind Devour.jpeg'></img></style>
                </div>
                </ul>
            </div>
        </nav>
    )
}
export default Nav