import React from 'react';
import { render } from 'react-snapshot';
import App from './components/App.js'
import './index.css';

render(
  <App />,
  document.getElementById('root')
);
