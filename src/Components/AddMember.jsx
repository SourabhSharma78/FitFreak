import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { logAction } from "../utils/logAction.js";
import AdminHeader from "./AdminHeader.jsx";
import { ToastContainer} from 'react-toastify';

const AddMember = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const addMember = async (e) => {
    e.preventDefault();
    try {
      const memberRef = collection(db, 'Members');
      const docRef = await addDoc(memberRef, { email, name, isMember: true });
      
      // Log member addition
      await logAction(docRef.id, email, 'ADD_MEMBER', `Added member with name: ${name}`);
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

    return (
        <div className='AddMember'>
            <AdminHeader />
            <div className='cards'>
              <h1> Add Member </h1>
                <form onSubmit={addMember}>
                    <input
                        type="email"
                        placeholder="email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <button type='submit'> Add member </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddMember;
