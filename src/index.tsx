import React from 'react';
import ReactDOM from 'react-dom';

import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
  seed: 'container',
});

ReactDOM.render(
  <StylesProvider injectFirst generateClassName={generateClassName}>
    >
    <App />
  </StylesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
