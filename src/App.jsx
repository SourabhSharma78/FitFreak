import React from 'react';
import { Routes , Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home.jsx';
import Admin from './Components/Admin.jsx';
import Member from "./Components/Member.jsx";
import Login from './Components/Login.jsx';
import Register from "./Components/Register.jsx";

function App() {
  

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/member" element={<Member />} />
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App

