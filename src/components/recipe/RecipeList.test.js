import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import RecipeList from './RecipeList';

/* eslint-disable no-undef */

const setup = () => (
	{
		recipes: [
			{
				id: 'tacos',
				title: 'tacos',
				category: 'other',
				description: 'Tasty homemade tacos - hard or soft',
				ingredients: [
					{
						id: 'cheese',
						quantity: '8',
						unit: 'oz'
					},
					{
						id: 'ground beef',
						quantity: '1.5',
						unit: 'lbs'
					},
					{
						id: 'tortilla',
						quantity: '1',
						unit: ''
					}
				]
			},
			{
				id: 'quiche',
				title: 'quiche',
				category: 'other',
				description: 'Delicious Spinach Quiche and Ham & Cauliflower quiche',
				ingredients: [
					{
						id: 'cheese',
						quantity: '8',
						unit: 'oz'
					},
					{
						id: 'pie-crust',
						quantity: '2',
						unit: ''
					},
					{
						id: 'egg',
						quantity: '7',
						unit: ''
					}
				]
			}
		]
	}
);

const renderWithRouter = node => renderer.create(<Router>{node}</Router>);

describe('RecipeList', () => {
	it('renders correctly', () => {
		const tree = renderWithRouter(
			<RecipeList {...setup()} />
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
