<template>
  <v-app id="inspire">
    <v-app-bar
      :elevation="1"
      height="120"
      color="indigo-darken-3"
      dark
      class="text-white"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="ml-1"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title class="text-h5 font-weight-bold ml-4">
        <v-avatar
          class="mr-3"
          :image="escudoImage"
          size="56"
          rounded="circle"
        ></v-avatar>
        Institución Educativa Antonio Nariño
      </v-app-bar-title>

      <template v-slot:append>
        <v-btn icon>
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-sheet
        class="pa-4 d-flex flex-column align-center"
        color="indigo-lighten-5"
      >
        <v-avatar color="indigo-darken-1" size="64" class="mb-2">
            <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>
        <div class="text-subtitle-1 font-weight-bold">Peyatelpro@gmail.com</div>
        <div class="text-caption text-medium-emphasis">Usuario</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list density="comfortable" nav>
        <v-list-item
          v-for="data in links"
          :key="data.icono"
          :prepend-icon="data.icono"
          :title="data.titulo"
          :to="data.enlace"
          color="indigo-darken-3"
          rounded="xl" 
          class="my-2 mx-2"
        ></v-list-item>
        
        <v-divider class="my-3"></v-divider>

        <v-list-item
          prepend-icon="mdi-exit-run" 
          title="Cerrar Sesión" 
          @click="logout" 
          color="red-darken-2" 
          rounded="xl"
          class="my-2 mx-2"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-3">
      <v-container class="py-6 px-4" fluid>
        <v-row>
          <v-col cols="12">
            <v-card elevation="4" rounded="xl">
              <v-list lines="one">
                <v-list-subheader class="text-h6 font-weight-bold py-3 px-4">
                    Panel de Control
                </v-list-subheader>
                <v-divider></v-divider>
                <router-view />
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import escudoImage from '@/assets/escudo.jpeg' 

const router = useRouter()
const drawer = ref(false)


const links = [
  { icono: 'mdi-home-outline', titulo: 'Inicio', enlace: '/dashboard/index' }, 
  { icono: 'mdi-notebook-multiple-outline', titulo: 'Asignaturas', enlace: '/dashboard/asignaturas' },
  { icono: 'mdi-party-popper', titulo: 'Eventos', enlace: '/dashboard/eventos' }, 
  { icono: 'mdi-card-account-details-star-outline', titulo: 'Matrícula', enlace: '/dashboard/matricula' }, 
  { icono: 'mdi-account-group-outline', titulo: 'Registro', enlace: '/dashboard/registro' }, 
  { icono: 'mdi-comment-question-outline', titulo: 'Ayuda', enlace: '/dashboard/ayuda' }, 
]

const logout = () => {
  console.log('Cerrando sesión y redirigiendo a la página principal.')
  router.push('/')
}
</script>