import React, {PropTypes} from 'react';

/**
 * Main component that wraps everything else
 */
class App extends React.Component {
	render() {
		return (
  <div className="container-fluid">
    <p>Header here...</p>
    {this.props.children}
  </div>
		);
	}
}

App.propTypes = {
	/**
	 * children components to render
	 */
	children: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default App;