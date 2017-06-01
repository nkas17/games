import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import RecipesPage from './recipe/RecipesPage';
import RecipeManagementPage from './recipe/RecipeManagementPage';
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
						<Route path="/about" component={AboutPage} />
						<Route exact path="/recipe" component={RecipesPage} />
						<Route path="/recipe/:id" component={RecipeManagementPage} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
