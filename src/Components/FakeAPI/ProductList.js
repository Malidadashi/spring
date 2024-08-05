import React, { useState, useEffect } from 'react';
import { fetchCoffeeData } from '../../api/coffeeApi';
import Product from './Product';
import './ProductList.css';

const ProductList = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    const getCoffeeData = async () => {
      try {
        const data = await fetchCoffeeData();
        setCoffeeData(data);
      } catch (error) {
        console.error('Error fetching coffee data:', error);
      }
    };

    getCoffeeData();
  }, []);

  return (
    <div className="product-list">
      {coffeeData.map((coffee) => (
        <Product key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

export default ProductList;
