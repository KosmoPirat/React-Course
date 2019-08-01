import React, { Component } from 'react'
import axios from 'axios';
import CommentProfile from '../components/Comments/Comment';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: null,

        }
    }

    render() {
        return (
            <div>
                {this.state.comment && <CommentProfile  {...this.state.comment} />}
            </div>
        )
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.id}`)
            .then(response => {
                this.setState({ comment: response.data });
            })
    }
}
