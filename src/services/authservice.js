import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

export default {
  async login(username, password) {
    // 1. BLOQUEO DE CAMPOS VACÍOS (Requisito 1)
    if (!username || !password || username.trim() === '' || password.trim() === '') {
      return { success: false, message: '¡Debes llenar el usuario y la contraseña para iniciar sesión!' };
    }

    try {
      // 2. Petición a la API (Se asume que JSON Server está apuntando a db_modified.json)
      const response = await axios.get(`${API_URL}/users`, {
        params: { username } // Buscamos solo por usuario primero
      });

      // 3. Verificación estricta
      if (response.data.length > 0) {
        const user = response.data[0];
        
        // Comparamos la contraseña EXACTA (string comparison)
        if (user.password === password) {
          localStorage.setItem('user', JSON.stringify(user)); 
          return { success: true, user: user };
        }
      }
      
      return { success: false, message: 'Credenciales incorrectas.' };
    } catch (error) {
      console.error('Error Auth:', error);
      return { success: false, message: 'Error de conexión con el servidor.' };
    }
  },

  logout() {
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }
};