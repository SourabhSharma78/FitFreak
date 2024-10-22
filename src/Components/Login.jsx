// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../firebaseConfig';
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const [email , setemail] = useState();
  const [pass , setpass] = useState();
  const navigate = useNavigate();

 const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth,email,pass);
      

      if(email == "sourabhsjarma78@gmail.com" && pass == "782001"){
        navigate("/admin");
      }
      else{
        navigate("/member");
      }
      

    }
    catch(err){
      console.log(err);
    }
 }
  return (
    <div className='login'>
      <div className='container'>
        <h1> Login </h1>
        <form onSubmit={(e) => {handleSubmit(e)}}>
        <input type="email" placeholder='email....' value={email} onChange={(e) => {setemail(e.target.value)}} required />
        <input type="password" placeholder='password....' value={pass} onChange={(e) => {setpass(e.target.value)}} required />
        <button type='submit'> Login </button>
        Not registered ?<a href="/register">register</a>
        </form>
      </div>
      
    </div>
  );
};

export default Login;