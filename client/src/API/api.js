import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? '/api' 
    : 'http://localhost:5000/api',
  timeout: 10000
});

console.log('NODE_ENV:', process.env.NODE_ENV);


export const fetchProducts = async (params = {}) => {
  try {
    const response = await API.get('/products', { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch products');
  }
};

export const createOrder = (orderData) => API.post('/orders', orderData);