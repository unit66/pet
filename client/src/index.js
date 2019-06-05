import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Application from './Application';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './scss/style.scss'

const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Application />
      <Footer />
    </Router>
  </Provider>,
  document.getElementById('app')
);
