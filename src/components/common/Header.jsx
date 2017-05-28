import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Common Header component
 */
const Header = () => (
	<header>
		<h1 className="page-header">{"come and eat!"}</h1>
		<nav>
			<Link to="/" >home</Link>
			{" | "}
			<Link to="/recipe" >recipes</Link>
			{" | "}
			<Link to="/about" >about</Link>
		</nav>
	</header>
);

export default Header;
