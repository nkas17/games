import React from 'react';
import {Link} from 'react-router';

const HomePage = () => (
  <div>
    <div className="jumbotron">
      <h2>Recipe Administration</h2>
      <p>Recipe Management System, also create meal plans and generate grocery lists based on plans</p>
      <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
    </div>
    <div className="jumbotron">
      <h2>Recipes</h2>
      <p>Here we can see our recipes</p> 
      <Link to="recipes" className="btn btn-primary btn-lg">Recipes</Link>
    </div>
  </div>
);

export default HomePage;
