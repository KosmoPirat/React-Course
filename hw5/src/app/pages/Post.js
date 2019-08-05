import React, { Component } from 'react'
import axios from 'axios';
import PostProfile from '../components/Posts/Post';
import PostComments from '../components/Comments/Comment';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            postComment: [],

        }
    }

    render() {
        if (!this.state.postComment) {
            return null;
        }
        const comments = this.state.postComment.map(comment => {
            if (this.state.post.id === comment.postId) {
                return <PostComments key={comment.id} {...comment}/>
            }

        });
        return (
            <div>
                <h1 className="mt-3 mb-2">Публикация {!this.state.post ? "" : this.state.post.id }</h1>
                {this.state.post && <PostProfile  {...this.state.post} />}
                <h3 className="text-center">Комментарии</h3>
                {comments}
            </div>
        )
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.id}`)
            .then(response => {
                this.setState({ post: response.data });
                axios.get(`http://jsonplaceholder.typicode.com/comments`)
                    .then(response => {
                        this.setState({postComment: response.data});
                    });
            });
    }
}
