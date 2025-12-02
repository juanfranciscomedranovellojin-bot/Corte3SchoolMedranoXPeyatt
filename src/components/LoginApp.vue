<template>
  <div class="login-container">
    <div class="login-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNw3rInBZIaK0AmE6-FcGz2Cm5Ba3rJsVZrA&s=.jpg" alt="Escudo institucional" class="background-logo" />

      <h1 class="login-title" style="text-align: center;">Iniciar sesión</h1>
      <p class="login-subtitle" style="text-align: center;">Accede a tu cuenta</p>

      <form class="login-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Usuario / Correo</label>
          <input
            type="text"
            id="email"
            v-model="username"
            placeholder="Introduce tu usuario"
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            placeholder="••••••••"
          />
        </div>

        <div class="options-row">
          <label class="show-password">
            <input type="checkbox" v-model="showPassword" />
            Mostrar contraseña
          </label>
          <a href="#" class="forgot-link">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" class="login-button" :disabled="authStore.loading">
          {{ authStore.loading ? 'Verificando...' : 'Acceder' }}
        </button>

        <div class="register-text">
          <p>¿Eres nuevo? <a href="#">Regístrate aquí</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'; // Asegúrate que la ruta sea correcta

const router = useRouter();
const authStore = useAuthStore();

const username = ref('');
const password = ref('');
const showPassword = ref(false);

const handleLogin = async () => {
  // 1. Validación visual rápida
  if (!username.value || !password.value) {
    alert("Por favor, llena todos los campos vacíos.");
    return;
  }

  // 2. Llamada al Store (que a su vez llama al servicio)
  const result = await authStore.loginUser({
    username: username.value,
    password: password.value
  });

  // 3. Decisión basada en la respuesta REAL
  if (result.success) {
    router.push('/dashboard'); // O la ruta que uses: '/registro', '/home', etc.
  } else {
    alert(result.message); // Muestra "Credenciales incorrectas" o "Error..."
  }
};
</script>

<style scoped>
/* Estilo actualizado para un look 'Dark Mode' moderno */

/* === Contenedor Principal (Fondo) === */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* Fondo más vibrante y oscuro */
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%); 
  font-family: 'Poppins', sans-serif; /* Fuente moderna */
  color: #e0e0e0;
}

/* === Tarjeta de Login === */
.login-card {
  position: relative;
  /* Fondo casi negro, semitransparente con desenfoque (backdrop-filter) */
  background: rgba(30, 30, 30, 0.9); 
  border: 1px solid #444; 
  border-radius: 1.5rem; /* Más redondeado */
  padding: 3rem 2.5rem; /* Más padding */
  width: 100%;
  max-width: 440px;
  /* Sombra más profunda y moderna */
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08); 
  overflow: hidden;
  /* Efecto de cristal sutil */
  backdrop-filter: blur(5px); 
}

/* === Escudo detrás del formulario === */
.background-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.05; /* Mucho más sutil */
  width: 280px; /* Más grande */
  height: auto;
  z-index: 0;
  /* Efecto de monocromo para que no distraiga */
  filter: grayscale(100%) brightness(1.5); 
  pointer-events: none;
  user-select: none;
}

/* === Capas superiores === */
.login-title,
.login-subtitle,
.login-form {
  position: relative;
  z-index: 2;
}

/* === Títulos === */
.login-title {
  font-size: 2rem;
  font-weight: 700; /* Más audaz */
  color: #4dd0e1; /* Color de acento azul claro */
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em; /* Espaciado sutil */
}

.login-subtitle {
  color: #9e9e9e;
  font-size: 1rem;
  margin-bottom: 2.5rem;
}

/* === Formulario === */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group label {
  font-weight: 500;
  font-size: 0.95rem;
  color: #bdbdbd;
  margin-bottom: 0.4rem;
  display: block;
}

.form-group input {
  width: 100%;
  padding: 1rem 1.25rem; /* Campos más grandes */
  border: 2px solid #555; /* Borde más definido */
  border-radius: 0.75rem;
  background-color: #212121; /* Fondo de campo más oscuro */
  color: #fafafa;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

.form-group input::placeholder {
  color: #757575;
}

.form-group input:focus {
  /* Nuevo color de foco vibrante */
  border-color: #4dd0e1; 
  box-shadow: 0 0 0 3px rgba(77, 208, 225, 0.4); 
  background-color: #282828;
}

/* === Opciones (Checkbox y Link) === */
.options-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
}

.show-password {
  color: #bdbdbd;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.show-password input {
  /* Color del checkbox al tildar */
  accent-color: #4dd0e1; 
  cursor: pointer;
}

.forgot-link {
  color: #4dd0e1;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.forgot-link:hover {
  color: #80deea;
  text-decoration: underline;
}

/* === Botón Principal === */
.login-button {
  /* Color de acento fuerte */
  background-color: #00bcd4; 
  color: #ffffff;
  font-size: 1.1rem; /* Más grande y legible */
  font-weight: 700;
  padding: 1rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  margin-top: 1.2rem;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 15px rgba(0, 188, 212, 0.4);
}
.login-button:disabled {
  background-color: #555;
  cursor: not-allowed;
  box-shadow: none;
}

.login-button:hover:not(:disabled) {
  background-color: #0097a7;
  transform: translateY(-2px); /* Efecto 3D sutil */
  box-shadow: 0 8px 20px rgba(0, 188, 212, 0.6);
}

/* === Enlace de Registro === */
.register-text {
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  color: #a5a5a5;
}

.register-text a {
  color: #4dd0e1;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.register-text a:hover {
  color: #80deea;
  text-decoration: underline;
}

/* === Responsivo === */
@media (max-width: 480px) {
  .login-card {
    padding: 2.5rem 1.5rem;
    margin: 20px; /* Margen para pantallas muy pequeñas */
  }

  .login-title {
    font-size: 1.8rem;
  }
}
</style>