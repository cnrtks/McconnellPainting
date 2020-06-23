import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//remove below and associated import if you dont care about offline
// serviceWorker.register();
