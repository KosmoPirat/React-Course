import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from '../routes/routes';

import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import store from '../stores/store'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.brand = "React blog!";
  }

  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return (
      <>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={this.isActive('/')}>
            Главная
          </MenuItem>
          <MenuItem href="/users" active={this.isActive('/users')}>
            Пользователи
          </MenuItem>
          <MenuItem href="/posts" active={this.isActive('/posts')}>
            Посты
          </MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-12">
                <Switch>
                    <Provider store={store}>
                    {routes.map((route, index) => <Route key={index} {...route}/>)}
                    </Provider>
                </Switch>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          &copy; 2019
        </footer>
      </>
    );
  }
}

export default Layout;