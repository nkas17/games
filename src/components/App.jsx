import React, {PropTypes} from 'react';
import Header from './common/Header';

/**
 * Main component that wraps everything else
 */
class App extends React.Component {
	render() {
		return (
  <div className="container-fluid">
    <Header />
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