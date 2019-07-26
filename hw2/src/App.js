import React from 'react';
import ReactDOM from 'react-dom';
import { Developer } from "./Developer";

const devr = new Developer();

class App extends React.Component {
  render() {
    return <div>
      <h1>Первое приложение на React</h1>
      <p>Hello {devr.name} {devr.surname}!</p>
    </div>
  }
} 

ReactDOM.render(<App/>, document.querySelector('#root'));