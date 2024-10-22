import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='Home' >
      <div className='header'>
        <img src="./logo.svg" alt="" />
      </div>
      <div className='TagLine'>
      <h1> Welcome , to Fitfreak . </h1>
      <p> Take Your first step towards Your fitness Journey with the best .</p>
      
      <Link to="/login"><button > Login </button></Link>
      </div>
    </div>
  );
};

export default Home;