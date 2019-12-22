import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import configureStore from './app/store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
