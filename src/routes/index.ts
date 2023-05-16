import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
