// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp'; // SignUp will be the home page
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} /> {/* Set SignUp as the home page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
