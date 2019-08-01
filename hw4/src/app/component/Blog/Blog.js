import React from 'react';

import Post from '../Post/Post';
import './Blog.css';

export default class Blog extends React.Component {

    render() {

        const items = this.props.postItems.map((item, index) => {
            return <Post key={index} item={item} />
        });

        return (
            <div className="blog-wrap">
                <h2 className="blog__title">{this.props.title}</h2>
                {items}
            </div>
        );
    }
}