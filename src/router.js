import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './routes/Home.vue'
import TokenGenerator from "./components/TokenGenerator";
import Hash from "./components/Hash";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/token-generator',
        component: TokenGenerator
    },
    {
        path: '/hash',
        component: Hash
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./routes/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router