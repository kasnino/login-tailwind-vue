import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Register from '/src/components/Register.vue'
import Login from '/src/components/Login.vue'

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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router