import React from 'react';
import AdminHeader from './AdminHeader';
import {Link} from "react-router-dom";


const Admin = () => {
  return (
    <div className='Admin'> 
    <AdminHeader />
    <div className='admin-nav'>
        <div className='cards'><Link to="/create-bills"><button> Create Bills </button></Link></div>
        <div className='cards'><Link to="/assign-fee"><button> Assign Fee </button></Link></div>
        <div className='cards'><Link to="/notify-monthly"><button> Monthy Notifications </button></Link></div>
        <div className='cards'><Link to="/report-export"><button> Report Export  </button></Link></div>
        <div className='cards'><Link to="/store-suppliment"><button> Suppliment store  </button></Link></div>
        <div className='cards'><Link to="/diet-details"><button> Diet </button></Link></div>

    </div>
    </div>
  );
};

export default Admin;

