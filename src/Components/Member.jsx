import React from 'react';
import Memberheader from './Memberheader';
import {Link} from "react-router-dom"

const Member = () => {
  return (
    <div className='Member'>
    <Memberheader/>
      <div className='member-body'>
      <div className='cards'>
        <Link to="/bill-receipts"><button> View bill receipts</button></Link>
      </div>
      <div className='cards'>
      <Link to="/bill-notify"><button>View Bill Notifications</button></Link>
      </div>
      </div>
    </div>
  );
};

export default Member;