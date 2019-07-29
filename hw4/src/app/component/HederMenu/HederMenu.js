import React from 'react';

import MenuItem from '../MenuItems/MenuItem';
import './HederMenu.css';

export default class HederMenu extends React.Component {
  render() {

    const items = this.props.items.map((item, index) => {
      return <MenuItem key={index} href={item.href}>
        {item.title}
      </MenuItem>;
    });


    return (
      <div className="menu-wrap">
        <ul className="menu">
          {items}
        </ul>
      </div>
    );
  }
}