import React from 'react';

const Stats = ({ reset, winner, catsGame }) => (
	<div className="stats">
		<button className="btn btn-secondary" onClick={reset}>reset</button>
		{winner &&
			<div>
				<h2>Congrats we have a winner</h2>
				<div
					className={`${(winner && 'board__winner')}`}
				/>
			</div>}
		{catsGame &&
			<div>
				<h2>Meow!</h2>
				<div
					className={`${(catsGame && 'board__cats-game')}`}
				/>
			</div>}
	</div>
);

export default Stats;
