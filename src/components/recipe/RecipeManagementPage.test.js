import React from 'react';
import { mount, shallow } from 'enzyme';
import {RecipeManagementPage} from './RecipeManagementPage';

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

const enzymeSetup = () => mount(<RecipeManagementPage {...setup()} />);

describe('Recipe Management Page', () => {
	it('sets error message when trying to save empty title', () => {
		const wrapper = enzymeSetup();
		const saveButton = wrapper.find('#save');
		expect(saveButton.prop('type')).toBe('submit');
		saveButton.simulate('click');
		expect(wrapper.state().errors.title).toBe('title must be at least 5 characters.');
	});
});
