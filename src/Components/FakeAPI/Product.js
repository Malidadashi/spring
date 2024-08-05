import React from 'react';
import './Product.css';

const Product = ({ coffee }) => {
  return (
    <div className="product">
      <h2>{coffee.categoryName}</h2>
      <p>{coffee.description}</p>
      <img src={coffee.image} alt={coffee.title} className="product-image" />
    </div>
  );
};

export default Product;
