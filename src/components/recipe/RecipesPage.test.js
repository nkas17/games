import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import RecipesPage from './RecipesPage';
import configureStore from '../../store/configureStore';

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
			{
				id: 'quiche',
				title: 'quiche',
				category: 'other',
				description: 'Delicious Spinach Quiche and Ham & Cauliflower quiche',
				ingredients: [
					{
						id: 'cheese',
						quantity: '8',
						unit: 'oz',
					},
					{
						id: 'pie-crust',
						quantity: '2',
						unit: '',
					},
					{
						id: 'egg',
						quantity: '7',
						unit: '',
					},
				],
			},
		],
	}
);

const store = configureStore(setup());
const renderWithRouter = node => <Router>{node}</Router>;
const renderWithStore = node => <Provider store={store}>{node}</Provider>;

describe('RecipesPage', () => {
	it('renders correctly', () => {
		const tree = renderer.create(
			renderWithStore(
				renderWithRouter(
					<RecipesPage
						history={{}}
					/>))).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
