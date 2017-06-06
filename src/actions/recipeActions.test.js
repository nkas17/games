import { createRecipeSuccess } from './recipeActions';
import * as actionTypes from './actionTypes';

/* eslint-disable no-undef */

describe('Recipe Actions', () => {
	describe('createRecipeSuccess', () => {
		it('should create a CREATE_RECIPE_SUCCESS action', () => {
			// arange
			const recipe = {
				id: 'tacos',
				title: 'tacos',
				category: 'other',
				description: 'Tasty homemade tacos - hard or soft',
				ingredients: [
					{
						id: 'cheese',
						quantity: '8',
						unit: 'oz',
					},
					{
						id: 'ground beef',
						quantity: '1.5',
						unit: 'lbs',
					},
					{
						id: 'tortilla',
						quantity: '1',
						unit: '',
					},
				],
			};
			const expectedAction = {
				type: actionTypes.CREATE_RECIPE_SUCCESS,
				recipe,
			};

			// act
			const action = createRecipeSuccess(recipe);

			// assert
			expect(action).toEqual(expectedAction);
		});
	});
});
