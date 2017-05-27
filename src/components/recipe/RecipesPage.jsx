import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as recipeActions from '../../actions/recipeActions';

class RecipePage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	_recipeRow(recipe, index) {
		return ( 
  <div key={index}>
    {recipe.title} - {recipe.description}
  </div>
		);
	}

	render() {
		return (
  <div>
    <h1>Recipes</h1>
    <hr />
    <h2>Existing Recipes</h2>
    {this.props.recipes.map(this._recipeRow)}
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
