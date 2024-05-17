import {createRouter, createWebHistory, type RouterOptions} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from "@/views/feedback/NotFound.vue";

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
            component: () => import('@/views/AboutView.vue')
        },

        // Business Fields
        {
            path: '/field/management-consulting',
            name: 'management-consulting',
            component: () => import('@/views/field/ManagementConsulting.vue')
        },

        // Legal
        {
            path: '/legal/imprint',
            name: 'imprint',
            component: () => import('@/views/legal/ImprintView.vue')
        },
        {
            path: '/legal/privacy-policy',
            name: 'privacy-policy',
            component: () => import('@/views/legal/PrivacyPolicyView.vue')
        },
        {
            // this will be the default url handler => 404 Not Found
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return {top: 0};
    }
} as RouterOptions)

export default router
