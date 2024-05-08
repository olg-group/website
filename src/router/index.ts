import {createRouter, createWebHistory, type RouterOptions} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      // this will be the default url handler => 404 Not Found
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound
    }
  ]
} as RouterOptions)

export default router
