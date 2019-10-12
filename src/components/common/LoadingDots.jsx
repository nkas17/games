import React from 'react';
import PropTypes from 'prop-types';

class LoadingDots extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = { frame: 1 };
	}

	componentDidMount() {
		const { frame } = this.state;
		const { internal } = this.props;
		this.interval = setInterval(() => {
			this.setState({
				frame: frame + 1, // eslint-disable-line react/no-did-mount-set-state
			});
		}, interval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { frame } = this.state;
		const { dots } = this.props;
		let theDots = frame % (dots + 1);
		let text = '';
		while (theDots > 0) {
			text += '.';
			theDots--;
		}
		return <span>{text}&nbsp;</span>;
	}
}

LoadingDots.defaultProps = {
	interval: 300,
	dots: 3,
};

LoadingDots.propTypes = {
	interval: PropTypes.number,
	dots: PropTypes.number,
};

export default LoadingDots;
