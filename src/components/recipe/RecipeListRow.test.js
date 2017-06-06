import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import RecipeListRow from './RecipeListRow';

/* eslint-disable no-undef */

const setup = () => (
	{
		recipe: {
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
		},
	}
);

const renderWithRouter = node => renderer.create(<Router>{node}</Router>);

describe('RecipeListRow', () => {
	it('renders correctly', () => {
		const tree = renderWithRouter(
			<RecipeListRow
				{...setup()}
			/>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
