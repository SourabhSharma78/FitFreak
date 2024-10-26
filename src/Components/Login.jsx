import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { logAction } from '../utils/logAction.js'; // Import the log helper function
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;
  
      if (user) {
        if (email === "sourabhsjarma78@gmail.com" && pass === "782001") {
          navigate("/admin");
        } else {
          await logAction(user.uid, user.email, 'LOGIN', 'User logged in successfully.');
          navigate("/member");
        }
      }
    } catch (err) {
      await logAction(null, email, 'LOGIN_FAILED', err.message);
      console.error("Error signing in:", err.message);
    }
  };
  

  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password..."
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          Not registered? <Link to="/register">Register</Link>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
