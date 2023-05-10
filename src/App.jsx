import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Login from './screens/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Nav } from 'react-bootstrap';
//import './App.css';

export default function App() {
  return (
    <>
    <Router>
    <Navbar />
        <div className="d-flex flex-column min-vh-100">
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
          </div>
    <Footer />
</Router>
    </>
  );
}
