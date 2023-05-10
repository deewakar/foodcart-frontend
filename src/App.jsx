import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Login from './screens/Login';
import Navbar from './components/Navbar';
import { Nav } from 'react-bootstrap';
//import './App.css';

export default function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
</Router>
    </>
  );
}
