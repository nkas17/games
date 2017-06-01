import * as actionTypes from './actionTypes';
import RecipeApi from '../api/mockRecipeApi';
import { beginAjaxCall } from './ajaxStatusActions';

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

export const createRecipeSuccess = (recipe) => ({ // eslint-disable-line
	type: actionTypes.CREATE_RECIPE_SUCCESS,
	recipe,
});

export const updateRecipeSuccess = (recipe) => ({ // eslint-disable-line
	type: actionTypes.UPDATE_RECIPE_SUCCESS,
	recipe,
});

/**
 * thunks
 */

export const loadRecipes = () => {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return RecipeApi.getAllRecipes().then(recipes => {
			dispatch(loadRecipesSuccess(recipes));
		}).catch(error => {
			throw(error);
		});
	}
};

export const saveRecipe = (recipe) => {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return RecipeApi.saveRecipe(recipe).then(savedRecipe => {
			recipe.id ? dispatch(updateRecipeSuccess(savedRecipe)) :
				dispatch(createRecipeSuccess(savedRecipe));
		}).catch(error => {
			throw(error);
		});
	}
};
