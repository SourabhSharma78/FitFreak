import React from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig.js"; 
import { toast } from 'react-toastify';
import AdminHeader from './AdminHeader';



const NotifyMonthly = () => {
  const sendMonthlyNotification = async () => {
    try {
      const membersCollection = collection(db, 'Members');
      const membersSnapshot = await getDocs(membersCollection);
      const notificationsCollection = collection(db, 'Notifications');

      for (const member of membersSnapshot.docs) {
        const notification = {
          memberId: member.id,
          message: `Your monthly fee is due. Please make payment.`,
          date: new Date().toISOString(),
          status: 'unread'
        };
        await addDoc(notificationsCollection, notification);
      }
      toast.success("Monthly notifications sent!");
    } catch (error) {
      console.error('Error sending notifications: ', error);
      toast.error("Failed to send notifications.");
    }
  };

  return (
    <div>
              <AdminHeader />

      <h2>Monthly Notifications</h2>
    <div className='cards'>
    <button onClick={sendMonthlyNotification}>Send Notifications</button>

    </div>
    </div>
  );
};

export default NotifyMonthly;
