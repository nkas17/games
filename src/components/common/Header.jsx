import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Common Header component
 */
const Header = () => (
	<header>
		<h2 className="page-header">{"Welcome, let's Eat!"}</h2>
		<nav>
			<Link to="/" >Home</Link>
			{" | "}
			<Link to="/recipes" >Recipes</Link>
			{" | "}
			<Link to="/about" >About</Link>
		</nav>
	</header>
);

export default Header;