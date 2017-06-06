import CategoryApi from '../api/mockCategoryApi';
import * as actionTypes from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export const loadCategoriesSuccess = (categories) => ({ // eslint-disable-line
	type: actionTypes.LOAD_CATEGORIES_SUCCESS,
	categories,
});

/**
 * thunks
 */

export const loadCategories = () => (dispatch) => {
	dispatch(beginAjaxCall());
	return CategoryApi.getAllCategories().then((categories) => {
		dispatch(loadCategoriesSuccess(categories));
	}).catch((error) => {
		throw (error);
	});
};
