// src/components/Product.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { category, itemId } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Category: {category}</p>
      <p>Item ID: {itemId}</p>
    </div>
  );
};

export default Product;
