import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingDots from './LoadingDots';

/**
 * Common Header component
 */
const Header = ({loading = true}) => (
	<header>
		<h1 className="page-header">{"come and eat!"}</h1>
		<nav>
			<Link to="/" >home</Link>
			{" | "}
			<Link to="/recipe" >recipes</Link>
			{" | "}
			<Link to="/about" >about</Link>
			{loading && <LoadingDots interval={200} dots={10} />}
		</nav>
	</header>
);

Header.propTypes = {
	loading: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
	return {
		loading: state.numAjaxCallsInProgress > 0,
	};
}

export default connect(mapStateToProps)(Header);
