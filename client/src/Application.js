import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/HomeContainer';
import P404 from './components/p404/P404';

export default class Application extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={P404} />
        </Switch>
      </main>
    );
  }
}
