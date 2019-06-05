import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/HomeContainer';
import P404 from './components/p404/P404';
import Contacts from './components/contacts/Contacts';
import Portfolio from './components/portfolio/Portfolio';
import Stack from './components/stack/Stack';

export default class Application extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stack" component={Stack} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contacts" component={Contacts} />
          <Route path="*" component={P404} />
        </Switch>
      </main>
    );
  }
}
