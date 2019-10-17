

	const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
	const values = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
	const createDeck = () => {
		let deck = [];
		for(let i=0; i< suits.length; i++){
			for(let j=0; j< values.length; j++){
				deck.push(`${values[j]} of ${suits[i]}`);
			}
		}
		return deck;
	};
	export const deck = createDeck();
