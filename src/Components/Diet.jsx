import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig.js"; 
import { toast } from 'react-toastify';
import AdminHeader from './AdminHeader';


const DietDetails = () => {
  const [dietName, setDietName] = useState('');
  const [description, setDescription] = useState('');

  const addDiet = async (e) => {
    e.preventDefault();
    try {
      const diet = {
        dietName,
        description,
        dateAdded: new Date().toISOString()
      };
      const dietsCollection = collection(db, 'Diets');
      await addDoc(dietsCollection, diet);
      toast.success("Diet plan added successfully!");
    } catch (error) {
      console.error('Error adding diet: ', error);
      toast.error("Failed to add diet.");
    }
  };

  return (
    <div>
      <AdminHeader />
      <h2>Diet Details</h2>
      <div className="cards">
        <form onSubmit={(e) => addDiet(e)}>
          <input type="text" placeholder="Diet Name" value={dietName} onChange={(e) => setDietName(e.target.value)} />
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button type="submit">Add Diet Plan</button>
        </form>
      </div>
    </div>
  );
};

export default DietDetails;
