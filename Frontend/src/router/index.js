import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/HomeView.vue'
import Manage from '../views/ManageView.vue'
import Landing from '../views/LandingView.vue'

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },

    {
        path: '/manage',
        name: 'Manage',
        component: Manage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
