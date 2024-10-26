import React, { useState } from 'react';
import { collection, updateDoc, doc } from 'firebase/firestore';
import { db } from "../firebaseConfig.js"; 
import { toast } from 'react-toastify';
import AdminHeader from './AdminHeader';


const Assignfee = () => {
  const [fee, setFee] = useState(599);
  const [memberId, setMemberId] = useState('');

  const assignFee = async (e) => {
    e.preventDefault();
    try {
      const memberRef = doc(db, 'Members', memberId);
      await updateDoc(memberRef, { fee });
      toast.success("Fee assigned successfully!");
    } catch (error) {
      console.error('Error assigning fee: ', error);
      toast.error("Failed to assign fee.");
    }
  };

  return (
    <div>
      <AdminHeader />
      <h2>Assign Fee</h2>
      <div className="cards">
        <form onSubmit={(e) => assignFee(e)}>
          <input type="text" placeholder="Member ID" value={memberId} onChange={(e) => setMemberId(e.target.value)} />
          <input type="number" placeholder="Fee Amount" value={fee} onChange={(e) => setFee(e.target.value)} />
          <button type="submit">Assign Fee</button>
        </form>
      </div>
    </div>
  );
};

export default Assignfee;
