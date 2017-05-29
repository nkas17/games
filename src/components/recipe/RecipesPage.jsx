import React from 'react';
// import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import * as recipeActions from '../../actions/recipeActions';
import RecipeList from './RecipeList';

/**
 * Page that has all the recipe things
 */
class RecipePage extends React.Component { //eslint-disable-line
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const {recipes} = this.props;
		return (
			<div className="jumbotron">
				<h2>recipes</h2>
				<hr />
				<RecipeList recipes={recipes} />
			</div>
		);
	}
}

RecipePage.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
	// actions: PropTypes.objectOf(PropTypes.func).isRequired,
}

const mapStateToProps = (state /*ownProps*/) => {
	return {
		recipes: state.recipes
	}
}

const mapDispatchToProps = (/*dispatch*/) => {
	return {
		// actions: bindActionCreators( recipeActions, dispatch ),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
