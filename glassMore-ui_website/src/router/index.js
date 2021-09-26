import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Input',
    name: 'Input',
    component: () => import('../views/Input.vue')
  },
  {
    path: '/Button',
    name: 'Button',
    component: () => import('../views/Button.vue')
  },
  {
    path: '/Switch',
    name: 'Switch',
    component: () => import('../views/Switch.vue')
  },
  {
    path: '/Card',
    name: 'Card',
    component: () => import('../views/Card.vue')
  },
  {
    path: '/Dialog',
    name: 'Dialog',
    component: () => import('../views/Dialog.vue')
  },
  {
    path: '/Popconfirm',
    name: 'Popconfirm',
    component: () => import('../views/Propconfirm.vue')
  },
  {
    path: '/Tools',
    name: 'Tools',
    component: () => import('../views/Tools.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
