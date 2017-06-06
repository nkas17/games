import { createRecipeSuccess, updateRecipeSuccess, loadRecipesSuccess } from './recipeActions';
import * as actionTypes from './actionTypes';

/* eslint-disable no-undef */

describe('Recipe Actions', () => {
			// arange
	const recipes = [{
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
	}];
	describe('createRecipeSuccess', () => {
		it('should create a CREATE_RECIPE_SUCCESS action', () => {
			// arrange
			const expectedAction = {
				type: actionTypes.CREATE_RECIPE_SUCCESS,
				recipe: recipes[0],
			};

			// act
			const action = createRecipeSuccess(recipes[0]);

			// assert
			expect(action).toEqual(expectedAction);
		});
	});

	describe('updateRecipeSuccess', () => {
		it('should create an UPDATE_RECIPE_SUCCESS action', () => {
			// arange
			const expectedAction = {
				type: actionTypes.UPDATE_RECIPE_SUCCESS,
				recipe: recipes[0],
			};

			// act
			const action = updateRecipeSuccess(recipes[0]);

			// assert
			expect(action).toEqual(expectedAction);
		});
	});

	describe('loadRecipesSuccess', () => {
		it('should create a LOAD_RECIPES_SUCCESS action', () => {
			// arange
			const expectedAction = {
				type: actionTypes.LOAD_RECIPES_SUCCESS,
				recipes,
			};

			// act
			const action = loadRecipesSuccess(recipes);

			// assert
			expect(action).toEqual(expectedAction);
		});
	});
});
