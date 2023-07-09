import axios from 'axios';

const API_BASE_URL = 'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io';

export const getAllDishes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dishes/v1/`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching dishes:', error);
    throw error;
  }
};

export const getDishById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dishes/v1/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error while fetching dish with ID ${id}:`, error);
    throw error;
  }
};
