<template>
  <div class="registro">
    <div class="header-bar">
      <div>
        <h2>Panel de Usuarios</h2>
        <p v-if="authStore.user" class="user-info">
          Sesión activa: <strong>{{ authStore.user.nombre }}</strong> 
          <span class="role-badge">{{ authStore.userRole }}</span>
        </p>
      </div>
      <v-btn color="error" variant="outlined" size="small" @click="authStore.logoutUser()">
        <v-icon start>mdi-logout</v-icon> Cerrar Sesión
      </v-btn>
    </div>

    <div class="action-cards">
      
      <div v-if="isAdmin" class="action-card primary" @click="abrirDialogoCrear">
        <div class="icon">
          <v-icon size="large" color="#1a3a6e">mdi-account-plus</v-icon>
        </div>
        <h3>Nuevo Usuario</h3>
        <p>Crear cuenta para Admin, Secretario, Docente o Estudiante</p>
      </div>

      <div v-else class="action-card disabled">
        <div class="icon">
          <v-icon size="large" color="#999">mdi-lock</v-icon>
        </div>
        <h3>Gestión Restringida</h3>
        <p>Solo administradores y secretarios pueden gestionar usuarios</p>
      </div>
      
      <div class="action-card secondary">
        <div class="icon">
          <v-icon size="large" color="#1a3a6e">mdi-account-group</v-icon>
        </div>
        <h3>Total Usuarios</h3>
        <p>{{ listaUsuarios.length }} usuarios registrados</p>
      </div>
    </div>

    <div class="recent-table"> 
      <h3>Directorio de Usuarios</h3>
      
      <div class="users-grid-container">
        <div v-if="loading" class="loading-text">Cargando sistema...</div>
        
        <div v-else class="users-grid">
          <div 
            v-for="usuario in listaUsuarios" 
            :key="usuario.id" 
            class="user-card"
            :class="obtenerClaseRol(usuario.role)"
          >
            <div class="card-top">
              <span class="role-tag">{{ usuario.role }}</span>
              
              <div class="card-actions" v-if="isAdmin">
                <v-btn icon="mdi-pencil" size="x-small" variant="text" color="blue" @click="editarUsuario(usuario)">
                  <v-tooltip activator="parent" location="top">Editar</v-tooltip>
                </v-btn>
                
                <v-btn 
                  v-if="usuario.id !== authStore.user.id"
                  icon="mdi-delete" size="x-small" variant="text" color="red" @click="confirmarEliminacion(usuario)"
                >
                  <v-tooltip activator="parent" location="top">Eliminar</v-tooltip>
                </v-btn>
              </div>
            </div>
            
            <div class="card-content">
              <h4>{{ usuario.nombre }}</h4>
              <p class="info-row"><v-icon size="x-small">mdi-account</v-icon> {{ usuario.username }}</p>
              <p class="info-row"><v-icon size="x-small">mdi-email</v-icon> {{ usuario.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <v-dialog v-model="dialogo" max-width="500px" persistent>
      <v-card>
        <v-card-title class="bg-primary text-white">
          {{ editando ? 'Editar Usuario' : 'Nuevo Usuario' }}
        </v-card-title>

        <v-card-text class="pt-4">
          <v-form ref="formRef" @submit.prevent="guardarUsuario">
            <v-text-field 
              v-model="usuarioForm.nombre" 
              label="Nombre Completo" variant="outlined" density="compact" class="mb-2"
              :rules="[v => !!v || 'Requerido']"
            ></v-text-field>
            
            <v-text-field 
              v-model="usuarioForm.email" 
              label="Correo Electrónico" variant="outlined" density="compact" class="mb-2"
            ></v-text-field>
            
            <v-text-field 
              v-model="usuarioForm.username" 
              label="Usuario (Login)" variant="outlined" density="compact" class="mb-2"
              :rules="[v => !!v || 'Requerido']"
              :disabled="editando && usuarioForm.username === 'admin'"
            ></v-text-field>
            
            <v-text-field 
              v-model="usuarioForm.password" 
              label="Contraseña" type="password" variant="outlined" density="compact" class="mb-2"
              :rules="editando ? [] : [v => !!v || 'Requerido']"
              :hint="editando ? 'Dejar vacío para mantener actual' : ''"
            ></v-text-field>
            
            <v-select
              v-model="usuarioForm.role"
              :items="rolesDisponibles"
              label="Rol Asignado" variant="outlined" density="compact"
              :rules="[v => !!v || 'Requerido']"
              :disabled="editando && usuarioForm.username === 'admin'"
            ></v-select>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" variant="text" @click="dialogo = false">Cancelar</v-btn>
          <v-btn color="primary" variant="elevated" @click="guardarUsuario">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia' 
import { useAuthStore } from '@/stores/auth' 
import usuarioService from '@/services/usuarioservice'

// --- SETUP ---
const authStore = useAuthStore()
// 'isAdmin' ahora es true si es admin O secretario
const { isAdmin } = storeToRefs(authStore)

const listaUsuarios = ref([])
const loading = ref(false)
const dialogo = ref(false)
const editando = ref(false)
const formRef = ref(null)

// Agregado 'secretario' a la lista
const rolesDisponibles = ['administrador', 'secretario', 'docente', 'estudiante']

const usuarioForm = ref({
  id: null, nombre: '', email: '', username: '', password: '', role: 'estudiante'
})

// --- INIT ---
onMounted(async () => {
  authStore.verifySession()
  await cargarUsuarios()
})

const cargarUsuarios = async () => {
  loading.value = true
  try {
    listaUsuarios.value = await usuarioService.getUsers()
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

// --- LOGICA SEGURA ---

const abrirDialogoCrear = () => {
  if (!isAdmin.value) {
    alert("Error de seguridad: Permisos insuficientes.")
    return
  }
  editando.value = false
  usuarioForm.value = { id: null, nombre: '', email: '', username: '', password: '', role: 'estudiante' }
  dialogo.value = true
}

const editarUsuario = (usuario) => {
  if (!isAdmin.value) return
  editando.value = true
  usuarioForm.value = { ...usuario }
  dialogo.value = true
}

const confirmarEliminacion = async (usuario) => {
  if (!isAdmin.value) return

  // PROTECCIÓN DE AUTO-ELIMINACIÓN
  // Comparamos IDs en lugar de nombres fijos
  if (usuario.id === authStore.user.id) {
    alert("No puedes eliminar tu propia cuenta mientras estás logueado.")
    return
  }
  
  // Protección extra para el super admin original (opcional pero recomendada)
  if (usuario.username === 'admin' && authStore.user.username !== 'admin') {
     alert("Solo el Administrador Principal puede eliminarse a sí mismo (desde otra cuenta super admin).")
     return
  }

  if (confirm(`¿Eliminar al usuario ${usuario.nombre} permanentemente?`)) {
    await usuarioService.deleteUser(usuario.id)
    await cargarUsuarios()
  }
}

const guardarUsuario = async () => {
  if (!isAdmin.value) return

  const { valid } = await formRef.value.validate()
  if (!valid) return

  try {
    if (editando.value) {
      const datosEditar = { ...usuarioForm.value }
      if (datosEditar.username === 'admin') datosEditar.role = 'administrador'
      if (!datosEditar.password) delete datosEditar.password

      await usuarioService.updateUser(datosEditar.id, datosEditar)
    } else {
      const nuevoUsuario = { ...usuarioForm.value }
      delete nuevoUsuario.id 
      
      await usuarioService.registerUser(nuevoUsuario)
    }
    dialogo.value = false
    await cargarUsuarios()
  } catch (error) {
    alert("Error al guardar en base de datos")
  }
}

const obtenerClaseRol = (rol) => {
  if (!rol) return ''
  const r = rol.toLowerCase()
  if (r === 'administrador') return 'border-admin'
  if (r === 'secretario') return 'border-secretario' // Estilo nuevo
  if (r === 'docente') return 'border-docente'
  return 'border-estudiante'
}
</script>

<style scoped>
.registro { font-family: 'Segoe UI', sans-serif; padding: 10px; }
.header-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; background: #f8f9fa; padding: 15px; border-radius: 8px; }
.user-info { color: #555; margin: 0; }
.role-badge { background: #e3f2fd; color: #1565c0; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; text-transform: uppercase; margin-left: 5px; }

.action-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 32px; }
.action-card { background: white; padding: 24px; border-radius: 16px; text-align: center; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(26, 58, 110, 0.1); border: 1px solid #e1e8f0; }
.action-card:hover { transform: translateY(-6px); }
.action-card.primary { border-left: 5px solid #4a90e2; }
.action-card.secondary { border-left: 5px solid #ff9f43; }
.action-card.disabled { border-left: 5px solid #9e9e9e; opacity: 0.6; cursor: not-allowed; }
.action-card.disabled:hover { transform: none; }

.users-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
.user-card { background: #fff; border: 1px solid #e1e8f0; border-radius: 12px; padding: 15px; position: relative; }

/* BORDES POR ROL */
.border-admin { border-top: 4px solid #4a90e2; }
.border-secretario { border-top: 4px solid #9c27b0; } /* Nuevo color morado para secretario */
.border-docente { border-top: 4px solid #28a745; }
.border-estudiante { border-top: 4px solid #ff9f43; }

.card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.role-tag { font-size: 0.7rem; text-transform: uppercase; font-weight: bold; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; color: #64748b; }
.info-row { font-size: 0.9rem; color: #64748b; margin: 2px 0; display: flex; align-items: center; gap: 5px; }
</style>