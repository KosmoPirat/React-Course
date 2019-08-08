import React, { Component } from 'react';

import PostsList from '../components/PostsList';
import { getPosts } from '../actions/actionCreators';
import PostStore from '../stores/postStore';

export default class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.onPostChange = this.onPostChange.bind(this);
  }

  onPostChange() {
    const posts = PostStore.posts;
    this.setState({ posts });
  }

  componentDidMount() {
    PostStore.on('change', this.onPostChange);
    getPosts();
  }

  componentWillUnmount() {
    PostStore.removeListener('change', this.onPostChange);
  }

  render() {
    return (
      <>
        <PostsList posts={this.state.posts} />
      </>
    )
  }
}
