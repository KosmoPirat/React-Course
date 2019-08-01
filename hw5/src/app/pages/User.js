import React, { Component } from 'react'
import axios from 'axios';
import UserProfile from '../components/Users/User';
import UserPosts from '../components/Posts/Post';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userPosts: [],

    }
  }

  render() {
    if (!this.state.userPosts) {
      return null;
    }
    const posts = this.state.userPosts.map(post => {
      if (this.state.user.id === post.userId) {
        return <UserPosts key={post.id} {...post}/>
      }

    });
    return (
      <div>
        <h1 className="mt-3 mb-2">Пользователь {!this.state.user ? "" : this.state.user.username }</h1>
        {this.state.user && <UserProfile  {...this.state.user} />}
        <h3 className="text-center mb-3">Публикации пользователя {this.state.user === null ? "" : this.state.user.username }</h3>
        {posts}
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
      .then(response => {
        this.setState({ user: response.data });
          axios.get(`http://jsonplaceholder.typicode.com/posts`)
              .then(response => {
                  this.setState({userPosts: response.data});
              });
      });

  }
}
