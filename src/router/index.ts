import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheContacts from '@/views/TheContacts.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/request-list',
    name: 'request-list',
    component: () => import('../views/ListView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: TheContacts


  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
