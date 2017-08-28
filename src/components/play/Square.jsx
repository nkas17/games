import React from 'react';

class Square extends React.Component {
	render() {
		return (
			<div className="col-md-4">
				<div
					onClick={() => {
						if (this.props.value === '...') {
							this.props.onClick(this.props.id);
						}
					}}
					className={`square ${(this.props.value === 'O' && 'square__o') || (this.props.value === 'X' && 'square__x')}`}
				/>
			</div>
		);
	}
}

export default Square;
