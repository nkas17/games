import { categoriesFormattedForSelectInput } from './selectors';

/* eslint-disable no-undef */

describe('Recipe Selectors', () => {
	describe('categoriesFormattedForSelectInput', () => {
		it('should return category data formatted for use in a select input', () => {
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

			const expected = [
				{ value: 'other', text: 'other' },
				{ value: 'poultry', text: 'poultry' },
				{ value: 'beef', text: 'beef' },
			];

			expect(categoriesFormattedForSelectInput(categories)).toEqual(expected);
		});
	});
});
