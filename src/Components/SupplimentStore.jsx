import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig.js";
import { toast } from 'react-toastify';
import AdminHeader from './AdminHeader';


const SupplementStore = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const addSupplement = async (e) => {
    e.preventDefault();
    try {
      const supplement = {
        name: productName,
        price,
        dateAdded: new Date().toISOString()
      };
      const supplementsCollection = collection(db, 'Supplements');
      await addDoc(supplementsCollection, supplement);
      toast.success("Supplement added successfully!");
    } catch (error) {
      console.error('Error adding supplement: ', error);
      toast.error("Failed to add supplement.");
    }
  };

  return (
    <div>
      <AdminHeader />
      <h2>Supplement Store</h2>
      <div className="cards">
        <form onSubmit={(e) => addSupplement(e)}>
          <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
          <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <button type="submit">Add Supplement</button>
        </form>
      </div>
    </div>
  );
};

export default SupplementStore;
