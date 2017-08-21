import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import RecipesPage from './recipe/RecipesPage';
import GroceryListPage from './groceryList/GroceryListPage';
import MealListPage from './mealList/MealListPage';
import RecipeDisplayPage from './recipe/RecipeDisplayPage';
import RecipeEntryContainer from './recipe/RecipeEntryContainer'; // eslint-disable-line import/no-named-as-default
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
						<Route exact path="/recipe/:id" component={RecipeDisplayPage} />
						<Route path="/recipe/:id/edit" component={RecipeEntryContainer} />
						<Route exact path="/mealList" component={MealListPage} />
						<Route exact path="/groceryList" component={GroceryListPage} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
