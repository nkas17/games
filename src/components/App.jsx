import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import PlayPage from './tictactoe/PlayPage';
import PlayBlackjackPage from './blackjack/PlayPage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';

/**
 * Main component that wraps everything else
 */
class App extends React.Component { // eslint-disable-line
	render() {
		return (
			<div className="container-fluid">
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/tictactoe" component={PlayPage} />
						<Route exact path="/blackjack" component={PlayBlackjackPage} />
						<Route exact path="/about" component={AboutPage} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
