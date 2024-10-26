import React from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../firebaseConfig.js"; 
import { CSVLink } from 'react-csv';
import AdminHeader from './AdminHeader';



const ReportExport = () => {
  const [reportData, setReportData] = React.useState([]);

  const generateReport = async () => {
    try {
      const billsCollection = collection(db, 'Bills');
      const billsSnapshot = await getDocs(billsCollection);
      const billsData = billsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReportData(billsData);
    } catch (error) {
      console.error('Error generating report: ', error);
    }
  };

  return (
    <div>
      <AdminHeader />
      <h2>Report Export</h2>
      <div className="cards">
      <button onClick={generateReport}>Generate Report</button>
      </div>      
      {reportData.length > 0 && (
        <CSVLink data={reportData} filename="bills_report.csv">
          Download CSV
        </CSVLink>
      )}
    </div>
  );
};

export default ReportExport;
