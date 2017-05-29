import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import * as categoryActions from '../../actions/categoryActions';
import RecipeForm from './RecipeForm';

class RecipeManagementPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			recipe: Object.assign({}, this.props.recipe),
			errors: {},
		}
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
					errors={this.state.errors}
				/>
			</div>
		);
	}
}

RecipeManagementPage.propTypes = {
	recipe: PropTypes.objectOf(PropTypes.any).isRequired,
	categories: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

const mapStateToProps = (state /*ownProps*/) => {
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

	return {
		recipe: recipe,
		categories: categoriesFormattedForSelectInput,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({
			recipeActions,
			categoryActions,
		}, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeManagementPage);
