import React, { Component } from 'react'
import CommentsList from '../components/Comments/CommentsList';

export default class Comments extends Component {
    render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (<CommentsList />)
                        :
                        (this.props.children)
                }
            </div>
        );
    }
}