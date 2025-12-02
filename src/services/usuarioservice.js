import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

export default {
  async registerUser(userData) {
    // POST crea el ID automático
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  },

  async getUsers() {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  },

  async updateUser(id, userData) {
    const response = await axios.put(`${API_URL}/users/${id}`, userData);
    return response.data;
  },

  async deleteUser(id) {
    await axios.delete(`${API_URL}/users/${id}`);
    return true;
  }
};