import React from 'react';
import Memberheader from './Memberheader';

const ViewDetails = () => {
  return (
    <div className="view-details">
      <Memberheader />
      <h2>Gym Details</h2>
      <p><strong>Operating Hours:</strong> 6 AM - 10 PM (Mon-Sun)</p>
      <p><strong>Membership Plans:</strong></p>
      <ul>
        <li>Monthly: Rs. 999</li>
        <li>Quarterly: Rs. 2499</li>
        <li>Yearly: Rs. 8999</li>
      </ul>
      <p><strong>Services Offered:</strong> Personal training, Group classes, Nutrition guidance</p>
    </div>
  );
};

export default ViewDetails;
