import React from 'react';
import NavLink from 'react-router-dom/';

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
                         <a href="logout.html">Logout</a>
                        
                    </li>
                    <li>
                        <a href="https://suicidepreventionlifeline.org/">In case of an emergency,<br></br> please call 800-273-8255 <br></br> or text 988</a>
                    </li>
                <div>
                    <style><img alt="Mind Devour" src='./public/Images/Mind Devour.jpeg'></img></style>
                </div>
                </ul>
            </div>
        </nav>
    )
}
export default Nav