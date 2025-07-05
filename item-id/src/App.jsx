// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './components/Product';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Product Info Viewer</h1>
        <nav>
          <Link to="/product/electronics/101">View Electronics Item 101</Link>
        </nav>

        <Routes>
          <Route path="/product/:category/:itemId" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
