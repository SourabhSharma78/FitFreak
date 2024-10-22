import React from 'react';
import { Link } from 'react-router-dom';

const Memberheader = () => {
  return (
    <div className='Memberheader'>
        <div className='logo'><img src="./logo.svg" alt="" /> <h3> FitFreak </h3></div>
        <div className='nav'>
            <Link to="/login"><button> Login </button></Link>
        </div>
    </div>
  );
};

export default Memberheader;