import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig.js'; // Import your firebase auth instance
import {useNavigate} from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [fname, setFname] = useState("");
  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      navigate("/member");
    } catch (err) {
      console.log("Error during registration:", err.message);
    }
  };

  return (
    <div className='register'>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input 
          type="email" 
          placeholder='Email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder='Password' 
          value={pass} 
          onChange={(e) => setPass(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder='Full Name' 
          value={fname} 
          onChange={(e) => setFname(e.target.value)} 
          required 
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
