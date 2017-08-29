import React from 'react';
import _ from 'lodash';
import Square from './Square';
import Stats from './Stats';


class Board extends React.Component {
	constructor() {
		super();
		this.state = {
			newGame: true,
			xTurn: true,
			values: [
				['...', '...', '...'],
				['...', '...', '...'],
				['...', '...', '...']],
			winner: false,
			catsGame: false,
		};

		this._reset = this._reset.bind(this);
		this._onClick = this._onClick.bind(this);
	}

	_reset() {
		this.setState(() => ({
			newGame: true,
			xTurn: true,
			values: [
				['...', '...', '...'],
				['...', '...', '...'],
				['...', '...', '...']],
			winner: false,
			catsGame: false,
		}));
	}

	_isXColWinner() {
		return (
			(this.state.values[0][0] === 'X' &&
			this.state.values[1][0] === 'X' &&
			this.state.values[2][0] === 'X') ||
			(this.state.values[0][1] === 'X' &&
			this.state.values[1][1] === 'X' &&
			this.state.values[2][1] === 'X') ||
			(this.state.values[0][2] === 'X' &&
			this.state.values[1][2] === 'X' &&
			this.state.values[2][2] === 'X')
		);
	}

	_isOColWinner() {
		return (
			(this.state.values[0][0] === 'O' &&
			this.state.values[1][0] === 'O' &&
			this.state.values[2][0] === 'O') ||
			(this.state.values[0][1] === 'O' &&
			this.state.values[1][1] === 'O' &&
			this.state.values[2][1] === 'O') ||
			(this.state.values[0][2] === 'O' &&
			this.state.values[1][2] === 'O' &&
			this.state.values[2][2] === 'O')
		);
	}


	_isXRowWinner() {
		return (
			(this.state.values[0][0] === 'X' &&
			this.state.values[0][1] === 'X' &&
			this.state.values[0][2] === 'X') ||
			(this.state.values[1][0] === 'X' &&
			this.state.values[1][1] === 'X' &&
			this.state.values[1][2] === 'X') ||
			(this.state.values[2][0] === 'X' &&
			this.state.values[2][1] === 'X' &&
			this.state.values[2][2] === 'X')
		);
	}

	_isORowWinner() {
		return (
			(this.state.values[0][0] === 'O' &&
			this.state.values[0][1] === 'O' &&
			this.state.values[0][2] === 'O') ||
			(this.state.values[1][0] === 'O' &&
			this.state.values[1][1] === 'O' &&
			this.state.values[1][2] === 'O') ||
			(this.state.values[2][0] === 'O' &&
			this.state.values[2][1] === 'O' &&
			this.state.values[2][2] === 'O')
		);
	}

	_isODiaganolWinner() {
		return (
			(this.state.values[0][0] === 'O' &&
			this.state.values[1][1] === 'O' &&
			this.state.values[2][2] === 'O') ||
			(this.state.values[0][2] === 'O' &&
			this.state.values[1][1] === 'O' &&
			this.state.values[2][0] === 'O')
		);
	}

	_isXDiaganolWinner() {
		return (
			(this.state.values[0][0] === 'X' &&
			this.state.values[1][1] === 'X' &&
			this.state.values[2][2] === 'X') ||
			(this.state.values[0][2] === 'X' &&
			this.state.values[1][1] === 'X' &&
			this.state.values[2][0] === 'X')
		);
	}

	_isAWinner() {
		return (
			this._isXColWinner() ||
			this._isOColWinner() ||
			this._isXRowWinner() ||
			this._isORowWinner() ||
			this._isODiaganolWinner() ||
			this._isXDiaganolWinner()
		);
	}

	_isACatsGame() {
		return (
			(_.indexOf(this.state.values[0], '...') === -1 &&
			_.indexOf(this.state.values[1], '...') === -1 &&
			_.indexOf(this.state.values[2], '...') === -1) &&
			!this._isAWinner());
	}

	_onClick(id) {
		if (!this.state.winner) {
			this.setState((prevState) => {
				const values = prevState.values;
				const index1 = Number(id[0]);
				const index2 = Number(id[1]);
				values[index1][index2] = prevState.xTurn ? 'X' : 'O';
				return ({
					newGame: false,
					xTurn: !prevState.xTurn,
					values,
					winner: this._isAWinner(),
					catsGame: this._isACatsGame(),
				});
			});
		}
	}

	render() {
		let rowNum = -1;
		return (
			<div className={`board ${this.state.winner ? 'board__winner' : ''}`}>
				<div className="row">
					<div className="col-md-6">
						{this.state.values.map((row) => {
							let colNum = -1;
							return (
								<div key={rowNum++} className="row">
									{row.map(col => (
										<Square key={colNum++} id={`${rowNum}${colNum}`} value={col} onClick={this._onClick} />
									))}
								</div>
							);
						})}
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<Stats
									reset={this._reset}
									winner={this.state.winner}
									catsGame={this.state.catsGame}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Board;
