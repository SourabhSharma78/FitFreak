import React, { useState } from 'react';
import { collection, addDoc , getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { logAction } from '../utils/logAction.js';
import AdminHeader from "./AdminHeader.jsx"

const GenerateBills = () => {
  const generateBills = async () => {
    const membersCollectionRef = collection(db, 'Members');
    const membersSnapshot = await getDocs(membersCollectionRef);

    membersSnapshot.forEach(async (doc) => {
      const billData = {
        memberId: doc.id,
        amount: 599,
        timestamp: new Date(),
      };
      const billRef = collection(db, 'Bills');
      await addDoc(billRef, billData);

      // Log the bill generation
      await logAction(doc.id, doc.data().email, 'GENERATE_BILL', `Generated bill of Rs. 599 for member`);
    });
  };

  return (
    <>
    <AdminHeader />
    <div className='cards'>
      <button onClick={generateBills}>Generate Bills</button>
    </div>
    </>
    
  );
};

export default GenerateBills;
