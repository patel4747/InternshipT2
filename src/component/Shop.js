// Shop.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Shop = () => {
  const { productId } = useParams();

  return (
    <div>
      <h2>Shop Page</h2>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default Shop;
