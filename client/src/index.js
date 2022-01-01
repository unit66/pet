import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Application from './Application';
import './scss/style.scss'

const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Application />
    </Router>
  </Provider>,
  document.getElementById('app')
);
