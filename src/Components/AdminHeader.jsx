import React from 'react';
import {Link} from "react-router-dom";

const AdminHeader = () => {
  return (
    <div className='AdminHeader'>
        <div className='logo'><img src="./logo.svg" alt="" /> <h3> FitFreak </h3></div>
        <div className='nav'>
            <Link to="/add-member"><button> Add member</button></Link>
            <Link to="/update-member"><button>Update/delete Member</button></Link>
        </div>
    </div>
  );
};

export default AdminHeader;