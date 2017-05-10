import React from 'react';
import { render } from 'react-snapshot';
import App from './containers/App.js'
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route} from 'react-router'
import createHistory from 'history/createBrowserHistory'
import './index.css';

const history = createHistory();

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
  document.getElementById('root')
);
