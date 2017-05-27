import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as recipeActions from '../../actions/recipeActions';
import RecipeList from './RecipeList';

/**
 * Page that has all the recipe things
 */
class RecipePage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className="jumbotron">
				<h2>Recipes</h2>
				<hr />
				<RecipeList recipes={this.props.recipes} />
			</div>
		);
	}
}

RecipePage.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
	actions: PropTypes.objectOf(PropTypes.func).isRequired,
}

const mapStateToProps = (state /*ownProps*/) => {
	return {
		recipes: state.recipes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators( recipeActions, dispatch ),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
