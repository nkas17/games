import React from 'react';

const Dealer = ({ isTimeToShuffle, dealerCards, showDealerCard, clearTable, deal, dealerHit, shuffle }) => (
	<section className="dealer">
		<h4>dealer {isTimeToShuffle && 'Time to Shuffle'}</h4>
		<button type="button" onClick={() => deal()}>deal</button>
		<button type="button" onClick={() => clearTable()}>clear</button>
		<button type="button" onClick={() => {
			console.log('dealer hit');
			dealerHit();
		}}>hit me</button>
		<button type="button" onClick={() => shuffle()}>shuffle</button>
		<hr />
		{_.map(dealerCards, (card, index) => {
			if (index < dealerCards.length - 1 || showDealerCard)
				return (<p key={card}>{card}</p>)
			else
				return (<p key='hidden-card' className='hidden-card'></p>)
		})}
	</section>
);

export default Dealer;
