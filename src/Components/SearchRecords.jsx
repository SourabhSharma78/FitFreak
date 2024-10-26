import React, { useState, useEffect } from 'react';
import {collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Memberheader from "./Memberheader.jsx"


const SearchRecords = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  // To fetch all records from the "Records" collection on component mount
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const recordsCollection = collection(db, 'Records');
        const recordsSnapshot = await getDocs(recordsCollection);
        const recordsList = recordsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRecords(recordsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching records: ", error);
        setLoading(false);
      }
    };

    fetchRecords();
  }, [db]);

  // To filter the records based on the search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredRecords(records);
    } else {
      setFilteredRecords(records.filter(record =>
        record.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }
  }, [searchTerm, records]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-records">
            <Memberheader />

      <h2>Search Records</h2>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />

      {loading ? (
        <p>Loading records...</p>
      ) : filteredRecords.length > 0 ? (
        <ul>
          {filteredRecords.map(record => (
            <li key={record.id}>
              <h3>{record.name}</h3>
              <p>{record.description}</p>
              <p><strong>Time:</strong> {record.time}</p>
              <p><strong>Trainer:</strong> {record.trainer}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No records found</p>
      )}
    </div>
  );
};

export default SearchRecords;
