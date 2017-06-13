import React from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RecipeList from './RecipeList';
import * as recipeActions from '../../actions/recipeActions';

/**
 * Page that has all the recipe things
 */
class RecipePage extends React.Component { //eslint-disable-line
	constructor(props, context) {
		super(props, context);

		this._redirectToAddRecipePage = this._redirectToAddRecipePage.bind(this);
		this._deleteRecipe = this._deleteRecipe.bind(this);
	}
	_redirectToAddRecipePage() {
		this.props.history.push('/recipe/new');
	}

	_deleteRecipe(recipeId) {
		console.log(`deleted recipe id - ${recipeId}`);

		event.preventDefault();

		this.props.actions.deleteRecipe(recipeId)
			.then(() => toastr.success('Recipe deleted'))
			.catch(error => toastr.error(error));
	}

	render() {
		const { recipes } = this.props;
		return (
			<div className="jumbotron">
				<h2>recipes</h2>
				<hr />
				<RecipeList
					recipes={recipes}
					deleteRecipe={this._deleteRecipe}
				/>
				<input
					type="submit"
					value="add recipe"
					className="btn btn-primary"
					onClick={this._redirectToAddRecipePage}
				/>
			</div>
		);
	}
}

RecipePage.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
	history: PropTypes.objectOf(PropTypes.any).isRequired,
	actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = state => ({
	recipes: state.recipes,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(recipeActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
