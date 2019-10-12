import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';
import './images/favicon.png';

const render = () => {
	ReactDOM.render(<App />, document.getElementById('app'));
};

render();

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/App', () => {
		render('App');
	});
}
