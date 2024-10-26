import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import Memberheader from './Memberheader';

const Notifications = () => {
    const [generalNotifications, setGeneralNotifications] = useState([]);
    const [billReceipts, setBillReceipts] = useState([]);
    const [activeTab, setActiveTab] = useState('general'); // State to manage active tab
    const db = getFirestore(app);

    // Fetch general notifications
    const fetchGeneralNotifications = async () => {
        try {
            const notificationsCollection = collection(db, 'Notifications');
            const notificationsSnapshot = await getDocs(notificationsCollection);
            const notificationsList = notificationsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setGeneralNotifications(notificationsList);
        } catch (error) {
            console.error('Error fetching general notifications:', error);
        }
    };

    // Fetch bill receipts from the 'Bills' collection
    const fetchBillReceipts = async () => {
        try {
            const billsCollection = collection(db, 'Bills');
            const billsSnapshot = await getDocs(billsCollection);

            // Map the bills data to a presentable format
            const billsList = billsSnapshot.docs.map(doc => ({
                id: doc.id,
                memberName: doc.data().memberName,
                amount: doc.data().amount,
                date: new Date(doc.data().date).toLocaleDateString(), // to format date for readability
                status: doc.data().status,
            }));

            setBillReceipts(billsList);
        } catch (error) {
            console.error('Error fetching bill receipts:', error);
        }
    };

    useEffect(() => {
        fetchGeneralNotifications();
        fetchBillReceipts();
    }, []);

    return (
        <div className="Notifications">
            <Memberheader />
            <div className="tabs">
                <button onClick={() => setActiveTab('general')}>General Notifications</button>
                <button onClick={() => setActiveTab('receipts')}>Bill Receipts</button>
            </div>

            <div className="notification-list">
                {activeTab === 'general' ? (
                    generalNotifications.length > 0 ? (
                        generalNotifications.map(notification => (
                            <div key={notification.id}>
                                <p>{notification.message} - {notification.date}</p>
                            </div>
                        ))
                    ) : (
                        <p>No general notifications available.</p>
                    )
                ) : (
                    billReceipts.length > 0 ? (
                        billReceipts.map(receipt => (
                            <div key={receipt.id} className="receipt-item">
                                <h3>Bill Receipt</h3>
                                <p><strong>Member Name:</strong> {receipt.memberName}</p>
                                <p><strong>Amount:</strong> Rs. {receipt.amount}</p>
                                <p><strong>Date:</strong> {receipt.date}</p>
                                <p><strong>Status:</strong> {receipt.status}</p>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <p>No bill receipts available.</p>
                    )
                )}
            </div>

          
        </div>
    );
};

export default Notifications;
