import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/ContextReducer';
//import './App.css';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="d-flex flex-column min-vh-100">
          <Routes >
            <Route exact path="/" element={<Home />} />
            <Route exact path="/myorders" element={<MyOrders />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}
