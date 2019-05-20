import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const app = () => (
  <p>React router</p>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={app}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
