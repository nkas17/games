import React from 'react';
import PropTypes from 'prop-types';

/**
 * A Row of a recipe
 */
const RecipeListRow = ({recipe}) => {
	return (
		<tr>
			<td>&nbsp;</td>
			<td>{recipe.title}</td>
			<td>{recipe.description}</td>
		</tr>
	)
}

RecipeListRow.propTypes = {
	/**
	 * the recipe to display
	 */
	recipe: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default RecipeListRow;