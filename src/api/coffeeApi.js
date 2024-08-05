import axios from 'axios';
import apiV1 from './base';

// const API_URL = 'https://api.sampleapis.com/coffee/hot';
const API_URL = 'https://api-ali.digital-menu.backends.dev/api/category';
  // => food, category, photoGallery
export const fetchCoffeeData = async () => {
  try {
    const response = await axios.get(API_URL);
    // const response=awat apiV1("category")
    return response.data.elements;
  } catch (error) {
    console.error('Error fetching coffee data:', error);
    throw error;
  }
};

export const createCoffeeData = async (newCoffee) => {
  try {
    const response = await axios.post(API_URL, newCoffee);
    return response.data;
  } catch (error) {
    console.error('Error creating coffee data:', error);
    throw error;
  }
};

export const updateCoffeeData = async (id, updatedCoffee) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, updatedCoffee);
    return response.data;
  } catch (error) {
    console.error('Error updating coffee data:', error);
    throw error;
  }
};

export const deleteCoffeeData = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting coffee data:', error);
    throw error;
  }
};
