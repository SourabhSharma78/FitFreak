import React, { useState, useEffect } from 'react';
import { app } from '../firebaseConfig.js';
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import AdminHeader from './AdminHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageMembers = () => {
    const [members, setMembers] = useState([]);
    const [editingMemberId, setEditingMemberId] = useState(null); 
    const [updatedName, setUpdatedName] = useState('');
    const [updatedEmail, setUpdatedEmail] = useState('');
    const db = getFirestore(app);

    // Fetch all members from Firestore
    const fetchMembers = async () => {
        try {
            const membersCollection = collection(db, 'Members');
            const membersSnapshot = await getDocs(membersCollection);
            const membersList = membersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMembers(membersList);
        } catch (error) {
            console.error('Error fetching members:', error);
            toast.error('Error fetching members.');
        }
    };

    // Function to update a member
    const updateMember = async (memberId) => {
        try {
            const memberRef = doc(db, 'Members', memberId);
            await updateDoc(memberRef, {
                name: updatedName,
                email: updatedEmail
            });
            toast.success('Member updated successfully');
            setEditingMemberId(null); // Exit edit mode
            fetchMembers(); // Refresh the list after updating
        } catch (error) {
            console.error('Error updating member:', error);
            toast.error('Error updating member.');
        }
    };

    // Function to delete a member
    const deleteMember = async (memberId) => {
        try {
            const memberRef = doc(db, 'Members', memberId);
            await deleteDoc(memberRef);
            toast.success('Member deleted successfully');
            fetchMembers(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting member:', error);
            toast.error('Error deleting member.');
        }
    };

    useEffect(() => {
        fetchMembers(); 
    }, []);

    return (
        <div className='ManageMembers'>
            <AdminHeader />
            <div className='update'>
                <h2>Manage Members</h2>
                <ul>
                    {members.length === 0 ? (
                        <p>No members found</p>
                    ) : (
                        members.map((member) => (
                            <li key={member.id}>
                                {editingMemberId === member.id ? (
                                    // Edit mode
                                    <div>
                                        <input
                                            type='text'
                                            value={updatedName}
                                            placeholder="Updated name..."
                                            onChange={(e) => setUpdatedName(e.target.value)}
                                        />
                                        <input
                                            type='email'
                                            value={updatedEmail}
                                            placeholder="Updated email..."
                                            onChange={(e) => setUpdatedEmail(e.target.value)}
                                        />
                                        <button onClick={() => updateMember(member.id)}>Save</button>
                                        <button onClick={() => setEditingMemberId(null)}>Cancel</button>
                                    </div>
                                ) : (
                                    // Display member details with options to edit or delete
                                    <div>
                                        <span>{member.name} ({member.email})</span>
                                        <button onClick={() => {
                                            setEditingMemberId(member.id);
                                            setUpdatedName(member.name);
                                            setUpdatedEmail(member.email);
                                        }}>Edit</button>
                                        <button onClick={() => deleteMember(member.id)}>Delete</button>
                                    </div>
                                )}
                            </li>
                        ))
                    )}
                </ul>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ManageMembers;
