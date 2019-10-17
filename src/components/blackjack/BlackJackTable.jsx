import React from 'react';
import _ from 'lodash';
import Player from './Player';
import Dealer from './Dealer';
import { deck } from './cards';

class BlackJackTable extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isTimeToShuffle: false,
			numberOfDecks: 1,
			cards: _.shuffle(deck),
			dealerCards: [],
			showDealerCard: false,
			players: [
				{
					cards: [],
					id: 1,
					stay: false,
				},
				{
					cards: [],
					id: 2,
					stay: false,
				}
			]
		};
		this._hit = this._hit.bind(this);
		this._stay = this._stay.bind(this);
		this._clearTable = this._clearTable.bind(this);
		this._deal = this._deal.bind(this);
		this._dealerHit = this._dealerHit.bind(this);
		this._shuffle = this._shuffle.bind(this);
	}

	_stay({ playerId }) {
		let thePlayers = this.state.players;
		let showDealerCard = this.state.showDealerCard;
		const player = _.find(this.state.players, { id: playerId })
		_.remove(thePlayers, player);
		player.stay = true;
		thePlayers.push(player);
		for (let i = 0; i < thePlayers.length; i++) {
			showDealerCard = thePlayers[i].stay;
			if (!showDealerCard) break;
		}
		this.setState({
			showDealerCard,
			players: [
				...thePlayers,
			]
		})
	}

	_hit({ playerId }) {
		let theCards = this.state.cards;
		let thePlayers = this.state.players;
		const card = theCards.pop();
		const player = _.find(this.state.players, { id: playerId })
		_.remove(thePlayers, player);
		player.cards.push(card);
		this.setState((state) => ({
			cards: theCards,
			players: [
				...thePlayers,
				player
			]
		}))
	}

	_dealerHit() {
		let theCards = this.state.cards;
		let theDealerCards = this.state.dealerCards;
		const card = theCards.pop();
		theDealerCards.push(card);
		this.setState((state) => ({
			cards: [...theCards],
			dealerCards: [...theDealerCards],
		}))
	}

	_clearTable() {
		const isTimeToShuffle = this.state.cards.length < 12;
		this.setState((state) => ({
			isTimeToShuffle,
			showDealerCard: false,
			dealerCards: [],
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
		}));
	}

	_deal() {
		let theCards = this.state.cards;
		let thePlayers = this.state.players;
		let dealer = this.state.dealerCards;
		for (let i = 0; i < 2; i++) {
			thePlayers[0].cards.push(theCards.pop());
			thePlayers[1].cards.push(theCards.pop());
			dealer.push(theCards.pop());
		}
		this.setState((state) => ({
			cards: theCards,
			players: [
				...thePlayers,
			],
			dealerCards: dealer,
		}))
	}

	_shuffle() {
		const cards = _.shuffle(deck);
		this.setState((state) => ({
			isTimeToShuffle: false,
			cards,
			dealerCards: [],
			showDealerCard: false,
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
		}));
	}

	render() {
		const { numberOfDecks, players, dealerCards, showDealerCard, isTimeToShuffle } = this.state;
		return (
			<div>
				<h3>
					table with {numberOfDecks * 52} cards</h3>
				<div className="black-jack-table">
					<Dealer
						isTimeToShuffle={isTimeToShuffle}
						dealerCards={dealerCards}
						showDealerCard={showDealerCard}
						clearTable={this._clearTable}
						deal={this._deal}
						dealerHit={this._dealerHit}
						shuffle={this._shuffle} />
					<Player
						player={_.find(players, { id: 1 })}
						hit={this._hit}
						stay={this._stay} />
					<Player
						player={_.find(players, { id: 2 })}
						hit={this._hit}
						stay={this._stay} />
				</div >
			</div >
		);
	}
}

export default BlackJackTable;
