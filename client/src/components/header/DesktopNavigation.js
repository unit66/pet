import React from 'react';
import { NavLink } from 'react-router-dom';

export default function DesktopNavigation() {
  return (
      <nav className="desktop">
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
