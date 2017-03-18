import React from 'react';
import { render } from 'react-snapshot';
import App from './containers/App.js'
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
