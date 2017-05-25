import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as recipeActions from '../../actions/recipeActions';

class RecipePage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			recipe: { title: ""}
		}

		this._onTitleChange = this._onTitleChange.bind(this);
		this._onClickSave = this._onClickSave.bind(this);
	}

	_onTitleChange(event){
		const recipe = this.state.recipe;
		recipe.title = event.target.value;
		this.setState({ recipe: recipe });
	}

	_onClickSave(){
		this.props.actions.createRecipe(this.state.recipe);
	}

	_recipeRow(recipe, index) {
		return <div key={index}>{recipe.title}</div>;
	}

	render() {
		return (
  <div>
    <h1>Recipes</h1>
		<hr />
    <h2>Existing Recipes</h2>
    {this.props.recipes.map(this._recipeRow)}
		<hr />
    <h2>Add Recipes</h2>
    <input
      type="text"
      onChange={this._onTitleChange}
      value={this.state.recipe.title}
    />
    <input
      type="submit"
      value="Save"
      onClick={this._onClickSave} 
    />
    <p>{this.state.recipe.title}</p>
  </div>
		);
	}
}

RecipePage.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
	actions: PropTypes.objectOf(PropTypes.func).isRequired,
}

const mapStateToProps = (state, ownProps) => {
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
