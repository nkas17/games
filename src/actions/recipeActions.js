import * as actionTypes from './actionTypes';

/**
 * recipe actions
 * 
 */

export const createRecipe = (recipe) => ({ // eslint-disable-line
	type: actionTypes.RECIPE_CREATE,
	recipe,
});
