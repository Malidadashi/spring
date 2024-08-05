// src/components/FoodList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FoodList.css';

const FoodList = ({ categoryId }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (categoryId) {
      axios.get(`https://api-ali.digital-menu.backends.dev/api/food/${categoryId}`)
        .then(response => setFoods(response.data))
        .catch(error => console.error('Error fetching foods:', error));
    }
  }, [categoryId]);

  return (
    <div className="food-list">
      <h2>Foods</h2>
      <ul>
        {foods.map(food => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
