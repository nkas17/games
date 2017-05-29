import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => (
	<div>
		<div className="jumbotron">
			<h2>recipe administration</h2>
			<hr />
			<p>recipe administration system, also create meal plans and generate grocery lists based on plans</p>
			<Link to="about" className="btn btn-primary btn-lg">learn more</Link>
		</div>
		<div className="jumbotron">
			<h2>recipes</h2>
			<hr />
			<p>here we can see our recipes</p> 
			<Link to="recipe" className="btn btn-primary btn-lg">recipes</Link>
		</div>
	</div>
);

export default HomePage;
