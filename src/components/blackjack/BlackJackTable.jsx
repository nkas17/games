import React from 'react';
import _ from 'lodash';

class BlackJackTable extends React.PureComponent {
	static _shuffleDeck() {
		const deck = [
			'2_S',
			'3_S',
			'4_S',
			'5_S',
			'6_S',
			'7_S',
			'8_S',
			'9_S',
			'10_S',
			'J_S',
			'Q_S',
			'K_S',
			'A_S',
			'2_H',
			'3_H',
			'4_H',
			'5_H',
			'6_H',
			'7_H',
			'8_H',
			'9_H',
			'10_H',
			'J_H',
			'Q_H',
			'K_H',
			'A_H',
			'2_C',
			'3_C',
			'4_C',
			'5_C',
			'6_C',
			'7_C',
			'8_C',
			'9_C',
			'10_C',
			'J_C',
			'Q_C',
			'K_C',
			'A_C',
			'2_D',
			'3_D',
			'4_D',
			'5_D',
			'6_D',
			'7_D',
			'8_D',
			'9_D',
			'10_D',
			'J_D',
			'Q_D',
			'K_D',
			'A_D',
		];
		return _.shuffle(deck);
	}

	constructor(props) {
		super(props);
		this.state = {
			numberOfDecks: 1,
			dealerCards: BlackJackTable._shuffleDeck(),
			players: [
				{
					cards: [],
					id: 1,
				},
				{
					cards: [],
					id: 2,
				}
			]
		};
	}

	_hit({ playerId }) {
		let dealerCards = this.state.dealerCards;
		let thePlayers = this.state.players;
		const card = dealerCards.pop();
		const player = _.find(this.state.players, { id: playerId })
		_.remove(thePlayers, player);
		console.log(player);
		player.cards.push(card);
		this.setState((state) => ({
			dealerCards,
			players: [
				...thePlayers,
				player
			]
		}))
	}

	componentDidMount() {
		const { dealerCards } = this.state;
		console.log(dealerCards);
	}


	render() {
		const { numberOfDecks, players } = this.state;
		return (
			<div>
				<p>
					coming soon...blackjack table with {numberOfDecks * 52} cards
				</p>
				<h3>mock table</h3>
				<div className="black-jack-table">
					<section className="dealer">
						<h4>dealer</h4>
						<hr />
						<p>card1</p>
						<p>card2</p>
						<p>card3</p>
						<p>total card value count</p>
						<button type="button" onClick={() => console.log('dealer deal')}>deal</button>
						<button type="button" onClick={() => console.log('dealer hit')}>hit me</button>
						<button type="button" onClick={() => console.log('dealer shuffle')}>shuffle</button>
					</section>
					<section className="player1">
						<h4>player 1</h4>
						<hr />
						{_.map(_.find(players, { id: 1 }, {}).cards, (card) => (<p>{card}</p>))}
						<p>total card value count</p>
						<button type="button" onClick={() => {
							console.log('player 1 hit');
							this._hit({ playerId: 1 });
						}
						}>hit me</button>
						<button type="button" onClick={() => console.log('player 1 stay')}>stay</button>
					</section>
					<section className="player2">
						<h4>player 2</h4>
						<hr />
						{_.map(_.find(players, { id: 2 }, {}).cards, (card) => (<p>{card}</p>))}
						<p>total card value count</p>
						<button type="button" onClick={() => {
							console.log('player 2 hit');
							this._hit({ playerId: 2 });
						}
						}>hit me</button>
						<button type="button" onClick={() => console.log('player 2 stay')}>stay</button>
					</section >
				</div >
			</div >
		);
	}
}

export default BlackJackTable;
