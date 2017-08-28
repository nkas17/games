import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
	<div>
		<div className="jumbotron">
			<h2>tic tac toe</h2>
			<hr />
			<p>{"let's play tic tac toe"}</p>
			<Link to="play" className="btn btn-primary btn-lg">play</Link>
		</div>
	</div>
);

export default HomePage;
