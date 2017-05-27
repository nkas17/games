import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import RecipesPage from './components/recipe/RecipesPage';

export default (
	<div>
		<Route exact path="/" component={App} />
		<Route path="/home" component={HomePage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/recipes" component={RecipesPage} />
	</div>
);
