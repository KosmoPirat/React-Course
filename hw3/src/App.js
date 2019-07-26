import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header/Header';
import Login from './Login/Login';

class App extends React.Component {
  render() {

    return <div>
      <Header imgurl="../images/logo.svg" imgDesc="Коровий Логотип"/>
      <Login />
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));