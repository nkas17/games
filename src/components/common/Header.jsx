import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Common Header component
 */
const Header = () => (
  <header>
    <h1 className="page-header">{"Welcome, let's Eat!"}</h1>
    <nav>
      <Link to="/" >Home</Link>
      {" | "}
      <Link to="/about" >About</Link>
      {" | "}
      <Link to="/recipes" >Recipes</Link>
    </nav>
  </header>
);

export default Header;