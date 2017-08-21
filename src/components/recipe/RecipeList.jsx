import React from 'react';
import PropTypes from 'prop-types';
import RecipeListRow from './RecipeListRow';

/**
 * List of recipes
 */
const RecipeList = ({ recipes, deleteRecipe }) => (
	<table className="table">
		<thead>
			<tr>
				<th>&nbsp;</th>
				<th>title</th>
				<th>description</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			{recipes.map(recipe =>
				(<RecipeListRow
					key={recipe.id}
					recipe={recipe}
					deleteRecipe={deleteRecipe}
				/>))}
		</tbody>
	</table>
	);

RecipeList.propTypes = {
	/**
	 * list of recipes to display
	 */
	recipes: PropTypes.arrayOf(PropTypes.object).isRequired,

	/**
	 * function to delete a recipe
	 */
	deleteRecipe: PropTypes.func.isRequired,
};

export default RecipeList;
