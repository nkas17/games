import React from 'react';
import {Link} from 'react-router';

const HomePage = () => (
  <div className="jumbotron">
    <h1>Recipe Administration</h1>
    <p>Recipe Management System, also create meal plans and generate grocery lists based on plans</p>
    <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
  </div>
);

export default HomePage;
