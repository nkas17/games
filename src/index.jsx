
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import { loadRecipes } from './actions/recipeActions';
import { loadCategories } from './actions/categoryActions';
import './styles/styles.css';
// import '../node_modules/milligram/dist/milligram.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './images/favicon.ico';

const store = configureStore();
store.dispatch(loadRecipes());
store.dispatch(loadCategories());

const render = () => {
	ReactDOM.render(
		<AppContainer>
			<BrowserRouter >
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</AppContainer>,
    document.getElementById('app'));
};

render();

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/App', () => {
		render('App');
	});
}
