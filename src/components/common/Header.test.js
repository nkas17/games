import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import configureStore from '../../store/configureStore';
import Header from './Header';

/* eslint-disable no-undef */

const store = configureStore();
const renderWithRouter = node => <Router>{node}</Router>;
const renderWithStore = node => <Provider store={store}>{node}</Provider>;

describe('Header', () => {
	it('renders correctly without loading', () => {
		const tree = renderer.create(
			renderWithStore(
				renderWithRouter(
					<Header
						loading={false}
					/>))).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly while loading', () => {
		const tree = renderer.create(
			renderWithStore(
				renderWithRouter(
					<Header
						loading
					/>))).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
