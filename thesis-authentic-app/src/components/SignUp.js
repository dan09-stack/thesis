// src/components/SignUp.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link } from 'react-router-dom';
import './Auth.css'; // Import the CSS file

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container"> {/* Flexbox container */}
      <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
        <Link to="/login" className="link">Already have an account? Login here</Link>
      </form>
    </div>
  );
}

export default SignUp;
