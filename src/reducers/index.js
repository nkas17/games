import { combineReducers } from 'redux';
import recipes from './recipeReducer';
import categories from './categoryReducer';
import numAjaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	recipes,
	categories,
	numAjaxCallsInProgress,
});

export default rootReducer;
