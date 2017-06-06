import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import {RecipeEntryContainer} from './RecipeEntryContainer';

/* eslint-disable no-undef */

const setup = (id) => (
	{
		categories: [],
		match: {params:{id:id}},
		recipe: {
			title: "", 
			description: "",
		},
		actions: { saveRecipe: () => {return Promise.resolve();}},
		history: {},
	}
);

const enzymeSetup = (id) => mount(<RecipeEntryContainer {...setup(id)} />);

describe('RecipeEntryContainer', () => {
	it('renders new recipe correctly', () => {
		const tree = renderer.create(
			<RecipeEntryContainer {...setup('new')} />
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders an undefined recipe correctly', () => {
		const tree = renderer.create(
			<RecipeEntryContainer {...setup('sushi')} />
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('sets error message when trying to save empty title', () => {
		const wrapper = enzymeSetup('new');
		const saveButton = wrapper.find('#save');
		expect(saveButton.prop('type')).toBe('submit');
		saveButton.simulate('click');
		expect(wrapper.state().errors.title).toBe('title must be at least 5 characters.');
	});
});
