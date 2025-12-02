<template>
  <v-carousel
    height="500"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in slides" :key="i"
       :src="slide.src"
        cover
    >
      <div class="d-flex fill-height justify-center align-center">
        <div class="text-h2" style="background-color: rgba(0, 0, 0, 0.5); color: white; font-weight: 350; padding: 10px; border-radius: 5px;">
          {{ slide.text }}
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
  import { ref } from 'vue';

  const slides = ref([
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/63/IEAN_Monter%C3%ADa-Colombia.jpg', text: 'Fachada Principal' },
    { src: 'https://adida.org.co/wp-content/uploads/2025/07/3-3.jpg', text: 'Patio Central' },
    { src: 'https://larazon.co/wp-content/uploads/2018/08/Institucion-Educativa-Antonio-Narino-Monteria.jpg', text: 'Aulas de Clase' },
    { src: 'https://www.chicanoticias.com/wp-content/uploads/2023/11/IMG-20231117-WA0063.jpg', text: 'Eventos y Actividades' },
  ]);
</script>

<style scoped>

</style>