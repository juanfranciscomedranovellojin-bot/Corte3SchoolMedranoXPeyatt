<template>
  <v-footer
    class="bg-primary text-black d-flex flex-column pt-8 pb-4"
    elevation="10"
  >
    <v-container class="fondo">
      <v-row justify="center" text-align="center" class="text-center">
        <!-- Información de Contacto -->
        <v-col cols="12" md="6" class="mb-4 mb-md-0">
          <h4 class="text-h6 font-weight-bold mb-3">Contáctanos</h4>
          <p class="text-center mb-3">
            <v-icon start size="small">mdi-map-marker</v-icon>
            Dirección del Colegio, Montería, Córdoba, Colombia
          </p>
          <p class="text-center mb-3">
            <v-icon start size="small">mdi-phone</v-icon>
            (000) 123-4567
          </p>
          <p class="text-body-2">
            <v-icon start size="small">mdi-email</v-icon>
            info@colegioantonionariño.edu.co
          </p>
        </v-col>  
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
  
</script>

<style scoped>
  .bg-primary {
    background-color: var(--v-theme-primary) !important;
  }
  .text-black {
    color: rgb(0, 0, 0) !important;
  }
  .fondo {
    background-color: #1976D2;
    line-height: 1.6;
  }
</style>