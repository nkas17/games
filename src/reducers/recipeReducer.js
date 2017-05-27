import * as actionTypes from '../actions/actionTypes';
/**
 * recipe reducer
 */

const recipeReducer = (state=[], action) => {
	switch (action.type) {
	case actionTypes.RECIPE_CREATE:
		return [...state,
			Object.assign({}, action.recipe)
		];
	case actionTypes.LOAD_RECIPES_SUCCESS:
		return action.recipes;
	default:
		return state;
	}
}

export default recipeReducer;