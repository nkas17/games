import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import _ from 'lodash';
import * as recipeActions from '../../actions/recipeActions';
import { categoriesFormattedForSelectInput } from '../../selectors/selectors';
import RecipeEntryView from './RecipeEntryView';

export class RecipeEntryContainer extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			recipe: Object.assign({}, this.props.recipe),
			errors: {},
			saving: false,
		};

		this._updateRecipeState = this._updateRecipeState.bind(this);
		this._saveRecipe = this._saveRecipe.bind(this);
		this._cancelRecipe = this._cancelRecipe.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.recipe.id !== nextProps.recipe.id) {
			this.setState({ recipe: Object.assign({}, nextProps.recipe) });
		}
	}

	_updateRecipeState(event) {
		const field = event.target.name;
		const recipe = this.state.recipe;
		recipe[field] = event.target.value;
		return this.setState({ recipe });
	}

	_recipeFormIsValid() {
		let formIsValid = true;
		const errors = {};

		if (this.state.recipe.title.length < 5) {
			errors.title = 'title must be at least 5 characters.';
			formIsValid = false;
		}

		this.setState({ errors });
		return formIsValid;
	}

	_saveRecipe(event) {
		event.preventDefault();

		if (!this._recipeFormIsValid()) {
			return;
		}

		this.setState({ saving: true });
		this.props.actions.saveRecipe(this.state.recipe)
			.then(() => this._redirectOnSave())
			.catch((error) => {
				toastr.error(error);
				this.setState({ saving: false });
			});
	}

	_redirectOnSave() {
		this.setState({ saving: false });
		toastr.success('Recipe saved');
		this.props.history.push(`/recipe/${this.props.recipe.id}`);
	}

	_cancelRecipe() {
		this._redirectOnCancel();
	}

	_redirectOnCancel() {
		toastr.success('Recipe cancelled');
		this.props.history.push(`/recipe/${this.props.recipe.id}`);
	}

	render() {
		const { categories } = this.props;
		return (
			<div className="jumbotron">
				<h2>{`Manage ${this.props.match.params && this.props.match.params.id} Recipe`} </h2>
				<hr />
				<RecipeEntryView
					recipe={this.state.recipe}
					categories={categories}
					onChange={this._updateRecipeState}
					onSave={this._saveRecipe}
					onCancel={this._cancelRecipe}
					errors={this.state.errors}
					saving={this.state.saving}
				/>
			</div>
		);
	}
}

RecipeEntryContainer.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
	match: PropTypes.objectOf(PropTypes.any).isRequired,
	recipe: PropTypes.objectOf(PropTypes.any).isRequired,
	actions: PropTypes.objectOf(PropTypes.func).isRequired,
	history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state, ownProps) => {
	const recipeId = ownProps.match.params.id;

	let recipe = {
		title: '',
		description: '',
	};

	if (recipeId !== 'new') {
		recipe = _.find(state.recipes, { id: recipeId });
		if (recipe === undefined) {
			recipe = {
				title: '',
				description: '',
			};
		}
	}

	return {
		recipe,
		categories: categoriesFormattedForSelectInput(state.categories),
	};
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(recipeActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEntryContainer);
