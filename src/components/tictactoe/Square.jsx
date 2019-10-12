import React from 'react';

const Square = ({ value, id, oOption, xOption, onClick }) => (
	<div className="col-md-4">
		<div
			onClick={() => {
				if (value === '...') {
					onClick(id);
				}
			}}
			className={`square ${(value === 'O' && `square__o ${oOption}`)
				|| (value === 'X' && `square__x ${xOption}`)}`}
		/>
	</div>
);

export default Square;
