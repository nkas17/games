import * as actionTypes from './actionTypes';
import RecipeApi from '../api/mockRecipeApi';

/**
 * recipe actions
 * 
 */

export const createRecipe = (recipe => ({ // eslint-disable-line
	type: actionTypes.RECIPE_CREATE,
	recipe,
})
);

export const loadRecipesSuccess = (recipes) => ({ // eslint-disable-line
	type: actionTypes.LOAD_RECIPES_SUCCESS,
	recipes,
});

/**
 * thunks
 */

export const loadRecipes = () => {
	return (dispatch) => {
		return RecipeApi.getAllRecipes().then(recipes => {
			dispatch(loadRecipesSuccess(recipes));
		}).catch(error => {
			throw(error);
		});
	}
}
