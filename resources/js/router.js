import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routervue from './components/routervue.vue'
import routervue2 from './components/routervue2.vue'

const routes=[
    {
        path:'/',
        component:routervue
    },
    {
        path: '/salom',
        component: routervue2
    }

]

export default new VueRouter({
    mode:'history',
    routes
})
