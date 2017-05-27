
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import {loadRecipes} from './actions/recipeActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadRecipes());

const render = () => {
	ReactDOM.render(
  <AppContainer>
    <BrowserRouter >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </AppContainer>,
    document.getElementById('app')
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/App', () => {
		render('App')
	});
}
