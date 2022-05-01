import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Register from '/src/components/Register.vue'
import Login from '/src/components/Login.vue'
import Profile from '/src/components/Profile.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router