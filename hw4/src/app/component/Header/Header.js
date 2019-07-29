import React from 'react';

import HederMenu from '../HederMenu/HederMenu';
import './Header.css';

export default class Header extends React.Component {
    render() {

        const menuItems = [
            { title: "Главная", href: "/" },
            { title: "О нас", href: "/about" },
            { title: "Услуги", href: "/service" },
            { title: "Контакты", href: "/contacts" }
        ];

        return (
            <div className="header">
                <img className="logo" src={this.props.imgurl} alt={this.props.imgDesc}/>
                <HederMenu items={menuItems}/>
            </div>
        );
    }
}