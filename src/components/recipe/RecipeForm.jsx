import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const RecipeForm = ({recipe, categories, onSave, onChange, onCancel, saving, errors}) => {
	return (
		<form>
			<TextInput
				name="title"
				label="Title"
				value={recipe.title}
				onChange={onChange}
				error={errors.title}
			/>

			<TextInput
				name="description"
				label="Description"
				value={recipe.description}
				onChange={onChange}
				error={errors.description}
			/>

			<SelectInput
				name="category"
				label="Category"
				value={recipe.category}
				defaultOption="select category"
				options={categories}
				onChange={onChange}
				error={errors.category} 
			/>

			<button
				type="submit"
				disabled={saving}
				className="btn btn-primary"
				onClick={onSave}
			>
				{saving ? 'saving...' : 'save'}
			</button>

			<button
				type="button"
				disabled={saving}
				className="btn btn-secondary"
				onClick={onCancel}
			>
				{'cancel'}
			</button>
		</form>
	);
};

RecipeForm.defaultProps = {
	saving: false,
	errors: {},
}

RecipeForm.propTypes = {
	recipe: PropTypes.objectOf(PropTypes.any).isRequired,
	categories: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	saving: PropTypes.bool,
	errors: PropTypes.objectOf(PropTypes.any),
};

export default RecipeForm;
