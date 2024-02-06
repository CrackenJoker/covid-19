import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Tables from './views/Tables.vue'
import dashBoard from './views/Dashboard.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: dashBoard,
  },
  {
    path: '/casos',
    name: 'casos',
    component: Tables,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
