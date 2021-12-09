import React, { Component } from 'react';




export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : [],
            comments : []
    }
    
    };

componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
        const posts = res.data;
        this.setState({ posts });
    })

}
}