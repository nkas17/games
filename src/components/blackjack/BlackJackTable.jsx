import React from 'react';
import _ from 'lodash';

class BlackJackTable extends React.Component {
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
			player1Cards: [],
			player2Cards: [],
		};
	}

	componentDidMount() {
		const { dealerCards } = this.state;
		console.log(dealerCards);
	}

	render() {
		const { numberOfDecks } = this.state;
		return (
			<div>
				<p>
					coming soon...blackjack table with {numberOfDecks * 52} cards
				</p>
				<h3>mock table</h3>
				<p>dealer</p>
				<p>player 1</p>
				<p>player 2</p>
			</div>
		);
	}
}

export default BlackJackTable;
