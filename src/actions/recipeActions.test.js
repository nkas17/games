import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import {
	// actions
	createRecipeSuccess,
	updateRecipeSuccess,
	loadRecipesSuccess,
	// thunks
	loadRecipes,
} from './recipeActions';
import * as actionTypes from './actionTypes';

/* eslint-disable no-undef */

/**
 * test actions
 */

describe('Recipe Actions', () => {
	// arange - shared data
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

/**
 * test thunks
 */

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Recipe Thunks', () => {
	afterEach(() => {
		nock.cleanAll();
	});
	it('should create BEGIN_AJAX_CALL and LOAD_RECIPES_SUCCESS when loading recipes', (done) => {
		// Here's an example call to nock
		// nock('http://example.com/');
		//	.get('/recipes')
		//	.reply(200, {body: {recipe: [{id:1, title:'A'}] }});

		// arrange
		const expectedActions = [
			{ type: actionTypes.BEGIN_AJAX_CALL },
			{ type: actionTypes.LOAD_RECIPES_SUCCESS, body: { recipes: [{ id: 'delicious-meal', title: 'Delicious Meal' }] } },
		];

		const store = mockStore({ recipes: [] }, expectedActions);
		store.dispatch(loadRecipes()).then(() => {
			const actions = store.getActions();
			expect(actions[0].type).toEqual(actionTypes.BEGIN_AJAX_CALL);
			expect(actions[1].type).toEqual(actionTypes.LOAD_RECIPES_SUCCESS);
			done();
		});
	});
});
