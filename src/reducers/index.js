import {combineReducers} from 'redux';
import recipes from './recipeReducer';
import categories from './categoryReducer';

const rootReducer = combineReducers({
	recipes,
	categories,
});

export default rootReducer;
