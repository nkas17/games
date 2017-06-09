import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import { createRecipeSuccess } from '../actions/recipeActions';

/* eslint-disable no-undef */

describe('Store', () => {
	it('should handle creating recipes', () => {
		// arange
		const store = createStore(rootReducer, initialState);
		const recipe = {
			title: 'Delicious Meal',
		};

		// act
		const action = createRecipeSuccess(recipe);
		store.dispatch(action);

		// assert
		const actual = store.getState().recipes[0];
		const expected = {
			title: 'Delicious Meal',
		};
		expect(actual).toEqual(expected);
	});
});
