
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './images/favicon.png';


const render = () => {
	ReactDOM.render(
		<AppContainer>
			<BrowserRouter >
				<App />
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
