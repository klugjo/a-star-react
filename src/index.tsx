import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import configureStore from './app/store';
import { Provider } from 'react-redux';

import '../node_modules/normalize.css/normalize.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
