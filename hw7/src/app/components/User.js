import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class User extends Component {
  render() {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/users/${this.props.id}`}>
            {this.props.username}
          </Link>

        </div>
        <div className="card-body text-secondary">
            <p className="text-dark"><span className="text-secondary">Имя: </span> {this.props.name}</p>
            <p className="text-dark"><span className="text-secondary">Email: </span>Email: {this.props.email}</p>
            <p className="text-dark"><span className="text-secondary">Телефон: </span>Телефон: {this.props.phone}</p>
            <p className="text-dark"><span className="text-secondary">Сайт: </span> {this.props.website}</p>
        </div>
      </div>
    )
  }
}
