import React, { Component } from 'react'
import './App.css';
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'
// import NewPost from './Components/NewPost'
// import List from './Components/List'
import Nav from './Components/Nav'
// import Login from './Components/Login'

let baseUrl = process.env.REACT_APP_BASEURL || "http://localhost:3003";

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    userData: [],
    postData: [],
  }
}





getPosts = () => {
  // fetch
  fetch(baseUrl + "/posts", {
    credentials: "include"
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return [];
      }
    })
    .then((data) => {
      console.log(data);
      this.setState({
        postData: data,
      });
    });
};



  // Add Posts
  // addPost = (newPost) => {
  //   const copyGoals = [...this.state.postData];
  //   copyGoals.push(newPost);
  //   this.setState({
  //     postData: data,
  //   });
  // };

  //Edit Posts
  handleEditedData = (data) => {
    this.setState({
      goalsData: data,
    });
  };

  // Delete Posts
  deletePost = (id) => {
    fetch(baseUrl + "/posts/" + id, {
      method: "DELETE",
      credentials: "include"
    }).then((res) => {
      console.log(res);
      const findIndex = this.state.goalsData.findIndex(
        (goal) => goal._id === id
      );
      const copyGoals = [...this.state.goalsData];
      copyGoals.splice(findIndex, 1);
      this.setState({
        goalsData: copyGoals,
      });
    });
  };





render() {
  return (
    <div className="App">
      <div className="app_body">
        <Nav />
        <Sidebar />
        <Chat />
      </div>
      
    </div>
  );
}
}





export default App;
