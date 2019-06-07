import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/HomeContainer';
import P404 from './components/p404/P404';
import Contacts from './components/contacts/Contacts';
import Playground from './components/playground/Playground';
import Stack from './containers/stack/StackContainer';

export default class Application extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stack" component={Stack} />
          <Route exact path="/playground" component={Playground} />
          <Route exact path="/contacts" component={Contacts} />
          <Route path="*" component={P404} />
        </Switch>
      </main>
    );
  }
}
