import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import store from '@/store'
import BooksView from '@/views/BooksView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false,
      requireAdmin: false,
      sessionClosed: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: true,
      requireAdmin: false,
      sessionClosed: false
    },
    children: [
      {
        path: 'book',
        name: 'book',
        component: BooksView,
        meta: {
          requireAuth: true,
          requireAdmin: false,
          sessionClosed: false
        },
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.requireAuth;
  const isAuthenticated = store.state.isAuthenticated;

  // Si la ruta requiere autenticación y el usuario no está autenticado
  if (requireAuth && !isAuthenticated) {
    next('/login'); // Redirigir a la página de login
  } else {
    next(); // Continuar a la ruta solicitada
  }
});

export default router;