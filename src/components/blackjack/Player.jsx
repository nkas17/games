import React from 'react';

const Player = ({ player, hit, stay }) => (
	<section className={`player ${player.id}`}>
		<h4>{`player ${player.id}`}</h4>
		<button type="button" onClick={() => {
			console.log(`player ${player.id} hit`);
			hit({ playerId: player.id });
		}
		}>hit me</button>
		<button type="button" onClick={() => {
			console.log(`player ${player.id} stay`);
			stay({ playerId: player.id });
		}}>stay</button>
		<hr />
		{_.map(player.cards, (card) => (<p className='card' key={card}>{card}</p>))}

	</section>
);

export default Player;
