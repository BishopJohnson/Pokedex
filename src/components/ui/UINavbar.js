import React from 'react';
import { NavLink } from 'react-router-dom';

const UINavbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href="" className="brand-logo">Pokedex</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/pokedex">Pokedex</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default UINavbar;
