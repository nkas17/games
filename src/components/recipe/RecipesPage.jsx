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

		this.redirectToAddRecipePage = this.redirectToAddRecipePage.bind(this);
	}
	redirectToAddRecipePage() {
		this.props.history.push('/recipe/new');
	}

	render() {
		const {recipes} = this.props;
		return (
			<div className="jumbotron">
				<h2>recipes</h2>
				<hr />
				<RecipeList recipes={recipes} />
				<input
					type="submit"
					value="add recipe"
					className="btn btn-primary"
					onClick={this.redirectToAddRecipePage}
				/>
			</div>
		);
	}
}

RecipePage.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
	history: PropTypes.objectOf(PropTypes.any).isRequired,
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
