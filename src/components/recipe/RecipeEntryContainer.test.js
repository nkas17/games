import React from 'react';
import { mount } from 'enzyme';
import {RecipeEntryContainer} from './RecipeEntryContainer';

/* eslint-disable no-undef */

const setup = () => (
	{
		categories: [],
		match: {},
		recipe: {
			title:"", 
			description: "",
		},
		actions: { saveRecipe: () => {return Promise.resolve();}},
		history: {},
	}
)

const enzymeSetup = () => mount(<RecipeEntryContainer {...setup()} />);

describe('Recipe Entry Container', () => {
	it('sets error message when trying to save empty title', () => {
		const wrapper = enzymeSetup();
		const saveButton = wrapper.find('#save');
		expect(saveButton.prop('type')).toBe('submit');
		saveButton.simulate('click');
		expect(wrapper.state().errors.title).toBe('title must be at least 5 characters.');
	});
});
