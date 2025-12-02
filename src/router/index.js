import { createRouter, createWebHistory } from 'vue-router'

// Páginas principales
import Home from '@/pages/index.vue'
import Dashboard from '@/pages/dashboard.vue'

// Subpáginas del Dashboard
import registro from '@/pages/dashboard/registro.vue'
import matricula from '@/pages/dashboard/matricula.vue'
import asignaturas from '@/pages/dashboard/asignaturas.vue'
import eventos from '@/pages/dashboard/eventos.vue'
import ayuda from '@/pages/dashboard/ayuda.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Inicio' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', component: registro },
      { path: 'registro', component: registro },
      { path: 'matricula', component: matricula },
      { path: 'asignaturas', component: asignaturas },
      { path: 'eventos', component: eventos },
      { path: 'ayuda', component: ayuda },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Guard global
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Registro'

  if (to.meta.requiresAuth) {
    const isAuthenticated = false // cambia esto según tu lógica
    if (!isAuthenticated) {
      alert('Debes iniciar sesión')
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

