import React from 'react';
import PropTypes from 'prop-types';
import RecipeListRow from './RecipeListRow'

/**
 * List of recipes
 */
const RecipeList = ({recipes}) => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>&nbsp;</th>
					<th>title</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				{recipes.map(recipe =>
				(<RecipeListRow 
					key={recipe.id} 
					recipe={recipe}
				/>)
				)}
			</tbody>
		</table>	
	)
}

RecipeList.propTypes = {
	/**
	 * list of recipes to display
	 */
	recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default RecipeList;
