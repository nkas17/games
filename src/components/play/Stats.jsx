import React from 'react';

const Stats = ({ reset, winner }) => (
	<div className="stats">
		<button className="btn btn-secondary" onClick={reset}>reset</button>
		{winner && <h2>Congrats we have a winner</h2>}
	</div>
);

export default Stats;
