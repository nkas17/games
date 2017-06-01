import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import * as recipeActions from '../../actions/recipeActions';
import RecipeForm from './RecipeForm';

class RecipeManagementPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			recipe: Object.assign({}, this.props.recipe),
			errors: {},
		}

		this._updateRecipeState = this._updateRecipeState.bind(this);
		this._saveRecipe = this._saveRecipe.bind(this);
	}

	_updateRecipeState(event) {
		const field = event.target.name;
		let recipe = this.state.recipe;
		recipe[field] = event.target.value;
		return this.setState({recipe: recipe});
	}

	_saveRecipe(event) {
		event.preventDefault();
		this.props.actions.saveRecipe(this.state.recipe);
		this.props.history.push('/recipe');
	}

	render() {
		const {categories} = this.props;
		return (
			<div className="jumbotron">
				<h2>{`Manage ${this.props.match.params.id} Recipe`} </h2>
				<hr />
				<RecipeForm 
					recipe={this.state.recipe}
					categories={categories}
					onChange={this._updateRecipeState}
					onSave={this._saveRecipe}
					errors={this.state.errors}
				/>
			</div>
		);
	}
}

RecipeManagementPage.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
	match: PropTypes.objectOf(PropTypes.any).isRequired,
	recipe: PropTypes.objectOf(PropTypes.any).isRequired,
	actions: PropTypes.objectOf(PropTypes.func).isRequired,
	history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state, ownProps) => {
	const recipeId = ownProps.match.params.id;
	const categoriesFormattedForSelectInput = state.categories.map(category => {
		return {
			value: category.id,
			text: category.name,
		}
	});
	let recipe = {
		title:"default title", 
		description: "default description",
	};

	if (recipeId !== 'new') {
		recipe = _.find(state.recipes, { 'id': recipeId});
	}

	return {
		recipe: recipe,
		categories: categoriesFormattedForSelectInput,
	};
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(recipeActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeManagementPage);
