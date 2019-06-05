import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MobileNavigation extends Component {
  constructor() {
    super()
    this.state = {
      hidden: true
    }
  }

  toggleNavigation = () => {
    this.setState((prevState) => {
      return {
        hidden: !prevState.hidden
      }
    })
  }

  render(){
    return (
      <nav className={ this.state.hidden ? "mobile hidden" : "mobile" }>
        <div className={ this.state.hidden ? "burger hidden" : "burger" } onClick={this.toggleNavigation}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/stack">
          Stack
        </NavLink>
        <NavLink exact to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink exact to="/contacts">
          Contacts
        </NavLink>
      </nav>
    );
  }
}
