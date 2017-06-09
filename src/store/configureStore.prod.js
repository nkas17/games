import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
	// Add wrapper to enable redux dev tools
	// @see https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
