import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home.jsx';
import Admin from './Components/Admin.jsx';
import Member from './Components/Member.jsx';
import Login from './Components/Login.jsx';
import Register from "./Components/Register.jsx";
import SupplimentStore from "./Components/SupplimentStore.jsx";
import Assignfee from "./Components/Assignfee.jsx";
import Diet from "./Components/Diet.jsx";
import ReportExport from './Components/ReportExport.jsx';
import User from './Components/User.jsx';
import AddMember from './Components/AddMember.jsx';
import ManageMembers from './Components/Managemembers.jsx';
import GenerateBills from './Components/GenerateBills.jsx';
import Notifications from './Components/Notifications.jsx';
import NotifyMonthly from './Components/NotifyMonthly.jsx';
import ViewDetails from './Components/ViewDetails.jsx';
import SearchRecords from './Components/SearchRecords.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Admin-only protected routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/update-member" element={<ManageMembers />} />
          <Route path="/assign-fee" element={<Assignfee />} />
          <Route path="/report-export" element={<ReportExport />} />
          <Route path="/notify-monthly" element={<NotifyMonthly />} />
          <Route path="/create-bills" element={<GenerateBills />} />
        </Route>
        
        {/* Admin and Member accessible routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin","member"]} />}>
          <Route path="/store-suppliment" element={<SupplimentStore />} />
          <Route path="/diet-details" element={<Diet />} />
        </Route>
        
        {/* Member-specific routes */}
        <Route element={<ProtectedRoute allowedRoles={["member"]} />}>
          <Route path="/member" element={<Member />} />
          <Route path="/details" element={<ViewDetails />} />
          <Route path="/records" element={<SearchRecords />} />
          <Route path="/bill-notify" element={<Notifications />} />
        </Route>
        
        {/* General User page accessible to non-logged-in users */}
        <Route path="/user" element={<User />} />
      </Routes>
      
      <ToastContainer />
    </>
  );
}

export default App;
