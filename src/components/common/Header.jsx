import React from 'react';
import { Link, IndexLink } from 'react-router';

/**
 * Common Header component
 */
const Header = () => (
  <header>
    <h1>{"Welcome, let's Eat!"}</h1>
    <nav>
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			{" | "}
			<Link to="/about" activeClassName="active">About</Link>
		</nav>
  </header>
);

export default Header;