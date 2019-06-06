import React from 'react';
import { NavLink } from 'react-router-dom';

export default function DesktopNavigation() {
    return (
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/stack">
          Stack
        </NavLink>
        <NavLink exact to="/playground">
          Playground
        </NavLink>
        <NavLink exact to="/contacts">
          Contacts
        </NavLink>
      </nav>
    );
}
