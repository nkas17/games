import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class RecipeManagementPage extends React.Component {
	consturctor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div>
				{'component not yet implemented'}
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
		actions: bindActionCreators(/*actions,*/ dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeManagementPage);
