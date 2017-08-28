import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Common Header component
 */
const Header = () => (
	<header>
		<h1 className="page-header">{'games'}</h1>
		<nav>
			<Link to="/" >home</Link>
			{' | '}
			<Link to="/about" >about</Link>
		</nav>
	</header>
);

export default Header;
