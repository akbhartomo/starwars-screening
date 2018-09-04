import React from 'react';
import ReactDOM from 'react-dom';

import { AppRoute } from './components/router'
import registerServiceWorker from './registerServiceWorker';

import './assets/css/main.css';

ReactDOM.render(
  <AppRoute />, 
  document.getElementById('root')
);
registerServiceWorker();
