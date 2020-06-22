import React from 'react';
import ReactDOM from 'react-dom';

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
  seed: 'container',
});

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst generateClassName={generateClassName}>
      >
      <App />
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
