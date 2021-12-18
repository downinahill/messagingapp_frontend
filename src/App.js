import React, { useState, useEffect } from 'react'
import './App.css';
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'
import axios from './Components/axios'
import Nav from './Components/Nav'
import About from './Components/About';
import ReactDOM from 'react-dom'
import SidebarChat from './Components/SidebarChat'
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import Welcome from './Components/Welcome'
import { useStateValue } from './Components/StateProvider'

let baseUrl = process.env.REACT_APP_BASEURL || "http://localhost:3003";
axios.defaults.baseURL = baseUrl



if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000';
} else {
  // "https://fathomless-sierra-68956.herokuapp.com" in this case is the *API* url
  baseURL = 'https://isthereanybodyouttherefront.herokuapp.com/';
}

console.log('https://isthereanybodyouttherefront.herokuapp.com/', baseURL)



function App () {
  const [messages, setMessages] = useState([])
  
  const [user, dispatch] = useState()
  useEffect(() => {
      axios.get("messages/sync").then(res => {
          setMessages(res.data)
          console.log(res.data)
      })
  }, [])




  
  return (
    <div className="app">
      
      <div className="center"></div>
      <div className="app_body">
     
     
       {/* <Welcome  /> */}
    

      
      
      
        {/* <Login /> */}
       
        <Nav />
        <Sidebar />
        <Chat messages={messages} setMessages={setMessages} />
        
            </div>
      
    </div>
  )
  
}

export default App






// class App extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     userData: [],
//     postData: [],
//   }
// }





// getPosts = () => {
//   // fetch
//   fetch(baseUrl + "/posts", {
//     credentials: "include"
//   })
//     .then((res) => {
//       if (res.status === 200) {
//         return res.json();
//       } else {
//         return [];
//       }
//     })
//     .then((data) => {
//       console.log(data);
//       this.setState({
//         postData: data,
//       });
//     });
// };



//   // Add Posts
//   // addPost = (newPost) => {
//   //   const copyGoals = [...this.state.postData];
//   //   copyGoals.push(newPost);
//   //   this.setState({
//   //     postData: data,
//   //   });
//   // };

//   //Edit Posts
//   handleEditedData = (data) => {
//     this.setState({
//       goalsData: data,
//     });
//   };

//   // Delete Posts
//   deletePost = (id) => {
//     fetch(baseUrl + "/posts/" + id, {
//       method: "DELETE",
//       credentials: "include"
//     }).then((res) => {
//       console.log(res);
//       const findIndex = this.state.postData.findIndex(
//         (goal) => goal._id === id
//       );
//       const copyPosts = [...this.state.postsData];
//       copyPosts.splice(findIndex, 1);
//       this.setState({
//         postsData: copyPosts,
//       });
//     });
//   };





// render() {
//   return (
//     <div className="App">
//       <div className="app_body">
//         <Nav />
//         <Sidebar />
//         <Chat messages={messages}/>
//       </div>
      
//     </div>
//   );
// }
// }





// export default App;
