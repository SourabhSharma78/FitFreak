import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const db = getFirestore();

export const logAction = async (userId, email, action, details) => {
  try {
    const logsCollectionRef = collection(db, 'Logs');
    await addDoc(logsCollectionRef, {
      userId,
      email,
      action,
      details,
      timestamp: serverTimestamp() // Firebase server timestamp for consistency
    });
    console.log("Log entry added:", action);
  } catch (error) {
    console.error("Error logging action:", error);
  }
};
