import React from 'react'
import './App.css';
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'
// import NewPost from './Components/NewPost'
// import List from './Components/List'
// import Nav from './Components/Nav'

function App() {

  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
      
    </div>
  );
}

export default App;
