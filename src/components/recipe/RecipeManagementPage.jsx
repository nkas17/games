import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';

class RecipeManagementPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className="jumbotron">
				<h2>{`Manage Recipe ${this.props.match.params.id}`} </h2>

			</div>
		);
	}
}

RecipeManagementPage.PropTypes = {
	myProp: PropTypes.string.isRequired
};

const mapStateToProps = (state /*ownProps*/) => {
	return {
		state: state
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(recipeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeManagementPage);
