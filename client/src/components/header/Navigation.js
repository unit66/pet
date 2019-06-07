import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component{
    constructor(props) {
      super(props)
    }

    render(){
      return (
        <nav>
          <NavLink exact to="/" onClick={ this.props.toggleNavigation }>
            Home
          </NavLink>
          <NavLink exact to="/stack" onClick={ this.props.toggleNavigation }>
            Stack
          </NavLink>
          <NavLink exact to="/playground" onClick={ this.props.toggleNavigation }>
            Playground
          </NavLink>
          <NavLink exact to="/contacts" onClick={ this.props.toggleNavigation }>
            Contacts
          </NavLink>
        </nav>
      );
    }
}
