import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';

/* Import Components */
const MyComponent = require('./js/components/MyComponent');

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

class App extends Component { 
  render() 
  { 
    return (
      <div>
        <h2>Welcome to</h2>
        <MyComponent name="propTEST" />
      </div>
    ); 
  } 
}

ReactDOM.render(
  <App/>,
  document.getElementById('example')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
