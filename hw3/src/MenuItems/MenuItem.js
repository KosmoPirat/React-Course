import React from 'react';
import PropTypes from 'prop-types';

import './MenuItems.css';

class MenuItem extends React.Component {
  render() {
    return (
      <li className="menu__item">
          <a className="menu__link" href={this.props.href}>{this.props.children}</a>
      </li>
    );
  }
}

MenuItem.defaultProps = {
  href: "/",
  children: "Главная страница"
};

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default MenuItem;