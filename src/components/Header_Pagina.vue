<template>
  <v-app-bar
    :elevation="4"
    height="100"
    color="primary" class="d-flex align-center"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="ml-2"></v-app-bar-nav-icon>
    </template>

    <!-- Logo del colegio (opcional) -->
    <v-img :class="'rounded-image'"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNw3rInBZIaK0AmE6-FcGz2Cm5Ba3rJsVZrA&s=.jpg"
      alt="Logo Antonio Nariño"
      max-height="50"
      max-width="60"
      contain
      class="mr-4"
      v-if="showLogo"
    ></v-img>

    <v-app-bar-title class="font-weight-bold text-h5">
      Institución Educativa Antonio Nariño
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn
        @click="dialog = true"
        color="secondary"
        variant="flat"
        class="mr-4"
      >
        Iniciar Sesión
      </v-btn>
    </template>
  </v-app-bar>

  <v-dialog v-model="dialog" width="600px">
    <LoginApp></LoginApp>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import LoginApp from './LoginApp.vue'; 

const dialog = ref(false);
const showLogo = ref(true); 
</script>

<style scoped>
.rounded-image {
  border-radius: 60%;
}
</style>

<script>

const antonioNariñoTheme = {
  dark: false,
  colors: {
    primary: '#1976D2', 
    secondary: '#FFA000', 
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  }
}

</script>