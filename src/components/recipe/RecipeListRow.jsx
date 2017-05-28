import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/**
 * A Row of a recipe
 */
const RecipeListRow = ({recipe}) => {
	return (
		<tr>
			<td>&nbsp;</td>
			<td><Link to={`recipe/${recipe.id}`} >{recipe.title}</Link></td>
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
