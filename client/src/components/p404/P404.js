import React from 'react';
import { NavLink } from 'react-router-dom';

export default function P404() {
  return (
    <section className="p404">
      <h1>404 page</h1>
      <NavLink to="/">На главную</NavLink>
    </section>
  );
}
