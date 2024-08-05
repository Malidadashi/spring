// src/components/CategoryList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CategoryList.css';

const CategoryList = ({ onCategoryClick }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://api-ali.digital-menu.backends.dev/api/food')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => onCategoryClick(category.id)}>
            {category.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
