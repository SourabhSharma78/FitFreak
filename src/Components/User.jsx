import React from 'react';
import {Link} from "react-router-dom";



const User = () => {
  return (
    <>
    <div className='user'>
        <div className='logo'><img src="./logo.svg" alt="" /> <h3> FitFreak </h3></div>
        <div className='nav'>
            <Link to="/login"><button> Login </button></Link>
        </div>
    </div>
    <div className='cards'>
        <Link to="/details"><button> View details </button></Link>
    </div>
    <div className='cards'>
        <Link to="/records"><button> Search Records </button></Link>
    </div>
</>
  );
};

export default User;