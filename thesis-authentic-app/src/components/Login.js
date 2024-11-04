// src/components/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link } from 'react-router-dom';
import './Auth.css'; // Import the CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User logged in successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container"> {/* Flexbox container */}
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <Link to="/" className="link">Don't have an account? Sign up here</Link>
      </form>
    </div>
  );
}

export default Login;
