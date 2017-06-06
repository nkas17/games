import { loadCategoriesSuccess } from './categoryActions';
import * as actionTypes from './actionTypes';

/* eslint-disable no-undef */

describe('Category Actions', () => {
	// arange
	const categories = [
		{
			id: 'other',
			name: 'other',
		},
		{
			id: 'poultry',
			name: 'poultry',
		},
		{
			id: 'beef',
			name: 'beef',
		},
	];

	describe('loadCategoriesSuccess', () => {
		it('should create a LOAD_CATEGORIES_SUCCESS action', () => {
			// arange
			const expectedAction = {
				type: actionTypes.LOAD_CATEGORIES_SUCCESS,
				categories,
			};

			// act
			const action = loadCategoriesSuccess(categories);

			// assert
			expect(action).toEqual(expectedAction);
		});
	});
});
