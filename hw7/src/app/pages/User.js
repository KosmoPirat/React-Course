import React, { Component } from 'react'
import { connect } from 'react-redux';

import UserProfile from '../components/User';

import { fetchUser } from "../actions/usersActions";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <>
         <UserProfile  {...this.props.users} />
      </>
    )
  }

  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.match.params.userId));
  }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        posts: state.posts.posts,
        comments: state.comments.comments,

    };
};

export default connect(mapStateToProps)(User);
