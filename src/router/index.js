import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/main',
      name: 'main',
      component: DashboardView,
      meta: { requiresAuth: false },
      children: [
        {
          path: 'chat',
          name: 'chat',
          component: LoginView
        },
        {
          path: 'image',
          name: 'image',
          component: LoginView
        },
        {
          path: 'voice',
          name: 'voice',
          component: LoginView
        },
        {
          path: 'vip',
          name: 'vip',
          component: LoginView
        }
      ]
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router