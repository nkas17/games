import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import RecipeForm from './RecipeForm';

/* eslint-disable no-undef */

const setup = (saving) => (
	{
		recipe: {}, saving: saving, errors: {},
		categories: [],
		onSave: () => {},
		onChange: () => {},
		onCancel: () => {},
	}
)

const enzymeSetup = (saving) => shallow(<RecipeForm {...setup(saving)} />);

describe('RecipeForm', () => {
	it('renders correctly', () => {
		const tree = renderer.create(
			<RecipeForm {...setup(false)} />
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('has correct caption on save button when not saving', () => {
		const wrapper = enzymeSetup(false);
		expect(wrapper.find('#save').props().children).toBe('save');
	});

	it('has correct caption on save button when saving', () => {
		const wrapper = enzymeSetup(true);
		expect(wrapper.find('#save').props().children).toBe('saving...');
	})
});
