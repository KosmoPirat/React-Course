import React from 'react';

import './Post.css';

export default class Post extends React.Component {
    render() {
        return (
            <div className="post__item">
                <h3 className="item__title">{this.props.item.postTitle}</h3>
                <img className="item__img" src={this.props.item.postImg} alt={this.props.item.altImgText}/>
                <p className="item__content">{this.props.item.postContent}</p>
            </div>
        );
    }
}