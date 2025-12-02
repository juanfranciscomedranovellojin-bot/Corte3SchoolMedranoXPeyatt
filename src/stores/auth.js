import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import authService from '@/services/authservice'

export const useAuthStore = defineStore('auth', () => {
  // --- ESTADO ---
  const user = ref(authService.getCurrentUser())
  const isAuthenticated = ref(!!authService.getCurrentUser())
  const loading = ref(false)

  // --- COMPUTED (GETTERS) ---
  
  const userRole = computed(() => {
    if (!user.value) return ''
    return (user.value.role || user.value.rol || '').toLowerCase().trim()
  })

  // Lógica BLINDADA: Ahora incluye Administrador Y Secretario
  const isAdmin = computed(() => {
    const rol = userRole.value;
    return rol === 'administrador' || rol === 'secretario';
  })

  // --- ACCIONES ---

  const loginUser = async (credentials) => {
    loading.value = true
    try {
      const response = await authService.login(credentials.username, credentials.password)
      
      if (response.success) {
        user.value = response.user
        isAuthenticated.value = true
        return { success: true }
      } else {
        return { success: false, message: response.message }
      }
    } catch (err) {
      return { success: false, message: 'Error inesperado' }
    } finally {
      loading.value = false
    }
  }

  const logoutUser = async () => {
    authService.logout()
    user.value = null
    isAuthenticated.value = false
    window.location.reload()
  }

  const verifySession = () => {
    const currentUser = authService.getCurrentUser()
    if (currentUser) {
      user.value = currentUser
      isAuthenticated.value = true
    } else {
      user.value = null
      isAuthenticated.value = false
    }
  }

  return {
    user,
    isAuthenticated,
    loading,
    userRole,
    isAdmin,
    loginUser,
    logoutUser,
    verifySession
  }
})